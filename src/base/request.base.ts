import rp from 'request-promise'
import Queue from 'queue'

const queueSystem = new Queue()
queueSystem.autostart = true

export class RequestBase {

  private static async sendRequest (options: rp.OptionsWithUri) {
    return rp(options)
  }

  static setConcurrency (concurrency: number) {
    queueSystem.concurrency = concurrency
  }

  static request<T> (options: rp.OptionsWithUri): Promise<T> {
    return new Promise((resolve, reject) => {
      queueSystem.push(async (cb: any) => {
        try {
          const result = await RequestBase.sendRequest(options)
          resolve(result)
          cb()
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

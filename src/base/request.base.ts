import rp from 'request-promise'
import Queue from 'promise-queue'

export class RequestBase {
  static queue: Queue

  private static sendRequest (options: rp.OptionsWithUri) {
    return new Promise((resolve, reject) => {
      rp(options)
        .then(resolve)
        .catch(reject)
    })
  }

  private static getQueue () {
    if (!RequestBase.queue) {
      RequestBase.queue = new Queue(Infinity, Infinity)
    }
    return RequestBase.queue
  }

  static setConcurrency (concurrency: number) {
    RequestBase.queue = new Queue(concurrency, Infinity)
  }

  static request<T> (options: rp.OptionsWithUri): Promise<T> {
    return RequestBase.getQueue().add(() => RequestBase.sendRequest(options) as any)
  }
}

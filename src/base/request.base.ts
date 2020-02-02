import rp from 'request-promise'
import Queue from 'promise-queue'

export class RequestBase {
  static queue: Queue

  private static sendRequest (options: rp.OptionsWithUri) {
    return rp(options)
  }

  static setConcurrency (concurrency: number) {
    RequestBase.queue = new Queue(concurrency, Infinity)
  }

  static request<T> (options: rp.OptionsWithUri): Promise<T> {
    return RequestBase.queue.add(() => RequestBase.sendRequest(options) as any)
  }
}

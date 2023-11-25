import Axios, { AxiosRequestConfig } from 'axios'
import PromiseQueue from 'promise-queue'

export class RequestBase {
  static queue: PromiseQueue

  private static sendRequest (options: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      Axios(options)
        .then(resolve)
        .catch(reject)
    })
  }

  private static getQueue () {
    if (!RequestBase.queue) {
      RequestBase.queue = new PromiseQueue(Infinity, Infinity)
    }
    return RequestBase.queue
  }

  static setConcurrency (concurrency: number) {
    RequestBase.queue = new PromiseQueue(concurrency, Infinity)
  }

  static request<T> (options: AxiosRequestConfig): Promise<T> {
    return RequestBase.getQueue().add(() => RequestBase.sendRequest(options) as any)
  }
}

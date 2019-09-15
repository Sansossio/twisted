import * as examples from './example'
import * as _ from 'lodash'

const interval = 1000

function waiter (ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function runExamples () {
  console.log(`Total examples: ${Object.keys(examples).length}`)
  console.log('------------------------------------------------')
  for (const key in examples) {
    console.log(`Run ${key}`)
    const method = _.get(examples, key)
    if (typeof method !== 'function') {
      console.error(`Method ${key} isn't a function`)
      continue
    }
    console.time(key)
    let error = false
    try {
      await method()
    } catch (e) {
      error = true
      throw e
    } finally {
      console.error(`Method ${key}: ${error ? 'FAIL' : 'OK'}`)
      console.timeEnd(key)
      console.log('------------------------------------------------')
      await waiter(interval)
    }
  }
}

runExamples()
  .catch(console.error)

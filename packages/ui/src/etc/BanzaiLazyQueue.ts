import { SimpleHook } from '@ui/object' // Assuming you have the correct relative path

type BanzaiQueueItem = [string, any, any] // [a, b, c] structure in the original code

interface BanzaiLazyQueue {
  onQueue: SimpleHook<(a: string, b: any, c: any) => void>
  queuePost(a: string, b: any, c?: any): void
  flushQueue(): BanzaiQueueItem[]
}

const banzaiQueueItem: BanzaiQueueItem[] = []
const onQueue = new SimpleHook<(a: string, b: any, c: any) => void>()

const BanzaiLazyQueue: BanzaiLazyQueue = {
  onQueue: onQueue,
  queuePost(a, b, c) {
    banzaiQueueItem.push([a, b, c])
    onQueue.call(a, b, c)
  },
  flushQueue() {
    const tmp = banzaiQueueItem
    banzaiQueueItem.length = 0
    return tmp
  },
}

export default BanzaiLazyQueue

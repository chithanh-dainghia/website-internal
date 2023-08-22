class SimpleHook<T extends (...args: any[]) => void> {
  private __callbacks: T[]

  constructor() {
    this.__callbacks = []
    this.call = this.$2
  }

  hasCallback(callback?: T): boolean {
    const callbacks = this.__callbacks
    return (
      callbacks.length > 0 &&
      (callback == null ||
        callbacks.some(cb => cb === callback || (cb as any).$1 === callback))
    )
  }

  add(callback: T, options?: { once: boolean }): T {
    let callbackToStore: T
    if (options?.once === true) {
      callbackToStore = ((...args: any[]) => {
        this.remove(callbackToStore!)
        callback.apply(null, args)
      }) as T
      ;(callbackToStore as any).$1 = callback
    } else {
      callbackToStore = callback
    }

    this.__callbacks.push(callbackToStore)
    return callbackToStore
  }

  removeLast(): T | undefined {
    return this.__callbacks.pop()
  }

  remove(callback: T): boolean {
    return this.removeIf(cb => cb === callback)
  }

  removeIf(predicate: (callback: T) => boolean): boolean {
    const callbacks = this.__callbacks
    this.__callbacks = callbacks.filter(cb => !predicate(cb))
    return callbacks.length > this.__callbacks.length
  }

  clear(): void {
    this.__callbacks = []
  }

  private $2(...args: any[]): void {
    const callbacks = this.__callbacks
    for (const callback of callbacks) {
      callback.apply(null, args)
    }
  }

  call: (...args: any[]) => void
}

export { SimpleHook }

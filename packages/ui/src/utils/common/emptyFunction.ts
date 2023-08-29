function emptyFunction() {}

namespace emptyFunction {
  export function thatReturns<T>(value: T): () => T {
    return function () {
      return value
    }
  }

  export const thatReturnsFalse = thatReturns(false)
  export const thatReturnsTrue = thatReturns(true)
  export const thatReturnsNull = thatReturns(null)

  export function thatReturnsThis(this: any): any {
    return this
  }

  export function thatReturnsArgument<T>(arg: T): T {
    return arg
  }
}

export default emptyFunction

import { useMemo } from 'react'

export default function useUnsafeRef_DEPRECATED<T>(current: T) {
  return useMemo(() => {
    return {
      current,
    }
  }, [])
}

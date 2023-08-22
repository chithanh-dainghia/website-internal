import { useMemo } from 'react'

export default function useUnsafeRef_DEPRECATED(current: any) {
  return useMemo(function () {
    return {
      current,
    }
  }, [])
}

import React, { useEffect, useRef } from 'react'
import CometVisualCompletionAttributes from '@ui/constant/CometVisualCompletionAttributes'

function useCometLoadingStateTracker() {
  var ref = useRef<HTMLDivElement>()
  useEffect(function () {
    const curr = ref.current
    const arr: any[] = []
    // b != null && (c = j(b))
    return function () {
      arr.forEach(function (a) {
        a()
      })
    }
  }, [])

  return [CometVisualCompletionAttributes.LOADING_STATE, ref]
}

export default useCometLoadingStateTracker

import emptyFunction from '@ui/utils/common/emptyFunction'
import { useCallback, useEffect, useRef, useState } from 'react'

function useDelayedState(initialValue: boolean) {
  const [state, setState] = useState(initialValue)
  const timeoutRef = useRef<any>(undefined)

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const setDelayedState = useCallback(
    (newValue: boolean, delay: number | undefined, callback?: any) => {
      if (delay === undefined) delay = 0
      if (callback === undefined) callback = emptyFunction

      clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined

      if (delay === 0) {
        setState(newValue)
        callback(newValue)
      } else {
        timeoutRef.current = setTimeout(() => {
          setState(newValue)
          callback(newValue)
          timeoutRef.current = undefined
        }, delay)
      }
    },
    [],
  )

  return [state, setDelayedState]
}

export default useDelayedState

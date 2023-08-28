import { useCallback, useState } from 'react'
import { noop } from 'ui'

export const useHover = (
  onHoverCb?: typeof noop,
): [
  boolean,
  {
    onMouseEnter: typeof noop
    onMouseLeave: typeof noop
  },
] => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = useCallback(() => {
    if (onHoverCb) {
      onHoverCb()
    }
    setHover(true)
  }, [onHoverCb])

  const onMouseLeave = useCallback(() => {
    return setHover(false)
  }, [])

  return [
    hover,
    {
      onMouseEnter,
      onMouseLeave,
    },
  ]
}

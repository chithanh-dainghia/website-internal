import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from 'react'
import { hasPointerEvents } from './ReactEventHelpers'

const POINTER_EVENT_ARR = hasPointerEvents
  ? ['keydown', 'pointermove', 'pointerdown', 'pointerup']
  : [
      'keydown',
      'mousedown',
      'mousemove',
      'mouseup',
      'touchmove',
      'touchstart',
      'touchend',
    ]

const props = {
  passive: true,
}

const o = true
const p = false

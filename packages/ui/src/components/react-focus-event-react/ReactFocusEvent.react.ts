import { hasPointerEvents } from '@ui/utils/common/ReactEventHelpers'

const pointerEventArray = hasPointerEvents
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

const eventProps = {
  passive: true,
}

const o = true
const p = false

export function useFocus() {}

import ReactUseEventReact from '@ui/components/react-use-event-react/ReactUseEvent.react'
import { useEffect } from 'react'

const eventOption = {
  passive: true,
}

export function useKeyBoard(ref: any, eventOptions: any) {
  const { disabled = false, onKeyDown, onKeyUp } = eventOptions

  const keydownEventHandler = ReactUseEventReact('keydown')
  const keyupEventHandler = ReactUseEventReact('keyup', eventOption)

  useEffect(() => {
    const current = ref.current

    if (current !== null) {
      keydownEventHandler.setListener(current, (!disabled && onKeyDown) || null)
      keyupEventHandler.setListener(current, (!disabled && onKeyUp) || null)
    }
  }, [
    disabled,
    onKeyDown,
    keydownEventHandler,
    keyupEventHandler,
    ref,
    onKeyUp,
  ])
}

/**
__d("ReactKeyboardEvent.react", [
  "ReactUseEvent.react", 
  "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect
      , i = {
        passive: !0
    };
    function a(a, b) {
        var d = b.disabled
          , e = d === void 0 ? !1 : d
          , f = b.onKeyDown
          , g = b.onKeyUp
          , j = c("ReactUseEvent.react")("keydown")
          , k = c("ReactUseEvent.react")("keyup", i);
        h(function() {
            var b = a.current;
            b !== null && (j.setListener(b, !e && f || null),
            k.setListener(b, !e && g || null))
        }, [e, f, j, k, a, g])
    }
    g.useKeyboard = a
}
), 98);
 */

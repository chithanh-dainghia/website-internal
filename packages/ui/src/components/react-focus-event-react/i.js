__d(
  'ReactFocusEvent.react',
  [
    'ReactDOMComet',
    'ReactEventHelpers',
    'ReactEventHookPropagation',
    'ReactUseEvent.react',
    'checkPassiveEventsSupported',
    'gkx',
    'react',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    f = d('react')
    var useCallback = f.useCallback,
      useEffect = f.useEffect,
      useLayoutEffect = f.useLayoutEffect,
      useMemo = f.useMemo,
      useRef = f.useRef,
      pointerEventArray = d('ReactEventHelpers').hasPointerEvents
        ? ['keydown', 'pointermove', 'pointerdown', 'pointerup']
        : [
            'keydown',
            'mousedown',
            'mousemove',
            'mouseup',
            'touchmove',
            'touchstart',
            'touchend',
          ],
      eventOption = {
        passive: !0,
      },
      isFocusVisible = !0,
      p = !1
    function addEventListenerArr() {
      pointerEventArray.forEach(function (eventName) {
        window.addEventListener(
          eventName,
          updateFocusVisibility,
          c('checkPassiveEventsSupported')
            ? {
                capture: !0,
                passive: !0,
              }
            : !0,
        )
      })
    }

    function isAllowedKeyCombo(nativeEvent) {
      var metaKey = nativeEvent.metaKey,
        altKey = nativeEvent.altKey
      var ctrlKey = nativeEvent.ctrlKey
      return !(metaKey || (!d('ReactEventHelpers').isMac && altKey) || ctrlKey)
    }

    function isFocusNavigationEvent(nativeEvent) {
      var key = nativeEvent.key
      const target = nativeEvent.target
      if (key === 'Tab' || key === 'Escape') return !1
      const isContentEditable = target.isContentEditable
      const tagName = target.tagName
      return tagName === 'INPUT' || tagName === 'TEXTAREA' || isContentEditable
    }

    function updateFocusVisibility(event) {
      if (event.type === 'keydown')
        isAllowedKeyCombo(event) && (isFocusVisible = !0)
      else {
        const nodeName = event.target.nodeName
        if (nodeName === 'HTML') return
        isFocusVisible = !1
      }
    }

    function handleKeyEventAndCallback(event, callbackFn) {
      if (event.type === 'keydown') {
        var nativeEvent = event.nativeEvent
        isAllowedKeyCombo(nativeEvent) &&
          !isFocusNavigationEvent(nativeEvent) &&
          callbackFn(!0)
      } else (isFocusVisible = !1), callbackFn(!1)
    }

    function eventListener(eventHandlerArr, listener, cb) {
      eventHandlerArr.forEach(function (eventHandler) {
        eventHandler.setListener(listener, function (param) {
          return handleKeyEventAndCallback(param, cb)
        })
      })
    }
    function useEvents() {
      var mousedownEventHandler = c('ReactUseEvent.react')(
          'mousedown',
          eventOption,
        ),
        pointerEventHandler = c('ReactUseEvent.react')(
          d('ReactEventHelpers').hasPointerEvents
            ? 'pointerdown'
            : 'touchstart',
          eventOption,
        ),
        keydownEventHandler = c('ReactUseEvent.react')('keydown', eventOption)
      return useMemo(
        function () {
          return [
            mousedownEventHandler,
            pointerEventHandler,
            keydownEventHandler,
          ]
        },
        [keydownEventHandler, mousedownEventHandler, pointerEventHandler],
      )
    }

    function useEventArrayListener() {
      useEffect(function () {
        p || ((p = !0), addEventListenerArr())
      }, [])
    }

    function useFocus(ref, eventFunc) {
      var disabled = eventFunc.disabled,
        onBlur = eventFunc.onBlur,
        onFocus = eventFunc.onFocus,
        onFocusChange = eventFunc.onFocusChange,
        onFocusVisibleChange = eventFunc.onFocusVisibleChange,
        focusRef = useRef({
          isFocused: !1,
          isFocusVisible: !1,
        }),
        focusinEventHandler = c('ReactUseEvent.react')('focusin', eventOption),
        focusoutEventHandler = c('ReactUseEvent.react')(
          'focusout',
          eventOption,
        ),
        eventHandlerArr = useEvents()
      useLayoutEffect(
        function () {
          var refCurr = ref.current,
            focusRefCurr = focusRef.current
          if (refCurr !== null && refCurr.nodeType === 1) {
            eventListener(eventHandlerArr, refCurr, function (isKeyDown) {
              focusRefCurr.isFocused &&
                focusRefCurr.isFocusVisible !== isKeyDown &&
                ((focusRefCurr.isFocusVisible = isKeyDown),
                onFocusVisibleChange && onFocusVisibleChange(isKeyDown))
            })
            var onFocusCallback = function (event) {
              focusRefCurr.isFocused &&
                ((focusRefCurr.isFocused = !1),
                onBlur && onBlur(event),
                onFocusChange && onFocusChange(!1),
                focusRefCurr.isFocusVisible &&
                  onFocusVisibleChange &&
                  onFocusVisibleChange(!1),
                (focusRefCurr.isFocusVisible = isFocusVisible))
            }
            focusinEventHandler.setListener(refCurr, function (event) {
              if (!c('gkx')('5403') && disabled === !0) return
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  event,
                  'useFocus',
                )
              )
                return
              d('ReactEventHookPropagation').stopEventHookPropagation(
                event,
                'useFocus',
              )
              !focusRefCurr.isFocused &&
                refCurr === event.target &&
                ((focusRefCurr.isFocused = !0),
                (focusRefCurr.isFocusVisible = isFocusVisible),
                onFocus && onFocus(event),
                onFocusChange && onFocusChange(!0),
                focusRefCurr.isFocusVisible &&
                  onFocusVisibleChange &&
                  onFocusVisibleChange(!0))
            })
            focusoutEventHandler.setListener(refCurr, function (event) {
              if (!c('gkx')('5403') && disabled === !0) return
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  event,
                  'useFocus',
                )
              )
                return
              d('ReactEventHookPropagation').stopEventHookPropagation(
                event,
                'useFocus',
              )
              onFocusCallback(event)
            })
          }
        },
        [
          focusoutEventHandler,
          disabled,
          focusinEventHandler,
          ref,
          eventHandlerArr,
          onBlur,
          onFocus,
          onFocusChange,
          onFocusVisibleChange,
        ],
      )
      useEffect(function () {
        var refCurrent = ref.current,
          focusRefCurrent = focusRef.current
        return function () {
          if (ref.current === null && focusRefCurrent.isFocused) {
            focusRefCurrent.isFocused = !1
            var focusEventBlur = new window.FocusEvent('blur')
            Object.defineProperty(focusEventBlur, 'target', {
              value: refCurrent,
            })
            onBlur && onBlur(focusEventBlur)
            onFocusChange && onFocusChange(!1)
            focusRefCurrent.isFocusVisible &&
              onFocusVisibleChange &&
              onFocusVisibleChange(!1)
            focusRefCurrent.isFocusVisible = isFocusVisible
          }
        }
      })
      useEventArrayListener()
    }
    function useFocusWithin(a, b) {
      var e = b.disabled,
        f = b.onAfterBlurWithin,
        g = b.onBeforeBlurWithin,
        i = b.onBlurWithin,
        j = b.onFocusWithin,
        k = b.onFocusWithinChange,
        m = b.onFocusWithinVisibleChange,
        p = useRef({
          isFocused: !1,
          isFocusVisible: !1,
        }),
        q = c('ReactUseEvent.react')('focusin', eventOption),
        r = c('ReactUseEvent.react')('focusout', eventOption),
        s = c('ReactUseEvent.react')('afterblur', eventOption),
        t = c('ReactUseEvent.react')('beforeblur', eventOption),
        u = useEvents()
      b = useCallback(
        function (b) {
          typeof a === 'function' ? a(b) : (a.current = b)
          var h = p.current
          b !== null &&
            h !== null &&
            (eventListener(u, b, function (a) {
              h.isFocused &&
                h.isFocusVisible !== a &&
                ((h.isFocusVisible = a), m && m(a))
            }),
            q.setListener(b, function (a) {
              if (!c('gkx')('5403') && e === !0) return
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  a,
                  'useFocusWithin',
                )
              )
                return
              h.isFocused ||
                ((h.isFocused = !0),
                (h.isFocusVisible = isFocusVisible),
                k && k(!0),
                h.isFocusVisible && m && m(!0))
              !h.isFocusVisible &&
                isFocusVisible &&
                ((h.isFocusVisible = isFocusVisible), m && m(!0))
              j && j(a)
            }),
            r.setListener(b, function (a) {
              if (!c('gkx')('5403') && e === !0) return
              var f = a.nativeEvent.relatedTarget
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  a,
                  'useFocusWithin',
                )
              )
                return
              h.isFocused && !d('ReactEventHelpers').isRelatedTargetWithin(b, f)
                ? ((h.isFocused = !1),
                  k && k(!1),
                  h.isFocusVisible && m && m(!1),
                  i && i(a))
                : d('ReactEventHookPropagation').stopEventHookPropagation(
                    a,
                    'useFocusWithin',
                  )
            }),
            t.setListener(b, function (a) {
              if (!c('gkx')('5403') && e === !0) return
              g &&
                (g(a),
                s.setListener(document, function (a) {
                  f && f(a), s.setListener(document, null)
                }))
            }))
        },
        [s, t, r, e, q, u, a, f, g, i, j, k, m],
      )
      useEventArrayListener()
      return b
    }
    function y() {
      var a = z('mousedown', eventOption),
        b = z(
          d('ReactEventHelpers').hasPointerEvents
            ? 'pointerdown'
            : 'touchstart',
          eventOption,
        ),
        c = z('keydown', eventOption)
      return useMemo(
        function () {
          return [a, b, c]
        },
        [c, a, b],
      )
    }
    function useFocusWithinStrictMode(a) {
      var b = a.disabled,
        e = a.onAfterBlurWithin,
        f = a.onBeforeBlurWithin,
        g = a.onBlurWithin,
        i = a.onFocusWithin,
        j = a.onFocusWithinChange,
        k = a.onFocusWithinVisibleChange,
        m = useRef({
          isFocused: !1,
          isFocusVisible: !1,
        }),
        p = z('focusin', eventOption),
        q = z('focusout', eventOption),
        r = z('afterblur', eventOption),
        s = z('beforeblur', eventOption),
        t = y()
      a = useCallback(
        function (a) {
          var h = m.current
          a !== null && h !== null
            ? (eventListener(t, a, function (a) {
                h.isFocused &&
                  h.isFocusVisible !== a &&
                  ((h.isFocusVisible = a), k && k(a))
              }),
              p.setListener(a, function (a) {
                if (!c('gkx')('5403') && b === !0) return
                if (
                  d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                    a,
                    'useFocusWithin',
                  )
                )
                  return
                h.isFocused ||
                  ((h.isFocused = !0),
                  (h.isFocusVisible = isFocusVisible),
                  j && j(!0),
                  h.isFocusVisible && k && k(!0))
                !h.isFocusVisible &&
                  isFocusVisible &&
                  ((h.isFocusVisible = isFocusVisible), k && k(!0))
                i && i(a)
              }),
              q.setListener(a, function (e) {
                if (!c('gkx')('5403') && b === !0) return
                var f = e.nativeEvent.relatedTarget
                if (
                  d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                    e,
                    'useFocusWithin',
                  )
                )
                  return
                h.isFocused &&
                !d('ReactEventHelpers').isRelatedTargetWithin(a, f)
                  ? ((h.isFocused = !1),
                    j && j(!1),
                    h.isFocusVisible && k && k(!1),
                    g && g(e))
                  : d('ReactEventHookPropagation').stopEventHookPropagation(
                      e,
                      'useFocusWithin',
                    )
              }),
              s.setListener(a, function (a) {
                if (!c('gkx')('5403') && b === !0) return
                f &&
                  (f(a),
                  r.setListener(document, function (a) {
                    e && e(a), r.setListener(document, null)
                  }))
              }))
            : a === null && (p.clear(), q.clear(), s.clear())
        },
        [r, s, q, b, p, t, e, f, g, i, j, k],
      )
      useEventArrayListener()
      return a
    }
    function z(a, b) {
      var e = c('useUnsafeRef_DEPRECATED')(null),
        f = e.current
      c('gkx')('1703328') && b && (b.passive = void 0)
      if (f === null) {
        var g = d('ReactDOMComet').unstable_createEventHandle(a, b),
          h = new Map()
        f = {
          setListener: function (a, b) {
            var c = h.get(a)
            c !== void 0 && c()
            if (b === null) {
              h['delete'](a)
              return
            }
            c = g(a, function () {
              b.apply(void 0, arguments)
            })
            h.set(a, c)
          },
          clear: function () {
            var a = Array.from(h.values())
            for (var b = 0; b < a.length; b++) a[b]()
            h.clear()
          },
        }
        e.current = f
      }
      return f
    }
    g.useFocus = useFocus
    g.useFocusWithin = useFocusWithin
    g.useFocusWithinStrictMode = useFocusWithinStrictMode
  },
  98,
)

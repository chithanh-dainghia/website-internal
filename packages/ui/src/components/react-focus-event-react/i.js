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
      var disabled = b.disabled,
        onAfterBlurWithin = b.onAfterBlurWithin,
        onBeforeBlurWithin = b.onBeforeBlurWithin,
        onBlurWithin = b.onBlurWithin,
        onFocusWithin = b.onFocusWithin,
        onFocusWithinChange = b.onFocusWithinChange,
        onFocusWithinVisibleChange = b.onFocusWithinVisibleChange,
        focusRef = useRef({
          isFocused: !1,
          isFocusVisible: !1,
        }),
        focusinEventHandler = c('ReactUseEvent.react')('focusin', eventOption),
        focusoutEventHandler = c('ReactUseEvent.react')(
          'focusout',
          eventOption,
        ),
        afterblurEventHandler = c('ReactUseEvent.react')(
          'afterblur',
          eventOption,
        ),
        beforeblurEventHandler = c('ReactUseEvent.react')(
          'beforeblur',
          eventOption,
        ),
        eventHandlerArr = useEvents()
      b = useCallback(
        function (val) {
          typeof a === 'function' ? a(val) : (a.current = val)
          var refCurrent = focusRef.current
          val !== null &&
            refCurrent !== null &&
            (eventListener(eventHandlerArr, val, function (param) {
              refCurrent.isFocused &&
                refCurrent.isFocusVisible !== param &&
                ((refCurrent.isFocusVisible = param),
                onFocusWithinVisibleChange && onFocusWithinVisibleChange(param))
            }),
            focusinEventHandler.setListener(val, function (event) {
              if (!c('gkx')('5403') && disabled === !0) return
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  event,
                  'useFocusWithin',
                )
              )
                return
              refCurrent.isFocused ||
                ((refCurrent.isFocused = !0),
                (refCurrent.isFocusVisible = isFocusVisible),
                onFocusWithinChange && onFocusWithinChange(!0),
                refCurrent.isFocusVisible &&
                  onFocusWithinVisibleChange &&
                  onFocusWithinVisibleChange(!0))
              !refCurrent.isFocusVisible &&
                isFocusVisible &&
                ((refCurrent.isFocusVisible = isFocusVisible),
                onFocusWithinVisibleChange && onFocusWithinVisibleChange(!0))
              onFocusWithin && onFocusWithin(event)
            }),
            focusoutEventHandler.setListener(val, function (event) {
              if (!c('gkx')('5403') && disabled === !0) return
              var relatedTarget = event.nativeEvent.relatedTarget
              if (
                d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                  event,
                  'useFocusWithin',
                )
              )
                return
              refCurrent.isFocused &&
              !d('ReactEventHelpers').isRelatedTargetWithin(val, relatedTarget)
                ? ((refCurrent.isFocused = !1),
                  onFocusWithinChange && onFocusWithinChange(!1),
                  refCurrent.isFocusVisible &&
                    onFocusWithinVisibleChange &&
                    onFocusWithinVisibleChange(!1),
                  onBlurWithin && onBlurWithin(event))
                : d('ReactEventHookPropagation').stopEventHookPropagation(
                    event,
                    'useFocusWithin',
                  )
            }),
            beforeblurEventHandler.setListener(val, function (event) {
              if (!c('gkx')('5403') && disabled === !0) return
              onBeforeBlurWithin &&
                (onBeforeBlurWithin(event),
                afterblurEventHandler.setListener(document, function (event) {
                  onAfterBlurWithin && onAfterBlurWithin(event),
                    afterblurEventHandler.setListener(document, null)
                }))
            }))
        },
        [
          afterblurEventHandler,
          beforeblurEventHandler,
          focusoutEventHandler,
          disabled,
          focusinEventHandler,
          eventHandlerArr,
          a,
          onAfterBlurWithin,
          onBeforeBlurWithin,
          onBlurWithin,
          onFocusWithin,
          onFocusWithinChange,
          onFocusWithinVisibleChange,
        ],
      )
      useEventArrayListener()
      return b
    }

    function useInteractionHandlers() {
      var a = useDOMEventListener('mousedown', eventOption),
        b = useDOMEventListener(
          d('ReactEventHelpers').hasPointerEvents
            ? 'pointerdown'
            : 'touchstart',
          eventOption,
        ),
        c = useDOMEventListener('keydown', eventOption)
      return useMemo(
        function () {
          return [a, b, c]
        },
        [c, a, b],
      )
    }
    function useFocusWithinStrictMode(a) {
      var disabled = a.disabled,
        onAfterBlurWithin = a.onAfterBlurWithin,
        onBeforeBlurWithin = a.onBeforeBlurWithin,
        onBlurWithin = a.onBlurWithin,
        onFocusWithin = a.onFocusWithin,
        onFocusWithinChange = a.onFocusWithinChange,
        onFocusWithinVisibleChange = a.onFocusWithinVisibleChange,
        focusRef = useRef({
          isFocused: !1,
          isFocusVisible: !1,
        }),
        focusinHandler = useDOMEventListener('focusin', eventOption),
        focusoutHandler = useDOMEventListener('focusout', eventOption),
        afterblurHandler = useDOMEventListener('afterblur', eventOption),
        beforeblurHandler = useDOMEventListener('beforeblur', eventOption),
        handlerArr = useInteractionHandlers()
      a = useCallback(
        function (props) {
          var focusRefCurrent = focusRef.current
          props !== null && focusRefCurrent !== null
            ? (eventListener(handlerArr, props, function (param) {
                focusRefCurrent.isFocused &&
                  focusRefCurrent.isFocusVisible !== param &&
                  ((focusRefCurrent.isFocusVisible = param),
                  onFocusWithinVisibleChange &&
                    onFocusWithinVisibleChange(param))
              }),
              focusinHandler.setListener(props, function (param) {
                if (!c('gkx')('5403') && disabled === !0) return
                if (
                  d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                    param,
                    'useFocusWithin',
                  )
                )
                  return
                focusRefCurrent.isFocused ||
                  ((focusRefCurrent.isFocused = !0),
                  (focusRefCurrent.isFocusVisible = isFocusVisible),
                  onFocusWithinChange && onFocusWithinChange(!0),
                  focusRefCurrent.isFocusVisible &&
                    onFocusWithinVisibleChange &&
                    onFocusWithinVisibleChange(!0))
                !focusRefCurrent.isFocusVisible &&
                  isFocusVisible &&
                  ((focusRefCurrent.isFocusVisible = isFocusVisible),
                  onFocusWithinVisibleChange && onFocusWithinVisibleChange(!0))
                onFocusWithin && onFocusWithin(param)
              }),
              focusoutHandler.setListener(props, function (param) {
                if (!c('gkx')('5403') && disabled === !0) return
                var relatedTarget = param.nativeEvent.relatedTarget
                if (
                  d('ReactEventHookPropagation').hasEventHookPropagationStopped(
                    param,
                    'useFocusWithin',
                  )
                )
                  return
                focusRefCurrent.isFocused &&
                !d('ReactEventHelpers').isRelatedTargetWithin(
                  props,
                  relatedTarget,
                )
                  ? ((focusRefCurrent.isFocused = !1),
                    onFocusWithinChange && onFocusWithinChange(!1),
                    focusRefCurrent.isFocusVisible &&
                      onFocusWithinVisibleChange &&
                      onFocusWithinVisibleChange(!1),
                    onBlurWithin && onBlurWithin(param))
                  : d('ReactEventHookPropagation').stopEventHookPropagation(
                      param,
                      'useFocusWithin',
                    )
              }),
              beforeblurHandler.setListener(props, function (param) {
                if (!c('gkx')('5403') && disabled === !0) return
                onBeforeBlurWithin &&
                  (onBeforeBlurWithin(param),
                  afterblurHandler.setListener(document, function (e) {
                    onAfterBlurWithin && onAfterBlurWithin(e),
                      afterblurHandler.setListener(document, null)
                  }))
              }))
            : props === null &&
              (focusinHandler.clear(),
              focusoutHandler.clear(),
              beforeblurHandler.clear())
        },
        [
          afterblurHandler,
          beforeblurHandler,
          focusoutHandler,
          disabled,
          focusinHandler,
          handlerArr,
          onAfterBlurWithin,
          onBeforeBlurWithin,
          onBlurWithin,
          onFocusWithin,
          onFocusWithinChange,
          onFocusWithinVisibleChange,
        ],
      )
      useEventArrayListener()
      return a
    }
    function useDOMEventListener(a, b) {
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

__d(
  'FocusWithinHandlerNonStrictMode_DEPRECATED.react',
  ['ReactFocusEvent.react', 'react'],
  function (a, b, c, d, e, f, g) {
    var h = d('react')
    b = d('react')
    var useMemo = b.useMemo,
      useRef = b.useRef,
      useState = b.useState,
      unstable_Scope = h.unstable_Scope
    function a(testOnly) {
      var b,
        children = testOnly.children,
        onFocusChange = testOnly.onFocusChange,
        onFocusVisibleChange = testOnly.onFocusVisibleChange,
        onFocusWithin = testOnly.onFocusWithin,
        onBlurWithin = testOnly.onBlurWithin
      testOnly = testOnly.testOnly
      var ref = useRef(null)
      b = useState((b = testOnly && testOnly.focus) != null ? b : !1)
      var testOnlyFocus = b[0],
        p = b[1]
      testOnly = useState(
        (b = testOnly && testOnly.focusVisible) != null ? b : !1,
      )
      b = testOnly[0]
      var q = testOnly[1]
      testOnly = d('ReactFocusEvent.react').useFocusWithin(
        ref,
        useMemo(
          function () {
            return {
              onFocusWithin: function (a) {
                onFocusWithin && !testOnlyFocus && onFocusWithin(a)
              },
              onBlurWithin: function (a) {
                onBlurWithin && testOnlyFocus && onBlurWithin(a)
              },
              onFocusWithinChange: onFocusChange
                ? function (a) {
                    p(a), onFocusChange(a)
                  }
                : p,
              onFocusWithinVisibleChange: onFocusVisibleChange
                ? function (a) {
                    q(a), onFocusVisibleChange(a)
                  }
                : q,
            }
          },
          [
            testOnlyFocus,
            onBlurWithin,
            onFocusChange,
            onFocusVisibleChange,
            onFocusWithin,
          ],
        ),
      )
      return h.jsx(unstable_Scope, {
        ref: testOnly,
        children:
          typeof children === 'function'
            ? children(testOnlyFocus, b)
            : children,
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    g['default'] = a
  },
  98,
)

__d(
  'BaseTooltipTargetWrapper.react',
  ['FocusWithinHandler.react', 'react', 'stylex'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    b = d('react')
    var useCallback = b.useCallback,
      useEffect = b.useEffect,
      useRef = b.useRef,
      useState = b.useState,
      stylex = {
        inheritAll: {
          alignContent: 'x4k7w5x',
          alignItems: 'x1h91t0o',
          alignSelf: 'x1h9r5lt',
          display: 'x1jfb8zj',
          flexBasis: 'xv2umb2',
          flexDirection: 'x1beo9mf',
          flexGrow: 'xaigb6o',
          flexShrink: 'x12ejxvf',
          height: 'x3igimt',
          justifyContent: 'xarpa2k',
          maxHeight: 'xedcshv',
          maxWidth: 'x1lytzrv',
          minHeight: 'x1t2pt76',
          minWidth: 'x7ja8zs',
          width: 'x1qrby5j',
          $$css: !0,
        },
        wrapperInline: {
          display: 'x3nfvp2',
          $$css: !0,
        },
      }
    function a(onFocusChange, externalRef) {
      var children = onFocusChange.children,
        forceInlineDisplay = onFocusChange.forceInlineDisplay,
        onHide = onFocusChange.onHide,
        onShow = onFocusChange.onShow,
        tooltipIdentifier = onFocusChange.tooltipIdentifier
      onFocusChange = useState(!1)
      var focusChange = onFocusChange[0]
      onFocusChange = onFocusChange[1]
      var onFocusVisibleChange = useState(!1),
        focusVisibleChange = onFocusVisibleChange[0]
      onFocusVisibleChange = onFocusVisibleChange[1]
      var r = focusChange && focusVisibleChange,
        s = useRef(r)
      useEffect(
        function () {
          s.current !== r && (r ? onShow() : onHide()), (s.current = r)
        },
        [onHide, onShow, r],
      )
      focusChange = useCallback(
        function (event) {
          var key = event.key
          key === 'Escape' &&
            tooltipIdentifier != null &&
            (onHide(), event.stopPropagation())
        },
        [onHide, tooltipIdentifier],
      )
      return h.jsx('span', {
        'aria-describedby': tooltipIdentifier,
        className: c('stylex')(
          stylex.inheritAll,
          forceInlineDisplay === !0 && stylex.wrapperInline,
        ),
        'data-testid': void 0,
        onKeyDown: focusChange,
        onPointerEnter: onShow,
        onPointerLeave: onHide,
        onPointerUp: onHide,
        ref: externalRef,
        children: h.jsx(c('FocusWithinHandler.react'), {
          onFocusChange: onFocusChange,
          onFocusVisibleChange: onFocusVisibleChange,
          children: children,
        }),
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    e = h.forwardRef(a)
    g['default'] = e
  },
  98,
)

__d(
  'BaseTooltipGroup.react',
  [
    'BaseTooltipTargetWrapper.react',
    'react',
    'recoverableViolation',
    'useDelayedState',
    'useStable',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    e = d('react')
    var useCallback = e.useCallback,
      useContext = e.useContext,
      useId = e.useId,
      useMemo = e.useMemo,
      useRef = e.useRef,
      useState = e.useState,
      o = h.createContext(null)
    function a(tooltipImpl) {
      var children = tooltipImpl.children
      tooltipImpl = tooltipImpl.tooltipImpl
      var delayState = c('useDelayedState')(!1),
        isVisible = delayState[0],
        setDelayState = delayState[1]
      delayState = useState(null)
      var state0 = delayState[0],
        setState = delayState[1],
        tooltipIdentifier = useId(),
        activeContentKey =
          state0 != null && state0.contentKey != null ? state0.contentKey : null
      delayState = useMemo(
        function () {
          return {
            activeContentKey: activeContentKey,
            isVisible: isVisible,
            onHide: function (a, b) {
              setDelayState(!1, a, b)
            },
            onShow: function (a, b, c) {
              setState(a), setDelayState(!0, b, c)
            },
            tooltipIdentifier: tooltipIdentifier,
          }
        },
        [activeContentKey, isVisible, tooltipIdentifier, setDelayState],
      )
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(o.Provider, {
            value: delayState,
            children: children,
          }),
          state0 != null
            ? h.jsx(
                tooltipImpl,
                babelHelpers['extends']({}, state0, {
                  id: isVisible ? tooltipIdentifier : void 0,
                  isVisible: isVisible,
                }),
              )
            : null,
        ],
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    var p = 0
    function q() {
      return 'tooltip-' + p++
    }
    function b(contextValue) {
      var b = contextValue.children,
        d = contextValue.disabled,
        e = d === void 0 ? !1 : d
      d = contextValue.forceInlineDisplay
      var hideDelayMs = contextValue.hideDelayMs,
        onVisibilityChange = contextValue.onVisibilityChange,
        showDelayMs = contextValue.showDelayMs,
        rest = babelHelpers.objectWithoutPropertiesLoose(contextValue, [
          'children',
          'disabled',
          'forceInlineDisplay',
          'hideDelayMs',
          'onVisibilityChange',
          'showDelayMs',
        ]),
        n = c('useStable')(q),
        p = useRef(null)
      contextValue = useContext(o)
      var tooltipIdentifier = contextValue || {},
        activeContentKey = tooltipIdentifier.activeContentKey,
        isVisible = tooltipIdentifier.isVisible
      isVisible = isVisible === void 0 ? !1 : isVisible
      var onHide = tooltipIdentifier.onHide,
        onShow = tooltipIdentifier.onShow
      tooltipIdentifier = tooltipIdentifier.tooltipIdentifier
      var onShowCallBack = useCallback(
          function () {
            !e &&
              onShow &&
              onShow(
                babelHelpers['extends'](
                  {
                    contentKey: n,
                    contextRef: p,
                  },
                  rest,
                ),
                showDelayMs,
                onVisibilityChange,
              )
          },
          [e, onShow, n, rest, showDelayMs, onVisibilityChange],
        ),
        onHideCallBack = useCallback(
          function () {
            onHide && onHide(hideDelayMs, onVisibilityChange)
          },
          [hideDelayMs, onHide, onVisibilityChange],
        )
      contextValue == null &&
        c('recoverableViolation')(
          'BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. ',
          'comet_ui',
        )
      return h.jsx(c('BaseTooltipTargetWrapper.react'), {
        forceInlineDisplay: d,
        onHide: onHideCallBack,
        onShow: onShowCallBack,
        ref: p,
        tooltipIdentifier:
          isVisible && activeContentKey === n ? tooltipIdentifier : void 0,
        children: b,
      })
    }
    b.displayName = b.name + ' [from ' + f.id + ']'
    g.Context = o
    g.Container = a
    g.Child = b
  },
  98,
)

__d(
  'BaseTooltip.react',
  [
    'BaseTooltipGroup.react',
    'BaseTooltipTargetWrapper.react',
    'react',
    'useDelayedState',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    b = d('react')
    var useCallback = b.useCallback,
      useContext = b.useContext,
      useId = b.useId,
      useRef = b.useRef,
      m = 50,
      n = 300
    function o(rest) {
      var b = rest.children,
        d = rest.delayTooltipMs,
        delayTooltipMs = d === void 0 ? n : d
      d = rest.disabled
      var disabled = d === void 0 ? !1 : d
      d = rest.forceInlineDisplay
      var g = rest.tooltipImpl,
        onVisibilityChange = rest.onVisibilityChange
      rest = babelHelpers.objectWithoutPropertiesLoose(rest, [
        'children',
        'delayTooltipMs',
        'disabled',
        'forceInlineDisplay',
        'tooltipImpl',
        'onVisibilityChange',
      ])
      var m = c('useDelayedState')(!1),
        o = m[0],
        setDelayState = m[1]
      m = useRef(null)
      var q = useId(),
        r = useCallback(
          function () {
            if (disabled) return
            setDelayState(!0, delayTooltipMs, onVisibilityChange)
          },
          [delayTooltipMs, disabled, onVisibilityChange, setDelayState],
        ),
        s = useCallback(
          function () {
            setDelayState(!1, 0, onVisibilityChange)
          },
          [onVisibilityChange, setDelayState],
        )
      return h.jsxs(h.Fragment, {
        children: [
          h.jsx(c('BaseTooltipTargetWrapper.react'), {
            forceInlineDisplay: d,
            onHide: s,
            onShow: r,
            ref: m,
            tooltipIdentifier: o ? q : void 0,
            children: b,
          }),
          h.jsx(
            g,
            babelHelpers['extends']({}, rest, {
              contentKey: null,
              contextRef: m,
              id: o ? q : void 0,
              isVisible: o,
            }),
          ),
        ],
      })
    }
    o.displayName = o.name + ' [from ' + f.id + ']'
    function a(a) {
      var b = useContext(d('BaseTooltipGroup.react').Context)
      if (b != null) {
        b = a.delayTooltipMs
        b = b === void 0 ? n : b
        a.tooltipImpl
        var c = babelHelpers.objectWithoutPropertiesLoose(a, [
          'delayTooltipMs',
          'tooltipImpl',
        ])
        return h.jsx(
          d('BaseTooltipGroup.react').Child,
          babelHelpers['extends']({}, c, {
            hideDelayMs: m,
            showDelayMs: b,
          }),
        )
      }
      return h.jsx(o, babelHelpers['extends']({}, a))
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    g['default'] = a
  },
  98,
)

//

__d(
  'BaseContextualLayer.react',
  [
    'BaseContextualLayerAnchorRoot.react',
    'BaseContextualLayerAnchorRootContext',
    'BaseContextualLayerAvailableHeightContext',
    'BaseContextualLayerContextSizeContext',
    'BaseContextualLayerDefaultContainer.react',
    'BaseContextualLayerLayerAdjustmentContext',
    'BaseContextualLayerOrientationContext',
    'BaseLinkNestedPressableContext',
    'BasePortal.react',
    'BaseScrollableAreaContext',
    'BaseViewportMarginsContext',
    'CometTextContext',
    'FocusRegion.react',
    'HiddenSubtreeContext',
    'LayoutAnimationBoundaryContext',
    'LayoutAnimationEvents',
    'Locale',
    'calculateBaseContextualLayerPosition',
    'focusScopeQueries',
    'getComputedStyle',
    'isElementFixedOrSticky',
    'mergeRefs',
    'react',
    'useLayoutAnimationEvents',
    'useResizeObserver',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var h = d('react')
    b = d('react')
    var useCallback = b.useCallback,
      useContext = b.useContext,
      useEffect = b.useEffect,
      useImperativeHandle = b.useImperativeHandle,
      useLayoutEffect = b.useLayoutEffect,
      useMemo = b.useMemo,
      useReducer = b.useReducer,
      useRef = b.useRef,
      useState = b.useState
    function r(a) {
      a = a.getBoundingClientRect()
      return {
        bottom: a.bottom,
        left: a.left,
        right: a.right,
        top: a.top,
      }
    }
    function s(a) {
      return (a =
        (a = a[a.length - 1]) == null
          ? void 0
          : (a = a.getDOMNode()) == null
          ? void 0
          : a.scrollTop) != null
        ? a
        : window.pageYOffset
    }
    function t(a) {
      var b = c('getComputedStyle')(a)
      return b != null && b.getPropertyValue('position') !== 'static'
        ? a
        : (a instanceof HTMLElement && a.offsetParent) ||
            a.ownerDocument.documentElement
    }
    var u = 8
    function v(a, b) {
      return a.bottom < b.top ||
        b.bottom < a.top ||
        a.right < b.left ||
        b.right < b.left
        ? null
        : {
            bottom: Math.min(a.bottom, b.bottom),
            left: Math.max(a.left, b.left),
            right: Math.min(a.right, b.right),
            top: Math.max(a.top, b.top),
          }
    }
    var w = d('Locale').isRTL(),
      aa = {
        root: {
          left: 'xu96u03',
          marginRight: 'xm80bdy',
          position: 'x10l6tqk',
          top: 'x13vifvy',
          $$css: !0,
        },
      }
    function ba(a) {
      return {
        adjustment: null,
        availableHeight: null,
        contextSize: null,
        isPositionIndeterminate: !1,
        position: a,
      }
    }
    function ca(a, b) {
      var c
      switch (b.type) {
        case 'determine_direction':
          if (
            a.position !== b.position ||
            a.availableHeight !== b.availableHeight
          )
            return babelHelpers['extends']({}, a, {
              availableHeight: b.availableHeight,
              position: b.position,
            })
          break
        case 'reposition':
          if (
            a.adjustment !== b.adjustment ||
            ((c = a.contextSize) == null ? void 0 : c.height) !==
              ((c = b.contextSize) == null ? void 0 : c.height) ||
            ((c = a.contextSize) == null ? void 0 : c.width) !==
              ((c = b.contextSize) == null ? void 0 : c.width)
          )
            return babelHelpers['extends']({}, a, {
              adjustment: b.adjustment,
              contextSize: b.contextSize,
              isPositionIndeterminate: !1,
            })
          break
        case 'position_indeterminate':
          return babelHelpers['extends']({}, a, {
            isPositionIndeterminate: !0,
          })
        case 'position_changed':
          if (a.position !== b.position)
            return babelHelpers['extends']({}, a, {
              position: b.position,
            })
          break
      }
      return a
    }
    function a(a, b) {
      var e = a.align,
        f = e === void 0 ? 'start' : e
      e = a.disableAutoAlign
      var g = e === void 0 ? !1 : e
      e = a.children
      var x = a.containFocus
      x = x === void 0 ? !1 : x
      var y = a.customContainer
      y = y === void 0 ? c('BaseContextualLayerDefaultContainer.react') : y
      var z = a.disableAutoFlip,
        A = z === void 0 ? !1 : z
      z = a.hidden
      z = z === void 0 ? !1 : z
      var B = a.imperativeRef,
        da = a.onEscapeFocusRegion,
        C = a.onIndeterminatePosition,
        ea = a.presencePayload,
        D = a.position,
        E = D === void 0 ? 'below' : D
      D = a.stopClickPropagation
      D = D === void 0 ? !1 : D
      var fa = a.xstyle,
        F = babelHelpers.objectWithoutPropertiesLoose(a, [
          'align',
          'disableAutoAlign',
          'children',
          'containFocus',
          'customContainer',
          'disableAutoFlip',
          'hidden',
          'imperativeRef',
          'onEscapeFocusRegion',
          'onIndeterminatePosition',
          'presencePayload',
          'position',
          'stopClickPropagation',
          'xstyle',
        ])
      a = useReducer(ca, E, ba)
      var G = a[0],
        ga = G.adjustment,
        ha = G.availableHeight,
        ia = G.contextSize,
        H = G.isPositionIndeterminate,
        I = G.position,
        J = a[1],
        K = useContext(c('BaseContextualLayerAnchorRootContext')),
        L = useContext(c('BaseScrollableAreaContext')),
        M = useContext(c('BaseViewportMarginsContext')),
        N = useContext(c('LayoutAnimationBoundaryContext'))
      G = useState(!1)
      a = G[0]
      var O = G[1]
      G = useContext(c('HiddenSubtreeContext'))
      G = G.hidden
      var P = G || z,
        Q = useRef(null),
        R = useRef(null),
        S = useCallback(
          function () {
            return F.context_DEPRECATED == null && F.contextRef != null
              ? F.contextRef.current
              : F.context_DEPRECATED
          },
          [F.contextRef, F.context_DEPRECATED],
        ),
        T = useCallback(
          function () {
            var a = document.documentElement
            if (a == null) return
            return {
              bottom: a.clientHeight - M.bottom - u,
              left: M.left + u,
              right: a.clientWidth - M.right - u,
              top: M.top + u,
            }
          },
          [M.bottom, M.left, M.right, M.top],
        ),
        U = useCallback(
          function () {
            var a = Q.current,
              b = S(),
              c = T()
            if (a == null || b == null || c == null) return
            b = r(b)
            a = r(a)
            var d = a.bottom - a.top
            a = a.right - a.left
            var e = w ? 'start' : 'end',
              f = w ? 'end' : 'start',
              g = I,
              h = null
            A ||
              (I === 'above' || I === 'below'
                ? I === 'above' && b.top - d < c.top && b.bottom + d < c.bottom
                  ? (g = 'below')
                  : I === 'above' && s(L) + b.top < d
                  ? (g = 'below')
                  : I === 'below' &&
                    b.bottom + d > c.bottom &&
                    b.top - d > c.top &&
                    (g = 'above')
                : (I === 'start' || I === 'end') &&
                  (I === f && b.left - a < c.left && b.right + a < c.right
                    ? (g = e)
                    : I === e &&
                      b.right + a > c.right &&
                      b.left - a > c.left &&
                      (g = f)))
            ;(g === 'above' || g === 'below') &&
              (h = g === 'above' ? b.top - c.top : c.bottom - b.bottom)
            R.current = {
              height: d,
              width: a,
            }
            J({
              availableHeight: h,
              position: g,
              type: 'determine_direction',
            })
          },
          [S, T, A, I],
        ),
        V = useCallback(
          function () {
            var a = document.documentElement,
              b = K.current,
              d = T(),
              e = S()
            if (a == null || b == null || d == null || e == null) return
            var h = t(b)
            if (h == null) return
            b = c('isElementFixedOrSticky')(b)
            b = !b && e.nodeType === 1 && c('isElementFixedOrSticky')(e)
            e = L.map(function (a) {
              return a.getDOMNode()
            })
              .filter(Boolean)
              .filter(function (a) {
                return h.contains(a)
              })
              .reduce(function (a, b) {
                return a != null ? v(a, r(b)) : null
              }, r(e))
            if (e == null || (e.left === 0 && e.right === 0)) {
              J({
                type: 'position_indeterminate',
              })
              C && C()
              return
            }
            a = b
              ? {
                  bottom: a.clientHeight,
                  left: 0,
                  right: a.clientWidth,
                  top: 0,
                }
              : r(h)
            b = c('calculateBaseContextualLayerPosition')({
              align: f,
              contextRect: e,
              contextualLayerSize: g ? null : R.current,
              fixed: b,
              offsetRect: a,
              position: I,
              screenRect: d,
            })
            a = b.adjustment
            d = b.style
            b = Q.current
            if (b != null) {
              var i = Object.keys(d)
              for (var j = 0; j < i.length; j++) {
                var k = i[j],
                  l = d[k]
                l != null
                  ? b.style.setProperty(k, l)
                  : b.style.removeProperty(k)
              }
            }
            J({
              adjustment: a,
              contextSize: {
                height: e.bottom - e.top,
                width: e.right - e.left,
              },
              type: 'reposition',
            })
          },
          [K, T, S, L, g, f, I, C],
        ),
        W = useCallback(
          function (a) {
            a === d('LayoutAnimationEvents').LayoutAnimationEventType.Start &&
              O(!0),
              a === d('LayoutAnimationEvents').LayoutAnimationEventType.Stop &&
                (O(!1), V())
          },
          [V, O],
        )
      useLayoutEffect(
        function () {
          N != null &&
            N.getIsAnimating() &&
            W(d('LayoutAnimationEvents').LayoutAnimationEventType.Start)
        },
        [N, W],
      )
      c('useLayoutAnimationEvents')(W)
      useImperativeHandle(
        B,
        function () {
          return {
            reposition: function (a) {
              if (!P) {
                a = a || {}
                a = a.autoflip
                a = a === void 0 ? !1 : a
                a && U()
                V()
              }
            },
          }
        },
        [P, V, U],
      )
      var X = c('useResizeObserver')(function (a) {
          var b = a.height
          a = a.width
          R.current = {
            height: b,
            width: a,
          }
        }),
        Y = useRef(E)
      useLayoutEffect(function () {
        E !== Y.current &&
          (J({
            position: E,
            type: 'position_changed',
          }),
          P || (U(), V()),
          (Y.current = E))
      })
      var Z = useCallback(
        function (a) {
          ;(Q.current = a), a != null && !P && (U(), V())
        },
        [P, V, U],
      )
      useEffect(
        function () {
          if (P) return
          var a = function () {
            U(), V()
          }
          window.addEventListener('resize', a)
          return function () {
            window.removeEventListener('resize', a)
          }
        },
        [P, V, U],
      )
      useEffect(
        function () {
          if (P) return
          var a = L.map(function (a) {
            return a.getDOMNode()
          }).filter(Boolean)
          if (a.length > 0) {
            a.forEach(function (a) {
              return a.addEventListener('scroll', V, {
                passive: !0,
              })
            })
            return function () {
              a.forEach(function (a) {
                return a.removeEventListener('scroll', V, {
                  passive: !0,
                })
              })
            }
          }
        },
        [P, V, L],
      )
      useEffect(
        function () {
          if (window.addEventListener == null || P) return
          window.addEventListener('scroll', V, {
            passive: !0,
          })
          return function () {
            window.removeEventListener('scroll', V, {
              passive: !0,
            })
          }
        },
        [P, V],
      )
      G = useMemo(
        function () {
          return c('mergeRefs')(Z, X, b)
        },
        [Z, X, b],
      )
      B = useMemo(
        function () {
          return {
            align: f,
            position: I,
          }
        },
        [f, I],
      )
      var $ = z || H
      return h.jsx(c('BasePortal.react'), {
        target: K.current,
        children: h.jsx(y, {
          hidden: z || H || a,
          presencePayload: ea,
          ref: G,
          stopClickPropagation: D,
          testid: void 0,
          xstyle: [aa.root, fa],
          children: h.jsx(d('FocusRegion.react').FocusRegion, {
            autoFocusQuery:
              !$ && x
                ? d('focusScopeQueries').headerFirstTabbableSecondScopeQuery
                : null,
            autoRestoreFocus: !$,
            containFocusQuery:
              !$ && x ? d('focusScopeQueries').tabbableScopeQuery : null,
            onEscapeFocusRegion: da,
            recoverFocusQuery: $
              ? null
              : d('focusScopeQueries').headerFirstTabbableSecondScopeQuery,
            children: h.jsx(c('BaseContextualLayerAnchorRoot.react'), {
              children: h.jsx(
                c('BaseContextualLayerContextSizeContext').Provider,
                {
                  value: ia,
                  children: h.jsx(
                    c('BaseContextualLayerLayerAdjustmentContext').Provider,
                    {
                      value: ga,
                      children: h.jsx(
                        c('BaseContextualLayerAvailableHeightContext').Provider,
                        {
                          value: ha,
                          children: h.jsx(
                            c('BaseContextualLayerOrientationContext').Provider,
                            {
                              value: B,
                              children: h.jsx(
                                c('BaseLinkNestedPressableContext').Provider,
                                {
                                  value: !1,
                                  children: h.jsx(
                                    c('CometTextContext').Provider,
                                    {
                                      value: null,
                                      children: e,
                                    },
                                  ),
                                },
                              ),
                            },
                          ),
                        },
                      ),
                    },
                  ),
                },
              ),
            }),
          }),
        }),
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    e = h.forwardRef(a)
    g['default'] = e
  },
  98,
)

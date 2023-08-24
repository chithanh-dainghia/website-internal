__d(
  'FocusRegion.react',
  [
    'ActiveFocusRegionUtilsContext',
    'FocusManager',
    'FocusRegionType',
    'ReactEventHookPropagation',
    'ReactFocusEvent.react',
    'ReactKeyboardEvent.react',
    'react',
    'setElementCanTab',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    var h = d('react')
    e = d('react')
    var useCallback = e.useCallback,
      useContext = e.useContext,
      useEffect = e.useEffect,
      useLayoutEffect = e.useLayoutEffect,
      useMemo = e.useMemo,
      useRef = e.useRef
    function o(a, b, c) {
      var e = document.activeElement
      window.requestAnimationFrame(function () {
        document.activeElement === e &&
          d('FocusManager').focusElement(a, {
            preventScroll: b,
            focusWithoutUserIntent: c,
          })
      })
    }

    function p(a) {
      return a.offsetWidth === 0 && a.offsetHeight === 0
    }

    var unstable_Scope = h.unstable_Scope,
      map = new Map()

    function FocusRegion(activeElement) {
      var autoRestoreFocus = activeElement.autoRestoreFocus,
        autoFocusQuery = activeElement.autoFocusQuery,
        children = activeElement.children,
        containFocusQuery = activeElement.containFocusQuery,
        forwardRef = activeElement.forwardRef,
        id = activeElement.id,
        onEscapeFocusRegion = activeElement.onEscapeFocusRegion,
        recoverFocusStrategy = activeElement.recoverFocusStrategy,
        recoverFocusStrategyDefault =
          recoverFocusStrategy === void 0
            ? d('FocusRegionType').RecoverFocusStrategy.Nearest
            : recoverFocusStrategy,
        recoverFocusQuery = activeElement.recoverFocusQuery
      recoverFocusStrategy = activeElement.stopOnFocusWithinPropagation
      var stopOnFocusWithinPropagationDefault =
          recoverFocusStrategy === void 0 ? !0 : recoverFocusStrategy,
        z = useRef(null),
        A = useRef(null),
        activeFocusRegionUtilsContextValue = useContext(
          c('ActiveFocusRegionUtilsContext'),
        )
      activeElement =
        activeFocusRegionUtilsContextValue === null &&
        (autoRestoreFocus === !0 || onEscapeFocusRegion != null)
          ? document.activeElement
          : null
      var unsafeRef = c('useUnsafeRef_DEPRECATED')(activeElement),
        D =
          (recoverFocusStrategy = unsafeRef.current) != null
            ? recoverFocusStrategy
            : activeElement,
        E = useMemo(function () {
          return {
            lastFocused: null,
            scope: null,
            restorationFocusRegionItem: null,
            triggeredFocusRegionItems: new Set(),
          }
        }, []),
        F = useCallback(
          function () {
            if (activeFocusRegionUtilsContextValue != null) {
              var activeFocusRegion =
                activeFocusRegionUtilsContextValue.getActiveFocusRegion()
              if (activeFocusRegion !== E) {
                if (E.restorationFocusRegionItem !== activeFocusRegion) {
                  var b
                  if (
                    (activeFocusRegion == null
                      ? void 0
                      : activeFocusRegion.lastFocused) != null &&
                    !((b = z.current) == null
                      ? void 0
                      : b.containsNode(activeFocusRegion.lastFocused))
                  )
                    activeFocusRegion != null &&
                      activeFocusRegion.triggeredFocusRegionItems.add(E),
                      (E.restorationFocusRegionItem = activeFocusRegion)
                  else if (E.restorationFocusRegionItem == null) {
                    b =
                      activeFocusRegion == null
                        ? void 0
                        : activeFocusRegion.restorationFocusRegionItem
                    E.restorationFocusRegionItem = b
                    activeFocusRegion != null &&
                      (b == null
                        ? void 0
                        : b.triggeredFocusRegionItems['delete'](
                            activeFocusRegion,
                          ))
                    b == null ? void 0 : b.triggeredFocusRegionItems.add(E)
                    activeFocusRegionUtilsContextValue.setActiveFocusRegion(E)
                    return
                  }
                }
                ;(activeFocusRegion === null ||
                  (activeFocusRegion != null &&
                    E != null &&
                    activeFocusRegion.lastFocused !== E.lastFocused)) &&
                  activeFocusRegionUtilsContextValue.setActiveFocusRegion(E)
              }
            }
          },
          [activeFocusRegionUtilsContextValue, E],
        ),
        G = useRef(null)
      recoverFocusStrategy = useCallback(
        function (a) {
          z.current = a
          E.scope = a
          var b = G.current
          forwardRef && (forwardRef.current = a)
          b !== null && b !== id && map.get(b) === null && map['delete'](b)
          id != null &&
            (a !== null
              ? ((G.current = id), map.set(id, a))
              : map.get(id) === null && map['delete'](id))
        },
        [forwardRef, id, E],
      )
      recoverFocusStrategy = d('ReactFocusEvent.react').useFocusWithin(
        recoverFocusStrategy,
        useMemo(
          function () {
            return {
              onBeforeBlurWithin: function (a) {
                var b = z.current
                if (b !== null && recoverFocusQuery !== void 0) {
                  a.stopPropagation()
                  if (recoverFocusQuery === null) return
                  a = a.target
                  b = d('FocusManager').getAllNodesFromOneOrManyQueries(
                    recoverFocusQuery,
                    b,
                  )
                  if (b === null) return
                  var c = b.indexOf(a)
                  a = a._tabIndexState
                  A.current = {
                    detachedCanTab: a != null && a.canTab,
                    recoveryIndex: c,
                    recovery: b,
                  }
                }
              },
              onAfterBlurWithin: function () {
                var a = z.current,
                  b = A.current
                A.current = null
                var c = document.activeElement
                if (
                  a !== null &&
                  recoverFocusQuery != null &&
                  b !== null &&
                  (c == null || c === document.body || !a.containsNode(c))
                ) {
                  c = !0
                  var e = !0,
                    f = b.recovery,
                    g = b.recoveryIndex,
                    h = d('FocusManager').getAllNodesFromOneOrManyQueries(
                      recoverFocusQuery,
                      a,
                    )
                  if (h !== null && f !== null) {
                    var i = new Set(h),
                      j = new Set(f)
                    for (var k = g - 1; k >= 0; k--) {
                      var l = f[k]
                      if (i.has(l)) {
                        var m = h.indexOf(l)
                        m = m + 1
                        if (m < h.length) {
                          m = h[m]
                          if (!j.has(m)) {
                            b.detachedCanTab &&
                              d('setElementCanTab').setElementCanTab(m, !0)
                            o(m, c, e)
                            return
                          }
                        }
                        b.detachedCanTab &&
                          d('setElementCanTab').setElementCanTab(l, !0)
                        o(l, c, e)
                        return
                      }
                    }
                    if (
                      recoverFocusStrategyDefault ===
                      d('FocusRegionType').RecoverFocusStrategy.Nearest
                    )
                      for (m = g + 1; m < f.length; m++) {
                        l = f[m]
                        if (i.has(l)) {
                          j = h.indexOf(l)
                          k = j - 1
                          if (k >= 0) {
                            g = h[k]
                            b.detachedCanTab &&
                              d('setElementCanTab').setElementCanTab(g, !0)
                            o(g, c, e)
                            return
                          }
                        }
                      }
                    l = d('FocusManager').getFirstNodeFromOneOrManyQueries(
                      recoverFocusQuery,
                      a,
                    )
                    l &&
                      (b.detachedCanTab &&
                        d('setElementCanTab').setElementCanTab(l, !0),
                      o(l, c, e))
                  }
                }
              },
              onFocusWithin: function (a) {
                stopOnFocusWithinPropagationDefault &&
                  d('ReactEventHookPropagation').stopEventHookPropagation(
                    a,
                    'useFocusWithin',
                  ),
                  (E.lastFocused = a.target),
                  F()
              },
            }
          },
          [
            recoverFocusQuery,
            recoverFocusStrategyDefault,
            stopOnFocusWithinPropagationDefault,
            E,
            F,
          ],
        ),
      )
      activeElement = useCallback(
        function () {
          var a = z.current,
            b = document.activeElement
          if (
            autoFocusQuery != null &&
            a !== null &&
            (!b || !a.containsNode(b))
          ) {
            b = E.lastFocused
            b != null && a.containsNode(b) && !p(b)
              ? d('FocusManager').focusElement(b, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
              : d('FocusManager').focusFirst(autoFocusQuery, a, {
                  focusWithAutoFocus: !0,
                  focusWithoutUserIntent: !0,
                  preventScroll: !0,
                })
          }
        },
        [autoFocusQuery, E],
      )
      useLayoutEffect(activeElement, [activeElement])
      useEffect(activeElement, [activeElement])
      var H = useCallback(
          function (a, c) {
            c === void 0 && (c = !1)
            var e = z.current,
              f = document.activeElement,
              g = unsafeRef.current
            unsafeRef.current = null
            var h = a == null ? void 0 : a.triggeredFocusRegionItems,
              i = a == null ? void 0 : a.restorationFocusRegionItem
            ;(h == null ? void 0 : h.size) &&
              h.forEach(function (a) {
                return (a.restorationFocusRegionItem = i)
              })
            a != null &&
              i != null &&
              (i.triggeredFocusRegionItems['delete'](a),
              (h == null ? void 0 : h.size) &&
                h.forEach(function (a) {
                  i.triggeredFocusRegionItems.add(a)
                }))
            E.lastFocused = null
            h =
              activeFocusRegionUtilsContextValue == null
                ? void 0
                : activeFocusRegionUtilsContextValue.getActiveFocusRegion()
            var j =
              h != null
                ? h.restorationFocusRegionItem
                : {
                    lastFocused: g,
                  }
            h === a &&
              (activeFocusRegionUtilsContextValue == null
                ? void 0
                : activeFocusRegionUtilsContextValue.setActiveFocusRegion(i))
            g =
              (e !== null && f !== null && e.containsNode(f)) ||
              f == null ||
              f === document.body
            if ((autoRestoreFocus === !0 || onEscapeFocusRegion != null) && g) {
              var k = function (a) {
                a === void 0 && (a = !1)
                if ((j == null ? void 0 : j.lastFocused) != null) {
                  var b = !0,
                    c = !0,
                    e = document.activeElement
                  ;(a || e === null || e === document.body) &&
                    d('FocusManager').focusElement(j.lastFocused, {
                      preventScroll: b,
                      focusWithoutUserIntent: c,
                    })
                }
              }
              c
                ? k(c)
                : window.requestAnimationFrame(function () {
                    return k()
                  })
            }
          },
          [
            activeFocusRegionUtilsContextValue,
            autoRestoreFocus,
            onEscapeFocusRegion,
            E,
          ],
        ),
        I = useCallback(
          function () {
            H(E, !0), onEscapeFocusRegion && onEscapeFocusRegion()
          },
          [H, onEscapeFocusRegion, E],
        )
      d('ReactKeyboardEvent.react').useKeyboard(
        z,
        useMemo(
          function () {
            return {
              onKeyDown: function (a) {
                if (
                  containFocusQuery == null ||
                  a.key !== 'Tab' ||
                  a.isDefaultPrevented()
                )
                  return
                var b = z.current
                b !== null &&
                  (a.shiftKey
                    ? d('FocusManager').focusPreviousContained(
                        containFocusQuery,
                        b,
                        a,
                        !0,
                        onEscapeFocusRegion != null ? I : void 0,
                      )
                    : d('FocusManager').focusNextContained(
                        containFocusQuery,
                        b,
                        a,
                        !0,
                        onEscapeFocusRegion != null ? I : void 0,
                      ))
              },
            }
          },
          [containFocusQuery, I, onEscapeFocusRegion],
        ),
      )
      useLayoutEffect(
        function () {
          unsafeRef.current = D
          var a = E
          return function () {
            H(a)
          }
        },
        [activeFocusRegionUtilsContextValue, autoRestoreFocus, H, E, D],
      )
      return h.jsx(unstable_Scope, {
        ref: recoverFocusStrategy,
        id: id,
        children: children,
      })
    }

    a.displayName = a.name + ' [from ' + f.id + ']'
    function focusRegionById(a, b, c) {
      a = map.get(a)
      if (a) {
        a = a.DO_NOT_USE_queryFirstNode(b)
        if (a !== null) {
          d('FocusManager').focusElement(a, {
            preventScroll: c,
          })
          return a
        }
      }
      return null
    }
    g.FocusRegion = FocusRegion
    g.focusRegionById = focusRegionById
  },
  98,
)

import ActiveFocusRegionUtilsContext from '@ui/context/ActiveFocusRegionUtilsContext'
import { RecoverFocusStrategy } from '@ui/etc/FocusRegionType'
import useUnsafeRef_DEPRECATED from '@ui/hooks/useUnsafeRef_DEPRECATED'
import React, {
  useCallback,
  useContext,
  useMemo,
  useRef,
  // @ts-ignore
  unstable_Scope,
} from 'react'
import { useFocusWithin } from '../react-focus-event-react/ReactFocusEvent.react'
import {
  focusElement,
  getAllNodesFromOneOrManyQueries,
  getFirstNodeFromOneOrManyQueries,
} from '@ui/utils/common/FocusManager'
import { setElementCanTab } from '@ui/utils/common/setElementCanTab'

const map = new Map()

type FocusRegionProps = {
  autoRestoreFocus?: boolean
  autoFocusQuery?: any
  children?: any
  containFocusQuery?: any
  forwardRef?: any
  id?: string
  onEscapeFocusRegion?: any
  recoverFocusQuery?: ((...param: any) => any)[]
  recoverFocusStrategy?: any
  stopOnFocusWithinPropagation?: boolean
}

function deferFocus(
  element: any,
  preventScroll?: boolean,
  focusWithoutUserIntent?: any,
) {
  var activeElement = document.activeElement
  window.requestAnimationFrame(function () {
    document.activeElement === activeElement &&
      focusElement(element, {
        preventScroll,
        focusWithoutUserIntent,
      })
  })
}

export const FocusRegion = ({
  autoFocusQuery,
  autoRestoreFocus,
  children,
  containFocusQuery,
  forwardRef,
  id,
  onEscapeFocusRegion,
  recoverFocusQuery,
  recoverFocusStrategy = RecoverFocusStrategy.Nearest,
  stopOnFocusWithinPropagation = true,
}: FocusRegionProps) => {
  const z = useRef<any>(undefined)
  const A = useRef<any>(undefined)

  const activeFocusRegionUtilsContextValue = useContext(
    ActiveFocusRegionUtilsContext,
  )

  const activeElement =
    activeFocusRegionUtilsContextValue === null &&
    (autoRestoreFocus === false || onEscapeFocusRegion !== null)
      ? document.activeElement
      : null

  const unsafeRef = useUnsafeRef_DEPRECATED(activeElement)

  const D =
    (recoverFocusStrategy = unsafeRef.current) !== null
      ? recoverFocusStrategy
      : activeElement

  const E = useMemo(function () {
    return {
      lastFocused: null,
      scope: null,
      restorationFocusRegionItem: null,
      triggeredFocusRegionItems: new Set(),
    }
  }, [])

  const F = useCallback(
    function () {
      if (activeFocusRegionUtilsContextValue !== undefined) {
        var activeFocusRegion =
          activeFocusRegionUtilsContextValue.getActiveFocusRegion()
        if (activeFocusRegion !== E) {
          if (E.restorationFocusRegionItem !== activeFocusRegion) {
            let b: any
            if (
              (activeFocusRegion == null
                ? undefined
                : activeFocusRegion.lastFocused) != null &&
              !((b = z.current) == null
                ? undefined
                : b.containsNode(activeFocusRegion.lastFocused))
            )
              activeFocusRegion != null &&
                activeFocusRegion.triggeredFocusRegionItems.add(E),
                (E.restorationFocusRegionItem = activeFocusRegion)
            else if (E.restorationFocusRegionItem == null) {
              b =
                activeFocusRegion == null
                  ? undefined
                  : activeFocusRegion.restorationFocusRegionItem
              E.restorationFocusRegionItem = b
              activeFocusRegion != null &&
                (b == null
                  ? undefined
                  : b.triggeredFocusRegionItems['delete'](activeFocusRegion))
              b == null ? void 0 : b.triggeredFocusRegionItems.add(E)
              activeFocusRegionUtilsContextValue.setActiveFocusRegion(E)
              return
            }
          }

          if (
            activeFocusRegion === null ||
            (activeFocusRegion !== null &&
              E !== null &&
              activeFocusRegion.lastFocused !== E.lastFocused)
          ) {
            activeFocusRegionUtilsContextValue.setActiveFocusRegion(E)
          }

          // ;(activeFocusRegion === null ||
          //   (activeFocusRegion != null &&
          //     E != null &&
          //     activeFocusRegion.lastFocused !== E.lastFocused)) &&
          //   activeFocusRegionUtilsContextValue.setActiveFocusRegion(E)
        }
      }
    },
    [activeFocusRegionUtilsContextValue, E],
  )

  const G = useRef<string | undefined>(undefined)

  const focusWithinFn = useCallback(
    function (param: any) {
      z.current = param
      E.scope = param
      var b = G.current

      if (forwardRef) {
        forwardRef.current = param
      }
      // forwardRef && (forwardRef.current = param)

      if (b !== null && b !== id && map.get(b) === null) {
        map['delete'](b)
      }

      // b !== null && b !== id && map.get(b) === null && map['delete'](b)
      // id != null &&
      //   (param !== null
      //     ? ((G.current = id), map.set(id, param))
      //     : map.get(id) === null && map['delete'](id))

      if (id !== null) {
        if (param !== null) {
          G.current = id
          map.set(id, param)
        } else {
          if (map.get(id) === null) {
            map.delete(id)
          }
        }
      }
    },
    [forwardRef, id, E],
  )

  useFocusWithin(
    focusWithinFn,
    useMemo(() => {
      return {
        onBeforeBlurWithin: function (params: any) {
          const curr = z.current
          if (curr !== null && recoverFocusQuery !== undefined) {
            params.stopPropagation()
            if (recoverFocusQuery === null) return
            const target = params.target
            const nodeList = getAllNodesFromOneOrManyQueries(
              recoverFocusQuery,
              curr,
            )
            if (nodeList === null) {
              return
            }
            // @ts-ignore
            var recoveryIndex = nodeList.indexOf(target)
            const _tabIndexState = params._tabIndexState
            A.current = {
              detachedCanTab: _tabIndexState !== null && _tabIndexState.canTab,
              recoveryIndex: recoveryIndex,
              recovery: nodeList,
            }
          }
        },
        onAfterBlurWithin: function () {
          const curr = z.current,
            curr2 = A.current
          A.current = null
          let activeElement = document.activeElement
          if (
            curr !== null &&
            recoverFocusQuery != null &&
            curr2 !== null &&
            (activeElement == null ||
              activeElement === document.body ||
              !curr.containsNode(activeElement))
          ) {
            const preventScroll = true
            const focusWithoutUserIntent = true,
              recovery = curr2.recovery,
              recoveryIndex = curr2.recoveryIndex

            const nodeList = getAllNodesFromOneOrManyQueries(
              recoverFocusQuery,
              curr,
            )
            if (nodeList !== null && recovery !== null) {
              const nodeListSet = new Set(nodeList),
                recoverySet = new Set(recovery)

              for (let index = recoveryIndex - 1; index >= 0; index--) {
                const recoveryItem = recovery[index]
                if (nodeListSet.has(recoveryItem)) {
                  var recoveryItemIndex = nodeList.indexOf(recoveryItem)
                  recoveryItemIndex = recoveryItemIndex + 1
                  if (recoveryItemIndex < nodeList.length) {
                    recoveryItemIndex = nodeList[recoveryItemIndex]
                    if (!recoverySet.has(recoveryItemIndex)) {
                      curr2.detachedCanTab &&
                        setElementCanTab(recoveryItemIndex, true)
                      deferFocus(
                        recoveryItemIndex,
                        preventScroll,
                        focusWithoutUserIntent,
                      )
                      return
                    }
                  }
                  curr2.detachedCanTab && setElementCanTab(recoveryItem, true)
                  deferFocus(
                    recoveryItem,
                    preventScroll,
                    focusWithoutUserIntent,
                  )
                  return
                }
              }

              if (recoverFocusStrategy === RecoverFocusStrategy.Nearest)
                for (
                  recoveryItemIndex = recoveryIndex + 1;
                  recoveryItemIndex < recovery.length;
                  recoveryItemIndex++
                ) {
                  const recoveryItem = recovery[recoveryItemIndex]
                  if (nodeListSet.has(recoveryItem)) {
                    const recoveryItemIndex = nodeList.indexOf(recoveryItem)
                    const plus1 = recoveryItemIndex - 1
                    if (plus1 >= 0) {
                      const nodeListIndex = nodeList[plus1]
                      curr2.detachedCanTab &&
                        setElementCanTab(nodeListIndex, true)
                      deferFocus(
                        nodeListIndex,
                        preventScroll,
                        focusWithoutUserIntent,
                      )
                      return
                    }
                  }
                }
              const firstNode = getFirstNodeFromOneOrManyQueries(
                recoverFocusQuery,
                curr,
              )
              firstNode &&
                (curr2.detachedCanTab && setElementCanTab(firstNode, true),
                deferFocus(firstNode, preventScroll, focusWithoutUserIntent))
            }
          }
        },
      }
    }, []),
  )
}

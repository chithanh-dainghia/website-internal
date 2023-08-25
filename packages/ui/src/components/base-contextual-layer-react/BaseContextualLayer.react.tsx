import {
  ReactNode,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'
import BaseContextualLayerDefaultContainerReact from '../base-contextual-layer-default-container-react/BaseContextualLayerDefaultContainer.react'
import BaseContextualLayerAnchorRootContext from '@ui/context/BaseContextualLayerAnchorRootContext'
import BaseScrollableAreaContext from '@ui/context/BaseScrollableAreaContext'
import BaseViewportMarginsContext from '@ui/context/BaseViewportMarginsContext'
import LayoutAnimationBoundaryContext from '@ui/context/LayoutAnimationBoundaryContext'
import HiddenSubtreeContext from '@ui/context/HiddenSubtreeContext'
import getComputedStyle from '@ui/utils/common/getComputedStyle'
import isElementFixedOrSticky from '@ui/utils/common/isElementFixedOrSticky'
import { calculateBaseContextualLayerPosition } from '@ui/utils/common/calculateBaseContextualLayerPosition'
import { LayoutAnimationEventType } from '@ui/etc/LayoutAnimationEvents'

type BaseContextualLayerReactProps = {
  align?: string
  disableAutoAlign?: boolean
  children?: ReactNode
  containFocus?: boolean
  customContainer?: any
  disableAutoFlip?: boolean
  hidden?: boolean
  imperativeRef?: any
  onEscapeFocusRegion: (...param: any) => any
  onIndeterminatePosition: (...param: any) => any
  presencePayload: any
  position?: string
  stopClickPropagation?: boolean
  className?: string

  contextRef?: any
  context_DEPRECATED?: any
}

function createInitialState(position: string) {
  return {
    adjustment: null,
    availableHeight: null,
    contextSize: null,
    isPositionIndeterminate: false,
    position,
  }
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'determine_direction':
      if (
        state.position !== action.position ||
        state.availableHeight !== action.availableHeight
      )
        return Object.assign({}, state, {
          availableHeight: action.availableHeight,
          position: action.position,
        })
      break
    case 'reposition':
      {
        const hasStateChanged =
          state.adjustment !== action.adjustment ||
          state.contextSize?.height !== action.contextSize?.height ||
          state.contextSize?.width !== action.contextSize?.width

        if (hasStateChanged) {
          const updatedState = {
            ...state,
            adjustment: action.adjustment,
            contextSize: action.contextSize,
            isPositionIndeterminate: false,
          }
          return updatedState
        }

        // if (
        //   state.adjustment !== action.adjustment ||
        //   ((c = state.contextSize) == null ? void 0 : c.height) !==
        //     ((c = action.contextSize) == null ? void 0 : c.height) ||
        //   ((c = state.contextSize) == null ? void 0 : c.width) !==
        //     ((c = action.contextSize) == null ? void 0 : c.width)
        // )
        //   return Object.assign({}, state, {
        //     adjustment: action.adjustment,
        //     contextSize: action.contextSize,
        //     isPositionIndeterminate: false,
        //   })
      }

      break
    case 'position_indeterminate':
      return Object.assign({}, state, {
        isPositionIndeterminate: true,
      })
    case 'position_changed':
      if (state.position !== action.position)
        return Object.assign({}, state, {
          position: action.position,
        })
      break
  }

  return state
}

function getBoundingClientRectValues(element: any) {
  element = element.getBoundingClientRect()
  return {
    bottom: element.bottom,
    left: element.left,
    right: element.right,
    top: element.top,
  }
}

function getScrollTopPosition(elementArray: any) {
  const lastElement = elementArray[elementArray.length - 1]
  const node = lastElement?.getDOMNode?.()
  const scrollTop = node?.scrollTop

  return scrollTop !== undefined ? scrollTop : window.pageYOffset
}

function getOffsetParentOrRootElement(el: any) {
  var style = getComputedStyle(el)
  return style != null && style.getPropertyValue('position') !== 'static'
    ? el
    : (el instanceof HTMLElement && el.offsetParent) ||
        el.ownerDocument.documentElement
}

function getIntersectionRect(el1: any, el2: any) {
  return el1.bottom < el2.top ||
    el2.bottom < el1.top ||
    el1.right < el2.left ||
    el2.right < el1.left
    ? null
    : {
        bottom: Math.min(el1.bottom, el2.bottom),
        left: Math.max(el1.left, el2.left),
        right: Math.min(el1.right, el2.right),
        top: Math.max(el1.top, el2.top),
      }
}

const u = 8

const isRTL = false

const BaseContextualLayerReact = forwardRef<
  HTMLDivElement,
  BaseContextualLayerReactProps
>(
  (
    {
      align = 'start',
      disableAutoAlign = false,
      children,
      containFocus = false,
      customContainer = BaseContextualLayerDefaultContainerReact,
      disableAutoFlip = false,
      hidden = false,
      imperativeRef,
      onEscapeFocusRegion,
      onIndeterminatePosition,
      presencePayload,
      position = 'below',
      stopClickPropagation = false,
      className,
      ...rest
    },
    ref,
  ) => {
    const [value, dispatch] = useReducer(reducer, position, createInitialState)

    const {
      adjustment,
      availableHeight,
      contextSize,
      isPositionIndeterminate,
      position: positionReducer,
    } = value

    const baseContextualLayerAnchorRootContextValue = useContext(
      BaseContextualLayerAnchorRootContext,
    )
    const baseScrollableAreaContextValue = useContext(BaseScrollableAreaContext)
    const baseViewportMarginsContextValue = useContext(
      BaseViewportMarginsContext,
    )
    const layoutAnimationBoundaryContextValue = useContext(
      LayoutAnimationBoundaryContext,
    )

    const G = useState(false)

    const hiddenSubtreeContextValue = useContext(HiddenSubtreeContext)
    const hiddenSCV = hiddenSubtreeContextValue.hidden

    const P = hiddenSCV || disableAutoFlip
    const Q = useRef<any>(null)
    const R = useRef<any>(null)
    const getContextValue = useCallback(
      function () {
        return rest.context_DEPRECATED == null && rest.contextRef != null
          ? rest.contextRef.current
          : rest.context_DEPRECATED
      },
      [rest.contextRef, rest.context_DEPRECATED],
    )

    const getAdjustedViewportMargins = useCallback(
      function () {
        var element = document.documentElement
        if (element == null) {
          return
        }

        return {
          bottom:
            element.clientHeight - baseViewportMarginsContextValue!.bottom - u,
          left: baseViewportMarginsContextValue!.left + u,
          right:
            element.clientWidth - baseViewportMarginsContextValue!.right - u,
          top: baseViewportMarginsContextValue!.top + u,
        }
      },
      [
        baseViewportMarginsContextValue!.bottom,
        baseViewportMarginsContextValue!.left,
        baseViewportMarginsContextValue!.right,
        baseViewportMarginsContextValue!.top,
      ],
    )

    const U = useCallback(
      function () {
        var curr = Q.current,
          b = getContextValue(),
          c = getAdjustedViewportMargins()
        if (curr == null || b == null || c == null) return
        let rectV1 = getBoundingClientRectValues(b)
        let rectV2 = getBoundingClientRectValues(curr)
        var bottomTop = rectV2.bottom - rectV2.top
        var rightLeft = rectV2.right - rectV2.left
        var e = isRTL ? 'start' : 'end',
          f = isRTL ? 'end' : 'start',
          positionCb = positionReducer,
          availableHeight = null
        disableAutoFlip ||
          (positionReducer === 'above' || positionReducer === 'below'
            ? positionReducer === 'above' &&
              rectV1.top - bottomTop < c.top &&
              rectV1.bottom + bottomTop < c.bottom
              ? (positionCb = 'below')
              : positionReducer === 'above' &&
                getScrollTopPosition(baseScrollableAreaContextValue) +
                  rectV1.top <
                  bottomTop
              ? (positionCb = 'below')
              : positionReducer === 'below' &&
                rectV1.bottom + bottomTop > c.bottom &&
                rectV1.top - bottomTop > c.top &&
                (positionCb = 'above')
            : (positionReducer === 'start' || positionReducer === 'end') &&
              (positionReducer === f &&
              rectV1.left - rightLeft < c.left &&
              rectV1.right + rightLeft < c.right
                ? (positionCb = e)
                : positionReducer === e &&
                  rectV1.right + rightLeft > c.right &&
                  rectV1.left - rightLeft > c.left &&
                  (positionCb = f)))
        ;(positionCb === 'above' || positionCb === 'below') &&
          (availableHeight =
            positionCb === 'above'
              ? rectV1.top - c.top
              : c.bottom - rectV1.bottom)
        R.current = {
          height: bottomTop,
          width: rightLeft,
        }
        dispatch({
          availableHeight: availableHeight,
          position: positionCb,
          type: 'determine_direction',
        })
      },
      [
        getContextValue,
        getAdjustedViewportMargins,
        disableAutoFlip,
        positionReducer,
      ],
    )

    const V = useCallback(
      function () {
        var documentElement = document.documentElement,
          currBCLAR = baseContextualLayerAnchorRootContextValue.current,
          screenRect = getAdjustedViewportMargins(),
          contextValue = getContextValue()
        if (
          documentElement == null ||
          currBCLAR == null ||
          screenRect == null ||
          contextValue == null
        ) {
          return
        }
        var el = getOffsetParentOrRootElement(currBCLAR)
        if (el == null) {
          return
        }
        let isFixOrSticky = isElementFixedOrSticky(currBCLAR)
        isFixOrSticky =
          !isFixOrSticky &&
          contextValue.nodeType === 1 &&
          isElementFixedOrSticky(contextValue)

        const contextRect = baseScrollableAreaContextValue!
          .map(function (el: any) {
            return el.getDOMNode()
          })
          .filter(Boolean)
          .filter(function (n: any) {
            return el.contains(n)
          })
          .reduce(function (e, b) {
            return e != null
              ? getIntersectionRect(e, getBoundingClientRectValues(b))
              : null
          }, getBoundingClientRectValues(contextValue))
        if (
          contextRect == null ||
          (contextRect.left === 0 && contextRect.right === 0)
        ) {
          dispatch({
            type: 'position_indeterminate',
          })
          onIndeterminatePosition && onIndeterminatePosition()
          return
        }
        const offsetRect = isFixOrSticky
          ? {
              bottom: documentElement.clientHeight,
              left: 0,
              right: documentElement.clientWidth,
              top: 0,
            }
          : getBoundingClientRectValues(el)
        const contextualLayerPosition = calculateBaseContextualLayerPosition({
          align,
          contextRect: contextRect,
          contextualLayerSize: disableAutoAlign ? null : R.current,
          fixed: isFixOrSticky,
          offsetRect: offsetRect,
          position: positionReducer,
          screenRect: screenRect,
        })
        const adjustment = contextualLayerPosition.adjustment
        const style = contextualLayerPosition.style
        const currQ = Q.current
        if (currQ != null) {
          var i = Object.keys(style)
          for (var j = 0; j < i.length; j++) {
            var k = i[j],
              // @ts-ignore
              l = style[k]
            l != null
              ? currQ.style.setProperty(k, l)
              : currQ.style.removeProperty(k)
          }
        }
        dispatch({
          adjustment: adjustment,
          contextSize: {
            height: contextRect.bottom - contextRect.top,
            width: contextRect.right - contextRect.left,
          },
          type: 'reposition',
        })
      },
      [
        baseContextualLayerAnchorRootContextValue,
        getAdjustedViewportMargins,
        getContextValue,
        baseScrollableAreaContextValue,
        disableAutoAlign,
        align,
        positionReducer,
        onIndeterminatePosition,
      ],
    )

    const W = useCallback(
      function (a: any) {
        a === LayoutAnimationEventType.Start && dispatch(!0),
          a === LayoutAnimationEventType.Stop && (dispatch(!1), V())
      },
      [V, dispatch],
    )

    return <div />
  },
)

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
    var i = b.useCallback,
      j = b.useContext,
      k = b.useEffect,
      l = b.useImperativeHandle,
      m = b.useLayoutEffect,
      n = b.useMemo,
      o = b.useReducer,
      p = b.useRef,
      q = b.useState
    function getBoundingClientRectValues(a) {
      a = a.getBoundingClientRect()
      return {
        bottom: a.bottom,
        left: a.left,
        right: a.right,
        top: a.top,
      }
    }
    function getScrollTopPosition(a) {
      return (a =
        (a = a[a.length - 1]) == null
          ? void 0
          : (a = a.getDOMNode()) == null
          ? void 0
          : a.scrollTop) != null
        ? a
        : window.pageYOffset
    }
    function getOffsetParentOrRootElement(a) {
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
    function init(a) {
      return {
        adjustment: null,
        availableHeight: null,
        contextSize: null,
        isPositionIndeterminate: !1,
        position: a,
      }
    }
    function reducer(a, b) {
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
    function BaseContextualLayerReact(props, b) {
      var align = props.align,
        f = align === void 0 ? 'start' : align
      align = props.disableAutoAlign
      var g = align === void 0 ? !1 : align
      align = props.children
      var x = props.containFocus
      x = x === void 0 ? !1 : x
      var y = props.customContainer
      y = y === void 0 ? c('BaseContextualLayerDefaultContainer.react') : y
      var z = props.disableAutoFlip,
        A = z === void 0 ? !1 : z
      z = props.hidden
      z = z === void 0 ? !1 : z
      var B = props.imperativeRef,
        da = props.onEscapeFocusRegion,
        C = props.onIndeterminatePosition,
        ea = props.presencePayload,
        D = props.position,
        E = D === void 0 ? 'below' : D
      D = props.stopClickPropagation
      D = D === void 0 ? !1 : D
      var fa = props.xstyle,
        F = babelHelpers.objectWithoutPropertiesLoose(props, [
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
      props = o(reducer, E, init)
      var G = props[0],
        ga = G.adjustment,
        ha = G.availableHeight,
        ia = G.contextSize,
        H = G.isPositionIndeterminate,
        I = G.position,
        J = props[1],
        K = j(c('BaseContextualLayerAnchorRootContext')),
        L = j(c('BaseScrollableAreaContext')),
        M = j(c('BaseViewportMarginsContext')),
        N = j(c('LayoutAnimationBoundaryContext'))
      G = q(!1)
      props = G[0]
      var O = G[1]
      G = j(c('HiddenSubtreeContext'))
      G = G.hidden
      var P = G || z,
        Q = p(null),
        R = p(null),
        S = i(
          function () {
            return F.context_DEPRECATED == null && F.contextRef != null
              ? F.contextRef.current
              : F.context_DEPRECATED
          },
          [F.contextRef, F.context_DEPRECATED],
        ),
        T = i(
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
        U = i(
          function () {
            var a = Q.current,
              b = S(),
              c = T()
            if (a == null || b == null || c == null) return
            b = getBoundingClientRectValues(b)
            a = getBoundingClientRectValues(a)
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
                  : I === 'above' && getScrollTopPosition(L) + b.top < d
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
        V = i(
          function () {
            var a = document.documentElement,
              b = K.current,
              d = T(),
              e = S()
            if (a == null || b == null || d == null || e == null) return
            var h = getOffsetParentOrRootElement(b)
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
                return a != null ? v(a, getBoundingClientRectValues(b)) : null
              }, getBoundingClientRectValues(e))
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
              : getBoundingClientRectValues(h)
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
        //
        W = i(
          function (a) {
            a === d('LayoutAnimationEvents').LayoutAnimationEventType.Start &&
              O(!0),
              a === d('LayoutAnimationEvents').LayoutAnimationEventType.Stop &&
                (O(!1), V())
          },
          [V, O],
        )
      m(
        function () {
          N != null &&
            N.getIsAnimating() &&
            W(d('LayoutAnimationEvents').LayoutAnimationEventType.Start)
        },
        [N, W],
      )
      c('useLayoutAnimationEvents')(W)
      l(
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
        Y = p(E)
      m(function () {
        E !== Y.current &&
          (J({
            position: E,
            type: 'position_changed',
          }),
          P || (U(), V()),
          (Y.current = E))
      })
      var Z = i(
        function (a) {
          ;(Q.current = a), a != null && !P && (U(), V())
        },
        [P, V, U],
      )
      k(
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
      k(
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
      k(
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
      G = n(
        function () {
          return c('mergeRefs')(Z, X, b)
        },
        [Z, X, b],
      )
      B = n(
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
          hidden: z || H || props,
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
                                      children: align,
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

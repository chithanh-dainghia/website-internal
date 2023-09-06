// __d(
//   'CometPressable.react',
//   [
//     'BaseButton.react',
//     'BaseFocusRing.react',
//     'BaseLink.react',
//     'CometContainerPressableContext',
//     'CometDangerouslySuppressInteractiveElementsContext',
//     'CometPressableOverlay.react',
//     'gkx',
//     'react',
//     'stylex',
//     'useMergeRefs',
//   ],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = d('react')
//     var useCallback = b.useCallback,
//       useContext = b.useContext,
//       useEffect = b.useEffect,
//       useRef = b.useRef,
//       useState = b.useState,
//       n = c('gkx')('1721477') || c('gkx')('1459'),
//       o = {
//         defaultCursor: {
//           cursor: 'xt0e3qv',
//           $$css: !0,
//         },
//         expanding: {
//           display: 'x78zum5',
//           $$css: !0,
//         },
//         hideOutline: {
//           outline: 'x1a2a7pz',
//           $$css: !0,
//         },
//         linkBase: {
//           display: 'x1rg5ohu',
//           $$css: !0,
//         },
//         root: {
//           borderTopStartRadius: 'x1o1ewxj',
//           borderTopEndRadius: 'x3x9cwd',
//           borderBottomEndRadius: 'x1e5q0jg',
//           borderBottomStartRadius: 'x13rtm0m',
//           display: 'x3nfvp2',
//           flexDirection: 'x1q0g3np',
//           userSelect: 'x87ps6o',
//           ':hover_textDecoration': 'x1lku1pv',
//           $$css: !0,
//         },
//         root_DEPRECATED: {
//           borderTopStartRadius: 'x1o1ewxj',
//           borderTopEndRadius: 'x3x9cwd',
//           borderBottomEndRadius: 'x1e5q0jg',
//           borderBottomStartRadius: 'x13rtm0m',
//           position: 'x1n2onr6',
//           userSelect: 'x87ps6o',
//           ':hover_textDecoration': 'x1lku1pv',
//           $$css: !0,
//         },
//         zIndex: {
//           zIndex: 'x1vjfegm',
//           $$css: !0,
//         },
//       }
//     function a(a, b) {
//       var allowClickEventPropagation = a.allowClickEventPropagation,
//         children = a.children,
//         className_DEPRECATED = a.className_DEPRECATED,
//         cursorDisabled = a.cursorDisabled
//       cursorDisabled = cursorDisabled === void 0 ? !1 : cursorDisabled
//       var xstyle = a.xstyle,
//         disabled = a.disabled
//       disabled = disabled === void 0 ? !1 : disabled
//       var display = a.display,
//         expanding = a.expanding
//       expanding = expanding === void 0 ? display === 'block' : expanding
//       var hideFocusOverlay = a.hideFocusOverlay
//       hideFocusOverlay = hideFocusOverlay === void 0 ? !1 : hideFocusOverlay
//       var hideHoverOverlay = a.hideHoverOverlay
//       hideHoverOverlay = hideHoverOverlay === void 0 ? !1 : hideHoverOverlay
//       var v = a.isContainerTarget,
//         w = v === void 0 ? !1 : v,
//         linkProps = a.linkProps,
//         onFocusChange = a.onFocusChange
//       v = a.onFocusIn
//       var z = a.onFocusOut,
//         A = a.onFocusVisibleChange,
//         B = a.onHoverChange,
//         C = a.onHoverIn,
//         D = a.onHoverOut,
//         E = a.onPress,
//         F = a.onPressChange,
//         G = a.onPressIn,
//         H = a.onPressOut,
//         I = a.preventContextMenu,
//         J = a.overlayDisabled
//       J = J === void 0 ? !1 : J
//       var K = a.overlayOffset,
//         L = a.overlayFocusRingPosition,
//         M = a.overlayFocusVisibleStyle,
//         N = a.overlayHoveredStyle,
//         O = a.overlayPressedStyle,
//         P = a.overlayRadius,
//         Q = a.suppressFocusRing
//       Q = Q === void 0 ? !1 : Q
//       var R = a.testOnly_pressed,
//         S = R === void 0 ? !1 : R
//       R = a.testid
//       R = babelHelpers.objectWithoutPropertiesLoose(a, [
//         'allowClickEventPropagation',
//         'children',
//         'className_DEPRECATED',
//         'cursorDisabled',
//         'xstyle',
//         'disabled',
//         'display',
//         'expanding',
//         'hideFocusOverlay',
//         'hideHoverOverlay',
//         'isContainerTarget',
//         'linkProps',
//         'onFocusChange',
//         'onFocusIn',
//         'onFocusOut',
//         'onFocusVisibleChange',
//         'onHoverChange',
//         'onHoverIn',
//         'onHoverOut',
//         'onPress',
//         'onPressChange',
//         'onPressIn',
//         'onPressOut',
//         'preventContextMenu',
//         'overlayDisabled',
//         'overlayOffset',
//         'overlayFocusRingPosition',
//         'overlayFocusVisibleStyle',
//         'overlayHoveredStyle',
//         'overlayPressedStyle',
//         'overlayRadius',
//         'suppressFocusRing',
//         'testOnly_pressed',
//         'testid',
//       ])
//       a = useState(S)
//       var T = a[0],
//         U = a[1]
//       a = useState(!1)
//       var V = a[0],
//         aa = a[1]
//       a = useState(!1)
//       var W = a[0],
//         ba = a[1]
//       a = useState(!1)
//       var X = a[0],
//         ca = a[1]
//       a = useCallback(
//         function (a) {
//           U(a || S), F && F(a)
//         },
//         [F, S],
//       )
//       var da = useCallback(
//           function (a) {
//             aa(a), onFocusChange && onFocusChange(a)
//           },
//           [onFocusChange],
//         ),
//         ea = useCallback(
//           function (a) {
//             ba(a), A && A(a)
//           },
//           [A],
//         ),
//         fa = useCallback(
//           function (a) {
//             ca(a), B && B(a)
//           },
//           [B],
//         )
//       M = J
//         ? null
//         : h.jsx(c('CometPressableOverlay.react'), {
//             focusRingPosition: L,
//             focusVisible: !hideFocusOverlay && W,
//             focusVisibleStyle: M,
//             hovered: !hideHoverOverlay && X,
//             hoveredStyle: N,
//             offset: K,
//             pressed: T,
//             pressedStyle: O,
//             radius: P,
//             showFocusRing: !0,
//           })
//       hideHoverOverlay =
//         typeof children === 'function'
//           ? children({
//               disabled: disabled,
//               focused: V,
//               focusVisible: W,
//               hovered: X,
//               overlay: M,
//               pressed: T,
//             })
//           : h.jsxs(h.Fragment, {
//               children: [children, M],
//             })
//       N =
//         typeof xstyle === 'function'
//           ? xstyle({
//               disabled: disabled,
//               focused: V,
//               focusVisible: W,
//               hovered: X,
//               pressed: T,
//             })
//           : xstyle
//       var Y = useContext(c('CometContainerPressableContext'))
//       K = useContext(c('CometDangerouslySuppressInteractiveElementsContext'))
//       O = W && (hideFocusOverlay || J) && !Q
//       P = [
//         display === 'inline' ? o.root_DEPRECATED : o.root,
//         cursorDisabled === !0 && o.defaultCursor,
//         expanding && o.expanding,
//         linkProps != null && o.linkBase,
//         !W && o.hideOutline,
//         N,
//         O &&
//           (L === 'inset'
//             ? c('BaseFocusRing.react').focusRingInsetXStyle
//             : c('BaseFocusRing.react').focusRingXStyle),
//         Y != null && o.zIndex,
//       ]
//       children = {
//         onBlur: z,
//         onClick: E,
//         onFocus: v,
//         onFocusChange: da,
//         onFocusVisibleChange: ea,
//         onHoverChange: fa,
//         onHoverEnd: D,
//         onHoverStart: C,
//         onPressChange: a,
//         onPressEnd: H,
//         onPressStart: G,
//       }
//       var ga = useRef(null),
//         Z = useRef(null),
//         $ = R.onContextMenu
//       useEffect(
//         function () {
//           w &&
//             Y &&
//             Y.onMount(
//               {
//                 onContextMenu: function (a) {
//                   I === !0 && a.preventDefault(), $ != null && $(a)
//                 },
//                 onPress: function (a) {
//                   a = Z.current
//                   a && a.click()
//                 },
//                 target: linkProps == null ? void 0 : linkProps.target,
//                 url: linkProps == null ? void 0 : linkProps.url,
//               },
//               ga,
//             )
//         },
//         [
//           Y,
//           w,
//           R,
//           $,
//           I,
//           linkProps == null ? void 0 : linkProps.url,
//           linkProps == null ? void 0 : linkProps.target,
//         ],
//       )
//       M = c('useMergeRefs')(b, Z)
//       if (K) {
//         V = display === 'inline' ? 'span' : 'div'
//         return h.jsx(
//           V,
//           babelHelpers['extends'](
//             {
//               className_DEPRECATED: className_DEPRECATED,
//               display: display === 'inline' ? display : 'block',
//               preventContextMenu: I,
//             },
//             R,
//             {
//               className: c('stylex')(P),
//               'data-testid': void 0,
//               ref: M,
//               children: hideHoverOverlay,
//             },
//           ),
//         )
//       }
//       if (linkProps != null) {
//         X = linkProps.url
//         T = babelHelpers.objectWithoutPropertiesLoose(linkProps, ['url'])
//         xstyle = babelHelpers['extends']({}, T, {
//           href: X,
//         })
//         return h.jsx(
//           c('BaseLink.react'),
//           babelHelpers['extends']({}, children, R, xstyle, {
//             className_DEPRECATED: className_DEPRECATED,
//             disabled: disabled,
//             display: display === 'inline' ? display : 'block',
//             preventContextMenu: I,
//             ref: M,
//             suppressFocusRing: !O || n,
//             testid: void 0,
//             xstyle: P,
//             children: hideHoverOverlay,
//           }),
//         )
//       }
//       return h.jsx(
//         c('BaseButton.react'),
//         babelHelpers['extends']({}, children, R, {
//           allowClickEventPropagation: allowClickEventPropagation,
//           className_DEPRECATED: className_DEPRECATED,
//           disabled: disabled,
//           display: display === 'inline' ? display : 'block',
//           preventContextMenu: I,
//           ref: M,
//           suppressFocusRing: !O || n,
//           testid: void 0,
//           xstyle: P,
//           children: hideHoverOverlay,
//         }),
//       )
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     e = h.forwardRef(a)
//     g['default'] = e
//   },
//   98,
// )

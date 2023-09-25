import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  // @ts-ignore
  jsx,
} from 'react'
import CometPressableOverlay from '../comet-pressable-overlay/CometPressableOverlay.react'
import CometContainerPressableContext from '@ui/context/CometContainerPressableContext'
import CometDangerouslySuppressInteractiveElementsContext from '@ui/context/CometDangerouslySuppressInteractiveElementsContext'
import { useMergeRefs } from '@ui/hooks'

type CometPressableProps = {
  allowClickEventPropagation?: boolean
  children?: (...param: any) => any | ReactNode
  className_DEPRECATED?: string
  cursorDisabled?: boolean
  className?: string
  display?: 'block' | 'inline'
  expanding?: string
  hideFocusOverlay?: boolean
  hideHoverOverlay?: boolean
  isContainerTarget?: boolean
  disabled?: boolean
  linkProps?: any
  //
  onFocusChange?: any
  onFocusIn?: any
  onFocusOut?: any
  onFocusVisibleChange?: any
  onHoverChange?: any
  onHoverIn?: any
  onHoverOut?: any
  onPress?: any
  onPressChange?: any
  onPressIn?: any
  onPressOut?: any
  preventContextMenu?: any
  overlayDisabled?: boolean
  overlayOffset?: any
  overlayFocusRingPosition?: 'inset' | 'default'
  overlayFocusVisibleStyle?: any
  overlayHoveredStyle?: any
  overlayPressedStyle?: any
  overlayRadius?: any
  suppressFocusRing?: boolean
  testOnly_pressed?: boolean
  testid?: any
  onContextMenu: any
}

const CometPressable = forwardRef<HTMLElement, CometPressableProps>(
  (
    {
      allowClickEventPropagation,
      children,
      className,
      className_DEPRECATED,
      cursorDisabled,
      display = 'block',
      expanding = 'block',
      hideFocusOverlay = false,
      hideHoverOverlay = false,
      disabled = false,
      isContainerTarget = false,
      linkProps,
      onFocusChange,
      onFocusIn,
      onFocusOut,
      onFocusVisibleChange,
      onHoverChange,
      onHoverIn,
      onHoverOut,
      onPress,
      onPressChange,
      onPressIn,
      onPressOut,
      overlayDisabled = false,
      overlayFocusRingPosition,
      overlayFocusVisibleStyle,
      overlayHoveredStyle,
      overlayOffset,
      overlayPressedStyle,
      overlayRadius,
      preventContextMenu,
      suppressFocusRing = false,
      testOnly_pressed = false,
      testid,
      onContextMenu,
    },
    externalRef,
  ) => {
    const [pressedState, setPressed] = useState(testOnly_pressed)
    const [focusedState, setFocused] = useState(false)
    const [focusVisibleState, setFocusVisible] = useState(false)
    const [hoveredState, setHovered] = useState(false)

    const onPressChangeCb = useCallback(
      (e: any) => {
        setPressed(e || testOnly_pressed)
        onPressChange && onPressChange(e)
      },
      [onPressChange, testOnly_pressed],
    )

    const onFocusChangeCb = useCallback(
      (e: any) => {
        setFocused(e)
        onFocusChange && onFocusChange(e)
      },
      [onFocusChange],
    )

    const onFocusVisibleChangeCb = useCallback(
      (e: any) => {
        setFocusVisible(e)
        onFocusVisibleChange && onFocusVisibleChange(e)
      },
      [onFocusVisibleChange],
    )

    const onHoverChangeCb = useCallback(
      (e: any) => {
        setHovered(e)
        onHoverChange && onHoverChange(e)
      },
      [onHoverChange],
    )

    const overlay = overlayDisabled ? undefined : (
      <CometPressableOverlay
        focusRingPosition={overlayFocusRingPosition}
        focusVisible={!hideFocusOverlay && focusVisibleState}
        focusVisibleStyle={overlayFocusVisibleStyle}
        hovered={!hideHoverOverlay && hoveredState}
        hoveredStyle={overlayHoveredStyle}
        offset={overlayOffset}
        pressed={pressedState}
        pressedStyle={overlayPressedStyle}
        radius={overlayRadius}
        showFocusRing
      />
    )

    typeof children === 'function' ? (
      children({
        disabled,
        focused: focusedState,
        focusVisible: focusVisibleState,
        hovered: hoveredState,
        overlay,
        pressed: pressedState,
      })
    ) : (
      <>
        {children}
        {overlay}
      </>
    )

    // overlayHoveredStyle =
    //     typeof xstyle === 'function'
    //       ? xstyle({
    //           disabled: disabled,
    //           focused: focusedState,
    //           focusVisible: focusVisibleState,
    //           hovered: hoveredState,
    //           pressed: pressedState,
    //         })
    //       : xstyle

    const cometContainerPressableContextValue = useContext(
      CometContainerPressableContext,
    )

    const cometDangerouslySuppressInteractiveElementsContextValue = useContext(
      CometDangerouslySuppressInteractiveElementsContext,
    )

    const _suppressFocusRing =
      focusVisibleState &&
      (hideFocusOverlay || overlayDisabled) &&
      !suppressFocusRing

    overlayRadius = [
      display === 'inline' ? classes.root_DEPRECATED : classes.root,
      cursorDisabled === true && stylex.defaultCursor,
      expanding && classes.expanding,
      linkProps !== undefined && classes.linkBase,
      !focusVisibleState && classes.hideOutline,
      overlayHoveredStyle,
      //
      className,
      _suppressFocusRing &&
        (overlayFocusRingPosition === 'inset'
          ? classes.focusRingInsetXStyle
          : classes.focusRingXStyle),
      cometContainerPressableContextValue !== undefined && classes.zIndex,
    ]

    const _props = {
      onBlur: onFocusOut,
      onClick: onPress,
      onFocus: onFocusIn,
      onFocusChange: onFocusChangeCb,
      onFocusVisibleChange: onFocusVisibleChangeCb,
      onHoverChange: onHoverChangeCb,
      onHoverEnd: onHoverOut,
      onHoverStart: onHoverIn,
      onPressChange: onPressChangeCb,
      onPressEnd: onPressOut,
      onPressStart: onPressIn,
    }

    const ga = useRef(null)
    const internalRef = useRef<any>(null)

    // useEffect(() => {
    //   if (isContainerTarget && cometContainerPressableContextValue) {
    //     // @ts-ignore
    //     cometContainerPressableContextValue.onMount(
    //       {
    //         onContextMenu: (e: any) => {
    //           preventContextMenu === true && e.preventDefault()
    //           onContextMenu !== undefined && onContextMenu(e)
    //         },
    //         onPress: () => {
    //           internalRef.current && internalRef.current.click()
    //         },
    //         target: !linkProps ? undefined : linkProps.target,
    //         url: !linkProps ? undefined : linkProps.url,
    //       },
    //       ga,
    //     )
    //   }
    // }, [
    //   cometContainerPressableContextValue,
    //   isContainerTarget,
    //   testOnly_pressed,
    //   onContextMenu,
    //   preventContextMenu,
    //   !linkProps ? undefined : linkProps.url,
    //   !linkProps ? undefined : linkProps.target,
    // ])

    const ref = useMergeRefs(externalRef, internalRef)

    // if (cometDangerouslySuppressInteractiveElementsContextValue) {
    //   const comp = display === 'inline' ? 'span' : 'div'
    //   return jsx(
    //     comp,
    //     babelHelpers['extends'](
    //       {
    //         className_DEPRECATED: className_DEPRECATED,
    //         display: display === 'inline' ? display : 'block',
    //         preventContextMenu: preventContextMenu,
    //       },
    //       testOnly_pressed,
    //       {
    //         className: c('stylex')(overlayRadius),
    //         'data-testid': undefined,
    //         ref: overlayFocusVisibleStyle,
    //         children: hideHoverOverlay,
    //       },
    //     ),
    //   )
    // }

    if (linkProps) {
      const { url, ...rest } = linkProps

      const baseLinkProps = Object.assign({}, rest, {
        href: url,
      })
    }

    return <div />
  },
)

__d(
  'CometPressable.react',
  [
    'BaseButton.react',
    'BaseFocusRing.react',
    'BaseLink.react',
    'CometContainerPressableContext',
    'CometDangerouslySuppressInteractiveElementsContext',
    'CometPressableOverlay.react',
    'gkx',
    'react',
    'stylex',
    'useMergeRefs',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var react = d('react')
    b = d('react')
    var useCallback = b.useCallback,
      useContext = b.useContext,
      useEffect = b.useEffect,
      useRef = b.useRef,
      useState = b.useState,
      n = c('gkx')('1721477') || c('gkx')('1459'),
      stylex = {
        defaultCursor: {
          cursor: 'xt0e3qv',
          $$css: true,
        },
        expanding: {
          display: 'x78zum5',
          $$css: true,
        },
        hideOutline: {
          outline: 'x1a2a7pz',
          $$css: true,
        },
        linkBase: {
          display: 'x1rg5ohu',
          $$css: true,
        },
        root: {
          borderTopStartRadius: 'x1o1ewxj',
          borderTopEndRadius: 'x3x9cwd',
          borderBottomEndRadius: 'x1e5q0jg',
          borderBottomStartRadius: 'x13rtm0m',
          display: 'x3nfvp2',
          flexDirection: 'x1q0g3np',
          userSelect: 'x87ps6o',
          ':hover_textDecoration': 'x1lku1pv',
          $$css: true,
        },
        root_DEPRECATED: {
          borderTopStartRadius: 'x1o1ewxj',
          borderTopEndRadius: 'x3x9cwd',
          borderBottomEndRadius: 'x1e5q0jg',
          borderBottomStartRadius: 'x13rtm0m',
          position: 'x1n2onr6',
          userSelect: 'x87ps6o',
          ':hover_textDecoration': 'x1lku1pv',
          $$css: true,
        },
        zIndex: {
          zIndex: 'x1vjfegm',
          $$css: true,
        },
      }
    function a(onPressChangeCb, externalRef) {
      var allowClickEventPropagation =
          onPressChangeCb.allowClickEventPropagation,
        children = onPressChangeCb.children,
        className_DEPRECATED = onPressChangeCb.className_DEPRECATED,
        cursorDisabled = onPressChangeCb.cursorDisabled
      cursorDisabled = cursorDisabled === undefined ? false : cursorDisabled
      var xstyle = onPressChangeCb.xstyle,
        disabled = onPressChangeCb.disabled
      disabled = disabled === undefined ? false : disabled
      var display = onPressChangeCb.display,
        expanding = onPressChangeCb.expanding
      expanding = expanding === undefined ? display === 'block' : expanding
      var hideFocusOverlay = onPressChangeCb.hideFocusOverlay
      hideFocusOverlay =
        hideFocusOverlay === undefined ? false : hideFocusOverlay
      var hideHoverOverlay = onPressChangeCb.hideHoverOverlay
      hideHoverOverlay =
        hideHoverOverlay === undefined ? false : hideHoverOverlay
      var isContainerTarget = onPressChangeCb.isContainerTarget,
        _isContainerTarget =
          isContainerTarget === undefined ? false : isContainerTarget,
        linkProps = onPressChangeCb.linkProps,
        onFocusChange = onPressChangeCb.onFocusChange
      isContainerTarget = onPressChangeCb.onFocusIn
      var onFocusOut = onPressChangeCb.onFocusOut,
        onFocusVisibleChange = onPressChangeCb.onFocusVisibleChange,
        onHoverChange = onPressChangeCb.onHoverChange,
        onHoverIn = onPressChangeCb.onHoverIn,
        onHoverOut = onPressChangeCb.onHoverOut,
        onPress = onPressChangeCb.onPress,
        onPressChange = onPressChangeCb.onPressChange,
        onPressIn = onPressChangeCb.onPressIn,
        onPressOut = onPressChangeCb.onPressOut,
        preventContextMenu = onPressChangeCb.preventContextMenu,
        overlayDisabled = onPressChangeCb.overlayDisabled
      overlayDisabled = overlayDisabled === undefined ? false : overlayDisabled
      var overlayOffset = onPressChangeCb.overlayOffset,
        overlayFocusRingPosition = onPressChangeCb.overlayFocusRingPosition,
        overlayFocusVisibleStyle = onPressChangeCb.overlayFocusVisibleStyle,
        overlayHoveredStyle = onPressChangeCb.overlayHoveredStyle,
        overlayPressedStyle = onPressChangeCb.overlayPressedStyle,
        overlayRadius = onPressChangeCb.overlayRadius,
        suppressFocusRing = onPressChangeCb.suppressFocusRing
      suppressFocusRing =
        suppressFocusRing === undefined ? false : suppressFocusRing
      var testOnly_pressed = onPressChangeCb.testOnly_pressed,
        _testOnly_pressed =
          testOnly_pressed === undefined ? false : testOnly_pressed
      testOnly_pressed = onPressChangeCb.testid
      testOnly_pressed = babelHelpers.objectWithoutPropertiesLoose(
        onPressChangeCb,
        [
          'allowClickEventPropagation',
          'children',
          'className_DEPRECATED',
          'cursorDisabled',
          'xstyle',
          'disabled',
          'display',
          'expanding',
          'hideFocusOverlay',
          'hideHoverOverlay',
          'isContainerTarget',
          'linkProps',
          'onFocusChange',
          'onFocusIn',
          'onFocusOut',
          'onFocusVisibleChange',
          'onHoverChange',
          'onHoverIn',
          'onHoverOut',
          'onPress',
          'onPressChange',
          'onPressIn',
          'onPressOut',
          'preventContextMenu',
          'overlayDisabled',
          'overlayOffset',
          'overlayFocusRingPosition',
          'overlayFocusVisibleStyle',
          'overlayHoveredStyle',
          'overlayPressedStyle',
          'overlayRadius',
          'suppressFocusRing',
          'testOnly_pressed',
          'testid',
        ],
      )
      onPressChangeCb = useState(_testOnly_pressed)
      var pressedState = onPressChangeCb[0],
        setPressed = onPressChangeCb[1]
      onPressChangeCb = useState(false)
      var focusedState = onPressChangeCb[0],
        setFocused = onPressChangeCb[1]
      onPressChangeCb = useState(false)
      var focusVisibleState = onPressChangeCb[0],
        setFocusVisible = onPressChangeCb[1]
      onPressChangeCb = useState(false)
      var hoveredState = onPressChangeCb[0],
        setHovered = onPressChangeCb[1]
      onPressChangeCb = useCallback(
        function (a) {
          setPressed(a || _testOnly_pressed), onPressChange && onPressChange(a)
        },
        [onPressChange, _testOnly_pressed],
      )
      var onFocusChangeCb = useCallback(
          function (a) {
            setFocused(a), onFocusChange && onFocusChange(a)
          },
          [onFocusChange],
        ),
        onFocusVisibleChangeCb = useCallback(
          function (a) {
            setFocusVisible(a), onFocusVisibleChange && onFocusVisibleChange(a)
          },
          [onFocusVisibleChange],
        ),
        onHoverChangeCb = useCallback(
          function (a) {
            setHovered(a), onHoverChange && onHoverChange(a)
          },
          [onHoverChange],
        )
      overlayFocusVisibleStyle = overlayDisabled
        ? null
        : react.jsx(c('CometPressableOverlay.react'), {
            focusRingPosition: overlayFocusRingPosition,
            focusVisible: !hideFocusOverlay && focusVisibleState,
            focusVisibleStyle: overlayFocusVisibleStyle,
            hovered: !hideHoverOverlay && hoveredState,
            hoveredStyle: overlayHoveredStyle,
            offset: overlayOffset,
            pressed: pressedState,
            pressedStyle: overlayPressedStyle,
            radius: overlayRadius,
            showFocusRing: true,
          })
      hideHoverOverlay =
        typeof children === 'function'
          ? children({
              disabled: disabled,
              focused: focusedState,
              focusVisible: focusVisibleState,
              hovered: hoveredState,
              overlay: overlayFocusVisibleStyle,
              pressed: pressedState,
            })
          : react.jsxs(react.Fragment, {
              children: [children, overlayFocusVisibleStyle],
            })
      overlayHoveredStyle =
        typeof xstyle === 'function'
          ? xstyle({
              disabled: disabled,
              focused: focusedState,
              focusVisible: focusVisibleState,
              hovered: hoveredState,
              pressed: pressedState,
            })
          : xstyle
      var Y = useContext(c('CometContainerPressableContext'))
      overlayOffset = useContext(
        c('CometDangerouslySuppressInteractiveElementsContext'),
      )
      overlayPressedStyle =
        focusVisibleState &&
        (hideFocusOverlay || overlayDisabled) &&
        !suppressFocusRing
      overlayRadius = [
        display === 'inline' ? stylex.root_DEPRECATED : stylex.root,
        cursorDisabled === true && stylex.defaultCursor,
        expanding && stylex.expanding,
        linkProps != null && stylex.linkBase,
        !focusVisibleState && stylex.hideOutline,
        overlayHoveredStyle,
        overlayPressedStyle &&
          (overlayFocusRingPosition === 'inset'
            ? c('BaseFocusRing.react').focusRingInsetXStyle
            : c('BaseFocusRing.react').focusRingXStyle),
        Y != null && stylex.zIndex,
      ]
      children = {
        onBlur: onFocusOut,
        onClick: onPress,
        onFocus: isContainerTarget,
        onFocusChange: onFocusChangeCb,
        onFocusVisibleChange: onFocusVisibleChangeCb,
        onHoverChange: onHoverChangeCb,
        onHoverEnd: onHoverOut,
        onHoverStart: onHoverIn,
        onPressChange: onPressChangeCb,
        onPressEnd: onPressOut,
        onPressStart: onPressIn,
      }
      var ga = useRef(null),
        internalRef = useRef(null),
        onContextMenu = testOnly_pressed.onContextMenu
      useEffect(
        function () {
          _isContainerTarget &&
            Y &&
            Y.onMount(
              {
                onContextMenu: function (a) {
                  preventContextMenu === true && a.preventDefault(),
                    onContextMenu != null && onContextMenu(a)
                },
                onPress: function (a) {
                  a = internalRef.current
                  a && a.click()
                },
                target: linkProps == null ? undefined : linkProps.target,
                url: linkProps == null ? undefined : linkProps.url,
              },
              ga,
            )
        },
        [
          Y,
          _isContainerTarget,
          testOnly_pressed,
          onContextMenu,
          preventContextMenu,
          linkProps == null ? undefined : linkProps.url,
          linkProps == null ? undefined : linkProps.target,
        ],
      )
      overlayFocusVisibleStyle = c('useMergeRefs')(externalRef, internalRef)
      if (overlayOffset) {
        focusedState = display === 'inline' ? 'span' : 'div'
        return react.jsx(
          focusedState,
          babelHelpers['extends'](
            {
              className_DEPRECATED: className_DEPRECATED,
              display: display === 'inline' ? display : 'block',
              preventContextMenu: preventContextMenu,
            },
            testOnly_pressed,
            {
              className: c('stylex')(overlayRadius),
              'data-testid': undefined,
              ref: overlayFocusVisibleStyle,
              children: hideHoverOverlay,
            },
          ),
        )
      }

      if (linkProps != null) {
        hoveredState = linkProps.url
        pressedState = babelHelpers.objectWithoutPropertiesLoose(linkProps, [
          'url',
        ])
        xstyle = babelHelpers['extends']({}, pressedState, {
          href: hoveredState,
        })
        return react.jsx(
          c('BaseLink.react'),
          babelHelpers['extends']({}, children, testOnly_pressed, xstyle, {
            className_DEPRECATED: className_DEPRECATED,
            disabled: disabled,
            display: display === 'inline' ? display : 'block',
            preventContextMenu: preventContextMenu,
            ref: overlayFocusVisibleStyle,
            suppressFocusRing: !overlayPressedStyle || n,
            testid: undefined,
            xstyle: overlayRadius,
            children: hideHoverOverlay,
          }),
        )
      }
      return react.jsx(
        c('BaseButton.react'),
        babelHelpers['extends']({}, children, testOnly_pressed, {
          allowClickEventPropagation: allowClickEventPropagation,
          className_DEPRECATED: className_DEPRECATED,
          disabled: disabled,
          display: display === 'inline' ? display : 'block',
          preventContextMenu: preventContextMenu,
          ref: overlayFocusVisibleStyle,
          suppressFocusRing: !overlayPressedStyle || n,
          testid: undefined,
          xstyle: overlayRadius,
          children: hideHoverOverlay,
        }),
      )
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    e = react.forwardRef(a)
    g['default'] = e
  },
  98,
)

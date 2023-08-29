import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'
import { useState } from 'react'
import BaseFocusRing from '../base-focus-ring/BaseFocusRing'
import CometVisualCompletionAttributes from '@ui/constant/CometVisualCompletionAttributes'

type CometPressableOverlayProps = {
  focusRingPosition?: 'default' | 'inset'
  focusVisible?: boolean
  focusVisibleStyle?: any
  hovered: boolean
  hoveredStyle?: any
  offset?: any
  pressed?: boolean
  pressedStyle?: any
  radius?: any
  showFocusRing?: boolean
  showGridSignifiers?: boolean
}

export default function CometPressableOverlay({
  focusVisible = false,
  hovered = false,
  pressed = false,
  focusRingPosition = 'default',
  focusVisibleStyle,
  hoveredStyle,
  offset,
  pressedStyle,
  radius,
  showFocusRing = false,
  showGridSignifiers = false,
}: CometPressableOverlayProps) {
  const classes = useStyles()

  const _hoveredStyle = classes.defaultHoveredStyle ?? hoveredStyle
  const _pressedStyle = classes.defaultPressedStyle ?? pressedStyle
  const _focusVisibleStyle = focusVisibleStyle ?? _hoveredStyle

  const [state, setState] = useState<string>()

  pressed
    ? state !== 'pressed' && setState('pressed')
    : focusVisible
    ? state !== 'focused' && setState('focused')
    : hovered && state !== 'hovered' && setState('hovered')

  var bottom, left, right, top
  offset != null &&
    (typeof offset === 'number'
      ? ((bottom = -offset),
        (left = -offset),
        (right = -offset),
        (top = -offset))
      : ((bottom = -offset.bottom),
        (left = -offset.left),
        (right = -offset.right),
        (top = -offset.top)))

  return (
    <div
      className={mergeClasses(
        classes.overlay,
        (pressed || focusVisible || hovered || showGridSignifiers) &&
          classes.overlayVisible,
        state === 'pressed' && _pressedStyle,
        state === 'focus' && _focusVisibleStyle,
        state === 'hovered' && _hoveredStyle,
        state === 'focused' && showFocusRing
          ? focusRingPosition === 'default'
            ? BaseFocusRing.focusRingXStyle
            : BaseFocusRing.focusRingInsetXStyle
          : undefined,
        radius === '50%' && classes.circle,
      )}
      {...CometVisualCompletionAttributes.IGNORE}
      style={
        state !== null
          ? {
              borderRadius: typeof radius === 'number' ? radius : undefined,
              bottom,
              left,
              right,
              top,
            }
          : undefined
      }
    >
      {/* showGridSignifiers ? CometCompositeItemFocusIndicator.react : null */}
      {showGridSignifiers ? <></> : <></>}
    </div>
  )
}

const useStyles = makeStyles({
  circle: {
    ...shorthands.borderRadius('50%'),
  },
  defaultHoveredStyle: {
    backgroundColor: 'var(--hover-overlay)',
  },
  defaultPressedStyle: {
    backgroundColor: 'var(--press-overlay)',
  },
  overlay: {
    ...shorthands.borderRadius('inherit'),

    bottom: '0',
    right: '0',
    opacity: '0',
    pointerEvents: 'none',
    position: 'absolute',
    left: '0',
    top: '0',
    transitionDuration: 'var(--fds-duration-extra-extra-short-out)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--fds-animation-fade-out)',
  },
  overlayVisible: {
    opacity: '1',
    transitionDuration: '0s',
  },
})

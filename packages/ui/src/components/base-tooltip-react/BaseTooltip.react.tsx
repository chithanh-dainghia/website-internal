import React, {
  Fragment,
  ReactNode,
  useCallback,
  useContext,
  useId,
  useRef,
} from 'react'
// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'

import useDelayedState from '@ui/hooks/useDelayedState'
import BaseTooltipTargetWrapperReact from '../base-tooltip-target-wrapper-react/BaseTooltipTargetWrapper.react'
import {
  Child,
  Context,
} from '../base-tooltip-group-react/BaseTooltipGroup.react'

type BaseTooltipReactProps = {
  children?: ReactNode
  delayTooltipMs?: number
  disabled?: boolean
  forceInlineDisplay?: any
  tooltipImpl: any
  onVisibilityChange?: any
  //
  position?: any
  align?: any
  tooltip?: any
}

const defaultHideDelayMs = 50
const defaultDelayTooltipMs = 300

function Common({
  tooltipImpl,
  align,
  delayTooltipMs = defaultDelayTooltipMs,
  position,
  children,
  forceInlineDisplay,
  onVisibilityChange,
  disabled = false,
  ...rest
}: BaseTooltipReactProps) {
  //

  const [delayState, setDelayState] = useDelayedState(false)

  const ref = useRef(null)
  const id = useId()

  const onShow = useCallback(() => {
    if (disabled) {
      return
    }

    // @ts-ignore
    setDelayState(true, delayTooltipMs, onVisibilityChange)
  }, [delayTooltipMs, disabled, onVisibilityChange, setDelayState])

  const onHide = useCallback(
    function () {
      // @ts-ignore
      setDelayState(false, 0, onVisibilityChange)
    },
    [onVisibilityChange, setDelayState],
  )

  return jsxs(Fragment, {
    children: [
      jsx(BaseTooltipTargetWrapperReact, {
        forceInlineDisplay,
        onHide,
        onShow,
        ref,
        tooltipIdentifier: delayState ? id : undefined,
        children,
      }),
      jsx(
        tooltipImpl,
        Object.assign({}, rest, {
          contentKey: null,
          contextRef: ref,
          id: delayState ? id : undefined,
          isVisible: delayState,
        }),
      ),
    ],
  })
}

function BaseTooltipReact({
  delayTooltipMs,
  tooltipImpl,
  ...rest
}: BaseTooltipReactProps) {
  var contextValue = useContext(Context)
  if (contextValue !== undefined) {
    const _delayTooltipMs =
      contextValue.delayTooltipMs === undefined
        ? defaultDelayTooltipMs
        : contextValue.delayTooltipMs
    // props.tooltipImpl

    return (
      <Child
        hideDelayMs={defaultHideDelayMs}
        showDelayMs={_delayTooltipMs}
        {...rest}
      />
    )
  }

  return (
    <Common
      delayTooltipMs={defaultHideDelayMs}
      tooltipImpl={tooltipImpl}
      {...rest}
    />
  )
}

export default BaseTooltipReact

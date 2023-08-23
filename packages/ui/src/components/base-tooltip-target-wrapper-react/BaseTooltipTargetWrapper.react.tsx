import React, {
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import FocusWithinHandlerReact from '../focus-within-handler/FocusWithinHandler.react'
import { makeStyles, mergeClasses } from '@griffel/react'

type BaseTooltipTargetWrapperProps = {
  children?: ReactNode
  forceInlineDisplay?: boolean
  onHide: any
  onShow: any
  tooltipIdentifier?: any
}

const BaseTooltipTargetWrapperReact = forwardRef<
  HTMLSpanElement,
  BaseTooltipTargetWrapperProps
>(
  (
    { onHide, onShow, children, forceInlineDisplay, tooltipIdentifier },
    externalRef,
  ) => {
    const classes = useStyles()

    const [focusChange, onFocusChange] = useState(false)
    const [focusVisibleChange, onFocusVisibleChange] = useState(false)

    const bothChange = focusChange && focusVisibleChange
    const botChangeRef = useRef(bothChange)

    useEffect(
      function () {
        botChangeRef.current !== bothChange &&
          (bothChange ? onShow() : onHide()),
          (botChangeRef.current = bothChange)
      },
      [onHide, onShow, bothChange],
    )

    const onKeyDownCallBack = useCallback(
      function (event: any) {
        var key = event.key
        key === 'Escape' &&
          tooltipIdentifier != null &&
          (onHide(), event.stopPropagation())
      },
      [onHide, tooltipIdentifier],
    )

    return (
      <span
        aria-describedby={tooltipIdentifier}
        data-testid={undefined}
        onKeyDown={onKeyDownCallBack}
        onPointerEnter={onShow}
        onPointerLeave={onHide}
        onPointerUp={onHide}
        ref={externalRef}
        className={mergeClasses(
          classes.inheritAll,
          forceInlineDisplay && classes.wrapperInline,
        )}
      >
        <FocusWithinHandlerReact
          onFocusChange={onFocusChange}
          onFocusVisibleChange={onFocusVisibleChange}
        >
          {children}
        </FocusWithinHandlerReact>
      </span>
    )
  },
)

export default BaseTooltipTargetWrapperReact

const useStyles = makeStyles({
  inheritAll: {
    alignContent: 'inherit',
    alignItems: 'inherit',
    alignSelf: 'inherit',
    display: 'inherit',
    flexBasis: 'inherit',
    flexDirection: 'inherit',
    flexGrow: 'inherit',
    flexShrink: 'inherit',
    height: 'inherit',
    justifyContent: 'inherit',
    maxHeight: 'inherit',
    maxWidth: 'inherit',
    minHeight: 'inherit',
    minWidth: 'inherit',
    width: 'inherit',
  },

  wrapperInline: {
    display: 'inline-flex',
  },
})

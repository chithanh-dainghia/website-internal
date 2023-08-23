import useDelayedState from '@ui/hooks/useDelayedState'
import useStable from '@ui/hooks/useStable'
import React, {
  useCallback,
  useContext,
  useId,
  useMemo,
  useRef,
  useState,
  createContext,
  ReactNode,
  Fragment,
} from 'react'

// @ts-ignore
import { jsxs, jsx } from 'react/jsx-runtime'
import BaseTooltipTargetWrapperReact from '../base-tooltip-target-wrapper-react/BaseTooltipTargetWrapper.react'

export const Context = createContext<any>(undefined)

export const useInternalContext = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error(
      'BaseTooltipGroup: Cannot render a BaseTooltipGroupChild component outside of a BaseTooltipGroup component. comet_ui',
    )
  }
  return context
}

type ContainerProps = {
  children?: ReactNode
  tooltipImpl: any
}

export function Container({ tooltipImpl, children }: ContainerProps) {
  const [isVisible, setDelayState] = useDelayedState(false)

  const [show, setShow] = useState<
    { contentKey?: any; contextRef?: any } | undefined
  >(undefined)

  const tooltipIdentifier = useId()
  const activeContentKey =
    show != null && show.contentKey != null ? show.contentKey : null

  const value = useMemo(
    function () {
      return {
        activeContentKey,
        isVisible,
        onHide: function (delay?: number, callback?: any) {
          // @ts-ignore
          setDelayState(false, delay, callback)
        },
        onShow: function (props: any, delay?: number, cb?: any) {
          setShow(props)
          // @ts-ignore
          setDelayState(true, delay, cb)
        },
        tooltipIdentifier,
      }
    },
    [activeContentKey, isVisible, tooltipIdentifier, setDelayState],
  )

  return jsxs(Fragment, {
    children: [
      jsx(Context.Provider, {
        value,
        children,
      }),
      show !== undefined
        ? jsx(
            tooltipImpl,
            Object.assign({}, show, {
              id: isVisible ? tooltipIdentifier : undefined,
              isVisible,
            }),
          )
        : null,
    ],
  })
}

type ChildProps = {
  hideDelayMs: number
  showDelayMs: number
  //
  children?: ReactNode
  disabled?: boolean
  forceInlineDisplay?: any
  onVisibilityChange?: any
  //
  position?: any
  align?: any
  tooltip?: any
}

let count = 0

function stableCount() {
  return 'tooltip-' + count++
}

export function Child({
  children,
  disabled = false,
  forceInlineDisplay,
  showDelayMs,
  onVisibilityChange,
  hideDelayMs,
  ...rest
}: ChildProps) {
  const contentKey = useStable(stableCount)

  const contextRef = useRef(null)

  // TODO: should be a hook
  const {
    activeContentKey,
    isVisible = false,
    onHide,
    onShow,
    tooltipIdentifier,
  } = useInternalContext()

  const onShowCallBack = useCallback(
    function () {
      !disabled &&
        onShow &&
        onShow(
          Object.assign(
            {
              contentKey,
              contextRef,
            },
            rest,
          ),
          showDelayMs,
          onVisibilityChange,
        )
    },
    [disabled, onShow, contentKey, rest, showDelayMs, onVisibilityChange],
  )

  const onHideCallBack = useCallback(
    function () {
      onHide && onHide(hideDelayMs, onVisibilityChange)
    },
    [hideDelayMs, onHide, onVisibilityChange],
  )

  return (
    <BaseTooltipTargetWrapperReact
      forceInlineDisplay={forceInlineDisplay}
      onHide={onHideCallBack}
      onShow={onShowCallBack}
      ref={contextRef}
      tooltipIdentifier={
        isVisible && activeContentKey === contentKey
          ? tooltipIdentifier
          : undefined
      }
    >
      {children}
    </BaseTooltipTargetWrapperReact>
  )
}

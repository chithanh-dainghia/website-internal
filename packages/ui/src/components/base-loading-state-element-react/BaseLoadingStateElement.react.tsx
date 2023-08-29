import { makeStyles, mergeClasses } from '@fluentui/react-components'
import { useMergeRefs } from '@ui/hooks'
import getLoadingStateAriaProps from '@ui/utils/common/getLoadingStateAriaProps'
import useCometLoadingStateTracker from '@ui/utils/common/useCometLoadingStateTracker'
import {
  CSSProperties,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
} from 'react'

type BaseLoadingStateElementReactProps = {
  children?: ReactNode
  disableLoadingStateTracker?: boolean
  isFocusTarget?: boolean
  progress?: any

  style?: CSSProperties
  className?: string
  testid?: string
}

const useStyle = makeStyles({
  hideOutline: {
    outlineStyle: 'none',
  },
})

const k = createContext(false)

const BaseLoadingStateElementReact = forwardRef<
  HTMLDivElement,
  BaseLoadingStateElementReactProps
>(
  (
    {
      children,
      className,
      disableLoadingStateTracker,
      isFocusTarget,
      progress,
      style,
      testid,
    },
    externalRef,
  ) => {
    const classes = useStyle()
    const a = useContext(k)
    const [obj, loadingTrackerRef] = useCometLoadingStateTracker()
    // @ts-ignore
    const mergeRef = useMergeRefs(externalRef, loadingTrackerRef)

    if (a) {
      return (
        <div
          className={className}
          ref={mergeRef}
          data-testid={undefined}
          style={style}
        >
          {children}
        </div>
      )
    }

    const ariaArr = getLoadingStateAriaProps(progress, {
      max: 100,
      min: 0,
    })

    return (
      <k.Provider value={true}>
        <div
          {...Object.assign({}, ariaArr, disableLoadingStateTracker ? {} : obj)}
          ref={mergeRef}
          style={style}
          data-testid={undefined}
          data-focus-target={isFocusTarget}
          className={mergeClasses(classes.hideOutline, className)}
        >
          {children}
        </div>
      </k.Provider>
    )
  },
)

export default BaseLoadingStateElementReact

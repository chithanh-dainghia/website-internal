import React, { ReactNode, forwardRef } from 'react'
import { LegacyHidden } from '../legacy-hidden'
import { makeStyles, mergeClasses } from '@griffel/react'

type BaseViewReactProps = {
  suppressHydrationWarning?: boolean
  hidden?: boolean
}

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 0,
  },

  hidden: {
    display: 'none',
  },
})

const BaseViewReact = forwardRef<
  HTMLDivElement,
  BaseViewReactProps & JSX.IntrinsicElements['div']
>(({ children, hidden, suppressHydrationWarning, className, ...rest }, ref) => {
  const isHidden = hidden === true

  const classes = useStyles()

  return (
    <LegacyHidden
      htmlAttributes={{
        className: mergeClasses(
          classes.root,
          className,
          isHidden && classes.hidden,
        ),
        ...rest,
      }}
      mode={isHidden ? 'hidden' : 'visible'}
      ref={ref}
      suppressHydrationWarning={suppressHydrationWarning}
    >
      {children}
    </LegacyHidden>
  )
})

BaseViewReact.displayName = 'BaseView.react'

export default BaseViewReact
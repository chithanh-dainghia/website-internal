'use client'

import { makeStyles, mergeClasses } from '@fluentui/react-components'

type LayoutNavigationAppRootProps = JSX.IntrinsicElements['div']

export default function LayoutNavigationAppRoot({
  className,
  children,
  ...props
}: LayoutNavigationAppRootProps) {
  const classes = useStyles()
  return (
    <div className={mergeClasses(classes.root, className)} {...props}>
      <div className={classes.navigationSticky}>
        <div className={classes.navigationInner}>{children}</div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    // KNOWNLEDGE: https://evondev.com/bi-kip-code-css-hieu-qua/
    overflowAnchor: 'none',
    position: 'relative',
  },

  navigationSticky: {
    top: 0,
    position: 'sticky',
  },

  navigationInner: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    height: '100vh',
  },
})

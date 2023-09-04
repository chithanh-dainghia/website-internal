import React from 'react'
import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'

export default function LoginButton({
  className,
  ...props
}: JSX.IntrinsicElements['button']) {
  const classes = useStyles()

  return (
    <button
      className={mergeClasses(classes.root, className)}
      {...props}
    ></button>
  )
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1877f2',
    boxShadow: '0 0 0 2px #e7f3ff',
    outlineStyle: 'none',
    ...shorthands.border('1px', 'solid', '#1b74e4'),
  },
})

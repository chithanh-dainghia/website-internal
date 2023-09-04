'use client'

import React from 'react'
import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'

export default function LoginInput({
  className,
  ...props
}: JSX.IntrinsicElements['input']) {
  const classes = useStyles()

  return <input className={mergeClasses(classes.root, className)} {...props} />
}

const useStyles = makeStyles({
  root: {
    ...shorthands.borderRadius('6px'),
    ...shorthands.padding('14px', '1rem'),
    ...shorthands.border('1px', 'solid', '#DDDFE2'),

    fontSize: '17px',
    fontWeight: 'normal',
    letterSpacing: '.5px',

    color: 'var(--primary-text)',

    ':focus': {
      outlineStyle: 'none',
      caretColor: '#1b74e4',
    },

    '&:focus-within, &:focus-visible': {
      ...shorthands.borderColor('#1b74e4'),
      boxShadow: '0 0 0 2px #e7f3ff',
    },
  },
})

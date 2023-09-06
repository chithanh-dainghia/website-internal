'use client'

import React from 'react'

import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'
import { SpinnerIcon } from 'ui'

export default function LoginButton({
  className,
  children,
  isPending = false,
  spinnerColor = 'black',
  ...props
}: JSX.IntrinsicElements['button'] & {
  isPending?: boolean
  spinnerColor?: string
}) {
  const classes = useStyles()

  return (
    <button
      className={mergeClasses(
        classes.root,
        className,
        !isPending && classes.canHover,
        isPending && classes.pending,
      )}
      {...props}
    >
      {isPending && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            backgroundColor: 'inherit',
            borderRadius: 'inherit',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              // backdropFilter: 'grayscale(1)',
            }}
          >
            <SpinnerIcon color="#FFFFFF" size={36} />
          </div>
        </div>
      )}
      {children}
    </button>
  )
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#1877f2',
    boxShadow: '0 0 0 2px #e7f3ff',
    outlineStyle: 'none',
    ...shorthands.borderStyle('none'),
    paddingLeft: '1rem',
    paddingRight: '1rem',
    textAlign: 'center',
    textShadow: 'none',
    verticalAlign: 'middle',
    position: 'relative',

    ...shorthands.transition([
      ['background-color', '200ms', '0s', 'cubic-bezier(.08,.52,.52,1)'],
      ['box-shadow', '200ms', '0s', 'cubic-bezier(.08,.52,.52,1)'],
      ['transform', '200ms', '0s', 'cubic-bezier(.08,.52,.52,1)'],
    ]),

    color: '#fff',

    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationLine: 'none',
    whiteSpace: 'nowrap',

    fontSize: '20px',
    fontWeight: '500',
    letterSpacing: '.15px',

    ...shorthands.borderRadius('6px'),
  },

  canHover: {
    ':hover': {
      backgroundColor: '#166fe5',
      ...shorthands.borderColor('#365899'),
      textDecorationLine: 'none',
    },
  },

  pending: {
    cursor: 'not-allowed',
    // backgroundColor: '#293845',
    // color: '#FFFFFF',
    opacity: 0.6,
  },
})

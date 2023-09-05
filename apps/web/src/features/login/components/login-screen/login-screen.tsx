'use client'

import React, { ReactNode } from 'react'

import { Logo } from '../logo'
import { makeStyles, shorthands } from '@fluentui/react-components'

export default function LoginScreen({ children }: { children: ReactNode }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Logo />
      {children}
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    ...shorthands.gap('2rem'),
  },
})

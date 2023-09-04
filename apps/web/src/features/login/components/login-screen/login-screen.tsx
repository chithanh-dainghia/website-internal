'use client'

import React from 'react'

import { Logo } from '../logo'
import { makeStyles, shorthands } from '@fluentui/react-components'
import { RoyalLoginForm } from '../royal-login-form'

export default function LoginScreen() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Logo />
      <RoyalLoginForm />
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    ...shorthands.gap('1rem'),
  },
})

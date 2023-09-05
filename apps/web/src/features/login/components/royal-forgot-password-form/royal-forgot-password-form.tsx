'use client'

import React from 'react'
import Link from 'next/link'
import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'
import { LoginInput } from '../login-input'
import { LoginButton } from '../login-button'

export default function RoyalForgotPasswordForm() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.uiHeader}>
        <div className={classes.text}>Quên mật khẩu</div>
      </div>

      <div className={mergeClasses('body-1', classes.textDisplay)}>
        Vui lòng nhập địa chỉ email để khôi phục mật khẩu của bạn.
      </div>

      <div className={classes.inputGroup}>
        <LoginInput placeholder="Địa chỉ mail" />
      </div>

      <div className={classes.loginButtonWrapper}>
        <LoginButton className={classes.loginButton}>Gửi</LoginButton>
      </div>

      <div className={classes.forgotPasswordWrapper}>
        <Link
          href="/login"
          className={mergeClasses('caption', classes.forgotPassword)}
        >
          Có tài khoản, đăng nhập ?
        </Link>
      </div>
    </div>
  )
}

const FORGOT_PASSWORD_WIDTH = '500px'

const useStyles = makeStyles({
  root: {
    '--login-form-background-color': '#fff',

    backgroundColor: 'var(--login-form-background-color)',
    paddingBottom: '1.75rem',
    paddingTop: '1.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    ...shorthands.borderRadius('.5rem'),
    ...shorthands.borderStyle('none'),
    width: FORGOT_PASSWORD_WIDTH,
    boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  uiHeader: {
    width: '100%',
    ...shorthands.borderBottom('1px', 'solid', 'rgba(0,0,0,.1)'),
  },

  text: {
    fontWeight: 'normal',
    letterSpacing: '0.15px',
    fontSize: '22px',
    color: 'var(--primary-text)',
    marginBottom: '1rem',
    textAlign: 'center',
  },

  textDisplay: {
    alignSelf: 'flex-start',
    marginTop: '1rem',
    color: 'var(--primary-text)',
    // fontWeight: '500',
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '1rem',
    marginBottom: '6px',
    ...shorthands.gap('.75rem'),
  },

  loginButtonWrapper: {
    marginTop: '6px',
    width: '100%',
  },

  loginButton: {
    width: '100%',
    height: '48px',
  },

  forgotPasswordWrapper: {
    marginTop: '1rem',
  },

  forgotPassword: {
    color: '#1877F2',
    fontSize: '14px',
  },
})

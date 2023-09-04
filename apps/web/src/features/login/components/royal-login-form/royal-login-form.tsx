'use client'

import React from 'react'
import { makeStyles, shorthands } from '@fluentui/react-components'
import { LoginInput } from '../login-input'

export default function RoyalLoginForm() {
  const classes = useStyles()
  return (
    <form className={classes.root} method="post">
      <div className={classes.text}>Đăng nhập</div>
      <div className={classes.inputGroup}>
        <LoginInput placeholder="Số điện thoại" />
        <LoginInput type="password" placeholder="Mật khẩu" />
      </div>
      <div className={classes.loginButtonWrapper}>
        <button>123</button>
      </div>
    </form>
  )
}

const LOGIN_WIDTH = '396px'

const useStyles = makeStyles({
  root: {
    '--login-form-background-color': '#fff',

    backgroundColor: 'var(--login-form-background-color)',
    paddingBottom: '1.75rem',
    paddingTop: '1.5rem',
    ...shorthands.borderRadius('.5rem'),
    ...shorthands.borderStyle('none'),
    width: LOGIN_WIDTH,
    boxShadow: '0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  text: {
    fontWeight: 'normal',
    letterSpacing: '0.15px',
    fontSize: '22px',
    color: 'var(--primary-text)',
    marginBottom: '1rem',
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: '6px',
    marginBottom: '6px',
    ...shorthands.gap('.75rem'),

    '& input': {
      marginLeft: '1rem',
      marginRight: '1rem',
    },
  },

  loginButtonWrapper: {
    marginTop: '6px',
    marginLeft: '1rem',
    marginRight: '1rem',
  },
})

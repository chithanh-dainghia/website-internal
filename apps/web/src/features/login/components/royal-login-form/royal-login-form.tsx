'use client'

import React, { useTransition } from 'react'
import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'
import { LoginInput } from '../login-input'
import { LoginButton } from '../login-button'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormDataSchema } from '@/lib/schema'
import { signIn } from 'next-auth/react'

type Inputs = z.infer<typeof LoginFormDataSchema>

export default function RoyalLoginForm() {
  const classes = useStyles()

  const [isPending, startTransition] = useTransition()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginFormDataSchema),
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    console.log(data)
    // Replace this with a server action or fetch an API endpoint to authenticate

    startTransition(async () => {
      await signIn('credentials', {
        ...data,
        redirect: false,
      })
    })
  }

  return (
    <form onSubmit={handleSubmit(processForm)} className={classes.root}>
      <div className={classes.text}>Đăng nhập</div>
      <div className={classes.inputGroup}>
        <LoginInput
          autoComplete="off"
          placeholder="Địa chỉ mail"
          {...register('email')}
          errorMessage={errors.email?.message}
        />
        <LoginInput
          autoComplete="off"
          type="password"
          placeholder="Mật khẩu"
          {...register('password')}
          errorMessage={errors.password?.message}
        />
      </div>
      <div className={classes.loginButtonWrapper}>
        <LoginButton isPending={isPending} className={classes.loginButton}>
          Đăng nhập
        </LoginButton>
      </div>
      <div className={classes.forgotPasswordWrapper}>
        <Link
          href="/signin/forgot-password"
          className={mergeClasses('caption', classes.forgotPassword)}
        >
          Quên mật khẩu ?
        </Link>
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
    paddingLeft: '1rem',
    paddingRight: '1rem',
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

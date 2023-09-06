'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'

import { LoginFormDataSchema } from '@/lib/schema'
import {
  makeStyles,
  mergeClasses,
  shorthands,
} from '@fluentui/react-components'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginButton } from '../login-button'
import { LoginInput } from '../login-input'

type Inputs = z.infer<typeof LoginFormDataSchema>

export default function RoyalLoginForm() {
  const classes = useStyles()

  const router = useRouter()

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/profile'

  //
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(LoginFormDataSchema),
  })

  const processForm: SubmitHandler<Inputs> = async data => {
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl,
    })
    console.log(res)

    if (!res?.error) {
      router.push(callbackUrl)
    }
  }

  // return (
  //   <form onSubmit={handleSubmit(processForm)} className={classes.root}>
  //     <div className={classes.text}>Đăng nhập</div>
  //     <div className={classes.inputGroup}>
  //       <LoginInput
  //         autoComplete="off"
  //         placeholder="Địa chỉ mail"
  //         defaultValue="tienlx98@gmail.com"
  //         {...register('email')}
  //         errorMessage={errors.email?.message}
  //       />
  //       <LoginInput
  //         autoComplete="off"
  //         type="password"
  //         placeholder="Mật khẩu"
  //         defaultValue="123456"
  //         {...register('password')}
  //         errorMessage={errors.password?.message}
  //       />
  //     </div>
  //     <div className={classes.loginButtonWrapper}>
  //       <LoginButton isPending={isSubmitting} className={classes.loginButton}>
  //         Đăng nhập
  //       </LoginButton>
  //     </div>
  //     <div className={classes.forgotPasswordWrapper}>
  //       <Link
  //         href="/signin/forgot-password"
  //         className={mergeClasses('caption', classes.forgotPassword)}
  //       >
  //         Quên mật khẩu ?
  //       </Link>
  //     </div>
  //   </form>
  // )

  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: 'tienlx98@gmail.com',
    password: '123456',
  })
  const [error, setError] = useState('')

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      setFormValues({ email: '', password: '' })

      const res = await signIn('credentials', {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      })

      setLoading(false)

      console.log({ res })
      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        setError('invalid email or password')
      }
    } catch (error: any) {
      setLoading(false)
      setError(error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <form onSubmit={onSubmit} className={classes.root}>
      <div className={classes.text}>Đăng nhập</div>
      <div className={classes.inputGroup}>
        <LoginInput
          autoComplete="off"
          placeholder="Địa chỉ mail"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <LoginInput
          autoComplete="off"
          type="password"
          placeholder="Mật khẩu"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div className={classes.loginButtonWrapper}>
        <LoginButton
          type="submit"
          isPending={loading}
          className={classes.loginButton}
        >
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

'use client'

import React, { useState, useTransition } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import {
  LoginButton as RegisterButton,
  LoginInput as RegisterInput,
  Logo,
} from '@/features/login'
import { RegisterFormDataSchema } from '@/lib/schema'
import {
  Toast,
  ToastIntent,
  ToastTitle,
  Toaster,
  makeStyles,
  mergeClasses,
  shorthands,
  useId,
  useToastController,
} from '@fluentui/react-components'
import { zodResolver } from '@hookform/resolvers/zod'

import { registerUser, Inputs } from './action'
import Link from 'next/link'

export default function RegisterScreen() {
  const classes = useStyles()
  const toasterId = useId('toaster/register')
  const { dispatchToast } = useToastController(toasterId)

  // https://github.com/react-hook-form/react-hook-form/issues/10391
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    shouldUseNativeValidation: true,
    resolver: zodResolver(RegisterFormDataSchema),
  })

  const notify = (intent: ToastIntent, title: string) =>
    dispatchToast(
      <Toast appearance="inverted">
        <ToastTitle>{title}</ToastTitle>
      </Toast>,
      { intent },
    )

  const processForm: SubmitHandler<Inputs> = async data => {
    startTransition(async () => {
      const result = await registerUser(data)

      if (!result) {
        console.log('Something went wrong')
        return
      }

      // can navigate
      if (result.data === true) {
        notify('success', 'Đã đăng ký thành công')
      }

      if (result.error) {
        // set local error state
        console.log(result.error)
        if (typeof result.error === 'string') {
          notify('error', result.error)
        }

        return
      }

      reset()
    })
  }

  return (
    <>
      <div className={classes.root}>
        <Logo />
        <form
          onSubmit={handleSubmit(processForm)}
          className={classes.registerForm}
        >
          <div className={classes.text}>Đăng Ký</div>
          <div className={classes.inputGroup}>
            <RegisterInput
              type="text"
              autoComplete="off"
              defaultValue="Lê Xuân Tiến"
              placeholder="Họ và tên"
              {...register('name')}
              errorMessage={errors.name?.message}
            />
            <RegisterInput
              autoComplete="off"
              placeholder="Địa chỉ mail"
              defaultValue="tienlx97@gmail.com"
              {...register('email')}
              errorMessage={errors.email?.message}
            />
            <RegisterInput
              type="password"
              autoComplete="off"
              defaultValue="123456"
              placeholder="Mật khẩu"
              {...register('password')}
              errorMessage={errors.password?.message}
            />
            <RegisterInput
              defaultValue="123456"
              type="password"
              autoComplete="off"
              placeholder="Xác nhận mật khẩu"
              {...register('confirmPassword')}
              errorMessage={errors.confirmPassword?.message}
            />
          </div>
          <div className={classes.registerButtonWrapper}>
            <RegisterButton
              isPending={isPending}
              className={classes.registerButton}
            >
              Đăng Ký
            </RegisterButton>
          </div>

          <div className={classes.forgotPasswordWrapper}>
            <Link
              href="/signin"
              className={mergeClasses('caption', classes.forgotPassword)}
            >
              Có tài khoản, đăng nhập ?
            </Link>
          </div>
        </form>
      </div>
      <Toaster toasterId={toasterId} />
    </>
  )
}

const REGISTER_WIDTH = '396px'

const useStyles = makeStyles({
  root: {
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    ...shorthands.gap('2rem'),
  },

  registerForm: {
    '--register-form-background-color': '#fff',
    backgroundColor: 'var(--register-form-background-color)',
    paddingBottom: '1.75rem',
    paddingTop: '1.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    ...shorthands.borderRadius('.5rem'),
    ...shorthands.borderStyle('none'),
    width: REGISTER_WIDTH,
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
  registerButtonWrapper: {
    marginTop: '6px',
    width: '100%',
  },
  registerButton: {
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

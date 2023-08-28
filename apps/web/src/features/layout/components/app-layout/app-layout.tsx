import { makeStyles } from '@fluentui/react-components'
import React, { ReactNode } from 'react'

type AppLayoutProps = {
  children?: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  const classes = useStyles()

  return <div>{children}</div>
}

const useStyles = makeStyles({})

'use client'

import React from 'react'

import { mediaMinWidth1921 } from 'ui'

import { makeStyles, mergeClasses } from '@fluentui/react-components'
import { LayoutNavigationAppRoot } from '../layout-navigation-app-root'
import { LayoutNavigationAppList } from '../layout-navigation-app-nav-list'

type AppLayoutProps = JSX.IntrinsicElements['div']

export default function AppLayout({
  children,
  className,
  ...props
}: AppLayoutProps) {
  const classes = useStyles()

  return (
    <div
      className={mergeClasses(classes.root, classes.flexRight, className)}
      {...props}
    >
      <LayoutNavigationAppRoot>
        <LayoutNavigationAppList />
        {/* <LayoutNavigationAppChannel /> */}
      </LayoutNavigationAppRoot>
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    marginRight: 'auto',
    marginLeft: 'auto',
    minHeight: '100vh',
    backgroundColor: 'var(--wig-page-background)',
    minWidth: '1266px',

    [`${mediaMinWidth1921}`]: {
      width: '1600px',
    },
  },

  flexRight: {
    display: 'flex',
    flexDirection: 'row',
  },
})

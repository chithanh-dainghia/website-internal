'use client'
import React from 'react'

import { makeStyles, shorthands } from '@fluentui/react-components'
import { WorkGalahadUIAppsList } from '../work-galahad-ui-apps-list'

export default function NavigationAppList() {
  const classes = useStyles()

  return (
    <div className={classes.navigationAppNavList}>
      <div className={classes.uiAppRoot}>
        <div role="navigation" className={classes.uiAppRootInner}>
          <WorkGalahadUIAppsList />
        </div>
      </div>
    </div>
  )
}

const APP_NAV_LIST_WIDTH = '96px'

const useStyles = makeStyles({
  navigationAppNavList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
    width: APP_NAV_LIST_WIDTH,
    minWidth: APP_NAV_LIST_WIDTH,
  },

  uiAppRoot: {
    width: APP_NAV_LIST_WIDTH,
    paddingBottom: '1rem',
    overflowY: 'auto',
    alignItems: 'stretch',
    ...shorthands.borderLeft('1px', 'solid', 'var(--divider)'),
    ...shorthands.borderRight('1px', 'solid', 'var(--divider)'),
    zIndex: 1,
    msOverflowStyle: '-ms-autohiding-scrollbar',
    flexShrink: 0,
    backgroundColor: 'var(--wig-nav-background)',
    height: '100%',
    overflowX: 'hidden',
    display: 'flex',
    boxSizing: 'border-box',
    justifyContent: 'center',
    paddingTop: '1rem',
  },

  uiAppRootInner: {
    paddingRight: '.25rem',
    paddingLeft: '.25rem',
    display: 'flex',
    width: '100%',
    ...shorthands.borderStyle('none'),
  },
})

'use client'

import { makeStyles } from '@fluentui/react-components'

import { WorkGalahadAppTabTopApps } from '../work-galahad-app-tab-top-apps'

export default function WorkGalahadUIAppsList() {
  const classes = useStyles()

  return (
    <div role="grid" className={classes.root}>
      <WorkGalahadAppTabTopApps />
      {/* WorkNavigationCollapseButtonAndNubs.react */}
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
})

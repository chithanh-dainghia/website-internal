import { Tooltip, makeStyles } from '@fluentui/react-components'
import { forwardRef } from 'react'

type WorkGalahadUIAppNavButtonProps = {}

const WorkGalahadUIAppNavButton = forwardRef<
  HTMLElement,
  WorkGalahadUIAppNavButtonProps
>(({}, ref) => {
  const classes = useStyles()

  return (
    <Tooltip
      content="Example tooltip"
      showDelay={0}
      positioning={'after'}
      relationship="label"
    >
      <span className={classes.root}>
        <div className={classes.root}></div>
      </span>
    </Tooltip>
  )
})

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

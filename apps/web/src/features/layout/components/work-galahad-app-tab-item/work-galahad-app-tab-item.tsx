import React, { forwardRef } from 'react'
import { noop } from 'ui'

import { useNavUIState } from '../../context/gemini-nav-and-channel-context'

type WorkGalahadAppTabItemProps = {
  bagdeCount: number
  isFirst: boolean
  onHoverIn?: typeof noop
  onPress?: typeof noop
  tab?: any
}

const getSelectedAppTabID = () => {
  // c("WorkGalahadNavStore").getSelectedAppTabID()
}

const WorkGalahadAppTabItem = forwardRef<
  HTMLElement,
  WorkGalahadAppTabItemProps
>(({ bagdeCount, isFirst, onHoverIn, onPress, tab }, ref) => {
  const {
    defaultEntityKey,
    href,
    title,
    trackingNodeType,
    tabIconName,
    id,
    badgeRenderer,
    nuxConfig,
  } = tab

  //  c("WorkGalahadNavUIState").useNavUIState();
  const { isAutoHideEnabled } = useNavUIState()

  return <div />
})

// https://wmyikhafek.workplace.com/work/knowledge

import React, { forwardRef, useMemo } from 'react'
import { noop } from 'ui'

import { useNavUIState } from '../../context/gemini-nav-and-channel-context'
import { useGeminiAppRoot } from '../../context/gemini-nav-app-root-context'
import { WorkGalahadUIAppsListItem } from '../work-galahad-ui-apps-list-item'

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
  HTMLDivElement,
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

  const { getSelectedAppTab } = useGeminiAppRoot()
  const isActive = useMemo(() => getSelectedAppTab(id), [id])

  const A = o(a, e)

  return <WorkGalahadUIAppsListItem withTopSpacing={!isFirst} ref={ref} />
})

// https://wmyikhafek.workplace.com/work/knowledge

import { emptyFunction } from 'ui'

const WORK_APP_TAB_SET = [
  {
    id: 'home',
    title: 'Trang chủ',
    defaultEntityKey: 'feed/newsfeed',
    href: '/',
    trackingNodeType: 401,
    tabIconName: 'HOME',
    channelEntryPoint: {
      root: {
        $1: 'WorkGalahadHomeTabContainer.react',
        $2: 'WorkGalahadHomeTabContainer.entrypoint',
      },
    },
  },
  {
    id: 'notifications',
    title: 'Thông báo',
    defaultEntityKey: 'notifications',
    href: '/notifications',
    trackingNodeType: 402,
    tabIconName: 'NOTIFICATIONS',
    channelEntryPoint: {
      root: {
        $1: 'WorkNotificationsTabContainer.react',
        $2: 'WorkNotificationsTabContainer.entrypoint',
      },
    },
  },
  {
    id: 'knowledge_library',
    title: 'Thư viện kiến thức',
    defaultEntityKey: 'knowledge',
    href: '/work/knowledge',
    trackingNodeType: 478,
    tabIconName: 'KNOWLEDGE_LIBRARY',
    channelEntryPoint: {
      root: {
        $1: 'WorkKnowledgesStackedChannel.react',
        $2: 'WorkGalahadKnowledgesStackedChannel.entrypoint',
      },
    },
  },
]

export default function WorkGalahadAppTabTopApps() {
  // TODO: create subscription to notify
  // const notifyBadgeCount = d('WorkGalahadNotificationsBadge.react').useCount()

  const notifyBadgeCount = 1

  return WORK_APP_TAB_SET.map((tab, index) => (
    <WorkGalahadAppTabItem
      badgeCount={tab.id === 'notifications' ? notifyBadgeCount : 0}
      isFirst={index === 0}
      onHoverIn={emptyFunction}
      onPress={emptyFunction}
      tab={tab}
      key={tab.id}
    />
  ))
}

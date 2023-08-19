import clsx from 'clsx'
import React from 'react'

/*

WorkGalahadAppTabSet
WorkAppTabSet

*/

const tab = [
  {
    id: 'home',
    title: 'Trang chủ',
    defaultEntityKey: `WorkGalahadEntityKey.forFeed("newsfeed")`, //d("WorkGalahadEntityKey").forFeed("newsfeed"),
    href: '/',
    trackingNodeType: 401,
    tabIconName: 'HOME',
    channelEntryPoint: 'WorkGalahadHomeTabContainer.entrypoint',
    badgeRenderer: 'WorkGalahadAppTabKeyUpdatesBadgeRenderer.react',
  },
  {
    id: 'notifications',
    title: 'Thông báo',
    defaultEntityKey: `WorkGalahadEntityKey.forNotif("newsfeed")`, //d("WorkGalahadEntityKey").forFeed("newsfeed"),
    href: '/notifications',
    trackingNodeType: 402,
    tabIconName: 'NOTIFICATIONS',
    badgeRenderer: 'WorkGalahadAppTabNotificationsBadgeRenderer.react',
    channelEntryPoint: 'WorkGalahadAppTabKeyUpdatesBadgeRenderer.react',
  },
]

export default function WorkAppTabSet() {}

type TabItem = {
  id: string
  title: string
  defaultEntityKey: any
  href: string
  trackingNodeType: number
  tabIconName: string
  badgeRenderer: any
  nuxConfig: any
}

type WorkGalahadAppTabItemReactProps = {
  badgeCount?: number
  isFirst: boolean
  onHoverIn?: any
  onPress?: any
  tab: TabItem
}

const WorkGalahadAppTabItemReact = () => {
  return
}

type WorkGalahadAppTabKeyUpdatesBadgeRendererReactProps = {
  hovered: boolean
  selected: boolean
  useGreyBadging: boolean
}

type WorkGalahadUIBaseAppTabBadgeReactProps = {
  count: number
  showDot?: boolean
  maxCount?: number
} & WorkGalahadAppTabKeyUpdatesBadgeRendererReactProps

const WorkGalahadAppTabKeyUpdatesBadgeRendererReact = ({
  hovered,
  selected,
  useGreyBadging,
}: WorkGalahadAppTabKeyUpdatesBadgeRendererReactProps) => {
  const count = 0
  const showDot = true

  return
}

const WorkGalahadUIBaseAppTabBadgeReact = ({
  count,
  hovered,
  selected,
  showDot = false,
  useGreyBadging,
  maxCount = 99,
}: WorkGalahadUIBaseAppTabBadgeReactProps) => {
  return !count ? (
    <></>
  ) : (
    <span
      className={clsx(
        // badge
        'text-[color:var(--always-white)] h-[18px] min-w-[6px] absolute border-t-[color:var(--wig-page-background,var(--nav-bar-background))] border-r-[color:var(--wig-page-background,var(--nav-bar-background))] border-b-[color:var(--wig-page-background,var(--nav-bar-background))] border-l-[color:var(--wig-page-background,var(--nav-bar-background))] text-center px-1.5 py-0 rounded-br-[18px] rounded-t-[18px] rounded-bl-[18px] border-solid border-2 -right-2 -top-2',
        !useGreyBadging && 'bg-[color:var(--notification-badge)]',
        hovered &&
          !selected &&
          'border-t-[color:var(--new-notification-background)] border-r-[color:var(--new-notification-background)] border-b-[color:var(--new-notification-background)] border-l-[color:var(--new-notification-background)] border-solid border-2',
        useGreyBadging && 'bg-[color:var(--always-gray-40)]',
        selected &&
          'border-t-[color:var(--primary-deemphasized-button-background)] border-r-[color:var(--primary-deemphasized-button-background)] border-b-[color:var(--primary-deemphasized-button-background)] border-l-[color:var(--primary-deemphasized-button-background)] border-solid border-2',
        showDot && 'w-3 h-3 p-0 -right-1.5 -top-1.5',
      )}
      role="status"
    >
      {!showDot && (
        <span
          aria-hidden={true}
          className="leading-[1.3] min-h-[13px] text-[0.625rem]"
        >
          {count > maxCount ? maxCount + '+' : count}
        </span>
      )}
    </span>
  )
}

WorkGalahadUIBaseAppTabBadgeReact.displayName =
  'WorkGalahadUIBaseAppTabBadge.react'

// WorkGalahadAppTabItem.react

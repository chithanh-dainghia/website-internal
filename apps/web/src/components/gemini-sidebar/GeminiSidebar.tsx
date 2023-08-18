import React from 'react'
import { GeminiLayoutNavigationAppList } from '../gemini-layout-navigation-applist'

export default function GeminiSideBar() {
  return (
    <div className="w-full sticky top-0">
      <div className="h-screen max-w-inherit flex-row flex box-border w-full">
        <GeminiLayoutNavigationAppList />
      </div>
    </div>
  )
}

GeminiSideBar.displayName = 'GeminiSidebar.react'

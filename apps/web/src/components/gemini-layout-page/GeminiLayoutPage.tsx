import React, { ReactNode } from 'react'
import clsx from 'clsx'

import { GeminiSidebar } from '@/components'

type GeminiLayoutPageProps = {
  children: ReactNode
}

const classes = {
  pageContainer:
    'w-full min-w-[1266px] min-h-[100vh] my-0 mx-auto flex flex-row bg-wigPageBackground print:min-w-0',
  pageContainerFixedWidth: 'min-[1921px]:w-[1600px]',
}

export default function GeminiLayoutPage({ children }: GeminiLayoutPageProps) {
  return (
    <div
      className={clsx(classes.pageContainer, classes.pageContainerFixedWidth)}
    >
      {/* // className="relative grow shrink-0 z-[3]" */}
      <div className="relative w-[422px]">
        <GeminiSidebar />
      </div>
      {/* // className="shrink-[1] grow-[4] min-w-0 flex-col flex border-r-[1px] border-solid border-divider box-border" */}
      <div className="shrink-[1] grow min-w-0 flex-col flex border-r-[1px] border-solid border-divider box-border">
        {children}
      </div>
    </div>
  )
}

GeminiLayoutPage.displayName = 'GeminiLayoutPage.react'

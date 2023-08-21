'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { GeminiNavAppButton } from '../gemini-nav-app-button'
import { usePathname, useRouter } from 'next/navigation'

const GeminiHomeButon = () => {
  const pathName = usePathname()

  return (
    <GeminiNavAppButton
      active={pathName === '/'}
      type="Home"
      tooltipContent="Trang chủ"
    />
  )
}

const GeminiNotifyButon = () => {
  const pathName = usePathname()

  return (
    <GeminiNavAppButton
      active={pathName === '/'}
      type="Home"
      tooltipContent="Trang chủ"
    />
  )
}

export default function GeminiLayoutNavigationAppList() {
  const router = useRouter()

  return (
    <div className="w-[56px] min-w-[56px] h-full flex flex-col  border-x border-solid border-divider bg-wigNavBackground">
      <div
        role="navigation"
        className="w-[40px] py-2 mx-auto  box-border  flex flex-col overflow-x-hidden h-full shrink-0  z-1 items-stretch overflow-y-auto"
      >
        <Link href="/" className="w-full relative h-[20px]">
          <Image src="/assets/logo.png" fill alt="logo" />
        </Link>
        <div className="h-8" />

        <div className="flex justify-center items-center gap-1.5 flex-col">
          <GeminiHomeButon />
          <GeminiNotifyButon />
        </div>
      </div>
    </div>
  )
}

/**

WorkGalahadAppTabSet

WorkGalahadAppTabTopApps.react
  WorkGalahadAppTabItem.react

*/

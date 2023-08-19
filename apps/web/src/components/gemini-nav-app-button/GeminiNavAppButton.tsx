import React, { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import {
  Icons,
  IconProps,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'ui'

type GeminiNavAppButtonProps = {
  children?: ReactNode
  tooltipContent: string
  active: boolean
} & Pick<IconProps, 'type'> &
  JSX.IntrinsicElements['div']

function convert_css_var_to_variable(css_variables: string[]) {
  const arrStr = {}

  css_variables.forEach(str => {
    const arr = str.split('-')
    let cal = arr[2]

    for (let index = 3; index < arr.length; index++) {
      cal += arr[index].slice(0, 1).toUpperCase() + arr[index].slice(1)
    }

    arrStr[cal] = `var(${str})`
  })

  console.log(JSON.stringify(arrStr))
}

export default function GeminiNavAppButton({
  children,
  className,
  tooltipContent,
  type,
  active,
  ...props
}: GeminiNavAppButtonProps) {
  // convert_css_var_to_variable([
  //   '--toast-addon-padding-horizontal',
  //   '--toast-addon-padding-vertical',
  // ])

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            {...props}
            className={clsx(
              'group h-[40px] w-full flex justify-center items-center rounded-md relative',
              active && 'bg-[var(--primary-deemphasized-button-background)]',
              className,
            )}
          >
            <Icons
              width={24}
              height={24}
              className={clsx(
                !active && '[&>path]:fill-[var(--secondary-icon)]',
                active && '[&>path]:fill-[var(--primary-button-background)]',
              )}
              active={active}
              type={type}
            />
            <div className="group-hover:opacity-100 opacity-0 right-0 top-0 left-0 bottom-0 absolute transition-opacity ease-fdsAnimationFadeOut duration-fdsDurationExtraExtraShortOut pointer-events-none bg-[var(--hover-overlay)] rounded-[inherit]" />
          </div>
        </TooltipTrigger>

        <TooltipContent asChild side="right">
          <span>{tooltipContent}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

import { ReactNode } from 'react'
import BaseTooltipReact from '../base-tooltip-react/BaseTooltip.react'
import CometTooltipImplReact from '../comet-tooltip-impl-react/CometTooltipImpl.react'

type CometTooltipReactProps = {
  children?: ReactNode
  tooltip?: any
  position: string
  delayMs?: number
}

export default function CometTooltipReact({
  position,
  children,
  tooltip,
  delayMs,
}: CometTooltipReactProps) {
  return (
    <BaseTooltipReact
      delayTooltipMs={delayMs}
      tooltipImpl={CometTooltipImplReact}
    />
  )
}

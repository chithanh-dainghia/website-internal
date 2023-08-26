import { ReactNode } from 'react'
import BaseTooltipReact from '../base-tooltip-react/BaseTooltip.react'

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
      tooltipImpl={CometTooltipReact}
    />
  )
}

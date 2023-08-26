import BaseTooltipImplReact, {
  BaseTooltipImplProps,
} from '../base-tooltip-impl-react/BaseTooltipImpl.react'
import CometProgressRingIndeterminateReact from '../comet-progress-ring-indeterminate-react/CometProgressRingIndeterminate.react'
import TetraTextPairingReact from '../tetra-text-pairing/TetraTextPairing.react'

export type CometTooltioDeferredImplProps = {
  headline?: undefined
  isVisible: boolean
  tooltip?: any
  tooltipTheme?: any
} & BaseTooltipImplProps

export default function CometTooltipDeferredImplReact({
  headline,
  tooltip,
  tooltipTheme = 'invert',
  ...rest
}: CometTooltioDeferredImplProps) {
  const loadingState = (
    <CometProgressRingIndeterminateReact color="dark" size={20} />
  )

  const tooltipComp =
    tooltip !== undefined ? (
      <TetraTextPairingReact
        body={tooltip}
        bodyColor="primary"
        headline={headline}
        headlineColor="primary"
        level={4}
      />
    ) : undefined

  return (
    <BaseTooltipImplReact
      loadingState={loadingState}
      tooltip={tooltipComp}
      className=""
      {...rest}
    />
  )
}

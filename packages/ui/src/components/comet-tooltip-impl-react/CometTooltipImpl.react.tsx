import CometPlaceholderReact from '../comet-placeholder-react/CometPlaceholder.react'
import CometTooltipDeferredImpl, {
  CometTooltioDeferredImplProps,
} from '../comet-tooltip-deferred-impl-react/CometTooltipDeferredImpl.react'

type CometTooltipImplReactProps = CometTooltioDeferredImplProps

export default function CometTooltipImplReact(
  props: CometTooltipImplReactProps,
) {
  return (
    <CometPlaceholderReact fallback={undefined}>
      <CometTooltipDeferredImpl {...props} />
    </CometPlaceholderReact>
  )
}

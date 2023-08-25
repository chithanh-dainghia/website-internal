type CometTooltioDeferredImplProps = {
  headline?: undefined
  isVisible: boolean
  tooltip?: any
  tooltipTheme?: any
}

export default function CometTooltioDeferredImpl({
  headline,
  tooltip,
  tooltipTheme = 'invert',
  isVisible,
  ...rest
}: CometTooltioDeferredImplProps) {}

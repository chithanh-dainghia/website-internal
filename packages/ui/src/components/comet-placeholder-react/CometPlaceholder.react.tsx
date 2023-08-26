import useCometPlaceholderImpl, {
  CometPlaceholderImplProps,
} from '@ui/hooks/useCometPlaceholderImpl'

type CometPlaceholderProps = CometPlaceholderImplProps

export default function CometPlaceholderReact(props: CometPlaceholderProps) {
  return useCometPlaceholderImpl(props)
}

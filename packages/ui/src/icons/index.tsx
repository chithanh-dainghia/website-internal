import { SVGProps } from 'react'
import Home from './home'

type IconsProps = {
  type: 'Home'
  active: boolean
}

export default function Icons({
  active,
  type,
  ...props
}: IconsProps & SVGProps<SVGSVGElement>) {
  switch (type) {
    case 'Home':
      return <Home {...props} active={active} />

    case 'Home':
      return <Home {...props} active={active} />

    case 'Home':
      return <Home {...props} active={active} />

    case 'Home':
      return <Home {...props} active={active} />
    default:
      return <div />
  }
}

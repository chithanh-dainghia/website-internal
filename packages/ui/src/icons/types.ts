import { SVGProps } from 'react'

export type IconProps = {
  active: boolean
  type?: 'Home' | 'Notify'
} & SVGProps<SVGSVGElement>

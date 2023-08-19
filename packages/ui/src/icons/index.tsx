import React from 'react'

import type { IconProps } from './types'

import Home from './home'
import Notify from './notify'

export function Icons({ active, type, ...props }: IconProps) {
  switch (type) {
    case 'Home':
      return <Home {...props} active={active} />

    case 'Notify':
      return <Notify {...props} active={active} />

    default:
      return <div />
  }
}

export { IconProps }

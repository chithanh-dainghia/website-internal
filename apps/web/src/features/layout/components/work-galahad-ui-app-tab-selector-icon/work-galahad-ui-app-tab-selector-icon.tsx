import React, { SVGProps } from 'react'
import { Icon } from 'ui'

type WorkGalahadUIAppTabSelectorIconProps = {
  selected: boolean
  icon: string
}

export default function WorkGalahadUIAppTabSelectorIcon({
  icon,
  selected,
  children,
  ...rest
}: WorkGalahadUIAppTabSelectorIconProps & SVGProps<SVGSVGElement>) {
  const name = `${icon}-${selected ? 'fill' : 'outline'}` as any

  return <Icon name={name} {...rest} />
}

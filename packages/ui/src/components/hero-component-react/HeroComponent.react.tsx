import { memo, useContext, useLayoutEffect } from 'react'

import * as HeroInteractionContext from '@ui/context/HeroInteractionContext'
import HeroInteractionIDContext from '@ui/context/HeroInteractionIDContext'

type HeroComponentProps = {
  description: string
}

function HeroComponent({ description }: HeroComponentProps) {
  const heroInteractionContextValue = useContext(HeroInteractionContext.Context)
  const heroInteractionIDContextValue = useContext(HeroInteractionIDContext)

  useLayoutEffect(() => {
    if (heroInteractionIDContextValue !== null) {
      heroInteractionContextValue.logHeroRender(
        heroInteractionIDContextValue,
        description,
        heroInteractionContextValue.pageletStack,
      )
    }
    // f != null && e.logHeroRender(f, b, e.pageletStack)
  }, [description, heroInteractionContextValue, heroInteractionIDContextValue])

  return <></>
}

HeroComponent.displayName = 'HeroComponent'
const HeroComponentMemo = memo(HeroComponent)

export default HeroComponentMemo

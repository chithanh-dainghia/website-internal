import * as HeroInteractionContext from '@ui/context/HeroInteractionContext'
import HeroInteractionIDContext from '@ui/context/HeroInteractionIDContext'
import { useContext, useLayoutEffect } from 'react'

type HeroFallbackTrackerProps = {
  uuid: string
}

export default function HeroFallbackTracker({
  uuid,
}: HeroFallbackTrackerProps) {
  const heroInteractionContextValue = useContext(HeroInteractionContext.Context)
  const heroInteractionIDContextValue = useContext(HeroInteractionIDContext)

  useLayoutEffect(() => {
    if (heroInteractionIDContextValue !== undefined) {
      heroInteractionContextValue.registerPlaceholder(
        heroInteractionIDContextValue,
        uuid,
        heroInteractionContextValue.pageletStack,
      )

      return function () {
        heroInteractionContextValue.removePlaceholder(
          heroInteractionIDContextValue,
          uuid,
        )
      }
    }
  }, [heroInteractionContextValue, heroInteractionIDContextValue, uuid])
}

HeroFallbackTracker.displayName = 'HeroFallbackTracker'

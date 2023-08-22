import { useContext, useLayoutEffect } from 'react'

import * as HeroInteractionContext from '@ui/context/HeroInteractionContext'
import HeroInteractionIDContext from '@ui/context/HeroInteractionIDContext'

type HeroHoldTriggerProps = {
  description: string
  hold: boolean
}

function HeroHoldTrigger(props: HeroHoldTriggerProps) {
  const { description, hold } = props

  const heroInteractionContextValue = useContext(HeroInteractionContext.Context)
  const heroInteractionIDContextValue = useContext(HeroInteractionIDContext)

  useLayoutEffect(() => {
    if (hold && heroInteractionIDContextValue !== undefined) {
      const a = heroInteractionContextValue.hold(
        heroInteractionIDContextValue,
        heroInteractionContextValue.pageletStack,
        description,
      )

      return function () {
        heroInteractionContextValue.unhold(heroInteractionIDContextValue, props)
      }
    }
  }, [
    description,
    heroInteractionContextValue,
    heroInteractionIDContextValue,
    hold,
  ])

  return <></>
}

HeroHoldTrigger.displayName = 'HeroHoldTrigger'

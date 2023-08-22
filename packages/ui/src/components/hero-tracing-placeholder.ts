import * as HeroComponentReact from '@ui/components/hero-component-react/HeroComponent.react'
import * as HeroHoldTriggerReact from '@ui/components/hero-hold-trigger-react/HeroHoldTrigger.react'
import * as HeroInteractionContextReact from '@ui/context/HeroInteractionContext'
import * as HeroInteractionContextPassthroughReact from '@ui/components/hero-interaction-context-passthrough-react/HeroInteractionContextPassthrough.react'
import * as HeroInteractionIDContextReact from '@ui/context/HeroInteractionIDContext'
import * as HeroCurrentInteractionForLoggingContextReact from '@ui/context/HeroCurrentInteractionForLoggingContext'
import * as HeroPendingPlaceholderTrackerReact from '@ui/context/HeroPendingPlaceholderTracker'
import * as HeroPlaceholderReact from '@ui/components/hero-placeholder-react/HeroPlaceholder'
import * as HeroPlaceholderUtilsReact from '@ui/utils/common/HeroPlaceholderUtils'

export const HeroComponent = HeroComponentReact
export const HeroHoldTrigger = HeroHoldTriggerReact
export const HeroInteractionContext = HeroInteractionContextReact
export const HeroInteractionContextPassthrough =
  HeroInteractionContextPassthroughReact
export const HeroInteractionIDContext = HeroInteractionIDContextReact
export const HeroCurrentInteractionForLoggingContext =
  HeroCurrentInteractionForLoggingContextReact
export const HeroPendingPlaceholderTracker = HeroPendingPlaceholderTrackerReact
export const HeroPlaceholder = HeroPlaceholderReact
export const HeroPlaceholderUtils = HeroPlaceholderUtilsReact

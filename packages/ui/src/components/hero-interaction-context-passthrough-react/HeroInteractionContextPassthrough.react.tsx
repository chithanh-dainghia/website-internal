import React, { ReactNode } from 'react'
import * as HeroInteractionContext from '@ui/context/HeroInteractionContext'
import HeroCurrentInteractionForLoggingContext, {
  HeroCurrentInteractionForLoggingContextProps,
} from '@ui/context/HeroCurrentInteractionForLoggingContext'
import HeroInteractionIDContext from '@ui/context/HeroInteractionIDContext'
import RelayProfilerContext from '@ui/context/RelayProfilerContext'

type HeroInteractionContextPassthroughProps = {
  children?: ReactNode
  clear?: boolean
}

const heroCurrentInteractionForLoggingContextValue: HeroCurrentInteractionForLoggingContextProps =
  {
    current: null,
  }

const heroInteractionIDContextValue = {
  consumeBootload: function () {},
  retainQuery: function () {},
  wrapPrepareQueryResource: function (a: any) {
    return a()
  },
}

function HeroInteractionContextPassthrough({
  children,
  clear = true,
}: HeroInteractionContextPassthroughProps) {
  return clear ? (
    children
  ) : (
    <HeroInteractionContext.Context.Provider
      value={HeroInteractionContext.DEFAULT_CONTEXT_VALUE}
    >
      <HeroCurrentInteractionForLoggingContext.Provider
        value={heroCurrentInteractionForLoggingContextValue}
      >
        <HeroInteractionIDContext.Provider value={null}>
          <RelayProfilerContext.Provider value={heroInteractionIDContextValue}>
            {children}
          </RelayProfilerContext.Provider>
        </HeroInteractionIDContext.Provider>
      </HeroCurrentInteractionForLoggingContext.Provider>
    </HeroInteractionContext.Context.Provider>
  )
}

HeroInteractionContextPassthrough.displayName =
  'HeroInteractionContextPassthrough'

export default HeroInteractionContextPassthrough

'use client'

import React from 'react'

import {
  RendererProvider,
  SSRProvider,
  createDOMRenderer,
  renderToStyleElements,
  FluentProvider,
  teamsLightTheme,
} from '@fluentui/react-components'
import { useServerInsertedHTML } from 'next/navigation'

type AppProviderProps = React.PropsWithChildren

/**
 * // https://nextjs.org/docs/app/building-your-application/styling/css-in-js#configuring-css-in-js-in-app
 * @param param0
 * @returns
 */
export default function AppProvider({ children }: AppProviderProps) {
  // A style registry to collect all CSS rules in a render.
  const [renderer] = React.useState(() => createDOMRenderer())

  // The new useServerInsertedHTML hook to inject rules before any content that might use them.
  useServerInsertedHTML(() => {
    const styles = renderToStyleElements(renderer)
    return <>{styles}</>
  })

  // A Client Component that wraps your app with the style registry during initial server-side rendering.
  return (
    <RendererProvider renderer={renderer}>
      <SSRProvider>
        <FluentProvider theme={teamsLightTheme}>{children}</FluentProvider>
      </SSRProvider>
    </RendererProvider>
  )
}

'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'

import {
  renderToStyleElements,
  createDOMRenderer,
  RendererProvider,
} from '@griffel/react'

type AppProviderProps = React.PropsWithChildren

// https://nextjs.org/docs/app/building-your-application/styling/css-in-js#configuring-css-in-js-in-app
export function GriffelJSRegistry({ children }: AppProviderProps) {
  // A style registry to collect all CSS rules in a render.
  const [renderer] = useState(() => createDOMRenderer())

  // The new useServerInsertedHTML hook to inject rules before any content that might use them.
  useServerInsertedHTML(() => {
    const styles = renderToStyleElements(renderer)
    return <>{styles}</>
  })

  // A Client Component that wraps your app with the style registry during initial server-side rendering.
  return <RendererProvider renderer={renderer}>{children}</RendererProvider>
}

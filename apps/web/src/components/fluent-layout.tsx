'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'

import {
  renderToStyleElements,
  createDOMRenderer,
  RendererProvider,
} from '@griffel/react'

type AppProviderProps = React.PropsWithChildren

export function FluentAppProvider({ children }: AppProviderProps) {
  const [renderer] = useState(() => createDOMRenderer())

  useServerInsertedHTML(() => {
    return <>{renderToStyleElements(renderer)}</>
  })

  return <RendererProvider renderer={renderer}>{children}</RendererProvider>
}

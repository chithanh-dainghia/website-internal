import React, { ReactNode } from 'react'

import BaseContextualLayerAnchorRootContext from '@ui/context/BaseContextualLayerAnchorRootContext'
import useStable from '@ui/hooks/useStable'
import useUnsafeRef_DEPRECATED from '@ui/hooks/useUnsafeRef_DEPRECATED'
import executionEnvironment from '@ui/utils/common/ExecutionEnvironment'

import BaseDOMContainerReact from '../base-dom-container/BaseDOMContainer'

type BaseContextualLayerAnchorRootProps = {
  children?: ReactNode
}

export default function BaseContextualLayerAnchorRootReact({
  children,
}: BaseContextualLayerAnchorRootProps) {
  const node = useStable(() => {
    return executionEnvironment.canUseDOM ? document.createElement('div') : null
  })

  const value = useUnsafeRef_DEPRECATED(node)

  return (
    <React.Fragment>
      <BaseContextualLayerAnchorRootContext.Provider value={value}>
        {children}
      </BaseContextualLayerAnchorRootContext.Provider>
      <BaseDOMContainerReact node={node} />
    </React.Fragment>
  )
}

/**

__d(
  'BaseContextualLayerAnchorRoot.react',
  [
    'BaseContextualLayerAnchorRootContext',
    'BaseDOMContainer.react',
    'ExecutionEnvironment',
    'react',
    'useStable',
    'useUnsafeRef_DEPRECATED',
  ],
  function (a, b, c, d, e, f, g) {
    'use strict'
    var React = d('react')
    function BaseContextualLayerAnchorRoot(children) {
      children = children.children
      var stable = c('useStable')(function () {
          return c('ExecutionEnvironment').canUseDOM
            ? document.createElement('div')
            : null
        }),
        d = c('useUnsafeRef_DEPRECATED')(stable)
      return React.jsxs(React.Fragment, {
        children: [
          React.jsx(c('BaseContextualLayerAnchorRootContext').Provider, {
            value: d,
            children: children,
          }),
          React.jsx(c('BaseDOMContainer.react'), {
            node: stable,
          }),
        ],
      })
    }
    a.displayName = a.name + ' [from ' + f.id + ']'
    g['default'] = a
  },
  98,
)


 */

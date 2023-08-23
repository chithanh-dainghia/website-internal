import { useMergeRefs } from '@ui/hooks'
import { forwardRef, memo, useLayoutEffect, useRef } from 'react'

type BaseDOMContainerProps = {
  node: HTMLElement | null
}

const BaseDOMContainer = forwardRef<HTMLDivElement, BaseDOMContainerProps>(
  ({ node }, externalRef) => {
    const internalRef = useRef<HTMLElement>(null)

    useLayoutEffect(
      function () {
        const refCurrent = internalRef.current
        if (node !== null && refCurrent !== null) {
          refCurrent.appendChild(node)
          return function () {
            refCurrent.removeChild(node)
          }
        }
      },
      [node],
    )

    const ref = useMergeRefs(externalRef, internalRef)

    return <div ref={ref} />
  },
)

const BaseDOMContainerReact = memo(BaseDOMContainer)

export default BaseDOMContainerReact

// __d(
//   'BaseDOMContainer.react',
//   ['react', 'useMergeRefs'],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react')
//     b = d('react')
//     var useLayoutEffect = b.useLayoutEffect,
//       useRef = b.useRef
//     function BaseDOMContainer(props, externalRef) {
//       var node = props.node,
//         internalRef = useRef(null)
//       useLayoutEffect(
//         function () {
//           var refCurrent = internalRef.current
//           if (node != null && refCurrent != null) {
//             refCurrent.appendChild(node)
//             return function () {
//               refCurrent.removeChild(node)
//             }
//           }
//         },
//         [node],
//       )
//       props = c('useMergeRefs')(externalRef, internalRef)
//       return h.jsx('div', {
//         ref: props,
//       })
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     e = h.memo(h.forwardRef(a))
//     g['default'] = e
//   },
//   98,
// )

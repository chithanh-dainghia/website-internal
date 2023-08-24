import LayoutAnimationBoundaryContext from '@ui/context/LayoutAnimationBoundaryContext'
import { LAYOUT_ANIMATION_EVENT } from '@ui/etc/LayoutAnimationEvents'
import { useContext, useEffect, useRef } from 'react'

export function useLayoutAnimationEvents(fn: any) {
  const layoutAnimationBoundaryContextValue = useContext(
    LayoutAnimationBoundaryContext,
  )
  const ref = useRef([])

  useEffect(
    function () {
      const targets =
        (layoutAnimationBoundaryContextValue == null
          ? undefined
          : layoutAnimationBoundaryContextValue.animationEventTargets) || []

      targets.forEach(function (target: any) {
        const listener = target.addListener(LAYOUT_ANIMATION_EVENT, fn)

        // @ts-ignore
        ref.current = [].concat(ref.current, [listener])
      })

      return function () {
        ref.current.forEach(function (tg: any) {
          tg.remove()
        }),
          (ref.current = [])
      }
    },
    [fn, layoutAnimationBoundaryContextValue],
  )
}

/*

__d(
  'useLayoutAnimationEvents',
  ['LayoutAnimationBoundaryContext', 'LayoutAnimationEvents', 'react'],
  function (a, b, c, d, e, f, g) {
    'use strict'
    b = d('react')
    var useContext = b.useContext,
      useEffect = b.useEffect,
      useRef = b.useRef
    function a(fn) {
      var LayoutAnimationBoundaryContextValue = useContext(
          c('LayoutAnimationBoundaryContext'),
        ),
        ref = useRef([])
      useEffect(
        function () {
          var c =
            (LayoutAnimationBoundaryContextValue == null
              ? undefined
              : LayoutAnimationBoundaryContextValue.animationEventTargets) || []
          c.forEach(function (b) {
            b = b.addListener(
              d('LayoutAnimationEvents').LAYOUT_ANIMATION_EVENT,
              fn,
            )
            ref.current = [].concat(ref.current, [b])
          })
          return function () {
            ref.current.forEach(function (a) {
              a.remove()
            }),
              (ref.current = [])
          }
        },
        [fn, LayoutAnimationBoundaryContextValue],
      )
    }
    g['default'] = a
  },
  98,
)

*/

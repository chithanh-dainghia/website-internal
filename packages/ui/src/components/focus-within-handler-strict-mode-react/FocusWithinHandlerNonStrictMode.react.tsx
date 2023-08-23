import React, {
  useInsertionEffect,
  useMemo,
  useRef,
  useState,
  // @ts-ignore
  unstable_Scope,
  ReactNode,
} from 'react'
// @ts-ignore
import { jsx } from 'react/jsx-runtime'

import { useFocusWithinStrictMode } from '../react-focus-event-react/ReactFocusEvent.react'

type FocusWithinHandlerStrictModeReactProps = {
  children?: any
  onFocusChange: any
  onFocusVisibleChange: any
  onFocusWithin: any
  onBlurWithin: any
  testOnly?: any
}

export default function FocusWithinHandlerStrictModeReact({
  onBlurWithin,
  onFocusChange,
  onFocusVisibleChange,
  onFocusWithin,
  children,
  testOnly,
}: FocusWithinHandlerStrictModeReactProps) {
  const ref = useRef(null)

  // let temp
  // const [isFocus, setFocus] = useState(
  //   (temp = testOnly && testOnly.focus) != null ? temp : false,
  // )
  // const [isFocusVisible, setFocusVisible] = useState(
  //   (temp = testOnly && testOnly.focusVisible) != null ? temp : false,
  // )

  const [isFocus, setFocus] = useState(testOnly?.focus ?? false)
  const [isFocusVisible, setFocusVisible] = useState(
    testOnly?.focusVisible ?? false,
  )

  const focusWithinStrictMode = useFocusWithinStrictMode(
    useMemo(
      function () {
        return {
          onFocusWithin: function (e: any) {
            onFocusWithin && !isFocus && onFocusWithin(e)
          },
          onBlurWithin: function (e: any) {
            onBlurWithin && isFocus && onBlurWithin(e)
          },
          onFocusWithinChange: onFocusChange
            ? function (e: any) {
                setFocus(e), onFocusChange(e)
              }
            : setFocus,
          onFocusWithinVisibleChange: onFocusVisibleChange
            ? function (e: any) {
                setFocusVisible(e), onFocusVisibleChange(e)
              }
            : setFocusVisible,
        }
      },
      [
        isFocus,
        onBlurWithin,
        onFocusChange,
        onFocusVisibleChange,
        onFocusWithin,
      ],
    ),
  )

  useInsertionEffect(
    function () {
      focusWithinStrictMode(ref.current)
      return function () {
        focusWithinStrictMode(null)
      }
    },
    [ref, focusWithinStrictMode],
  )

  return jsx(unstable_Scope, {
    ref,
    children:
      typeof children === 'function'
        ? children(isFocus, isFocusVisible)
        : children,
  })
}

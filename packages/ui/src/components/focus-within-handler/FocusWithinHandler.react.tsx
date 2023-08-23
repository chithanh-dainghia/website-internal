import gkx from '@ui/etc/gkx'
import React from 'react'
import FocusWithinHandlerStrictModeReact from '../focus-within-handler-strict-mode-react/FocusWithinHandlerNonStrictMode.react'
import FocusWithinHandlerStrictMode_DEPRECATEDReact from '../focus-within-handler-strict-mode-DEPRECATED-react/FocusWithinHandlerNonStrictMode_DEPRECATED.react'

export default function FocusWithinHandlerReact(props: any) {
  if (gkx.k('3696')) {
    return <FocusWithinHandlerStrictModeReact {...props} />
  } else {
    return <FocusWithinHandlerStrictMode_DEPRECATEDReact {...props} />
  }
}

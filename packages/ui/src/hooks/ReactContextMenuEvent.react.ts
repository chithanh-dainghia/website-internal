import ReactUseEventReact from '@ui/components/react-use-event-react/ReactUseEvent.react'
import {
  hasEventHookPropagationStopped,
  stopEventHookPropagation,
} from '@ui/utils/common/ReactEventHookPropagation'
import { useEffect } from 'react'

export function useContextMenu(target: any, options: any) {
  const { disabled, onContextMenu, preventDefault } = options

  const contextmenuHandler = ReactUseEventReact('contextmenu')

  useEffect(() => {
    const curr = target.current
    if (curr !== null) {
      contextmenuHandler.setListener(curr, (param: any) => {
        if (disabled === true) {
          return
        }

        if (hasEventHookPropagationStopped(param, 'useContextMenu')) {
          return
        }

        stopEventHookPropagation(param, 'useContextMenu')

        if (preventDefault !== false && !param.nativeEvent.defaultPrevented) {
          param.preventDefault()
        }

        if (onContextMenu) {
          onContextMenu(param)
        }
      })
    }
  }, [disabled, target, contextmenuHandler, preventDefault, onContextMenu])
}

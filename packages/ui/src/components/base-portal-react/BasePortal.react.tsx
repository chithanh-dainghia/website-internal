import BasePortalTargetContext from '@ui/context/BasePortalTargetContext'
import useStable from '@ui/hooks/useStable'
import executionEnvironment from '@ui/utils/common/ExecutionEnvironment'
import React, { CSSProperties, ReactNode, useContext } from 'react'
import { createPortal } from 'react-dom'
import BaseDOMContainerReact from '../base-dom-container/BaseDOMContainer'

type BasePortalProps = {
  children?: ReactNode
  hidden?: boolean
  target?: any
  className?: string
  style?: CSSProperties
}

export default function BasePortalReact({
  children,
  className,
  hidden = false,
  target = useContext(BasePortalTargetContext),
  style,
}: BasePortalProps) {
  // const basePortalTargetContext = useContext(BasePortalTargetContext)

  const value = useStable(() => {
    return executionEnvironment.canUseDOM ? document.createElement('div') : null
  })

  return target !== null
    ? createPortal(
        <div hidden={true} className={className} style={style}>
          <BasePortalTargetContext.Provider value={value as any}>
            {children}
          </BasePortalTargetContext.Provider>
          <BaseDOMContainerReact node={value} />
        </div>,
        target,
      )
    : null
}

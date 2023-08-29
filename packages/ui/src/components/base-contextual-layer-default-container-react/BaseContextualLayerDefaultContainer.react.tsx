import React, { ReactNode, forwardRef } from 'react'
import { LegacyHidden } from '../legacy-hidden'
import testID from '@ui/utils/common/testID'

type BaseContextualLayerDefaultContainerReactProps = {
  children?: ReactNode
  hidden?: boolean
  presencePayload?: any
  stopClickPropagation?: boolean
  testid?: string
  className?: string
}

const BaseContextualLayerDefaultContainerReact = forwardRef<
  HTMLDivElement,
  BaseContextualLayerDefaultContainerReactProps
>(
  (
    {
      children,
      className,
      hidden,
      presencePayload,
      stopClickPropagation,
      testid,
    },
    ref,
  ) => {
    return (
      <LegacyHidden
        htmlAttributes={Object.assign({}, testID(testid), {
          className,
          onClick:
            stopClickPropagation === true
              ? function (e: any) {
                  return e.stopPropagation()
                }
              : undefined,
        })}
        mode={hidden ? 'hidden' : 'visible'}
        ref={ref}
      >
        {children}
      </LegacyHidden>
    )
  },
)

export default BaseContextualLayerDefaultContainerReact

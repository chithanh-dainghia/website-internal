import { useFadeEffect } from '@ui/hooks/useFadeEffect'
import useTooltipDelayedContent from '@ui/hooks/useTooltipDelayedContent'
import { useLayoutEffect, useRef } from 'react'
import HeroInteractionContextPassthrough from '../hero-interaction-context-passthrough-react/HeroInteractionContextPassthrough.react'
import BaseContextualLayerReact from '../base-contextual-layer-react/BaseContextualLayer.react'
import { makeStyles, mergeClasses } from '@griffel/react'
import CometPlaceholderReact from '../comet-placeholder-react/CometPlaceholder.react'

export type BaseTooltipImplProps = {
  contentKey?: any
  delayContentMs?: number
  headline?: any
  id?: string
  isVisible: boolean
  loadingState?: any
  tooltip?: any
  tooltipTheme?: string
  className?: string
}

function RepositionContextualLayer({
  contextualLayerRef,
}: {
  contextualLayerRef: any
}) {
  useLayoutEffect(
    function () {
      contextualLayerRef.current &&
        contextualLayerRef.current.reposition({
          autoflip: true,
        })
    },
    [contextualLayerRef],
  )
  return <></>
}

export default function BaseTooltipImplReact({
  className,
  contentKey,
  delayContentMs = 0,
  headline,
  id,
  isVisible,
  loadingState,
  tooltip,
  tooltipTheme,
  ...rest
}: BaseTooltipImplProps) {
  const classes = useStyles()

  const contextualLayerRef = useRef(null)

  const [_isTransitioning, shouldBeVisible, _ref] = useFadeEffect(isVisible)

  // useCometDisplayTimingTrackerForInteraction

  const { isPending } = useTooltipDelayedContent({
    delayContentMs,
    isVisible,
  })

  return tooltip === undefined || !_isTransitioning ? (
    <></>
  ) : (
    // @ts-ignore
    <HeroInteractionContextPassthrough clear={true}>
      <BaseContextualLayerReact
        align="middle"
        imperativeRef={contextualLayerRef}
        className={classes.contextualLayer}
        {...rest}
      >
        <span
          className={mergeClasses(
            classes.container,
            className,
            shouldBeVisible && classes.containerVisible,
          )}
          data-testid={undefined}
          id={id}
          ref={_ref}
          role="tooltip"
        >
          {isPending ? (
            <div className={classes.tooltip}>{loadingState}</div>
          ) : (
            <>
              <CometPlaceholderReact fallback={loadingState}>
                <RepositionContextualLayer
                  contextualLayerRef={contextualLayerRef}
                />
                {tooltip}
              </CometPlaceholderReact>
              {contentKey}
            </>
          )}
        </span>
      </BaseContextualLayerReact>
    </HeroInteractionContextPassthrough>
  )
}

const useStyles = makeStyles({
  container: {
    backgroundColor: 'var(--tooltip-background)',
    borderTopLeftRadius: 'var(--tooltip-corner-radius)',
    borderTopRightRadius: 'var(--tooltip-corner-radius)',
    borderBottomRightRadius: 'var(--tooltip-corner-radius)',
    borderBottomLeftRadius: 'var(--tooltip-corner-radius)',
    boxShadow: 'var(--tooltip-box-shadow)',
    display: 'block',
    marginBottom: '2px',
    marginTop: '2px',
    maxWidth: '334px',
    opacity: 0,
    paddingLeft: '12px',
    paddingRight: '12px',
    paddingTop: '12px',
    paddingBottom: '12px',
    position: 'relative',
    transitionDuration: 'var(--fds-duration-extra-extra-short-out)',
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--fds-animation-fade-out)',
  },

  containerVisible: {
    opacity: 1,
    transitionDuration: 'var(--fds-duration-extra-extra-short-in)',
    transitionTimingFunction: 'var(--fds-animation-fade-in)',
  },

  contextualLayer: {
    pointerEvents: 'none',
  },

  tooltip: {
    display: 'flex',
    justifyContent: 'center',
  },
})

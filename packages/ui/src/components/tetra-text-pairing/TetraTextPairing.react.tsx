import React from 'react'

import { makeStyles, mergeClasses } from '@fluentui/react-components'
import getTetraTextHierarchyStyle from '@ui/utils/common/getTetraTextHierarchyStyle'

// @ts-ignore
import { jsxs } from 'react/jsx-runtime'
import CometHeadlineWithAddOn from '../comet-headline-with-addon/CometHeadlineWithAddOn.react'
import { TetraText } from '../tetra-text-react'

type TetraTextPairingProps = {
  body: any
  bodyColor?:
    | 'blueLink'
    | 'disabled'
    | 'disabledButton'
    | 'highlight'
    | 'negative'
    | 'placeholder'
    | 'positive'
    | 'primary'
    | 'primaryButton'
    | 'primaryDeemphasizedButton'
    | 'primaryOnMedia'
    | 'secondary'
    | 'secondaryButton'
    | 'secondaryOnMedia'
    | 'tertiary'
    | 'white'
  bodyLineLimit?: number
  bodyRef?: any
  bodyTruncationTooltip?: any
  dir?: any

  headline?: any
  headlineAddOn?: any
  headlineColor?:
    | 'blueLink'
    | 'disabled'
    | 'disabledButton'
    | 'highlight'
    | 'negative'
    | 'placeholder'
    | 'positive'
    | 'primary'
    | 'primaryButton'
    | 'primaryDeemphasizedButton'
    | 'primaryOnMedia'
    | 'secondary'
    | 'secondaryButton'
    | 'secondaryOnMedia'
    | 'tertiary'
    | 'white'
  headlineLineLimit?: number
  headlineRef?: any
  headlineTruncationTooltip?: any
  isPrimaryHeading?: boolean
  isSemanticHeading?: boolean
  level: number | string
  meta?: any
  metaColor?:
    | 'blueLink'
    | 'disabled'
    | 'disabledButton'
    | 'highlight'
    | 'negative'
    | 'placeholder'
    | 'positive'
    | 'primary'
    | 'primaryButton'
    | 'primaryDeemphasizedButton'
    | 'primaryOnMedia'
    | 'secondary'
    | 'secondaryButton'
    | 'secondaryOnMedia'
    | 'tertiary'
    | 'white'
  metaLineLimit?: number
  metaLocation?: string
  metaRef?: any
  metaTestID?: string
  metaTruncationTooltip?: any
  reduceEmphasis?: boolean
  testid?: string
  textAlign?: 'auto' | 'start' | 'center' | 'end'
}

export default function TetraTextPairingReact({
  body,
  bodyColor = 'primary',
  bodyLineLimit,
  bodyRef,
  bodyTruncationTooltip,

  dir = 'auto',

  headline,
  headlineAddOn,
  headlineColor = 'primary',
  headlineLineLimit,
  headlineRef,
  headlineTruncationTooltip,

  isPrimaryHeading,
  isSemanticHeading,
  level,

  meta,
  metaColor = 'secondary',
  metaLineLimit,
  metaLocation = 'below',
  metaRef,
  metaTestID,
  metaTruncationTooltip,

  reduceEmphasis,
  testid,
  textAlign = 'start',
}: TetraTextPairingProps) {
  const classes = useStyles()
  const levelClasses = useLevelStyles()

  const { bodyType, headlineType, metaType } = getTetraTextHierarchyStyle(
    level,
    reduceEmphasis,
  )

  // @ts-ignore
  const className = mergeClasses(classes.item, levelClasses[level])

  const Headline = headline !== null && (
    <div className={className}>
      {headlineAddOn !== null ? (
        <CometHeadlineWithAddOn />
      ) : (
        <TetraText
          align={textAlign}
          color={headlineColor}
          dir={dir}
          isPrimaryHeading={isPrimaryHeading}
          isSemanticHeading={isSemanticHeading}
          numberOfLines={headlineLineLimit}
          ref={headlineRef}
          truncationTooltip={headlineTruncationTooltip}
          type={headlineType}
        >
          {headline}
        </TetraText>
      )}
    </div>
  )

  const Meta = meta !== null && (
    <div className={className}>
      <TetraText
        align={textAlign}
        color={metaColor}
        dir={dir}
        isSemanticHeading={false}
        numberOfLines={metaLineLimit}
        ref={metaRef}
        truncationTooltip={metaTruncationTooltip}
        type={metaType}
      >
        {meta}
      </TetraText>
    </div>
  )

  return jsxs('div', {
    'data-testid': undefined,
    children: [
      metaLocation === 'above' && Meta,
      Headline,
      body !== null &&
        jsxs('div', {
          className: className,
          children: jsxs(TetraText, {
            align: textAlign,
            color: bodyColor,
            dir,
            isSemanticHeading: false,
            numberOfLines: bodyLineLimit,
            ref: bodyRef,
            truncationTooltip: bodyTruncationTooltip,
            type: bodyType,
            children: body,
          }),
        }),

      metaLocation === 'below' && Meta,
    ],
  })
}

const useStyles = makeStyles({
  item: {
    marginBottom: '5px',
    marginTop: '5px',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '-5px',
    marginTop: '-5px',
  },
})

const useLevelStyles = makeStyles({
  1: {
    marginBottom: '7px',
    marginTop: '7px',
  },
  2: {
    marginBottom: '6px',
    marginTop: '6px',
  },
  entityHeader1: {
    marginBottom: '8px',
    marginTop: '8px',
  },
  entityHeader2: {
    marginBottom: '8px',
    marginTop: '8px',
  },
})

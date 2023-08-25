import { makeStyles, mergeClasses } from '@griffel/react'
import {
  getRingColor,
  getRingGifUrl,
} from '@ui/utils/common/CometProgressRingUtils'
import React from 'react'
import BaseLoadingStateElementReact from '../base-loading-state-element-react/BaseLoadingStateElement.react'

const strokeWidth = 2
const defaultClass = 'always-enable-animations'

type CometProgressRingIndeterminateReactProps = {
  color: string
  size: number
  className?: string
}

export default function CometProgressRingIndeterminateReact({
  color,
  size,
  className,
}: CometProgressRingIndeterminateReactProps) {
  const classes = useStyles()

  const ringColor = getRingColor(color)
  const { foregroundColor } = ringColor

  var strokeDasharray = (size - strokeWidth) * Math.PI

  const useCurrentDisplayMode = 'dark' === 'dark'

  const obj = getRingGifUrl(
    color,
    size.toString(),
    useCurrentDisplayMode ? 'dark' : 'light',
  )

  return (
    <BaseLoadingStateElementReact
      className={mergeClasses(classes.root, className)}
    >
      {color === 'dark' ? (
        // xa4qsjk x1kfoseq x1bndym7 x1u6ievf x1wnkzza
        <svg
          className={`${defaultClass} ${classes.svg}`}
          height={size}
          width={size}
          viewBox={'0 0 ' + size + ' ' + size}
        >
          <circle
            className={mergeClasses(
              defaultClass,
              classes.foregroundCircle,
              size === 12 && classes.foregroundCircle12,
              size === 16 && classes.foregroundCircle16,
              size === 20 && classes.foregroundCircle20,
              size === 24 && classes.foregroundCircle24,
              size === 32 && classes.foregroundCircle32,
              size === 48 && classes.foregroundCircle48,
              size === 60 && classes.foregroundCircle60,
              size === 72 && classes.foregroundCircle72,
            )}
            cx={size / 2}
            cy={size / 2}
            fill="none"
            r={(size - strokeWidth) / 2}
            stroke={foregroundColor}
            strokeDasharray={strokeDasharray}
            strokeWidth={strokeWidth}
          />
        </svg>
      ) : (
        <div
          style={{
            width: size,
            height: size,
          }}
        />

        //   children: h.jsx(c("CometImageFromIXValue.react"), {
        //     source: l,
        //     testid: void 0
        // })
      )}
    </BaseLoadingStateElementReact>
  )
}

const useStyles = makeStyles({
  svg: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        transform: 'rotate(-90deg)',
      },

      '25%': {
        transform: 'rotate(90deg)',
      },

      '50%': {
        transform: 'rotate(270deg)',
      },

      '75%': {
        transform: 'rotate(450deg)',
      },

      '100%': {
        transform: 'rotate(990deg)',
      },
    },
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(0,0,1,1)',
  },

  animationFillModeAndTimingFn: {
    animationFillMode: 'both',
    animationTimingFunction: 'cubic-bezier(0,0,1,1)',
  },

  foregroundCircle: {
    animationDuration: '2s',
    animationFillMode: 'both',
    animationIterationCount: 'xa4qsjk',
    animationTimingFunction: 'infinite',
    transformOrigin: '50% 50%',
  },
  foregroundCircle12: {
    animationName: {
      '0%': {
        strokeDashoffset: '6.3px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '28.3px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '14.1px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '28.3px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '6.3px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle16: {
    animationName: {
      '0%': {
        strokeDashoffset: '8.8px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '39.6px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '19.8px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '39.6px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '8.8px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle20: {
    animationName: {
      '0%': {
        strokeDashoffset: '11.3px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '50.9px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '25.4px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '50.9px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '11.3px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle24: {
    animationName: {
      '0%': {
        strokeDashoffset: '13.8px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: ' 62.2px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '31.1px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '62.2px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '13.8px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle32: {
    animationName: {
      '0%': {
        strokeDashoffset: '18.8px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '84.8px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '42.4px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '84.8px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '18.8px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle48: {
    animationName: {
      '0%': {
        strokeDashoffset: '28.9px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '130px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '65px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '130px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '28.9px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle60: {
    animationName: {
      '0%': {
        strokeDashoffset: '36.4px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '164px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '82px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '164px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '36.4px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  foregroundCircle72: {
    animationName: {
      '0%': {
        strokeDashoffset: '43.98px',
        transform: 'rotate(-90deg)',
      },

      '25%': {
        strokeDashoffset: '197.9px',
        transform: 'rotate(162deg)',
      },

      '50%': {
        strokeDashoffset: '98.9px',
        transform: 'rotate(72deg)',
      },

      '75%': {
        strokeDashoffset: '197.9px',
        transform: 'rotate(162deg)',
      },

      '100%': {
        strokeDashoffset: '43.98px',
        transform: 'rotate(-90deg)',
      },
    },
  },
  root: {
    display: 'flex',
  },
  rotationCircle: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: {
      '0%': {
        transform: 'rotate(-90deg)',
      },

      '25%': {
        transform: 'rotate(90deg)',
      },

      '50%': {
        transform: 'rotate(270deg)',
      },

      '75%': {
        transform: 'rotate(450deg)',
      },

      '100%': {
        transform: 'rotate(990deg)',
      },
    },
    animationTimingFunction: 'steps(10,end)',
    transformOrigin: '50% 50%',
  },
})

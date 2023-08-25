import { BaseRowContext } from '@ui/context'
import { forwardRef, useContext } from 'react'
import { BaseViewReact } from '../base-view-react'
import { makeStyles, mergeClasses } from '@griffel/react'

type BaseRowItemReactProps = {
  expanding?: boolean
  useDeprecatedStyles?: boolean
  verticalAlign: string
}

const BaseRowItemReact = forwardRef<
  HTMLDivElement,
  BaseRowItemReactProps & JSX.IntrinsicElements['div']
>(
  (
    {
      verticalAlign,
      className,
      expanding = false,
      useDeprecatedStyles = false,
      ...rest
    },
    ref,
  ) => {
    const { columns, wrap } = useContext(BaseRowContext)

    const classes = useStyles()
    const columnsClasses = useColumnStyles()
    const verticalAlignClasses = useVerticalAlignStyles()

    return (
      <BaseViewReact
        {...rest}
        ref={ref}
        className={mergeClasses(
          useDeprecatedStyles ? classes.item_DEPRECATED : classes.item,
          expanding && classes.expanding,
          expanding && wrap !== 'none' && classes.expandingWithWrap,
          // @ts-ignore
          columns > 0 && columnsClasses[columns],
          // @ts-ignore
          verticalAlign != null && verticalAlignClasses[verticalAlign],
          className,
        )}
      />
    )
  },
)

BaseRowItemReact.displayName = 'BaseRowItem.react'

export default BaseRowItemReact

const useStyles = makeStyles({
  expanding: {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
  },
  expandingWithWrap: {
    flexBasis: '100%',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    maxWidth: '100%',
    minWidth: 0,
  },
  item_DEPRECATED: {
    maxWidth: '100%',
    minWidth: 0,
  },
})

const useColumnStyles = makeStyles({
  1: {
    flexBasis: '100%',
  },
  2: {
    flexBasis: '50%',
  },
  3: {
    flexBasis: 'calc(100% / 3)',
  },
  4: {
    flexBasis: '25%',
  },
  5: {
    flexBasis: '20%',
  },
  6: {
    flexBasis: 'calc(100% / 6)',
  },
  7: {
    flexBasis: 'calc(100% / 7)',
  },
  8: {
    flexBasis: '12.5%',
  },
  9: {
    flexBasis: 'calc(100% / 9)',
  },
  10: {
    flexBasis: '10%',
  },
})

const useVerticalAlignStyles = makeStyles({
  bottom: {
    alignSelf: 'flex-end',
  },
  center: {
    alignSelf: 'center',
  },
  stretch: {
    alignSelf: 'stretch',
  },
  top: {
    alignSelf: 'flex-start',
  },
})

// __d(
//   'BaseRowItem.react',
//   ['BaseRowContext', 'BaseView.react', 'react'],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var h = d('react'),
//       i = d('react').useContext,
//       j = {
//         expanding: {
//           flexBasis: 'x1r8uery',
//           flexGrow: 'x1iyjqo2',
//           flexShrink: 'xs83m0k',
//         },
//         expandingWithWrap: {
//           flexBasis: 'x1l7klhg',
//         },
//         item: {
//           display: 'x78zum5',
//           flexDirection: 'xdt5ytf',
//           flexShrink: 'x2lah0s',
//           maxWidth: 'x193iq5w',
//           minWidth: 'xeuugli',
//         },
//         item_DEPRECATED: {
//           maxWidth: 'x193iq5w',
//           minWidth: 'xeuugli',
//         },
//       },
//       k = {
//         1: {
//           flexBasis: 'x1l7klhg',
//         },
//         2: {
//           flexBasis: 'x4pfjvb',
//         },
//         3: {
//           flexBasis: 'x1upgvki',
//         },
//         4: {
//           flexBasis: 'xhnlq4v',
//         },
//         5: {
//           flexBasis: 'x15foiic',
//         },
//         6: {
//           flexBasis: 'xd8mu38',
//         },
//         7: {
//           flexBasis: 'xjtu8lc',
//         },
//         8: {
//           flexBasis: 'xvuwby9',
//         },
//         9: {
//           flexBasis: 'x1m2iiog',
//         },
//         10: {
//           flexBasis: 'x3cfelu',
//         },
//       },
//       l = {
//         bottom: {
//           alignSelf: 'xpvyfi4',
//         },
//         center: {
//           alignSelf: 'xamitd3',
//         },
//         stretch: {
//           alignSelf: 'xkh2ocl',
//         },
//         top: {
//           alignSelf: 'xqcrz7y',
//         },
//       }
//     function BaseRowItem(props, b) {
//       var expanding = props.expanding
//       expanding = expanding === void 0 ? !1 : expanding
//       var useDeprecatedStyles = props.useDeprecatedStyles
//       useDeprecatedStyles =
//         useDeprecatedStyles === void 0 ? !1 : useDeprecatedStyles
//       var verticalAlign = props.verticalAlign,
//         xstyle = props.xstyle
//       props = babelHelpers.objectWithoutPropertiesLoose(props, [
//         'expanding',
//         'useDeprecatedStyles',
//         'verticalAlign',
//         'xstyle',
//       ])
//       var BaseRowContextValue = i(c('BaseRowContext')),
//         columns = BaseRowContextValue.columns
//       BaseRowContextValue = BaseRowContextValue.wrap
//       return h.jsx(
//         c('BaseView.react'),
//         babelHelpers['extends']({}, props, {
//           ref: b,
//           xstyle: [
//             useDeprecatedStyles ? j.item_DEPRECATED : j.item,
//             expanding && j.expanding,
//             expanding && BaseRowContextValue !== 'none' && j.expandingWithWrap,
//             columns > 0 && k[columns],
//             verticalAlign != null && l[verticalAlign],
//             xstyle,
//           ],
//         }),
//       )
//     }
//     a.displayName = a.name + ' [from ' + f.id + ']'
//     BaseRowItem = h.forwardRef(a)
//     g['default'] = BaseRowItem
//   },
//   98,
// )

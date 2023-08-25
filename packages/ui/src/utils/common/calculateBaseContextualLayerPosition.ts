// type Props = {
//   align: string
//   contextRect: {
//     bottom: number
//     left: number
//     right: number
//     top: number
//   }
//   contextualLayerSize: {
//     height: number
//     width: number
//   }
//   fixed: boolean
//   offsetRect: {
//     bottom: number
//     left: number
//     right: number
//     top: number
//   }
//   position: string
//   screenRect: {
//     bottom: number
//     left: number
//     right: number
//     top: number
//   }
// }

// const isRTL = false

// export function calculateBaseContextualLayerPosition({
//   align,
//   contextRect,
//   contextualLayerSize,
//   fixed,
//   offsetRect,
//   position,
//   screenRect,
// }: Props) {
//   let e = {
//     height: undefined,
//     position: fixed ? 'fixed' : undefined,
//     transform: '',
//     width: undefined,
//   }

//   var i = 0,
//     j = 0

//   let k: any = 0
//   let l: any = 0

//   let m = (contextRect.bottom + contextRect.top) / 2,
//     n = (contextRect.left + contextRect.right) / 2,
//     o = isRTL ? 'start' : 'end',
//     p = isRTL ? 'end' : 'start'

//   switch (position) {
//     case 'above':
//       j = contextRect.top - offsetRect.top
//       l = '-100%'
//       break
//     case 'below':
//       j = contextRect.bottom - offsetRect.top
//       break
//     case p:
//       i = contextRect.left - offsetRect.left
//       k = '-100%'
//       break
//     case o:
//       i = contextRect.right - offsetRect.left
//       break
//   }

//   if (position === 'start' || position === 'end') {
//     switch (align) {
//       case 'start':
//         j = contextRect.top - offsetRect.top
//         break
//       case 'middle':
//         j = m - offsetRect.top
//         l = '-50%'
//         break
//       case 'end':
//         j = contextRect.bottom - offsetRect.top
//         l = '-100%'
//         break
//       case 'stretch':
//         j = contextRect.top - offsetRect.top
//         // @ts-ignore
//         e.height = contextRect.bottom - contextRect.top + 'px'
//         break
//     }
//   } else if (position === 'above' || position === 'below') {
//     switch (align) {
//       case p:
//         i = contextRect.left - offsetRect.left
//         break
//       case 'middle':
//         i = n - offsetRect.left
//         k = '-50%'
//         break
//       case o:
//         i = contextRect.right - offsetRect.left
//         k = '-100%'
//         break
//       case 'stretch':
//         i = contextRect.left - offsetRect.left
//         // @ts-ignore
//         e.width = contextRect.right - contextRect.left + 'px'
//         break
//     }
//   }

//   let tmp = 0

//   if (contextualLayerSize != null) {
//     if (position === 'start' || position === 'end') {
//       var q = null
//       switch (align) {
//         case 'start':
//           q = contextRect.top
//           break
//         case 'middle':
//           q = m - contextualLayerSize.height / 2
//           break
//         case 'end':
//           q = contextRect.bottom - contextualLayerSize.height
//           break
//       }
//       q != null &&
//         (q < screenRect.top
//           ? (tmp = screenRect.top - q)
//           : q + contextualLayerSize.height > screenRect.bottom &&
//             (tmp = screenRect.bottom - q - contextualLayerSize.height))
//       j += tmp
//     } else if (position === 'above' || position === 'below') {
//       let temp = null
//       switch (align) {
//         case p:
//           temp = contextRect.left
//           break
//         case 'middle':
//           temp = n - contextualLayerSize.width / 2
//           break
//         case o:
//           temp = contextRect.right - contextualLayerSize.width
//           break
//       }
//       temp != null &&
//         (temp < screenRect.left
//           ? (tmp = screenRect.left - temp)
//           : temp + contextualLayerSize.width > screenRect.right &&
//             (tmp = screenRect.right - temp - contextualLayerSize.width))
//       i += tmp
//     }
//   }

//   let txt = ''

//   if (i !== 0 || j !== 0) {
//     txt += 'translate(' + Math.round(i) + 'px, ' + Math.round(j) + 'px) '
//   }

//   if (k !== 0 || l !== 0) {
//     txt += 'translate(' + k + ', ' + l + ') '
//   }

//   // ;(i !== 0 || j !== 0) &&
//   //   (txt += 'translate(' + Math.round(i) + 'px, ' + Math.round(j) + 'px) ')
//   // ;(k !== 0 || l !== 0) && (txt += 'translate(' + k + ', ' + l + ') ')

//   e.transform = txt
//   return {
//     adjustment: offsetRect,
//     style: fixed,
//   }
// }

type PositioningProps = {
  align: string
  contextRect: {
    bottom: number
    left: number
    right: number
    top: number
  }
  contextualLayerSize: {
    height: number
    width: number
  }
  fixed: boolean
  offsetRect: {
    bottom: number
    left: number
    right: number
    top: number
  }
  position: string
  screenRect: {
    bottom: number
    left: number
    right: number
    top: number
  }
}

const isRTL = false

export function calculateBaseContextualLayerPosition({
  align,
  contextRect,
  contextualLayerSize,
  fixed: isFixed,
  offsetRect,
  position,
  screenRect,
}: PositioningProps) {
  let transformationStyles = {
    height: undefined,
    position: isFixed ? 'fixed' : undefined,
    transform: '',
    width: undefined,
  }

  let horizontalTranslation = 0
  let verticalTranslation = 0
  let horizontalTranslateValue: any = 0
  let verticalTranslateValue: any = 0

  let middleVertical = (contextRect.bottom + contextRect.top) / 2
  let middleHorizontal = (contextRect.left + contextRect.right) / 2
  let startAlign = isRTL ? 'start' : 'end'
  let endAlign = isRTL ? 'end' : 'start'

  switch (position) {
    case 'above':
      verticalTranslation = contextRect.top - offsetRect.top
      verticalTranslateValue = '-100%'
      break
    case 'below':
      verticalTranslation = contextRect.bottom - offsetRect.top
      break
    case endAlign:
      horizontalTranslation = contextRect.left - offsetRect.left
      horizontalTranslateValue = '-100%'
      break
    case startAlign:
      horizontalTranslation = contextRect.right - offsetRect.left
      break
  }

  if (position === startAlign || position === endAlign) {
    switch (align) {
      case startAlign:
        verticalTranslation = contextRect.top - offsetRect.top
        break
      case 'middle':
        verticalTranslation = middleVertical - offsetRect.top
        verticalTranslateValue = '-50%'
        break
      case endAlign:
        verticalTranslation = contextRect.bottom - offsetRect.top
        verticalTranslateValue = '-100%'
        break
      case 'stretch':
        verticalTranslation = contextRect.top - offsetRect.top
        // @ts-ignore
        transformationStyles.height =
          contextRect.bottom - contextRect.top + 'px'
        break
    }
  } else if (position === 'above' || position === 'below') {
    switch (align) {
      case endAlign:
        horizontalTranslation = contextRect.left - offsetRect.left
        break
      case 'middle':
        horizontalTranslation = middleHorizontal - offsetRect.left
        horizontalTranslateValue = '-50%'
        break
      case startAlign:
        horizontalTranslation = contextRect.right - offsetRect.left
        horizontalTranslateValue = '-100%'
        break
      case 'stretch':
        horizontalTranslation = contextRect.left - offsetRect.left
        // @ts-ignore
        transformationStyles.width = contextRect.right - contextRect.left + 'px'
        break
    }
  }

  let additionalTranslation = 0

  if (contextualLayerSize != null) {
    if (position === startAlign || position === endAlign) {
      let verticalPosition = null
      switch (align) {
        case startAlign:
          verticalPosition = contextRect.top
          break
        case 'middle':
          verticalPosition = middleVertical - contextualLayerSize.height / 2
          break
        case endAlign:
          verticalPosition = contextRect.bottom - contextualLayerSize.height
          break
      }
      if (verticalPosition != null) {
        if (verticalPosition < screenRect.top) {
          additionalTranslation = screenRect.top - verticalPosition
        } else if (
          verticalPosition + contextualLayerSize.height >
          screenRect.bottom
        ) {
          additionalTranslation =
            screenRect.bottom - verticalPosition - contextualLayerSize.height
        }
        verticalTranslation += additionalTranslation
      }
    } else if (position === 'above' || position === 'below') {
      let horizontalPosition = null
      switch (align) {
        case endAlign:
          horizontalPosition = contextRect.left
          break
        case 'middle':
          horizontalPosition = middleHorizontal - contextualLayerSize.width / 2
          break
        case startAlign:
          horizontalPosition = contextRect.right - contextualLayerSize.width
          break
      }
      if (horizontalPosition != null) {
        if (horizontalPosition < screenRect.left) {
          additionalTranslation = screenRect.left - horizontalPosition
        } else if (
          horizontalPosition + contextualLayerSize.width >
          screenRect.right
        ) {
          additionalTranslation =
            screenRect.right - horizontalPosition - contextualLayerSize.width
        }
        horizontalTranslation += additionalTranslation
      }
    }
  }

  let transformationText = ''

  if (horizontalTranslation !== 0 || verticalTranslation !== 0) {
    transformationText += `translate(${Math.round(
      horizontalTranslation,
    )}px, ${Math.round(verticalTranslation)}px) `
  }

  if (horizontalTranslateValue !== 0 || verticalTranslateValue !== 0) {
    transformationText += `translate(${horizontalTranslateValue}, ${verticalTranslateValue}) `
  }

  transformationStyles.transform = transformationText
  return {
    adjustment: offsetRect,
    style: transformationStyles,
  }
}

// __d(
//   'calculateBaseContextualLayerPosition',
//   ['Locale'],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     var isRTL = d('Locale').isRTL()
//     function a(a) {
//       var align = a.align,
//         contextRect = a.contextRect,
//         contextualLayerSize = a.contextualLayerSize,
//         fixed = a.fixed,
//         offsetRect = a.offsetRect,
//         position = a.position
//       a = a.screenRect
//       fixed = {
//         height: void 0,
//         position: fixed ? 'fixed' : void 0,
//         transform: '',
//         width: void 0,
//       }
//       var i = 0,
//         j = 0,
//         k = 0,
//         l = 0,
//         m = (contextRect.bottom + contextRect.top) / 2,
//         n = (contextRect.left + contextRect.right) / 2,
//         o = isRTL ? 'start' : 'end',
//         p = isRTL ? 'end' : 'start'
//       switch (position) {
//         case 'above':
//           j = contextRect.top - offsetRect.top
//           l = '-100%'
//           break
//         case 'below':
//           j = contextRect.bottom - offsetRect.top
//           break
//         case p:
//           i = contextRect.left - offsetRect.left
//           k = '-100%'
//           break
//         case o:
//           i = contextRect.right - offsetRect.left
//           break
//       }
//       if (position === 'start' || position === 'end')
//         switch (align) {
//           case 'start':
//             j = contextRect.top - offsetRect.top
//             break
//           case 'middle':
//             j = m - offsetRect.top
//             l = '-50%'
//             break
//           case 'end':
//             j = contextRect.bottom - offsetRect.top
//             l = '-100%'
//             break
//           case 'stretch':
//             j = contextRect.top - offsetRect.top
//             fixed.height = contextRect.bottom - contextRect.top + 'px'
//             break
//         }
//       else if (position === 'above' || position === 'below')
//         switch (align) {
//           case p:
//             i = contextRect.left - offsetRect.left
//             break
//           case 'middle':
//             i = n - offsetRect.left
//             k = '-50%'
//             break
//           case o:
//             i = contextRect.right - offsetRect.left
//             k = '-100%'
//             break
//           case 'stretch':
//             i = contextRect.left - offsetRect.left
//             fixed.width = contextRect.right - contextRect.left + 'px'
//             break
//         }
//       offsetRect = 0
//       if (contextualLayerSize != null)
//         if (position === 'start' || position === 'end') {
//           var q = null
//           switch (align) {
//             case 'start':
//               q = contextRect.top
//               break
//             case 'middle':
//               q = m - contextualLayerSize.height / 2
//               break
//             case 'end':
//               q = contextRect.bottom - contextualLayerSize.height
//               break
//           }
//           q != null &&
//             (q < a.top
//               ? (offsetRect = a.top - q)
//               : q + contextualLayerSize.height > a.bottom &&
//                 (offsetRect = a.bottom - q - contextualLayerSize.height))
//           j += offsetRect
//         } else if (position === 'above' || position === 'below') {
//           m = null
//           switch (align) {
//             case p:
//               m = contextRect.left
//               break
//             case 'middle':
//               m = n - contextualLayerSize.width / 2
//               break
//             case o:
//               m = contextRect.right - contextualLayerSize.width
//               break
//           }
//           m != null &&
//             (m < a.left
//               ? (offsetRect = a.left - m)
//               : m + contextualLayerSize.width > a.right &&
//                 (offsetRect = a.right - m - contextualLayerSize.width))
//           i += offsetRect
//         }
//       q = ''
//       ;(i !== 0 || j !== 0) &&
//         (q += 'translate(' + Math.round(i) + 'px, ' + Math.round(j) + 'px) ')
//       ;(k !== 0 || l !== 0) && (q += 'translate(' + k + ', ' + l + ') ')
//       fixed.transform = q
//       return {
//         adjustment: offsetRect,
//         style: fixed,
//       }
//     }
//     g['default'] = a
//   },
//   98,
// )

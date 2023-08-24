import getComputedStyle from './getComputedStyle'

export default function isElementFixedOrSticky(element: any) {
  let elClone = element
  while (elClone != null && elClone !== element.ownerDocument) {
    const style = getComputedStyle(elClone)
    if (style == null) {
      return false
    }
    const position = style.getPropertyValue('position')
    if (position === 'fixed' || position === 'sticky') {
      return true
    }
    elClone = elClone.parentElement
  }

  return false
}

// __d(
//   'isElementFixedOrSticky',
//   ['getComputedStyle'],
//   function (a, b, c, d, e, f, g) {
//     'use strict'
//     function a(a) {
//       var b = a
//       while (b != null && b !== a.ownerDocument) {
//         var d = c('getComputedStyle')(b)
//         if (d == null) return !1
//         d = d.getPropertyValue('position')
//         if (d === 'fixed' || d === 'sticky') return !0
//         b = b.parentElement
//       }
//       return !1
//     }
//     g['default'] = a
//   },
//   98,
// )

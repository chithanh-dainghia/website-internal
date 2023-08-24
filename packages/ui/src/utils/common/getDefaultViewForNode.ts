// __d(
//   'getDefaultViewForNode',
//   [],
//   function (a, b, c, d, e, f) {
//     'use strict'
//     function a(el) {
//       el = el === document ? document : el.ownerDocument
//       return el.defaultView
//     }
//     f['default'] = a
//   },
//   66,
// )

export default function getDefaultViewForNode(el: any) {
  const doc = el === document ? document : el.ownerDocument
  return doc.defaultView
}

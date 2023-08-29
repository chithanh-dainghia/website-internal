const htmlTabindex = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'tabIndex',
)

const svgTabindex = Object.getOwnPropertyDescriptor(
  SVGElement.prototype,
  'tabIndex',
)
const selfFn = (element: any) => element

var htmlTabindexSet = htmlTabindex ? htmlTabindex.set : selfFn,
  svgTabindexSet = svgTabindex ? svgTabindex.set : selfFn

function getTabindexSet(element: any) {
  return element instanceof SVGElement ? svgTabindexSet : htmlTabindexSet
}

export function setElementCanTab(element: any, canTab: boolean, option?: any) {
  option === undefined && (option = false)

  const _tabIndexState = element._tabIndexState
  const tabindexSet = getTabindexSet(element)

  if (!_tabIndexState) {
    canTab && option && element.tabIndex < 0 && (element.tabIndex = 0)
    const new_TabIndexState = {
      value: element.tabIndex,
      canTab: canTab,
    }
    element._tabIndexState = new_TabIndexState
    canTab || (element.tabIndex = -1)
    Object.defineProperty(element, 'tabIndex', {
      enumerable: false,
      configurable: true,
      get: function () {
        return new_TabIndexState.canTab ? new_TabIndexState.value : -1
      },
      set: function (value) {
        new_TabIndexState.canTab &&
          typeof tabindexSet === 'function' &&
          tabindexSet.call(this, value),
          (new_TabIndexState.value = value)
      },
    })
  } else
    _tabIndexState.canTab !== canTab &&
      typeof tabindexSet === 'function' &&
      (tabindexSet.call(element, canTab ? _tabIndexState.value : -1),
      (_tabIndexState.canTab = canTab))
}

export function canElementTab(element: any) {
  const _tabIndexState = element._tabIndexState
  if (!_tabIndexState) {
    return element.tabIndex > 0
  } else {
    return _tabIndexState.canTab
  }
}

// __d(
//   'setElementCanTab',
//   [],
//   function (a, b, htmlTabindex, svgTabindex, selfFn, f) {
//     htmlTabindex = Object.getOwnPropertyDescriptor(
//       HTMLElement.prototype,
//       'tabIndex',
//     )
//     svgTabindex = Object.getOwnPropertyDescriptor(
//       SVGElement.prototype,
//       'tabIndex',
//     )
//     selfFn = function (a) {
//       return a
//     }
//     var htmlTabindexSet = htmlTabindex ? htmlTabindex.set : selfFn,
//       svgTabindexSet = svgTabindex ? svgTabindex.set : selfFn
//     function getTabindexSet(element) {
//       return element instanceof SVGElement ? svgTabindexSet : htmlTabindexSet
//     }
//     function setElementCanTab(element, b, c) {
//       c === void 0 && (c = !1)
//       var _tabIndexState = element._tabIndexState,
//         tabindexSet = getTabindexSet(element)
//       if (!_tabIndexState) {
//         b && c && element.tabIndex < 0 && (element.tabIndex = 0)
//         var f = {
//           value: element.tabIndex,
//           canTab: b,
//         }
//         element._tabIndexState = f
//         b || (element.tabIndex = -1)
//         Object.defineProperty(element, 'tabIndex', {
//           enumerable: !1,
//           configurable: !0,
//           get: function () {
//             return f.canTab ? f.value : -1
//           },
//           set: function (a) {
//             f.canTab &&
//               typeof tabindexSet === 'function' &&
//               tabindexSet.call(this, a),
//               (f.value = a)
//           },
//         })
//       } else
//         _tabIndexState.canTab !== b &&
//           typeof tabindexSet === 'function' &&
//           (tabindexSet.call(element, b ? _tabIndexState.value : -1),
//           (_tabIndexState.canTab = b))
//     }
//     function canElementTab(element) {
//       var _tabIndexState = element._tabIndexState
//       if (!_tabIndexState) return element.tabIndex > 0
//       else return _tabIndexState.canTab
//     }
//     f.setElementCanTab = setElementCanTab
//     f.canElementTab = canElementTab
//   },
//   66,
// )

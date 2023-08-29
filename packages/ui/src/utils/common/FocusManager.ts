import getTabbableNodes from './getTabbableNodes'

const k = 500
const h = false
let i = false
let j = false

function applyScrollPositions(element: any) {
  for (var index = 0; index < element.length; index++) {
    var elementPos = element[index],
      elPos0 = elementPos[0],
      elPos1 = elementPos[1]
    elementPos = elementPos[2]
    elPos0.scrollTop = elPos1
    elPos0.scrollLeft = elementPos
  }
}

const focusElementWithOptions = function (element: any, options?: any) {
  ;(element.focus || HTMLElement.prototype.focus).call(element, options)
}

function preventFocusScrollFunction() {
  try {
    const devElement = document.createElement('div')
    devElement.addEventListener(
      'focus',
      function (focusEvent) {
        focusEvent.preventDefault(), focusEvent.stopPropagation()
      },
      true,
    )
    devElement.focus(
      Object.defineProperty({}, 'preventScroll', {
        get: function () {
          i = true
        },
      }),
    )
  } catch (a) {}
}

function findScrollableElementsWithScrollPositions(element: any) {
  let parentElement = element.parentElement
  const arr = []
  const scrollingOrDoc = document.scrollingElement || document.documentElement

  while (parentElement && parentElement !== scrollingOrDoc) {
    const { offsetHeight, offsetWidth } = parentElement

    if (
      offsetHeight < parentElement.scrollHeight ||
      offsetWidth < element.scrollWidth
    ) {
      arr.push([
        parentElement,
        parentElement.scrollTop,
        parentElement.scrollLeft,
      ])
    }

    // ;(offsetHeight < parentElement.scrollHeight ||
    //   offsetWidth < element.scrollWidth) &&
    //   arr.push([
    //     parentElement,
    //     parentElement.scrollTop,
    //     parentElement.scrollLeft,
    //   ])

    parentElement = parentElement.parentElement
  }
  scrollingOrDoc &&
    arr.push([
      scrollingOrDoc,
      scrollingOrDoc.scrollTop,
      scrollingOrDoc.scrollLeft,
    ])
  return arr
}

export function getAllNodesFromOneOrManyQueries(
  focusArr: ((...param: any) => any)[],
  node: any,
) {
  focusArr = Array.isArray(focusArr) ? focusArr : [focusArr]
  for (var index = 0; index < focusArr.length; index++) {
    const nodeList = node.DO_NOT_USE_queryAllNodes(focusArr[index])
    if (nodeList) {
      return nodeList
    }
  }
  return null
}

export function getFirstNodeFromOneOrManyQueries(
  focusArr: ((...param: any) => any)[],
  node: any,
) {
  focusArr = Array.isArray(focusArr) ? focusArr : [focusArr]
  for (var index = 0; index < focusArr.length; index++) {
    var firstNode = node.DO_NOT_USE_queryFirstNode(focusArr[index])
    if (firstNode) {
      return firstNode
    }
  }
  return null
}

export function focusFirst(
  focusArr: ((...param: any) => any)[],
  node: any,
  options?: any,
) {
  options = options || {}

  const { preventScroll, focusWithoutUserIntent, focusWithAutoFocus } = options

  const nodeList = getFirstNodeFromOneOrManyQueries(focusArr, node)
  nodeList !== null &&
    focusElement(nodeList, {
      preventScroll,
      focusWithoutUserIntent,
      focusWithAutoFocus,
    })
}

export function isFocusingWithoutUserIntent() {
  return h
}

export function wasElementAutoFocused(element: any) {
  return element._focusWithAutoFocus === true
}

export function focusElement(element?: any, options?: any) {
  const {
    focusWithAutoFocus,
    preventScroll = false,
    focusWithoutUserIntent,
  } = options

  if (element !== null) {
    j || ((j = !0), preventFocusScrollFunction())
    var _tabIndexState = element._tabIndexState
    if (_tabIndexState && _tabIndexState.canTab === false) {
      return
    }
    const tabIndex = _tabIndexState ? _tabIndexState.value : element.tabIndex
    element.tabIndex = -1
    var f = h
    focusWithAutoFocus === true &&
      ((element._focusWithAutoFocus = true),
      window.setTimeout(function () {
        element._focusWithAutoFocus = false
      }, k))
    try {
      let _focusWithoutUserIntent = focusWithoutUserIntent || false

      const lexicalEditor = element.__lexicalEditor

      if (lexicalEditor !== undefined) {
        lexicalEditor.focus()
      } else if (!preventScroll) {
        focusElementWithOptions(element)
      } else if (i)
        focusElementWithOptions(element, {
          preventScroll: true,
        })
      else {
        const _m = findScrollableElementsWithScrollPositions(element)
        focusElementWithOptions(element)
        applyScrollPositions(_m)
      }
    } catch (a) {
    } finally {
      // _focusWithoutUserIntent = f
    }

    element.tabIndex = tabIndex
  }
}

export function focusNext(fn: any, b: any, preventScroll: any) {
  const tabbableNodeList = getTabbableNodes(fn, b)

  tabbableNodeList[4] !== null &&
    tabbableNodeList[4] !== tabbableNodeList[2] &&
    tabbableNodeList[0] &&
    focusElement(tabbableNodeList[0][tabbableNodeList[3] + 1], {
      preventScroll,
    })
}

export function focusPrevious(fn: any, b: any, preventScroll: any) {
  const tabbableNodeList = getTabbableNodes(fn, b)

  tabbableNodeList[4] !== null &&
    tabbableNodeList[4] !== tabbableNodeList[1] &&
    tabbableNodeList[0] &&
    focusElement(tabbableNodeList[0][tabbableNodeList[3] - 1], {
      preventScroll,
    })
}

export function focusNextContained(a: any, b: any, d: any, e: any, f: any) {
  a = getTabbableNodes(a, b)
  b = a[0]
  var g = a[1],
    h = a[2],
    i = a[3]
  a = a[4]
  if (a === null || b === null) return
  a === h
    ? f != null
      ? f()
      : e === !0 && (focusElement(g), d.preventDefault(), d.stopPropagation())
    : (focusElement(b[i + 1]), d.preventDefault(), d.stopPropagation())
}

export function focusPreviousContained(a: any, b: any, d: any, e: any, f: any) {
  a = getTabbableNodes(a, b)
  b = a[0]
  var g = a[1],
    h = a[2],
    i = a[3]
  a = a[4]
  if (a === null || b === null) return
  a === g
    ? f != null
      ? f()
      : e === !0 && (focusElement(h), d.preventDefault(), d.stopPropagation())
    : (focusElement(b[i - 1]), d.preventDefault(), d.stopPropagation())
}

/**


__d(
  'FocusManager',
  ['getTabbableNodes'],
  function (a, b, c, d, e, focusNext, g) {
    var h = !1,
      i = !1,
      j = !1,
      k = 500
    function preventFocusScrollFunction() {
      try {
        var devElement = document.createElement('div')
        devElement.addEventListener(
          'focus',
          function (focusEvent) {
            focusEvent.preventDefault(), focusEvent.stopPropagation()
          },
          !0,
        )
        devElement.focus(
          Object.defineProperty({}, 'preventScroll', {
            get: function () {
              i = !0
            },
          }),
        )
      } catch (a) {}
    }
    function findScrollableElementsWithScrollPositions(a) {
      a = a.parentElement
      var b = [],
        c = document.scrollingElement || document.documentElement
      while (a && a !== c) {
        var d = a,
          e = d.offsetHeight
        d = d.offsetWidth
        ;(e < a.scrollHeight || d < a.scrollWidth) &&
          b.push([a, a.scrollTop, a.scrollLeft])
        a = a.parentElement
      }
      c && b.push([c, c.scrollTop, c.scrollLeft])
      return b
    }
    function applyScrollPositions(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b],
          d = c[0],
          e = c[1]
        c = c[2]
        d.scrollTop = e
        d.scrollLeft = c
      }
    }
    function getAllNodesFromOneOrManyQueries(
      focusArr: ((...param: any) => any)[],
      node: any,
    ) {
      focusArr = Array.isArray(focusArr) ? focusArr : [focusArr]
      for (var index = 0; index < focusArr.length; index++) {
        var nodeList = node.DO_NOT_USE_queryAllNodes(focusArr[index])
        if (nodeList) return nodeList
      }
      return null
    }
    function getFirstNodeFromOneOrManyQueries(
      focusArr: ((...param: any) => any)[],
      node: any,
    ) {
      focusArr = Array.isArray(focusArr) ? focusArr : [focusArr]
      for (var index = 0; index < focusArr.length; index++) {
        var firstNode = node.DO_NOT_USE_queryFirstNode(focusArr[index])
        if (firstNode) return  firstNode 
      }
      return null
    }
    function focusFirst(
      focusArr: ((...param: any) => any)[],
      node: any,
      options?: any,
    ) {
      options = options || {}

      const { preventScroll, focusWithoutUserIntent, focusWithAutoFocus } =
        options

      const nodeList = getFirstNodeFromOneOrManyQueries(focusArr, node)
      nodeList !== null &&
        focusElement(nodeList, {
          preventScroll,
          focusWithoutUserIntent,
          focusWithAutoFocus,
        })
    }
    function isFocusingWithoutUserIntent() {
      return h
    }
    function wasElementAutoFocused(a) {
      return a._focusWithAutoFocus === !0
    }
    function focusElement(element?: any, options: any) {
      options = options || {}
      var c = options.preventScroll,
        d = options.focusWithoutUserIntent

      const { focusWithAutoFocus, preventScroll, focusWithoutUserIntent } =
        options

      options = options.focusWithAutoFocus
      if (element !== null) {
        j || ((j = !0), preventFocusScrollFunction())
        var _tabIndexState = element._tabIndexState
        if (_tabIndexState && _tabIndexState.canTab === !1) return
        _tabIndexState = _tabIndexState
          ? _tabIndexState.value
          : element.tabIndex
        element.tabIndex = -1
        var f = h
        c = c || !1
        options === !0 &&
          ((element._focusWithAutoFocus = !0),
          window.setTimeout(function () {
            element._focusWithAutoFocus = !1
          }, k))
        try {
          h = d || !1
          options = element.__lexicalEditor
          if (options !== void 0) options.focus()
          else if (!c) focusElementWithOptions(element)
          else if (i)
            focusElementWithOptions(element, {
              preventScroll: !0,
            })
          else {
            d = findScrollableElementsWithScrollPositions(element)
            focusElementWithOptions(element)
            applyScrollPositions(d)
          }
        } catch (a) {
        } finally {
          h = f
        }
        element.tabIndex = _tabIndexState
      }
    }
    function focusNext(a, b, d) {
      a = c('getTabbableNodes')(a, b)
      b = a[0]
      var e = a[2],
        f = a[3]
      a = a[4]
      a !== null &&
        a !== e &&
        b &&
        focusElement(b[f + 1], {
          preventScroll: d,
        })
    }
    function focusPrevious(a, b, d) {
      a = c('getTabbableNodes')(a, b)
      b = a[0]
      var e = a[1],
        f = a[3]
      a = a[4]
      a !== null &&
        a !== e &&
        b &&
        focusElement(b[f - 1], {
          preventScroll: d,
        })
    }
    function focusNextContained(a, b, d, e, f) {
      a = c('getTabbableNodes')(a, b)
      b = a[0]
      var g = a[1],
        h = a[2],
        i = a[3]
      a = a[4]
      if (a === null || b === null) return
      a === h
        ? f != null
          ? f()
          : e === !0 &&
            (focusElement(g), d.preventDefault(), d.stopPropagation())
        : (focusElement(b[i + 1]), d.preventDefault(), d.stopPropagation())
    }
    function focusPreviousContained(a, b, d, e, f) {
      a = c('getTabbableNodes')(a, b)
      b = a[0]
      var g = a[1],
        h = a[2],
        i = a[3]
      a = a[4]
      if (a === null || b === null) return
      a === g
        ? f != null
          ? f()
          : e === !0 &&
            (focusElement(h), d.preventDefault(), d.stopPropagation())
        : (focusElement(b[i - 1]), d.preventDefault(), d.stopPropagation())
    }
    var focusElementWithOptions = function (element, options) {
      ;(element.focus || HTMLElement.prototype.focus).call(element, options)
    }
    g.getAllNodesFromOneOrManyQueries = getAllNodesFromOneOrManyQueries
    g.getFirstNodeFromOneOrManyQueries = getFirstNodeFromOneOrManyQueries
    g.focusFirst = focusFirst
    g.isFocusingWithoutUserIntent = isFocusingWithoutUserIntent
    g.wasElementAutoFocused = wasElementAutoFocused
    g.focusElement = focusElement
    g.focusNext = focusNext
    g.focusPrevious = focusPrevious
    g.focusNextContained = focusNextContained
    g.focusPreviousContained = focusPreviousContained
  },
  98,
)

 */

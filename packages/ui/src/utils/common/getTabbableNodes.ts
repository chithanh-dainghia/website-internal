export default function getTabbableNodes(fn: any, ek: any) {
  const activeElement = document.activeElement

  const isActive = function (b: any, d: any, element: HTMLElement) {
    return element === activeElement
      ? true
      : fn(b, d, element) &&
          element.offsetWidth > 0 &&
          element.offsetHeight > 0 &&
          element.tabIndex !== -1 &&
          window.getComputedStyle(element).visibility !== 'hidden'
  }
  const nodeList = activeElement ? ek.DO_NOT_USE_queryAllNodes(isActive) : null
  if (nodeList === null) return [null, null, null, 0, null]
  const d: any = {}
  for (
    var e = nodeList,
      f: any = Array.isArray(e),
      g: any = 0,
      e = f
        ? e
        : e[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();
    ;

  ) {
    var h: any
    if (f) {
      if (g >= e.length) break
      h = e[g++]
    } else {
      g = e.next()
      if (g.done) break
      h = g.value
    }
    h = h
    if (
      h instanceof HTMLInputElement &&
      h.tagName === 'INPUT' &&
      h.type === 'radio' &&
      h.name != null
    ) {
      var i
      // @ts-ignore
      d[h.name] = [].concat((i = d[h.name]) != null ? i : [], [h])
    }
  }
  var j = Object.values(d)
    .map(function (p1: any) {
      if (
        p1.find(function (a: any) {
          return a.checked
        })
      )
        return p1.filter(function (p2: any) {
          return !p2.checked
        })
      p1[0]
      p1 = p1.slice(1)
      return p1
    })
    .flat()
  const nodeListFilter = nodeList.filter(function (param: any) {
    return !j.includes(param)
  })
  i = nodeListFilter[0]
  h = nodeListFilter[nodeListFilter.length - 1]
  g = nodeListFilter.indexOf(activeElement)
  f = null
  g !== -1 && (f = nodeListFilter[g])
  return [nodeListFilter, i, h, g, f]
}

/*

__d(
  'getTabbableNodes',
  [],
  function (a, b, c, d, e, f) {
    function getTabbableNodes(fn: any, node: any) {
      var activeElement = document.activeElement,
        d = function (b, d, element: HTMLElement) {
          return element === activeElement
            ? true
            : fn(b, d, element) &&
                element.offsetWidth > 0 &&
                element.offsetHeight > 0 &&
                element.tabIndex !== -1 &&
                window.getComputedStyle(element).visibility !== 'hidden'
        }
      node = activeElement ? node.DO_NOT_USE_queryAllNodes(d) : null
      if (node === null) return [null, null, null, 0, null]
      d = {}
      for (
        var e = node,
          f = Array.isArray(e),
          g = 0,
          e = f
            ? e
            : e[
                typeof Symbol === 'function' ? Symbol.iterator : '@@iterator'
              ]();
        ;

      ) {
        var h
        if (f) {
          if (g >= e.length) break
          h = e[g++]
        } else {
          g = e.next()
          if (g.done) break
          h = g.value
        }
        h = h
        if (
          h instanceof HTMLInputElement &&
          h.tagName === 'INPUT' &&
          h.type === 'radio' &&
          h.name != null
        ) {
          var i
          d[h.name] = [].concat((i = d[h.name]) != null ? i : [], [h])
        }
      }
      var j = Object.values(d)
        .map(function (a) {
          if (
            a.find(function (a) {
              return a.checked
            })
          )
            return a.filter(function (a) {
              return !a.checked
            })
          a[0]
          a = a.slice(1)
          return a
        })
        .flat()
      node = node.filter(function (a) {
        return !j.includes(a)
      })
      i = node[0]
      h = node[node.length - 1]
      g = node.indexOf(activeElement)
      f = null
      g !== -1 && (f = node[g])
      return [node, i, h, g, f]
    }
    f['default'] = a
  },
  66,
)

*/

export function headerAndSpinnerFocusScopeQuery(
  elementType: string,
  attributes: any,
) {
  if (
    elementType === 'h1' ||
    elementType === 'h2' ||
    elementType === 'h3' ||
    (attributes.role === 'heading' &&
      (attributes['aria-level'] === 1 ||
        attributes['aria-level'] === 2 ||
        attributes['aria-level'] === 3)) ||
    attributes['aria-busy'] === true ||
    attributes.role === 'progressbar'
  ) {
    return true
  } else {
    return false
  }
}

function isNotHiddenOrFileInput(element: any) {
  return element.type !== 'hidden' && element.type !== 'file'
}

function isElementHidden(element: any) {
  return element.offsetWidth === 0 && element.offsetHeight === 0
}

export function tabbableScopeQuery(elementType: string, attributes: any) {
  if (attributes.tabIndex === -1 || attributes.disabled === true) {
    return false
  }
  if (attributes.tabIndex === 0 || attributes.contentEditable === true) {
    return true
  }
  if (elementType === 'a' || elementType === 'area') {
    return (
      attributes.href != null &&
      attributes.href !== '' &&
      attributes.rel !== 'ignore'
    )
  }
  if (elementType === 'input') {
    return isNotHiddenOrFileInput(attributes)
  }
  return (
    elementType === 'button' ||
    elementType === 'textarea' ||
    elementType === 'select' ||
    elementType === 'iframe' ||
    elementType === 'embed'
  )
}

export function focusableScopeQuery(elementType: string, attributes: any) {
  if (
    attributes.tabIndex === -1 &&
    !(
      attributes.disabled === true ||
      attributes.type === 'hidden' ||
      attributes['aria-disabled'] === true ||
      attributes['aria-hidden'] === true
    )
  ) {
    return true
  } else {
    return tabbableScopeQuery(elementType, attributes)
  }
}

export function inputFirstTabbableScopeQuery(
  elementType: string,
  attributes: any,
) {
  return elementType === 'input' && isNotHiddenOrFileInput(attributes)
}

export function displayedTabbableScopeQuery(
  elementType: string,
  attributes: any,
  element: any,
) {
  return (
    !isElementHidden(element) && tabbableScopeQuery(elementType, attributes)
  )
}

export function tableCellScopeQuery(elementType: string, attributes: any) {
  if (
    elementType === 'td' ||
    elementType === 'th' ||
    attributes.role === 'gridcell' ||
    attributes.role === 'columnheader' ||
    attributes.role === 'rowheader'
  ) {
    return true
  } else {
    return false
  }
}

export function tableCellTabbableContentScopeQuery(
  elementType: string,
  attributes: any,
) {
  return (
    !tableCellScopeQuery(elementType, attributes) &&
    tabbableScopeQuery(elementType, attributes)
  )
}

export const headerFirstTabbableSecondScopeQuery = [
  headerAndSpinnerFocusScopeQuery,
  tabbableScopeQuery,
]

export function headerOrTabbableScopeQuery(
  elementType: string,
  attributes: any,
) {
  return (
    headerAndSpinnerFocusScopeQuery(elementType, attributes) ||
    tabbableScopeQuery(elementType, attributes)
  )
}

export const topLoadingScopeQuery = function (
  elementType: string,
  attributes: any,
) {
  return attributes['data-focus-target'] === true &&
    (attributes['aria-busy'] === true || attributes.role === 'progressbar')
    ? true
    : false
}

/*

__d(
  'focusScopeQueries',
  [],
  function (a, b, c, d, e, f) {
    function headerAndSpinnerFocusScopeQuery(a, b) {
      return a === 'h1' ||
        a === 'h2' ||
        a === 'h3' ||
        (b.role === 'heading' &&
          (b['aria-level'] === 1 ||
            b['aria-level'] === 2 ||
            b['aria-level'] === 3)) ||
        b['aria-busy'] === !0 ||
        b.role === 'progressbar'
        ? !0
        : !1
    }
    function focusableScopeQuery(a, b) {
      return b.tabIndex === -1 &&
        !(
          b.disabled === !0 ||
          b.type === 'hidden' ||
          b['aria-disabled'] === !0 ||
          b['aria-hidden'] === !0
        )
        ? !0
        : tabbableScopeQuery(a, b)
    }
    function isNotHiddenOrFileInput(a) {
      return a.type !== 'hidden' && a.type !== 'file'
    }
    function inputFirstTabbbableScopeQuery(a, b) {
      return a === 'input' && isNotHiddenOrFileInput(b)
    }
    function tabbableScopeQuery(a, b) {
      if (b.tabIndex === -1 || b.disabled === !0) return !1
      if (b.tabIndex === 0 || b.contentEditable === !0) return !0
      if (a === 'a' || a === 'area')
        return b.href != null && b.href !== '' && b.rel !== 'ignore'
      return a === 'input'
        ? isNotHiddenOrFileInput(b)
        : a === 'button' ||
            a === 'textarea' ||
            a === 'select' ||
            a === 'iframe' ||
            a === 'embed'
    }
    b = [b, tabbableScopeQuery]
    function isElementHidden(a) {
      return a.offsetWidth === 0 && a.offsetHeight === 0
    }
    function displayedTabbableScopeQuery(a, b, c) {
      return !isElementHidden(c) && tabbableScopeQuery(a, b)
    }
    function tableCellScopeQuery(a, b) {
      return a === 'td' ||
        a === 'th' ||
        b.role === 'gridcell' ||
        b.role === 'columnheader' ||
        b.role === 'rowheader'
        ? !0
        : !1
    }
    function tableCellTabbableContentScopeQuery(a, b) {
      return !tableCellScopeQuery(a, b) && tabbableScopeQuery(a, b)
    }
    var headerFirstTabbableSecondScopeQuery = [
      headerAndSpinnerFocusScopeQuery,
      tabbableScopeQuery,
    ]
    function headerOrTabbableScopeQuery(a, b) {
      return headerAndSpinnerFocusScopeQuery(a, b) || tabbableScopeQuery(a, b)
    }
    var topLoadingScopeQuery = function (a, b) {
      return b['data-focus-target'] === !0 &&
        (b['aria-busy'] === !0 || b.role === 'progressbar')
        ? !0
        : !1
    }
    f.headerAndSpinnerFocusScopeQuery = headerAndSpinnerFocusScopeQuery
    f.focusableScopeQuery = focusableScopeQuery
    f.tabbableScopeQuery = tabbableScopeQuery
    f.inputFirstTabbbableScopeQuery = inputFirstTabbbableScopeQuery
    f.displayedTabbableScopeQuery = displayedTabbableScopeQuery
    f.tableCellScopeQuery = tableCellScopeQuery
    f.tableCellTabbableContentScopeQuery = tableCellTabbableContentScopeQuery
    f.headerFirstTabbableSecondScopeQuery = headerFirstTabbableSecondScopeQuery
    f.headerOrTabbableScopeQuery = headerOrTabbableScopeQuery
    f.topLoadingScopeQuery = topLoadingScopeQuery
  },
  66,
)

*/

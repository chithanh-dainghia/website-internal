let b = !1

try {
  const c = Object.defineProperty({}, 'passive', {
    get: function () {
      b = !0
    },
  })
  // @ts-ignore
  window.addEventListener('test', null, c)
} catch (a) {}

export const isPassiveEventListenerSupported = b

export function makeEventOptions(a: any) {
  return isPassiveEventListenerSupported
    ? a
    : typeof a === 'boolean'
    ? a
    : a.capture || !1
}

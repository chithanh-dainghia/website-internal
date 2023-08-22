import gkx from '@ui/etc/gkx'

const canWork = !!(
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
)

let b = false

if (canWork && !gkx.k('1703328'))
  try {
    const d = {}
    Object.defineProperty(d, 'passive', {
      get: function () {
        b = true
      },
    })
    // @ts-ignore
    window.addEventListener('test', d, d)
    // @ts-ignore
    window.removeEventListener('test', d, d)
  } catch (a) {
    b = false
  }

export default b

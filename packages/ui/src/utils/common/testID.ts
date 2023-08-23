import gkx from '@ui/etc/gkx'

var h = gkx.k('1070695')
export default function testID(id?: string) {
  return h && id !== undefined
    ? {
        'data-testid': id,
      }
    : undefined
}

export function hasEventHookPropagationStopped(e: any, event: string) {
  e = e._stopEventHookPropagation
  return e !== undefined && e[event]
}

export function stopEventHookPropagation(a: any, event: string) {
  var c = a._stopEventHookPropagation
  c || (c = a._stopEventHookPropagation = {})
  c[event] = true
}

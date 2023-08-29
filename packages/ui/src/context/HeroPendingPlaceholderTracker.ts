const g = new Map()

export const addInteraction = (a: any) => {
  g.has(a) || g.set(a, new Map())
}

export const addPlaceholder = (
  key: any,
  value: any,
  description: any,
  startTime: any,
  pageletStack: any,
) => {
  key = g.get(key)
  key &&
    key.set(value, {
      description: description,
      startTime: startTime,
      pageletStack: pageletStack,
    })
}

export const dump = (a: any) => {
  a = g.get(a)
  return a ? Array.from(a.values()) : []
}

export const removeInteraction = (a: any) => {
  g.delete(a)
}

export const removePlaceholder = (a: any, b: any) => {
  a = g.get(a)

  if (a) {
    a.delete(b)
  }
}

export const isInteractionActive = (a: any) => {
  return g.has(a)
}

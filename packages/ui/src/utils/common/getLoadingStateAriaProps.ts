export default function getLoadingStateAriaProps(
  value: any | undefined,
  option: {
    max: number
    min: number
  },
) {
  let temp
  const ariaArr =
    value == null
      ? {
          'aria-label': 'loading',
        }
      : {
          'aria-valuemax':
            (temp = option == null ? undefined : option.max) != null
              ? temp
              : 100,
          'aria-valuemin':
            (temp = option == null ? undefined : option.min) != null ? temp : 0,
          'aria-valuenow': value,
        }

  return {
    role: 'progressbar',
    ...ariaArr,
  }
}

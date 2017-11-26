/* @flow */
export default function arrayFilter(
  arr: Array<any>,
  filter: Function
): Array<any> {
  const filteredArr = []

  for (let i = 0, len = arr.length; i < len; ++i) {
    const value = arr[i]

    if (filter(value, i, len, arr)) {
      filteredArr.push(value)
    }
  }

  return filteredArr
}

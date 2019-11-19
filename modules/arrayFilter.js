export default function arrayFilter(arr, filter) {
  const filteredArr = []

  for (let i = 0, len = arr.length; i < len; ++i) {
    const value = arr[i]

    if (filter(value, i, len, arr)) {
      filteredArr.push(value)
    }
  }

  return filteredArr
}

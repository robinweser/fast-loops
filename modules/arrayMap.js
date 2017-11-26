/* @flow */
export default function arrayMap(
  arr: Array<any>,
  mapper: Function
): Array<any> {
  const mappedArr = []

  for (let i = 0, len = arr.length; i < len; ++i) {
    mappedArr.push(mapper(arr[i], i, len, arr))
  }

  return mappedArr
}

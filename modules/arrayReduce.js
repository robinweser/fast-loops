/* @flow */
export default function arrayReduce(
  arr: Array<any>,
  reducer: Function,
  initialValue: any
): any {
  for (let i = 0, len = arr.length; i < len; ++i) {
    initialValue = reducer(initialValue, arr[i], i, len, arr)
  }

  return initialValue
}

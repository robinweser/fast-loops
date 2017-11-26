/* @flow */
export default function arrayEach(arr: Array<any>, iterator: Function): void {
  for (let i = 0, len = arr.length; i < len; ++i) {
    iterator(arr[i], i, len, arr)
  }
}

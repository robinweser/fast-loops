/* @flow */
export default function objectEach(obj: Object, iterator: Function): void {
  for (const key in obj) {
    iterator(obj[key], key, obj)
  }
}

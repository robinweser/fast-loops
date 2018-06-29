/* @flow */
export default function objectFind(obj: Object, query: Function): ?string {
  for (const key in obj) {
    if (query(obj[key], key, obj)) {
      return key
    }
  }
}

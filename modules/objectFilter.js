/* @flow */
export default function objectFilter(obj: Object, filter: Function): Object {
  const filteredObj = {}

  for (const key in obj) {
    const value = obj[key]

    if (filter(value, key, obj)) {
      filteredObj[key] = value
    }
  }

  return filteredObj
}

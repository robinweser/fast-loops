/* @flow */
export default function objectMap(obj: Object, mapper: Function): Object {
  const mappedObj = {}

  for (const key in obj) {
    mappedObj[key] = mapper(obj[key], key, obj)
  }

  return mappedObj
}

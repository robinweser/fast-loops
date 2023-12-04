export default function objectMap(obj, mapper) {
  const mappedObj = {}

  const keys = Object.keys(obj)
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    mappedObj[key] = mapper(obj[key], key, obj)
  }

  return mappedObj
}

export default function objectMap(obj, mapper) {
  const mappedObj = {}

  for (const key in obj) {
    mappedObj[key] = mapper(obj[key], key, obj)
  }

  return mappedObj
}

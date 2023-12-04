export default function objectFilter(obj, filter) {
  const filteredObj = {}

  const keys = Object.keys(obj)
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    const value = obj[key]

    if (filter(value, key, obj)) {
      filteredObj[key] = value
    }
  }

  return filteredObj
}

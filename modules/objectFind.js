export default function objectFind(obj, query) {
  const keys = Object.keys(obj)
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    if (query(obj[key], key, obj)) {
      return key
    }
  }

  return undefined
}

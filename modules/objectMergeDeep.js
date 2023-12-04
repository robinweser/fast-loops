export default function objectMergeDeep(base = {}, ...objs) {
  for (let i = 0, len = objs.length; i < len; ++i) {
    const obj = objs[i]

    const keys = Object.keys(obj)
    for (let j = 0, len2 = keys.length; j < len2; j++) {
      const key = keys[j]
      const value = obj[key]

      if (typeof value === 'object' && !Array.isArray(value)) {
        base[key] = objectMergeDeep(base[key], value)
      } else {
        base[key] = value
      }
    }
  }

  return base
}

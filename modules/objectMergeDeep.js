export default function objectMergeDeep(base = {}, ...objs) {
  for (let i = 0, len = objs.length; i < len; ++i) {
    const obj = objs[i]

    for (const key in obj) {
      const value = obj[key]

      if (typeof value === 'object' && !Array.isArray(value)) {
        base[key] = objectMergeDeep(base[key], value)
        continue
      }

      base[key] = value
    }
  }

  return base
}

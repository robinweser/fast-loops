export default function objectReduce(obj, reducer, initialValue) {
  const keys = Object.keys(obj)
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    initialValue = reducer(initialValue, obj[key], key, obj)
  }

  return initialValue
}

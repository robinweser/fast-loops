export default function objectReduce(obj, reducer, initialValue) {
  for (const key in obj) {
    initialValue = reducer(initialValue, obj[key], key, obj)
  }

  return initialValue
}

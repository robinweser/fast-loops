/* @flow */
export default function objectReducer(
  obj: Object,
  reducer: Function,
  initialValue: any
): Object {
  for (const key in obj) {
    initialValue = reducer(initialValue, obj[key], key, obj)
  }

  return initialValue
}

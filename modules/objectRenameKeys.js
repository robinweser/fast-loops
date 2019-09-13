/* @flow */
import objectReduce from './objectReduce'

export default function objectRenameKeys(obj: Object, keys: Object): Object {
  return objectReduce(
    obj,
    (newObj, value, key) => {
      newObj[keys[key] || key] = value
      return newObj
    },
    {}
  )
}

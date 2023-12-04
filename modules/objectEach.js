export default function objectEach(obj, iterator) {
  const keys = Object.keys(obj)
  for (let i = 0, len = keys.length; i < len; i++) {
    const key = keys[i]
    iterator(obj[key], key, obj)
  }
}

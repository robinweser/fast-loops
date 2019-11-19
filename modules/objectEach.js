export default function objectEach(obj, iterator) {
  for (const key in obj) {
    iterator(obj[key], key, obj)
  }
}

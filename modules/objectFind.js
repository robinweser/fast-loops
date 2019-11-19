export default function objectFind(obj, query) {
  for (const key in obj) {
    if (query(obj[key], key, obj)) {
      return key
    }
  }
}

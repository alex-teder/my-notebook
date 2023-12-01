export function saveItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function deleteItem(key) {
  localStorage.removeItem(key)
}

export function getItem(key) {
  return JSON.parse(localStorage.getItem(key))
}

export function patchItem(key, payload) {
  const oldItem = JSON.parse(localStorage.getItem(key))
  localStorage.setItem(key, JSON.stringify({...oldItem, ...payload}))
}

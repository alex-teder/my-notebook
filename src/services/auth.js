// import {deleteItem} from '/src/utils/storageUtils'
// import {saveItem} from '/src/utils/storageUtils'

export async function logIn({username, password}) {
  const URL = 'https://dull-pear-haddock-belt.cyclic.app/auth'
  const body = JSON.stringify({username, password})
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body,
    redirect: 'follow',
  }

  let user = null
  let error = null

  try {
    const res = await fetch(URL, options)
    if (res.ok) {
      const data = await res.json()
      user = {...data, username}
    } else {
      const errorMsg = await res.text()
      error = new Error(errorMsg)
    }
  } catch (err) {
    error = err
  }

  return {user, error}
}

export function logOut() {}

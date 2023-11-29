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
      user = await res.json()
    } else {
      const errorMsg = await res.text()
      error = new Error(errorMsg)
    }
    return {user, error}
  } catch (error) {
    return {user, error}
  }
}

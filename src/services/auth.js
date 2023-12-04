export async function sendLogInRequest({username, password}) {
  const URL = 'https://dull-pear-haddock-belt.cyclic.app/auth'
  const body = JSON.stringify({username, password})
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body,
    redirect: 'follow',
  }

  let data = null
  let error = null

  try {
    const res = await fetch(URL, options)
    if (res.ok) {
      data = await res.json()
    } else {
      const errorMsg = await res.text()
      error = new Error(errorMsg)
    }
  } catch (err) {
    error = err
  }

  return {data, error}
}

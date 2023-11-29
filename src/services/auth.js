export async function logIn({username, password}) {
  const URL = 'https://dull-pear-haddock-belt.cyclic.app/auth'
  const body = JSON.stringify({username, password})
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body,
    redirect: 'follow',
  }

  const res = await fetch(URL, options)
  console.log(res)
  if (res.ok) {
    const data = await res.json()
    console.log(data)
  } else {
    const err = await res.text()
    console.log(err)
  }
}

const BASE_URL = 'https://dull-pear-haddock-belt.cyclic.app/'

async function genericFetch(url, options, serialization) {
  let data = null
  let error = null

  try {
    const res = await fetch(url, options)
    if (res.ok) {
      data = await res[serialization]()
    } else {
      error = await res.text()
    }
  } catch (err) {
    error = err.message
  }

  return {data, error}
}

export async function apiFetchPublicNotes(token) {
  const URL = BASE_URL + 'notes/?type=public'
  const options = {
    method: 'GET',
    headers: {Authorization: `Bearer: ${token}`},
  }
  return await genericFetch(URL, options, 'json')
}

export async function apiFetchPersonalNotes(token) {
  const URL = BASE_URL + 'notes/?type=personal'
  const options = {
    method: 'GET',
    headers: {Authorization: `Bearer: ${token}`},
  }
  return await genericFetch(URL, options, 'json')
}

export async function apiPostNewNote(newNote, token) {
  const URL = BASE_URL + 'notes'
  const options = {
    method: 'POST',
    headers: {Authorization: `Bearer: ${token}`, 'Content-Type': 'application/json'},
    body: JSON.stringify(newNote),
  }
  return await genericFetch(URL, options, 'text')
}

export async function apiUpdateNote(updatedNote, id, token) {
  const URL = BASE_URL + `notes?id=${id}`
  const options = {
    method: 'PUT',
    headers: {Authorization: `Bearer: ${token}`, 'Content-Type': 'application/json'},
    body: JSON.stringify(updatedNote),
  }
  return await genericFetch(URL, options, 'text')
}

export async function apiDeleteNote(id, token) {
  const URL = BASE_URL + `notes?id=${id}`
  const options = {
    method: 'DELETE',
    headers: {Authorization: `Bearer: ${token}`},
  }
  return await genericFetch(URL, options, 'text')
}

export async function apiGetSingleNote(id, token) {
  const URL = BASE_URL + `notes?id=${id}`
  const options = {
    method: 'GET',
    headers: {Authorization: `Bearer: ${token}`},
  }
  return await genericFetch(URL, options, 'json')
}

export async function apiChangePassword() {}

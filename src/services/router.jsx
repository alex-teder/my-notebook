import {createBrowserRouter, redirect} from 'react-router-dom'
import {LoginPage} from '/src/pages/LoginPage'
import {PublicNotesPage} from '/src/pages/PublicNotesPage'
import {PersonalNotesPage} from '/src/pages/PersonalNotesPage'
import {SettingsPage} from '/src/pages/SettingsPage'
import {SingleNotePage} from '/src/pages/SingleNotePage'
import {getItem} from '/src/utils/storageUtils'

const checkUser = () => !!getItem('user')

const requiresAuth = () => {
  if (!checkUser()) return redirect('/login')
  return null
}
const requiresNoAuth = () => {
  if (checkUser()) return redirect('/')
  return null
}

export const router = createBrowserRouter([
  {
    path: '/',
    loader() {
      if (checkUser()) return redirect('/personal')
      return redirect('/login')
    },
  },
  {
    path: '/login',
    element: <LoginPage />,
    loader: requiresNoAuth,
  },
  {
    path: '/public',
    element: <PublicNotesPage />,
    loader: requiresAuth,
  },
  {
    path: '/personal',
    element: <PersonalNotesPage />,
    loader: requiresAuth,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
    loader: requiresAuth,
  },
  {
    path: '/note/:noteId',
    element: <SingleNotePage />,
    loader: requiresAuth,
  },
])

import {createBrowserRouter, redirect} from 'react-router-dom'
import {LoginPage} from '/src/pages/LoginPage'
import {PublicNotesPage} from '/src/pages/PublicNotesPage'
import {PersonalNotesPage} from '/src/pages/PersonalNotesPage'
import {SettingsPage} from '/src/pages/SettingsPage'
import {SingleNotePage} from '/src/pages/SingleNotePage'
import {getItem} from '/src/utils/storageUtils'

export const PATHS = {
  ROOT: '/',
  LOGIN: '/login',
  PERSONAL: '/personal',
  PUBLIC: '/public',
  SETTINGS: '/settings',
  NOTE: '/note',
}

const checkUser = () => !!getItem('user')

const requiresAuth = () => {
  if (!checkUser()) return redirect(PATHS.LOGIN)
  return null
}
const requiresNoAuth = () => {
  if (checkUser()) return redirect(PATHS.ROOT)
  return null
}

export const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    loader() {
      if (checkUser()) return redirect(PATHS.PERSONAL)
      return redirect(PATHS.LOGIN)
    },
  },
  {
    path: PATHS.LOGIN,
    element: <LoginPage />,
    loader: requiresNoAuth,
  },
  {
    path: PATHS.PUBLIC,
    element: <PublicNotesPage />,
    loader: requiresAuth,
  },
  {
    path: PATHS.PERSONAL,
    element: <PersonalNotesPage />,
    loader: requiresAuth,
  },
  {
    path: PATHS.SETTINGS,
    element: <SettingsPage />,
    loader: requiresAuth,
  },
  {
    path: PATHS.NOTE + '/:noteId',
    element: <SingleNotePage />,
    loader: requiresAuth,
  },
])

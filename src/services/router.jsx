import {createBrowserRouter} from 'react-router-dom'
import {LoginPage} from '/src/pages/LoginPage'
import {PublicNotesPage} from '/src/pages/PublicNotesPage'
import {PersonalNotesPage} from '/src/pages/PersonalNotesPage'

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/public',
    element: <PublicNotesPage />,
  },
  {
    path: '/personal',
    element: <PersonalNotesPage />,
  },
])

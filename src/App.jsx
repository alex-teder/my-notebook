import {RouterProvider} from 'react-router-dom'
import {router} from '/src/services/router'
import {LocaleProvider} from '/src/locales/LocaleProvider'
import './styles/index.scss'

function App() {
  return (
    <LocaleProvider>
      <RouterProvider router={router} />
    </LocaleProvider>
  )
}

export default App

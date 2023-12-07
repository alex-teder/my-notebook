import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from '/src/store'
import {router} from '/src/services/router'
import {LocaleProvider} from '/src/locales/LocaleProvider'
import './styles/index.scss'

function App() {
  return (
    <Provider store={store}>
      <LocaleProvider>
        <RouterProvider router={router} />
      </LocaleProvider>
    </Provider>
  )
}

export default App

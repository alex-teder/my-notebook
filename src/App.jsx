import {LocaleProvider} from './locales/LocaleProvider'
import {LoginPage} from './pages/LoginPage'
// import {PublicNotesPage} from './pages/PublicNotesPage'
// import {PersonalNotesPage} from './pages/PersonalNotesPage'
import './styles/index.scss'

function App() {
  return (
    <LocaleProvider>
      <LoginPage />
      {/* <PublicNotesPage /> */}
      {/* <PersonalNotesPage /> */}
    </LocaleProvider>
  )
}

export default App

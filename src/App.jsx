import {LocaleProvider} from '/src/locales/LocaleProvider'
import {LoginPage} from '/src/pages/LoginPage/'
// import {PublicNotesPage} from '/src/pages/PublicNotesPage'
// import {PersonalNotesPage} from '/src/pages/PersonalNotesPage'
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

import {useState} from 'react'
// import {useNavigate} from 'react-router-dom'
import {CenterLayoutWrapper} from '/src/components/layout/CenterLayoutWrapper'
import {MyCard} from '/src/components/ui/MyCard'
import {MyTextField} from '/src/components/ui/MyTextField'
import {MyButton} from '/src/components/ui/MyButton'
import {MyAlert} from '/src/components/ui/MyAlert'
import {useLocale} from '/src/hooks/useLocale'
import {LangChanger} from '/src/components/LangChanger'
import {PasswordField} from '../../components/PasswordField/PasswordField'
import {logIn} from '/src/services/auth'
import s from './LoginPage.module.scss'

export function LoginPage() {
  return (
    <CenterLayoutWrapper>
      <MyCard width="300px">
        <Heading />
        <LogInForm />
      </MyCard>
      <LangChanger />
    </CenterLayoutWrapper>
  )
}

function Heading() {
  const {$t} = useLocale()

  return <h1 className={s.heading}>{$t('loginPage.log_in')}</h1>
}

function LogInForm() {
  const {$t} = useLocale()
  // const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    logIn({username: email, password})
    // setLoginError(new Error($t('loginPage.user_not_found')))
    // navigate('/personal')
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <MyTextField label="Email:" value={email} onChange={e => setEmail(e.target.value)} />

      <PasswordField
        label={$t('loginPage.password')}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {loginError && (
        <MyAlert type="error" heading={$t('loginPage.error')}>
          {loginError.message}
        </MyAlert>
      )}

      <MyButton accent type="submit">
        {$t('loginPage.log_in')}
      </MyButton>
    </form>
  )
}

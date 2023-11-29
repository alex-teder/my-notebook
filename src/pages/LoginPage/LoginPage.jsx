import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
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
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoginError(null)
    setIsLoading(true)

    const {user, error} = await logIn({username, password})
    setIsLoading(false)

    if (error) {
      setLoginError(error)
    } else if (user) {
      console.log('USER : ', user)
      navigate('/personal')
    }
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <MyTextField
        label={$t('loginPage.username')}
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

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

      <MyButton accent type="submit" loading={isLoading}>
        {$t('loginPage.log_in')}
      </MyButton>
    </form>
  )
}

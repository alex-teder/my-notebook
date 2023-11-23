import {useState} from 'react'
import {CenterLayoutWrapper} from '../components/layout/CenterLayoutWrapper'
import {MyCard} from '../components/ui/MyCard'
import {MyTextField} from '../components/ui/MyTextField'
import {MyButton} from '../components/ui/MyButton'
import {MyAlert} from '../components/ui/MyAlert'
import {useLocale} from '../hooks/useLocale'
import {LangChanger} from '../components/LangChanger'
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
  const {$t} = useLocale('loginPage')

  return <h1 className={s.heading}>{$t('log_in')}</h1>
}

function EyeButton({isHidden, onClick}) {
  return (
    <MyButton flat ariaLabel={`${isHidden ? 'show' : 'hide'} password`} onClick={onClick}>
      <i className="material-icons">{isHidden ? 'visibility_off' : 'visibility'}</i>
    </MyButton>
  )
}

function LogInForm() {
  const {$t} = useLocale('loginPage')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPassHidden, setIsPassHidden] = useState(true)
  const [loginError, setLoginError] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    setLoginError(new Error($t('user_not_found')))
  }

  const eyeButton = <EyeButton isHidden={isPassHidden} onClick={() => setIsPassHidden(v => !v)} />

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <MyTextField label="Email:" value={email} onChange={e => setEmail(e.target.value)} />

      <MyTextField
        label={$t('password')}
        append={eyeButton}
        type={isPassHidden ? 'password' : 'text'}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {loginError && (
        <MyAlert type="error" heading={$t('error')}>
          {loginError.message}
        </MyAlert>
      )}

      <MyButton accent type="submit">
        {$t('log_in')}
      </MyButton>
    </form>
  )
}

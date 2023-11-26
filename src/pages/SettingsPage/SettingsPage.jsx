import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocale} from '/src/hooks/useLocale'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {MyButton} from '/src/components/ui/MyButton'
import {MyAlert} from '/src/components/ui/MyAlert'
import {LangChanger} from '/src/components/LangChanger'
import {PasswordField} from '/src/components/PasswordField'
import s from './SettingsPage.module.scss'

export function SettingsPage() {
  const {$t} = useLocale()
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('')
  const [passwordError, setPasswordError] = useState(null)

  const handleLogout = () => {
    navigate('/login')
  }

  const handleChangePassword = () => {
    setPasswordError(new Error('Could not process the request'))
  }

  return (
    <MainLayoutWrapper>
      <h1>{$t('settings')}</h1>

      <div className={s.setting}>
        <b>Change language</b>
        <LangChanger />
      </div>

      <div className={s.setting}>
        <b>Change password</b>
        <PasswordField
          label="New password:"
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />

        {passwordError && (
          <MyAlert type="error" heading="Error:">
            {passwordError.message}
          </MyAlert>
        )}

        <MyButton accent onClick={handleChangePassword}>
          Confirm
        </MyButton>
      </div>

      <div className={s.setting}>
        <b>Log out from the account</b>
        <MyButton onClick={handleLogout}>
          Log out
          <i className="material-icons">logout</i>
        </MyButton>
      </div>
    </MainLayoutWrapper>
  )
}

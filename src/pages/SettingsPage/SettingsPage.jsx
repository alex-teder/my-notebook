import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocale} from '/src/hooks/useLocale'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {MyButton} from '/src/components/ui/MyButton'
import {MyAlert} from '/src/components/ui/MyAlert'
import {LangChanger} from '/src/components/LangChanger'
import {PasswordField} from '/src/components/PasswordField'
import {logOut} from '/src/services/auth'
import {getItem} from '/src/utils/storageUtils'
import s from './SettingsPage.module.scss'

export function SettingsPage() {
  const {$t} = useLocale()
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('')
  const [passwordError, setPasswordError] = useState(null)
  const username = getItem('user').username

  const handleLogout = () => {
    logOut()
    navigate('/login')
  }

  const handleChangePassword = () => {
    setPasswordError(new Error($t('settingsPage.error_msg')))
  }

  return (
    <MainLayoutWrapper>
      <h1 className={s.heading}>
        <MyButton flat ariaLabel="go back" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </MyButton>
        {$t('settings')}
      </h1>

      <div className={s.setting}>
        <b>Logged in as: </b>
        {username}
      </div>

      <div className={s.setting}>
        <b>{$t('settingsPage.change_lang')}</b>
        <LangChanger />
      </div>

      <div className={s.setting}>
        <b>{$t('settingsPage.change_pass')}</b>
        <PasswordField
          label={$t('settingsPage.new_pass')}
          value={newPassword}
          onChange={e => setNewPassword(e.target.value)}
        />

        {passwordError && (
          <MyAlert type="error" heading={$t('settingsPage.error')}>
            {passwordError.message}
          </MyAlert>
        )}

        <MyButton accent onClick={handleChangePassword}>
          {$t('settingsPage.confirm')}
        </MyButton>
      </div>

      <div className={s.setting}>
        <b>{$t('settingsPage.log_out_from_the_acc')}</b>
        <MyButton onClick={handleLogout}>
          {$t('settingsPage.log_out')}
          <i className="material-icons">logout</i>
        </MyButton>
      </div>
    </MainLayoutWrapper>
  )
}

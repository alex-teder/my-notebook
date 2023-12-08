import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {useLocale} from '/src/hooks/useLocale'
import {MainLayoutWrapper} from '/src/components/layout/MainLayoutWrapper'
import {MyButton} from '/src/components/ui/MyButton'
import {MyAlert} from '/src/components/ui/MyAlert'
import {LangChanger} from '/src/components/LangChanger'
import {PasswordField} from '/src/components/PasswordField'
import {removeUser} from '/src/store/user'
import {PATHS} from '/src/services/router'
import {apiChangePassword} from '/src/services/api'
import {isValidPassword} from '/src/services/validation'
import s from './SettingsPage.module.scss'

export function SettingsPage() {
  const {$t} = useLocale()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const username = user ? user.username : null
  const token = useSelector(state => state.user.token)
  const [newPassword, setNewPassword] = useState('')
  const [passwordError, setPasswordError] = useState(null)
  const [passwordSuccessMsg, setPasswordSuccessMsg] = useState(null)
  const [isPasswordButtonLoading, setIsPasswordButtonLoading] = useState(false)

  const handleLogout = () => {
    dispatch(removeUser())
    navigate(PATHS.LOGIN)
  }

  const handleChangePassword = async newPw => {
    setPasswordError(null)
    setPasswordSuccessMsg(null)
    setIsPasswordButtonLoading(true)
    if (!isValidPassword(newPw)) {
      setPasswordError(new Error('Validation failed'))
      return
    }
    const {data, error} = await apiChangePassword(newPw, token)
    if (error) {
      setPasswordError(new Error(error))
    } else if (data) {
      setPasswordSuccessMsg(data)
    }
    setIsPasswordButtonLoading(false)
  }

  return (
    <MainLayoutWrapper>
      <h1 className={s.heading}>
        <MyButton flat ariaLabel="go back" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </MyButton>
        {$t('settings')}
      </h1>

      {username && (
        <div className={s.setting}>
          <b>{$t('settingsPage.logged_in_as')}</b>
          {username}
        </div>
      )}

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

        {passwordSuccessMsg && <MyAlert type="success">{passwordSuccessMsg}</MyAlert>}

        <MyButton
          accent
          loading={isPasswordButtonLoading}
          onClick={() => handleChangePassword(newPassword)}>
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

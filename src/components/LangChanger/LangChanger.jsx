import {useContext} from 'react'
import {MyButton} from '/src/components/ui/MyButton'
import {LocaleContext} from '/src/locales/LocaleProvider'
import s from './LangChanger.module.scss'

export function LangChanger() {
  const {currentLang, setCurrentLang} = useContext(LocaleContext)

  return (
    <div className={s.container}>
      <MyButton flat disabled={currentLang === 'en'} onClick={() => setCurrentLang('en')}>
        <span className={s.text}>English</span>
      </MyButton>

      <MyButton flat disabled={currentLang === 'ru'} onClick={() => setCurrentLang('ru')}>
        <span className={s.text}>Русский</span>
      </MyButton>
    </div>
  )
}

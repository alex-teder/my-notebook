import {createContext, useState} from 'react'
import en from './en'
import ru from './ru'

const locales = {
  en,
  ru,
}

export const LocaleContext = createContext()

export function LocaleProvider({children}) {
  const [currentLang, setCurrentLang] = useState('en')

  return (
    <LocaleContext.Provider
      value={{locale: locales[currentLang], fallback: en, setLocale: setCurrentLang}}>
      {children}
    </LocaleContext.Provider>
  )
}

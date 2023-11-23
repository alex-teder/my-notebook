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
      value={{current: locales[currentLang], fallback: en, currentLang, setCurrentLang}}>
      {children}
    </LocaleContext.Provider>
  )
}

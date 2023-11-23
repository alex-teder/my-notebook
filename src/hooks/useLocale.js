import {useContext} from 'react'
import {LocaleContext} from '../locales/LocaleProvider'

export function useLocale(page) {
  const {locale, fallback} = useContext(LocaleContext)

  const $t = key => {
    let value

    if (page) {
      value = locale[page][key]
    } else {
      value = locale[key]
    }
    if (value) return value

    console.warn('No such key in current locale.')

    if (page) {
      value = fallback[page][key]
    } else {
      value = fallback[key]
    }
    if (value) return value

    console.warn('No such key in fallback locale.')
    return '???'
  }

  return {$t}
}

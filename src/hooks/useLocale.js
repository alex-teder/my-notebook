import {useContext} from 'react'
import {LocaleContext} from '../locales/LocaleProvider'

export function useLocale(page) {
  const {current, fallback} = useContext(LocaleContext)

  const $t = key => {
    let value

    if (page) {
      value = current[page][key]
    } else {
      value = current[key]
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

import {useContext} from 'react'
import {LocaleContext} from '/src/locales/LocaleProvider'

export function useLocale() {
  const {current, fallback} = useContext(LocaleContext)

  const $t = keysStr => {
    const keys = keysStr.split('.')

    let result = keys.reduce((obj, key) => {
      if (obj && obj[key]) {
        return obj[key]
      }
    }, current)

    if (result) return result

    console.warn('No such key in current locale')

    result = keys.reduce((obj, key) => {
      if (obj && obj[key]) {
        return obj[key]
      }
    }, fallback)

    if (result) return result

    console.warn('No such key in fallback locale')

    return '???'
  }

  return {$t}
}

import {useContext} from 'react'
import {LocaleContext} from '../locales/LocaleProvider'

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

    result = keys.reduce((obj, key) => {
      if (obj && obj[key]) {
        return obj[key]
      }
    }, fallback)

    if (result) return result

    return '???'
  }

  return {$t}
}

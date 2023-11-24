import {useEffect} from 'react'
import {createPortal} from 'react-dom'
import s from './MyDialog.module.scss'

export function MyDialog({children}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => (document.body.style.overflow = 'unset')
  }, [])

  return <>{createPortal(<div className={s.bkg}>{children}</div>, document.body)}</>
}

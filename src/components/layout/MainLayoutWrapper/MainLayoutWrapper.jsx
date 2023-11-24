import s from './MainLayoutWrapper.module.scss'

export function MainLayoutWrapper({children}) {
  return <div className={s.wrapper}>{children}</div>
}

import s from './LayoutWrapper.module.scss'

export function LayoutWrapper({children}) {
  return <div className={s.wrapper}>{children}</div>
}

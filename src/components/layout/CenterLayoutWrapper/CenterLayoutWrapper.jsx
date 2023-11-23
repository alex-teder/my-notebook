import s from './CenterLayoutWrapper.module.scss'

export function CenterLayoutWrapper({children}) {
  return <div className={s.wrapper}>{children}</div>
}

import s from './MyChip.module.scss'

export function MyChip({children}) {
  return <span className={s.chip}>{children}</span>
}

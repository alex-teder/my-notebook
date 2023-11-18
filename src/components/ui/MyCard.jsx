import s from './MyCard.module.scss'

export function MyCard({children}) {
  return <div className={s.card}>{children}</div>
}

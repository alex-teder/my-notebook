import s from './MyCard.module.scss'

export function MyCard({children, width = 'unset', height = 'unset'}) {
  return (
    <div className={s.card} style={{width, height}}>
      {children}
    </div>
  )
}

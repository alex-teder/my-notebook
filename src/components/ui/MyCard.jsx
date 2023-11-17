import s from './MyCard.module.scss'

export function MyCard({children, className = '', style = {}}) {
  return (
    <div className={className ? className + ' ' + s.card : s.card} style={{...style}}>
      {children}
    </div>
  )
}

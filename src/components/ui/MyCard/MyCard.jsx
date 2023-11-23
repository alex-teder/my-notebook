import s from './MyCard.module.scss'

export function MyCard({children, color, rounded = false, width = 'unset', height = 'unset'}) {
  const style = {
    width,
    height,
  }

  if (color) {
    style.borderLeft = `10px solid ${color}`
    style.borderRight = `10px solid ${color}`
  }

  return (
    <div className={rounded ? s.rounded : s.card} style={style}>
      {children}
    </div>
  )
}

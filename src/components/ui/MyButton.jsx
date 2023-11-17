import s from './MyButton.module.scss'

export function MyButton({children, type = 'button', onClick}) {
  return (
    <button type={type} className={s.button} onClick={onClick}>
      {children}
    </button>
  )
}

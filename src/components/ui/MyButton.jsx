import {button as buttonStyle, flat as flatStyle} from './MyButton.module.scss'

export function MyButton({children, flat = false, type = 'button', style = {}, onClick}) {
  const className = flat ? `${buttonStyle} ${flatStyle}` : buttonStyle

  return (
    <button type={type} className={className} style={{...style}} onClick={onClick}>
      {children}
    </button>
  )
}

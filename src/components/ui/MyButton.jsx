import {button as buttonStyle, flat as flatStyle} from './MyButton.module.scss'

export function MyButton({
  children,
  flat = false,
  type = 'button',
  style = {},
  ariaLabel = undefined,
  onClick,
}) {
  const className = flat ? flatStyle : buttonStyle

  return (
    <button
      type={type}
      className={className}
      style={{...style}}
      aria-label={ariaLabel}
      onClick={onClick}>
      {children}
    </button>
  )
}

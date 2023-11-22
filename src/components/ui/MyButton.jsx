import {
  button as buttonStyle,
  flat as flatStyle,
  accent as accentStyle,
} from './MyButton.module.scss'

export function MyButton({
  children,
  flat = false,
  accent = false,
  type = 'button',
  ariaLabel = undefined,
  onClick,
}) {
  let className = buttonStyle
  if (flat) className = flatStyle
  if (accent) className = accentStyle

  return (
    <button type={type} className={className} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  )
}

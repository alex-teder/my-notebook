import {MySpinner} from '/src/components/ui/MySpinner'
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
  disabled = false,
  loading = false,
  onClick,
}) {
  let className = buttonStyle
  if (flat) className = flatStyle
  if (accent) className = accentStyle

  return (
    <button
      type={type}
      className={className}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}>
      {loading ? <MySpinner /> : children}
    </button>
  )
}

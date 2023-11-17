import s from './MyTextField.module.scss'

export function MyTextField({
  type = 'text',
  label = null,
  placeholder = '',
  append = null,
  value,
  onChange,
}) {
  return (
    <label className={s.label}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={s.input}
      />
      {append && <div className={s.append}>{append}</div>}
    </label>
  )
}

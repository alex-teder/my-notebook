import s from './MyTextField.module.scss'

export function MyTextField({type = 'text', label = null, placeholder = '', value, onChange}) {
  return (
    <label>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  )
}

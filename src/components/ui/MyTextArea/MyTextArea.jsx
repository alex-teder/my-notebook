import s from './MyTextArea.module.scss'

export function MyTextArea({label = null, placeholder = '', value, onChange}) {
  return (
    <label className={s.label}>
      {label}
      <textarea placeholder={placeholder} value={value} onChange={onChange} />
    </label>
  )
}

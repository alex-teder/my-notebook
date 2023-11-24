import s from './MyCheckbox.module.scss'

export function MyCheckbox({label = null, value, onChange}) {
  return (
    <label className={s.label}>
      {label}
      <input type="checkbox" checked={value} onChange={onChange} />
    </label>
  )
}

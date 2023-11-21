import s from './MyColorPicker.module.scss'

export function MyColorPicker({label = null, value, onChange}) {
  return (
    <label className={s.label}>
      {label}
      <input type="color" value={value} onChange={onChange} />
    </label>
  )
}

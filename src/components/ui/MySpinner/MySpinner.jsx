import s from './MySpinner.module.scss'

export function MySpinner({size = '1rem'}) {
  return <span className={s.loader} style={{width: size, height: size, margin: '0.25rem'}}></span>
}

import {alert, error, warning, success} from './MyAlert.module.scss'

export function MyAlert({type = 'default', heading = null, children}) {
  const stylesMap = {
    default: alert,
    error,
    warning,
    success,
  }

  return (
    <div className={stylesMap[type]}>
      {heading && (
        <p>
          <b>{heading}</b>
        </p>
      )}
      {children}
    </div>
  )
}

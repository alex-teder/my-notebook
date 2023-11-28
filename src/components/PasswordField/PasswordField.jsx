import {useState} from 'react'
import {MyTextField} from '/src/components/ui/MyTextField'
import {MyButton} from '/src/components/ui/MyButton'

function EyeButton({isHidden, onClick}) {
  return (
    <MyButton flat ariaLabel={`${isHidden ? 'show' : 'hide'} password`} onClick={onClick}>
      <i className="material-icons">{isHidden ? 'visibility_off' : 'visibility'}</i>
    </MyButton>
  )
}

export function PasswordField({label, value, onChange}) {
  const [isHidden, setIsHidden] = useState(true)

  const eyeButton = <EyeButton isHidden={isHidden} onClick={() => setIsHidden(v => !v)} />

  return (
    <MyTextField
      label={label}
      append={eyeButton}
      type={isHidden ? 'password' : 'text'}
      value={value}
      onChange={onChange}
    />
  )
}

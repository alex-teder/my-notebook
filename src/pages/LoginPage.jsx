import s from './LoginPage.module.scss'
import {LayoutWrapper} from '../components/LayoutWrapper'
import {MyCard} from '../components/ui/MyCard'
import {MyTextField} from '../components/ui/MyTextField'
import {MyButton} from '../components/ui/MyButton'
import {useState} from 'react'

export function LoginPage() {
  return (
    <LayoutWrapper>
      <MyCard className={s.card}>
        <Heading />
        <LogInForm />
      </MyCard>
    </LayoutWrapper>
  )
}

function Heading() {
  return <h1 className={s.heading}>Log in</h1>
}

function LogInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log('Email:', email)
    console.log('Password:', password)
    alert('Form submitted')
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <MyTextField label="Email:" value={email} onChange={e => setEmail(e.target.value)} />
      <MyTextField label="Password:" value={password} onChange={e => setPassword(e.target.value)} />
      <MyButton type="submit">Log in</MyButton>
    </form>
  )
}

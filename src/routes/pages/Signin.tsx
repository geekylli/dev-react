import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { delay } from '@/utils'
import { useNavigate, useSearchParams } from 'react-router'

export default function App() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  async function signIn() {
    if (isLoading) return
    setIsLoading(true)
    await delay(3000)
    console.log(id, pw)
    // 로그인 성공!
    if (id && pw) {
      const token = 'abcd1234'
      localStorage.setItem('token', token)
      console.log(searchParams.get('redirectTo'))
      navigate(searchParams.get('redirectTo') || '/')
    }
    setIsLoading(false)
  }

  return (
    <>
      <form
        className="flex max-w-[400px] flex-col gap-2.5"
        onSubmit={e => e.preventDefault()}>
        <TextField
          label="아이디"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="비밀번호를 입력해주세요."
          label="비밀번호"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <Button
          variant="primary"
          loading={isLoading}
          onClick={() => signIn()}>
          로그인
        </Button>
      </form>
    </>
  )
}

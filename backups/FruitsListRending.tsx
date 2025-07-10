import { useState, useRef, useEffect } from 'react'

export default function App() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Cherry'])
  const [inputText, setInputText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, []) // 의존성 배열

  function addFruit() {
    setFruits([...fruits, inputText])
    setInputText('')
  }

  return (
    <>
      <h1>과일 목록</h1>
      <input
        ref={inputRef}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') {
            addFruit()
          }
        }}
      />
      <button onClick={() => addFruit()}>추가</button>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit}>{fruit}</li>
        })}
      </ul>
    </>
  )
}

// 문자, 숫자, 배열, 객체 - 빌트인 속성(메소드) 80%

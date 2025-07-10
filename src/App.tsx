import { useCountStore } from '@/stores/count'

export default function App() {
  const count = useCountStore(state => state.count)
  const double = useCountStore(state => state.double)
  const increase = useCountStore(state => state.increase)
  return (
    <>
      <h1>
        {count} / {double}
      </h1>
      <button onClick={increase}>증가</button>
    </>
  )
}

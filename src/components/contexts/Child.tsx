import { useIsActiveStore } from '@/stores/isActive'

export default function Child() {
  const isActive = useIsActiveStore(state => state.isActive)
  return (
    <>
      <h1>Child</h1>
      <h2>{isActive ? '활성화' : '비활성화'}</h2>
    </>
  )
}

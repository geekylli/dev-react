import { useOutlet } from 'react-router'

export default function Empty() {
  const outlet = useOutlet()
  return <>{outlet}</>
}

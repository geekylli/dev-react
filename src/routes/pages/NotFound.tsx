import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

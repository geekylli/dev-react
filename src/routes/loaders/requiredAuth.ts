import { redirect } from 'react-router'

export async function requiresAuth({ request }: { request: Request }) {
  const token = localStorage.getItem('token')
  if (token) return
  const url = new URL(request.url)
  console.log(url)
  const redirectTo = url.pathname + url.search
  return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
}

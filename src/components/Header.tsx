import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/movies/tt2975590', label: 'Batman' }
]
export default function Header() {
  return (
    <header>
      <nav className="flex items-center gap-2">
        {navigations.map(nav => (
          <NavLink
            key={nav.to}
            to={nav.to}
            end={true}
            className={({ isActive }) =>
              isActive ? 'text-red-500' : 'text-black'
            }>
            {nav.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

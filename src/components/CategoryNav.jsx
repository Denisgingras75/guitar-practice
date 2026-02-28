import { NavLink } from 'react-router-dom';
import styles from './CategoryNav.module.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/scales', label: 'Scales' },
  { to: '/modes', label: 'Modes' },
  { to: '/chords', label: 'Chords' },
  { to: '/techniques', label: 'Techniques' },
];

export default function CategoryNav() {
  return (
    <nav className={styles.nav}>
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

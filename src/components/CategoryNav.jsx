import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './CategoryNav.module.css';

const groups = [
  {
    label: 'Practice',
    links: [
      { to: '/practice', label: 'Routines' },
      { to: '/skills', label: 'Skill Trees' },
    ],
  },
  {
    label: 'Learn',
    links: [
      { to: '/scales', label: 'Scales' },
      { to: '/modes', label: 'Modes' },
      { to: '/chords', label: 'Chords' },
      { to: '/techniques', label: 'Techniques' },
    ],
  },
  {
    label: 'Songs',
    links: [
      { to: '/charts', label: 'Charts' },
      { to: '/guitarists', label: 'Artists' },
    ],
  },
  {
    label: 'Tools',
    links: [
      { to: '/cheatsheet', label: 'Cheat Sheet' },
      { to: '/tuner', label: 'Tuner' },
      { to: '/metronome', label: 'Metronome' },
    ],
  },
];

export default function CategoryNav() {
  const [openGroup, setOpenGroup] = useState(null);
  const location = useLocation();

  const isGroupActive = (group) =>
    group.links.some((l) => l.to === location.pathname);

  const toggleGroup = (label) => {
    setOpenGroup(openGroup === label ? null : label);
  };

  const handleLinkClick = () => {
    setOpenGroup(null);
  };

  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `${styles.link} ${isActive ? styles.active : ''}`
        }
        onClick={handleLinkClick}
      >
        Home
      </NavLink>

      {groups.map((group) => {
        const active = isGroupActive(group);
        const isOpen = openGroup === group.label;

        return (
          <div key={group.label} className={styles.group}>
            <button
              className={`${styles.groupBtn} ${active ? styles.groupActive : ''}`}
              onClick={() => toggleGroup(group.label)}
            >
              {group.label}
              <span className={styles.arrow}>{isOpen ? '\u25B4' : '\u25BE'}</span>
            </button>

            {isOpen && (
              <div className={styles.dropdown}>
                {group.links.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      `${styles.dropLink} ${isActive ? styles.dropActive : ''}`
                    }
                    onClick={handleLinkClick}
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

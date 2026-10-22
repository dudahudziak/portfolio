import { useState } from 'react';
import styles from './Header.module.css';

export default function Header({ sections, active }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a href="#inicio" className={styles.logo}>&lt;/&gt;</a>

        <button
          className={styles.toggle}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <span /><span />
        </button>

        <ul id="menu" className={`${styles.menu} ${open ? styles.open : ''}`}>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={active === id ? styles.active : ''}
                aria-current={active === id ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

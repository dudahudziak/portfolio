import { profile } from '../../data/portfolio';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} {profile.name}. Feito com React.</p>
    </footer>
  );
}

import { profile } from '../../data/portfolio';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.role}>{profile.role}</p>
        <h1 className={styles.name}>{profile.name}</h1>
        <p className={styles.summary}>{profile.summary}</p>
        <div className={styles.actions}>
          <a href="#projetos" className={styles.primary}>Ver projetos</a>
          <a href="#contato" className={styles.secondary}>Falar comigo</a>
        </div>
      </div>
    </section>
  );
}

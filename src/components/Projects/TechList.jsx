import styles from './TechList.module.css';

export default function TechList({ items }) {
  return (
    <ul className={styles.list} aria-label="Tecnologias usadas">
      {items.map((t) => <li key={t}>{t}</li>)}
    </ul>
  );
}

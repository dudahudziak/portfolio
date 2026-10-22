import styles from './Section.module.css';

/** Wrapper reutilizável: define id (âncora), título e largura padrão. */
export default function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={styles.inner}>
        <h2 id={`${id}-title`} className={styles.title}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

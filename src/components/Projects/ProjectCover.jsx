import { useState } from 'react';
import styles from './ProjectCover.module.css';

/** Mostra a imagem do projeto; se não existir, mostra um gradiente com o título. */
export default function ProjectCover({ src, title }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className={styles.fallback}>{title}</div>;
  }
  return <img className={styles.img} src={src} alt={`Captura de tela de ${title}`} loading="lazy" onError={() => setFailed(true)} />;
}

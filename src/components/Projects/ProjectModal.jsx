import { useEffect, useRef } from 'react';
import ProjectCover from './ProjectCover';
import TechList from './TechList';
import styles from './ProjectModal.module.css';

/** Detalhamento do projeto usando o elemento nativo <dialog> (foco e Esc já acessíveis). */
export default function ProjectModal({ project, onClose }) {
  const ref = useRef(null);
  const { title, details, tech, images, repo, demo } = project;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleBackdrop = (e) => {
    if (e.target === ref.current) onClose(); // clique fora do conteúdo
  };

  return (
    <dialog ref={ref} className={styles.dialog} onClose={onClose} onClick={handleBackdrop} aria-labelledby="modal-title">
      <div className={styles.content}>
        <button className={styles.close} onClick={onClose} aria-label="Fechar">×</button>
        <h3 id="modal-title">{title}</h3>

        <div className={styles.gallery}>
          {(images.length ? images : [null]).map((src, i) => (
            <ProjectCover key={src ?? i} src={src} title={title} />
          ))}
        </div>

        <p className={styles.details}>{details}</p>
        <TechList items={tech} />
        <div className={styles.links}>
          {repo && <a href={repo} target="_blank" rel="noreferrer">Repositório</a>}
          {demo && <a href={demo} target="_blank" rel="noreferrer">Demonstração</a>}
        </div>
      </div>
    </dialog>
  );
}

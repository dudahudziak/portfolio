import ProjectCover from './ProjectCover';
import TechList from './TechList';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, onOpen }) {
  const { title, description, tech, images, repo, demo } = project;
  return (
    <article className={styles.card}>
      <ProjectCover src={images[0]} title={title} />
      <div className={styles.body}>
        <h3>{title}</h3>
        <p>{description}</p>
        <TechList items={tech} />
        <div className={styles.actions}>
          <button onClick={onOpen} className={styles.detail}>Ver detalhes</button>
          {repo && <a href={repo} target="_blank" rel="noreferrer">Código</a>}
          {demo && <a href={demo} target="_blank" rel="noreferrer">Demo</a>}
        </div>
      </div>
    </article>
  );
}

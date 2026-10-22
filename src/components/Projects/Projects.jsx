import { useState } from 'react';
import Section from '../Section/Section';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/portfolio';
import styles from './Projects.module.css';

export default function Projects() {
  // Projeto aberto no detalhamento (null = nenhum)
  const [selected, setSelected] = useState(null);

  return (
    <Section id="projetos" title="Projetos">
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} onOpen={() => setSelected(project)} />
          </li>
        ))}
      </ul>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </Section>
  );
}

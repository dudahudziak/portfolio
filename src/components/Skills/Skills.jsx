import Section from '../Section/Section';
import { skills } from '../../data/portfolio';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className={styles.groups}>
        {skills.map(({ group, items }) => (
          <div key={group} className={styles.group}>
            <h3>{group}</h3>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

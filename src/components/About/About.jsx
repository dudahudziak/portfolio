import { useState } from 'react';
import Section from '../Section/Section';
import { profile } from '../../data/portfolio';
import styles from './About.module.css';

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const initials = profile.name.split(' ').map((n) => n[0]).slice(0, 2).join('');

  return (
    <Section id="sobre" title="Sobre mim">
      <div className={styles.grid}>
        <div className={styles.photoWrap}>
          {photoFailed ? (
            <div className={styles.fallback} aria-label="Foto não encontrada">{initials}</div>
          ) : (
            <img src={profile.photo} alt={`Foto de ${profile.name}`} className={styles.photo} onError={() => setPhotoFailed(true)} />
          )}
        </div>

        <div className={styles.text}>
          {profile.about.map((p) => <p key={p}>{p}</p>)}
          <dl className={styles.info}>
            <div><dt>Local</dt><dd>{profile.location}</dd></div>
            <div><dt>E-mail</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
          </dl>
        </div>
      </div>
    </Section>
  );
}

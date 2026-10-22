import Section from '../Section/Section';
import useContactForm from '../../hooks/useContactForm';
import { profile } from '../../data/portfolio';
import styles from './Contact.module.css';

export default function Contact() {
  const { values, status, handleChange, handleSubmit } = useContactForm();

  return (
    <Section id="contato" title="Contato">
      <div className={styles.grid}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <label>Nome
            <input name="name" value={values.name} onChange={handleChange} autoComplete="name" required />
          </label>
          <label>E-mail
            <input name="email" type="email" value={values.email} onChange={handleChange} autoComplete="email" required />
          </label>
          <label>Mensagem
            <textarea name="message" rows="5" value={values.message} onChange={handleChange} required />
          </label>
          <button type="submit" disabled={status.type === 'loading'}>Enviar mensagem</button>
          <p role="status" aria-live="polite" className={`${styles.status} ${styles[status.type]}`}>{status.text}</p>
        </form>

        <ul className={styles.links}>
          <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          {profile.links.map(({ label, url }) => (
            <li key={label}><a href={url} target="_blank" rel="noreferrer">{label}</a></li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

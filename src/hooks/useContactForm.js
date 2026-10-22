import { useState } from 'react';
import { profile } from '../data/portfolio';

const initial = { name: '', email: '', message: '' };

/** Controla campos, validação e envio do formulário de contato. */
export default function useContactForm() {
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState({ type: 'idle', text: '' });

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = values;

    if (!name.trim() || !/^\S+@\S+\.\S+$/.test(email) || message.trim().length < 10) {
      setStatus({ type: 'error', text: 'Preencha nome, um e-mail válido e uma mensagem com pelo menos 10 caracteres.' });
      return;
    }

    // Sem Formspree configurado: abre o app de e-mail do visitante
    if (!profile.formspreeId) {
      const subject = encodeURIComponent(`Contato pelo portfólio - ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({ type: 'success', text: 'Abrindo seu app de e-mail para enviar a mensagem.' });
      return;
    }

    setStatus({ type: 'loading', text: 'Enviando...' });
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error();
      setValues(initial);
      setStatus({ type: 'success', text: 'Mensagem enviada! Responderei em breve.' });
    } catch {
      setStatus({ type: 'error', text: 'Não foi possível enviar. Tente novamente ou use um dos links ao lado.' });
    }
  };

  return { values, status, handleChange, handleSubmit };
}

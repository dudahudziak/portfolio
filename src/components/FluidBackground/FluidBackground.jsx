import { useEffect, useRef } from 'react';
import styles from './FluidBackground.module.css';

/**
 * Fundo preto com formas fluidas em gradiente.
 * As formas se deformam e flutuam via CSS; o mouse (ou o scroll) desloca
 * cada uma com intensidade diferente, criando profundidade.
 */
export default function FluidBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const onMove = (e) => {
      target.x = e.clientX / window.innerWidth - 0.5;
      target.y = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => {
      target.y = (window.scrollY / document.body.scrollHeight) * 2 - 0.5;
    };

    // Suaviza o movimento (interpolação) para parecer líquido
    const loop = () => {
      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;
      el.style.setProperty('--px', current.x.toFixed(4));
      el.style.setProperty('--py', current.y.toFixed(4));
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    loop();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={styles.stage} aria-hidden="true">
      <span className={`${styles.blob} ${styles.a}`} />
      <span className={`${styles.blob} ${styles.c}`} />
      <span className={styles.shade} />
    </div>
  );
}

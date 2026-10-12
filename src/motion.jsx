import { useEffect, useRef } from 'react';

export function useMotion(container, dependency) {
  useEffect(() => {
    const root = container.current;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || preference.matches || !('IntersectionObserver' in window)) return;
    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const node = entry.target;
        observer.unobserve(node);
        // Content is never hidden while waiting for intersection or JavaScript.
        const animation = node.animate(
          [{ opacity: .35, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 600, delay: Number(node.dataset.delay || 0), easing: 'cubic-bezier(.2,.7,.2,1)' }
        );
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: .12 });
    root.querySelectorAll('[data-reveal]').forEach(node => observer.observe(node));
    const stop = () => { if (preference.matches) { observer.disconnect(); animations.forEach(animation => animation.cancel()); } };
    preference.addEventListener('change', stop);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); preference.removeEventListener('change', stop); };
  }, [container, dependency]);
}

export function Counter({ value }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || !('IntersectionObserver' in window)) return;
    let frame = 0;
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      const start = performance.now();
      const goal = parseInt(value, 10);
      const tick = now => {
        const progress = Math.min(1, (now - start) / 1000);
        node.textContent = Math.round(goal * (1 - Math.pow(1 - progress, 3))) + (value.endsWith('+') ? '+' : '');
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: .7 });
    const stop = () => { if (preference.matches) { cancelAnimationFrame(frame); node.textContent = value; observer.disconnect(); } };
    observer.observe(node);
    preference.addEventListener('change', stop);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); preference.removeEventListener('change', stop); };
  }, [value]);
  return <strong><bdi dir="ltr" aria-hidden="true" ref={ref}>{value}</bdi><span className="sr-only" dir="ltr">{value}</span></strong>;
}

export function scrollToSection(hash) {
  const target = document.getElementById(hash.slice(1));
  if (!target) return;
  target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
  target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
}

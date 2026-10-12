import React, { useEffect, useRef, useState } from 'react';

export function VideoBackground({ id, file, poster }) {
  const video = useRef(null);
  const [hasFrame, setHasFrame] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = video.current;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = navigator.connection;
    let visible = false;
    const load = () => {
      if (!node.getAttribute('src')) { node.src = file; node.load(); }
    };
    const sync = () => {
      const blocked = preference.matches || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '');
      if (!visible || document.hidden || blocked || failed) { node.pause(); return; }
      load();
      node.muted = true;
      const attempt = node.play();
      attempt?.catch(() => { /* Keep the still-image fallback if autoplay is blocked. */ });
    };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, { threshold: .05 });
    observer.observe(node.parentElement);
    const motionChanged = () => sync();
    preference.addEventListener('change', motionChanged);
    connection?.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => { observer.disconnect(); node.pause(); preference.removeEventListener('change', motionChanged); connection?.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); };
  }, [file, failed]);

  return <div className="video-background" aria-hidden="true">
      <img className="video-poster" src={poster} alt="" width="1280" height="720" fetchPriority={id === 'hero-video' ? 'high' : 'auto'} loading={id === 'hero-video' ? 'eager' : 'lazy'} />
      <video id={id} ref={video} className={hasFrame && !failed ? 'has-frame' : ''} poster={poster} muted loop playsInline preload="none" tabIndex={-1}
        onLoadedData={() => setHasFrame(true)} onError={() => setFailed(true)} />
    </div>;
}

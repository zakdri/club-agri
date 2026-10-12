import React, { useEffect, useRef, useState } from 'react';
import { T, useLanguage } from './language.jsx';

export function VideoBackground({ id, file, poster, label }) {
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);
  const [failed, setFailed] = useState(false);
  const userPaused = useRef(false);
  const manualPlay = useRef(false);
  const { t } = useLanguage();

  useEffect(() => {
    const node = video.current;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const connection = navigator.connection;
    let visible = false;
    let disposed = false;
    const load = () => {
      if (!node.getAttribute('src')) { node.src = file; node.load(); }
    };
    const sync = () => {
      const blocked = (preference.matches || connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '')) && !manualPlay.current;
      if (!visible || document.hidden || userPaused.current || blocked || failed) { node.pause(); return; }
      load();
      node.muted = true;
      const attempt = node.play();
      attempt?.catch(() => { if (!disposed) setPlaying(false); });
    };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }, { threshold: .05 });
    observer.observe(node.parentElement);
    const motionChanged = () => { manualPlay.current = false; sync(); };
    preference.addEventListener('change', motionChanged);
    connection?.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => { disposed = true; observer.disconnect(); node.pause(); preference.removeEventListener('change', motionChanged); connection?.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync); };
  }, [file, failed]);

  const toggle = async () => {
    const node = video.current;
    if (playing) { userPaused.current = true; node.pause(); return; }
    manualPlay.current = true;
    userPaused.current = false;
    if (!node.getAttribute('src')) { node.src = file; node.load(); }
    node.muted = true;
    try { await node.play(); } catch { setPlaying(false); }
  };

  return <>
    <div className="video-background" aria-hidden="true">
      <img className="video-poster" src={poster} alt="" width="1280" height="720" fetchPriority={id === 'hero-video' ? 'high' : 'auto'} loading={id === 'hero-video' ? 'eager' : 'lazy'} />
      <video id={id} ref={video} className={hasFrame && !failed ? 'has-frame' : ''} poster={poster} muted loop playsInline preload="none" tabIndex={-1}
        onLoadedData={() => setHasFrame(true)} onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setFailed(true); setPlaying(false); }} />
    </div>
    {!failed && <button type="button" className="video-toggle" aria-controls={id} aria-label={`${t(playing ? 'pauseVideo' : 'playVideo')} — ${t(label)}`} onClick={toggle}>
      <i className={`fa-solid ${playing ? 'fa-pause' : 'fa-play'}`} aria-hidden="true" /><T id={playing ? 'pauseVideo' : 'playVideo'} />
    </button>}
  </>;
}

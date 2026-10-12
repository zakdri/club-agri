import React, { useEffect, useRef } from 'react';

export function VideoBackground({ id, file }) {
  const video = useRef(null);

  useEffect(() => {
    const node = video.current;
    // Keep both videos running across scrolling and language changes.
    // Native autoplay also works before hydration and without JavaScript.
    const play = () => {
      if (document.hidden || node.error) return;
      node.muted = true;
      node.defaultMuted = true;
      const attempt = node.play();
      attempt?.catch(() => { /* Retry on canplay or the first visitor gesture. */ });
    };
    const resume = () => { if (node.paused) play(); };
    node.addEventListener('loadeddata', play);
    node.addEventListener('canplay', play);
    document.addEventListener('visibilitychange', resume);
    document.addEventListener('pointerdown', resume, { passive: true });
    document.addEventListener('keydown', resume);
    play();
    return () => {
      node.removeEventListener('loadeddata', play);
      node.removeEventListener('canplay', play);
      document.removeEventListener('visibilitychange', resume);
      document.removeEventListener('pointerdown', resume);
      document.removeEventListener('keydown', resume);
    };
  }, [file]);

  return <div className="video-background" aria-hidden="true">
      <video id={id} ref={video} src={file} autoPlay muted loop playsInline preload="auto" tabIndex={-1} />
    </div>;
}

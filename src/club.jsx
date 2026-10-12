import React, { useEffect, useRef, useState } from 'react';
import { data, LanguageProvider, T, Text, useLanguage } from './language.jsx';
import { Counter, scrollToSection, useMotion } from './motion.jsx';
import { VideoBackground } from './video-background.jsx';

const Icon = ({ name = 'fa-arrow-right' }) => <i className={`fa-solid ${name}`} aria-hidden="true" />;
const Image = ({ item, ...props }) => { const { tr } = useLanguage(); return <img src={`assets/images/${item.file}`} alt={tr(item.title)} width="1024" height="768" loading="lazy" decoding="async" {...props} />; };
const Eyebrow = ({ id }) => <span className="eyebrow"><T id={id} /></span>;

export function Brand() {
  const { t } = useLanguage();
  return <a className="brand" href="index.html" aria-label={t('homeLabel')}><span className="wordmark" dir="ltr">club<span>AGRI<span className="brand-dot">.</span></span></span><span className="brand-sub"><T id="clubName" /></span></a>;
}

export function Header({ page, openMenu }) {
  const { language, changeLanguage, tr, t } = useLanguage();
  return <><a className="skip" href="#main"><T id="skip" /></a><header className="site-header"><div className="container header-inner"><Brand />
    <nav className="desktop-nav" aria-label={t('navigation')}>{['club', 'services', 'packs', 'children'].map(id => { const item = data.navigation.find(n => n.id === id); return <a key={id} href={item.file} aria-current={page === id ? 'page' : undefined}>{tr(item.label)}</a>; })}</nav>
    <div className="header-actions"><label className="language-select"><span className="sr-only"><T id="language" /></span><select data-language value={language} onChange={event => changeLanguage(event.target.value)}><option value="fr">FR</option><option value="ar">العربية</option><option value="zgh">ⵜⵎⵣⵉⵖⵜ</option></select></label>
      <a className="button button-small" href="index.html#adhesion">{tr(data.navigation[9].label)}</a><button className="icon-button menu-toggle" onClick={openMenu} aria-haspopup="dialog" aria-controls="navigation-dialog" aria-label={t('menu')}><Icon name="fa-bars" /></button></div>
  </div></header></>;
}

export function Footer() {
  const { t } = useLanguage();
  const links = [['le-club', 'natureKicker'], ['activites', 'allActivities'], ['packs', 'discoverPacks'], ['ecoles-enfants', 'schoolsKicker'], ['galerie', 'galleryKicker']];
  return <footer className="site-footer"><div className="container footer-grid"><div><Brand /><p><T id="footerIntro" /></p><span className="filiation"><T id="filiation" /></span></div><div><h2><T id="quickLinks" /></h2><nav aria-label={t('quickLinks')}>{links.map(([id, label]) => <a href={`index.html#${id}`} key={id}><T id={label} /></a>)}</nav></div><div id="informations-pratiques"><h2><T id="locationTitle" /></h2><p><T id="locationIntro" /></p><span className="location-line"><Icon name="fa-location-dot" /><T id="rabat" /></span></div></div><div className="container footer-bottom"><span dir="ltr">© {new Date().getFullYear()} Club AGRI</span><a href="#top" className="back-top"><T id="top" /><Icon name="fa-arrow-up" /></a></div></footer>;
}

function SectionHeading({ prefix }) {
  return <div className="section-heading" data-reveal><div><Eyebrow id={`${prefix}Kicker`} /><h2><T id={`${prefix}Title`} /></h2></div><p><T id={`${prefix}Intro`} /></p></div>;
}

function Activities() {
  const { tr, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  // Complete prerender/no-JS content; hydrate then show the six-item selection.
  const [expanded, setExpanded] = useState(true);
  useEffect(() => setExpanded(false), []);
  const items = data.activities.filter(item => filter === 'all' || item.categories.includes(filter));
  const visible = expanded ? items : items.slice(0, 6);
  return <section className="section activities-section" id="activites"><div className="container"><SectionHeading prefix="activities" />
    <div className="filters" role="group" aria-label={t('filters')}>{data.filters.map(item => <button key={item.id} data-filter={item.id} aria-pressed={filter === item.id} onClick={() => { setFilter(item.id); setExpanded(false); }}><Icon name={item.icon} />{tr(item.label)}</button>)}</div>
    <div id="activity-results"><div className="activity-grid">{visible.map((item, index) => <article key={item.id} className="activity-card" data-activity-id={item.id}><span className={`activity-icon color-${index % 3}`}><Icon name={item.icon} /></span><div><h3>{tr(item.title)}</h3><p>{tr(item.description)}</p></div></article>)}</div>
      {!items.length && <p><T id="empty" /></p>}<p className="sr-only" aria-live="polite"><bdi dir="ltr">{visible.length} / {items.length}</bdi></p>
      {items.length > 6 && <div className="section-action"><button className="text-button" data-expand-activities aria-expanded={expanded} onClick={() => setExpanded(!expanded)}><T id={expanded ? 'fewerActivities' : 'allActivities'} /><Icon name={expanded ? 'fa-minus' : 'fa-plus'} /></button></div>}
    </div><div className="on-site"><span><T id="onSite" /></span><span><Icon name="fa-kit-medical" /><T id="infirmary" /></span><span><Icon name="fa-mosque" /><T id="mosque" /></span></div></div></section>;
}

function Homepage({ selectPack, selectedPack, openGallery }) {
  const { tr, t } = useLanguage();
  const pack = data.packs.find(item => item.id === selectedPack);
  return <main id="main">
    <section className="hero hero-video-section" aria-labelledby="hero-title">
      <VideoBackground id="hero-video" file="assets/videos/club-agri.mp4" poster="assets/images/club-entrance.jpg" label="heroVideo" />
      <div className="hero-shade" /><div className="container hero-content" data-reveal><span className="hero-kicker"><T id="heroKicker" /></span><h1 id="hero-title" dir="ltr">Club AGRI</h1><h2 className="hero-heading"><T id="heroTitle" /></h2><p><T id="heroIntro" /></p><div className="hero-actions"><a className="button button-light" href="#le-club"><T id="explore" /><Icon /></a><a className="hero-secondary" href="#adhesion"><T id="join" /><Icon /></a></div></div><a className="hero-scroll" href="#le-club"><T id="scroll" /><Icon name="fa-arrow-down" /></a>
    </section>
    <section className="stats-band"><div className="container stats-grid">{data.stats.map((item, index) => <div className="stat" key={index}><Counter value={item.value} /><div><span>{tr(item.unit)}</span><p>{tr(item.label)}</p></div></div>)}</div></section>
    <section className="section about-section" id="le-club"><div className="container about-grid"><div className="section-copy" data-reveal><Eyebrow id="natureKicker" /><h2><T id="natureTitle" /></h2><p><T id="natureIntro" /></p><p className="muted"><T id="natureHistory" /></p>
      <ol className="history-timeline" aria-label={t('history')}><li data-reveal><bdi dir="ltr">40+</bdi><span>{tr(data.stats[2].unit)}</span></li><li data-reveal data-delay="100"><Icon name="fa-leaf" /><span><T id="renovation" /></span></li><li data-reveal data-delay="200"><bdi dir="ltr">2022</bdi><span><T id="inauguration" /></span></li></ol>
    </div><figure className="about-photo" data-reveal><Image item={data.gallery[1]} /><figcaption><Icon name="fa-water" /><T id="poolCaption" /></figcaption></figure></div></section>
    <Activities />
    <section className="section packs-section packs-video-section" id="packs">
      <VideoBackground id="packs-video" file="assets/videos/football.mp4" poster="assets/images/football-poster.jpg" label="packsVideo" />
      <div className="packs-shade" /><div className="container"><SectionHeading prefix="packs" /><div className="pack-grid">{data.packs.map((item, index) => <article key={item.id} className={`pack-card pack-${item.color}`} data-reveal data-delay={index * 80}><div className="pack-visual"><span className="pack-index"><bdi dir="ltr">{String(index + 1).padStart(2, '0')}</bdi></span><Icon name={item.icon} /></div><div className="pack-content"><span className="pack-label"><T id="packLabel" /></span><h3 dir="ltr">{item.name}</h3><a className="pack-action" data-select-pack={item.id} href="#adhesion" aria-label={`${t('packCta')} — ${item.name}`} onClick={() => selectPack(item.id)}><T id="packCta" /><Icon /></a></div></article>)}</div></div>
    </section>
    <section className="section schools-section" id="ecoles-enfants"><div className="container schools-grid"><div className="section-copy" data-reveal><Eyebrow id="schoolsKicker" /><h2><T id="schoolsTitle" /></h2><p><T id="schoolsIntro" /></p><div className="school-facts"><span><Icon name="fa-child-reaching" /><T id="age" /></span><span><Icon name="fa-calendar-days" /><T id="sessions" /></span></div><a className="text-button schools-cta" href="#informations-pratiques"><T id="schoolsCta" /><Icon /></a></div><div className="school-list">{data.schools.map((item, index) => <article key={item.id} data-reveal data-delay={index * 80}><span className="school-icon"><Icon name={item.icon} /></span><div><h3>{tr(item.title)}</h3><p>{tr(item.description)}</p></div></article>)}</div></div></section>
    <section className="section gallery-section" id="galerie"><div className="container"><SectionHeading prefix="gallery" /><div className="gallery-grid">{data.gallery.map((item, index) => <a className="gallery-photo" href={`assets/images/${item.file}`} key={item.id} data-gallery={index} aria-label={`${t('enlarge')} — ${tr(item.title)}`} onClick={event => { event.preventDefault(); openGallery(index, event.currentTarget); }}><Image item={item} /><span className="gallery-caption">{tr(item.title)}<span className="gallery-enlarge"><Icon name="fa-expand" /></span></span></a>)}</div></div></section>
    <section className="membership-section" id="adhesion"><div className="container membership-grid" id="membership-content"><div className="membership-copy" data-reveal><Eyebrow id="membershipKicker" /><h2><T id="membershipTitle" /></h2><p><T id="membershipIntro" /></p>{pack && <div className="selected-pack" aria-live="polite"><span><T id="packSelected" /> : <bdi dir="ltr">{pack.name}</bdi></span><button className="icon-button" data-clear-pack aria-label={t('removePack')} onClick={() => { selectPack(''); document.querySelector('#membership-content a').focus({ preventScroll: true }); }}><Icon name="fa-xmark" /></button></div>}<a className="button button-light" href="#packs"><T id="discoverPacks" /><Icon /></a></div><ol className="membership-steps">{data.steps.map((item, index) => <li key={index} data-reveal data-delay={index * 80}><span className="step-number"><bdi dir="ltr">{String(index + 1).padStart(2, '0')}</bdi></span><span>{tr(item)}</span></li>)}</ol></div></section>
  </main>;
}

function PageShell({ page }) {
  const { language, tr, t } = useLanguage();
  const root = useRef(null);
  const menu = useRef(null);
  const gallery = useRef(null);
  const returnFocus = useRef(null);
  const [selectedPack, selectPack] = useState('');
  const [galleryIndex, setGalleryIndex] = useState(0);
  useMotion(root, language);
  useEffect(() => { if (location.hash) requestAnimationFrame(() => scrollToSection(location.hash)); }, []);
  const openDialog = (ref, trigger) => { returnFocus.current = trigger || document.activeElement; ref.current.showModal(); document.body.classList.add('dialog-open'); };
  const closeDialog = () => { document.body.classList.remove('dialog-open'); returnFocus.current?.focus({ preventScroll: true }); };
  const backdropClick = event => { if (event.target !== event.currentTarget) return; const box = event.currentTarget.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) event.currentTarget.close(); };
  const nextImage = step => setGalleryIndex(index => (index + step + data.gallery.length) % data.gallery.length);
  const anchorClick = event => {
    const anchor = event.target.closest('a');
    if (!anchor || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const url = new URL(anchor.href, location.href);
    if (url.origin !== location.origin || url.pathname.replace(/index\.html$/, '') !== location.pathname.replace(/index\.html$/, '') || !url.hash || !document.getElementById(url.hash.slice(1))) return;
    event.preventDefault();
    try { history.pushState(null, '', url.hash); } catch { /* file preview */ }
    scrollToSection(url.hash);
  };
  const item = data.gallery[galleryIndex];
  return <div ref={root} onClick={anchorClick}>
    <Header page={page} openMenu={() => openDialog(menu)} />
    {page === 'home' ? <Homepage selectPack={selectPack} selectedPack={selectedPack} openGallery={(index, trigger) => { setGalleryIndex(index); openDialog(gallery, trigger); }} /> : <main id="main" className="empty-page"><div className="container"><h1>{tr(data.navigation.find(n => n.id === page).label)}</h1></div></main>}
    <Footer />
    <dialog id="navigation-dialog" className="menu-dialog" ref={menu} aria-labelledby="menu-title" onClose={closeDialog} onClick={backdropClick}><div className="menu-heading"><h2 id="menu-title" dir="ltr">Club AGRI</h2><button className="icon-button" onClick={() => menu.current.close()} aria-label={t('close')}><Icon name="fa-xmark" /></button></div><nav aria-label={t('navigation')}>{data.navigation.map((n, index) => <a key={n.id} data-nav-id={n.id} href={n.file} aria-current={page === n.id ? 'page' : undefined}><span className="menu-number"><bdi dir="ltr">{String(index + 1).padStart(2, '0')}</bdi></span>{tr(n.label)}<Icon /></a>)}</nav></dialog>
    {page === 'home' && <dialog className="gallery-dialog" id="gallery-dialog" ref={gallery} aria-label={t('galleryTitle')} onClose={closeDialog} onClick={backdropClick} onKeyDown={event => { if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return; event.preventDefault(); nextImage((event.key === 'ArrowRight' ? 1 : -1) * (language === 'ar' ? -1 : 1)); }}><button className="icon-button gallery-close" onClick={() => gallery.current.close()} aria-label={t('close')}><Icon name="fa-xmark" /></button><figure><Image item={item} id="lightbox-image" loading="eager" /><figcaption id="lightbox-caption">{tr(item.title)}</figcaption></figure><div className="gallery-controls"><button className="icon-button" onClick={() => nextImage(-1)} aria-label={t('previous')}><Icon name="fa-arrow-left" /></button><span id="gallery-position" dir="ltr" aria-live="polite">{galleryIndex + 1} / {data.gallery.length}</span><button className="icon-button" onClick={() => nextImage(1)} aria-label={t('next')}><Icon /></button></div></dialog>}
  </div>;
}

export function ClubApp({ initialLanguage = 'fr', page = 'home' }) {
  return <LanguageProvider initialLanguage={initialLanguage} page={page}><PageShell page={page} /></LanguageProvider>;
}

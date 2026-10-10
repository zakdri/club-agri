(function () {
  'use strict';
  const root = document.getElementById('site');
  const data = window.ClubData;
  const view = window.ClubView;
  const page = document.body.dataset.page || 'home';
  let language = 'fr';
  let filter = 'all';
  let expanded = false;
  let selectedPack = '';
  let galleryIndex = 0;
  let scrollFrame = 0;
  try {
    const saved = localStorage.getItem('club-agri.language');
    if (data.languages.includes(saved)) language = saved;
  } catch (_) { /* Storage is optional for local file previews. */ }

  function render() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    const nav = data.navigation.find(n => n.id === page);
    document.title = 'Club AGRI | ' + nav.label[language];
    document.querySelector('meta[name="description"]').content = data.text.description[language];
    root.innerHTML = view.render(language, page);
    if (page === 'home') {
      updateActivities();
      updateMembership();
    }
    root.querySelectorAll('dialog').forEach(dialog => {
      dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); });
    });
  }
  function updateActivities() {
    root.querySelector('#activity-results').innerHTML = view.activities(language, filter, expanded);
    root.querySelectorAll('[data-filter]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === filter));
    });
  }
  function updateMembership() {
    root.querySelector('#membership-content').innerHTML = view.membership(language, selectedPack);
  }
  function scrollToSection(hash) {
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    cancelAnimationFrame(scrollFrame);
    const start = window.scrollY;
    const header = document.querySelector('.site-header').getBoundingClientRect().height;
    const end = Math.max(0, Math.min(start + target.getBoundingClientRect().top - header - 18, document.documentElement.scrollHeight - innerHeight));
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.scrollTo(0,end);
      focusTarget(target);
      return;
    }
    const time = performance.now();
    const tick = now => {
      const p = Math.min(1,(now-time)/420);
      const eased = p < .5 ? 4*p*p*p : 1-Math.pow(-2*p+2,3)/2;
      window.scrollTo(0,start+(end-start)*eased);
      if (p < 1) scrollFrame = requestAnimationFrame(tick);
      else focusTarget(target);
    };
    scrollFrame = requestAnimationFrame(tick);
  }
  function focusTarget(target) {
    target.setAttribute('tabindex','-1');
    target.focus({preventScroll:true});
    target.addEventListener('blur',() => target.removeAttribute('tabindex'),{once:true});
  }
  function openDialog(id) {
    const dialog = document.getElementById(id);
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
  function showGallery(index) {
    galleryIndex = (index+data.gallery.length)%data.gallery.length;
    const item = data.gallery[galleryIndex];
    const image = root.querySelector('#lightbox-image');
    image.src = 'assets/images/' + item.file;
    image.alt = item.title[language];
    root.querySelector('#lightbox-caption').textContent = item.title[language];
    root.querySelector('#gallery-position').textContent = (galleryIndex+1) + ' / ' + data.gallery.length;
  }
  root.addEventListener('change',event => {
    if (!event.target.matches('[data-language]')) return;
    cancelAnimationFrame(scrollFrame);
    const scroll = window.scrollY;
    language = event.target.value;
    try { localStorage.setItem('club-agri.language',language); } catch (_) { }
    render();
    root.querySelector('[data-language]').focus({preventScroll:true});
    window.scrollTo(0,scroll);
  });
  root.addEventListener('click',event => {
    const control = event.target.closest('button,a,dialog');
    if (!control) return;
    if (control.matches('dialog') && event.target === control) {
      const box = control.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) control.close();
      return;
    }
    if (control.matches('[data-open-menu]')) { openDialog('navigation-dialog'); return; }
    if (control.matches('[data-close-dialog]')) { control.closest('dialog').close(); return; }
    if (control.matches('[data-filter]')) { filter = control.dataset.filter; expanded = false; updateActivities(); return; }
    if (control.matches('[data-expand-activities]')) {
      expanded = !expanded;
      updateActivities();
      root.querySelector('[data-expand-activities]').focus({preventScroll:true});
      return;
    }
    if (control.matches('[data-clear-pack]')) {
      selectedPack = '';
      updateMembership();
      root.querySelector('#membership-content a').focus({preventScroll:true});
      return;
    }
    if (control.matches('[data-select-pack]')) { selectedPack = control.dataset.selectPack; updateMembership(); }
    if (control.matches('[data-gallery]')) {
      event.preventDefault();
      showGallery(Number(control.dataset.gallery));
      openDialog('gallery-dialog');
      return;
    }
    if (control.matches('[data-gallery-direction]')) { showGallery(galleryIndex+Number(control.dataset.galleryDirection)); return; }
    if (control.matches('a')) {
      const url = new URL(control.href,location.href);
      const samePage = url.origin === location.origin && url.pathname.replace(/index\.html$/,'') === location.pathname.replace(/index\.html$/,'');
      if (samePage && url.hash && document.getElementById(url.hash.slice(1))) {
        event.preventDefault();
        const dialog = control.closest('dialog');
        if (dialog) dialog.close();
        if (location.hash !== url.hash) {
          try { history.pushState(null,'',url.hash); } catch (_) { }
        }
        scrollToSection(url.hash);
      }
    }
  });
  document.addEventListener('keydown',event => {
    const gallery = document.getElementById('gallery-dialog');
    if (!gallery || !gallery.open) return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const increment = event.key === 'ArrowRight' ? 1 : -1;
      showGallery(galleryIndex + (language === 'ar' ? -increment : increment));
    }
  });
  ['wheel','touchstart'].forEach(name => window.addEventListener(name,() => cancelAnimationFrame(scrollFrame),{passive:true}));
  render();
  if (location.hash && page === 'home') requestAnimationFrame(() => scrollToSection(location.hash));
})();

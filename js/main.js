/* Native JavaScript: mobile menu, missing-image fallback, motion */
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    const setMenuOpen = (isOpen) => {
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
      nav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
    };
    toggle.addEventListener('click', () => setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenuOpen(false)));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { setMenuOpen(false); toggle.focus(); }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) setMenuOpen(false);
    });
  }

  // 원본 이미지가 없는 미리보기 환경에서는 카드의 대체 디자인을 표시합니다.
  document.querySelectorAll('.project-image').forEach((img) => {
    const handleMissing = () => { img.hidden = true; };
    img.addEventListener('error', handleMissing);
    if (img.complete && img.naturalWidth === 0) handleMissing();
  });

  const reveals = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });
    reveals.forEach((el) => observer.observe(el));
    document.body.classList.add('motion-ready');
  }
})();

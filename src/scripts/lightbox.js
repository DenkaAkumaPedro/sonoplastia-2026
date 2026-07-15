/* ============================================
   Lightbox Gallery — Sonoplastia 2026
   ============================================ */
(function () {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const items = document.querySelectorAll('.gallery-item');

  if (!overlay || items.length === 0) return;

  const images = [];
  items.forEach(function (item) {
    const imgEl = item.querySelector('img');
    images.push({
      src: imgEl.src,
      alt: imgEl.alt
    });
  });

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = index;
    img.src = images[index].src;
    img.alt = images[index].alt;
    caption.textContent = images[index].alt;
  }

  function openLightbox(index) {
    showImage(index);
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    closeBtn.focus();
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function prev() {
    showImage((currentIndex - 1 + images.length) % images.length);
  }

  function next() {
    showImage((currentIndex + 1) % images.length);
  }

  items.forEach(function (item, i) {
    item.addEventListener('click', function () {
      openLightbox(i);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });

  prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    prev();
  });
  nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    next();
  });

  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
})();

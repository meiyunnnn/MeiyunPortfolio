// Steam-style Media Gallery
function initSteamGallery(galleryId) {
  const gallery = document.getElementById(galleryId);
  if (!gallery) return;

  const slides = gallery.querySelectorAll('.steam-slide');
  const thumbs = gallery.querySelectorAll('.steam-thumb');
  const prevBtn = gallery.querySelector('.prev-btn');
  const nextBtn = gallery.querySelector('.next-btn');
  let currentIndex = 0;

  function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    // Reset iframe to stop playing video when moving away
    const currentSlide = slides[currentIndex];
    if (currentSlide && currentSlide.dataset.type === 'video') {
      const iframe = currentSlide.querySelector('iframe');
      if (iframe) {
        const src = iframe.src;
        iframe.src = src;
      }
    }

    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    thumbs.forEach((t, i) => t.classList.toggle('active', i === index));

    // Scroll active thumbnail smoothly into view
    if (thumbs[index]) {
      thumbs[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    currentIndex = index;
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showSlide(currentIndex + 1);
    });
  }

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => showSlide(idx));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize any galleries found on the page
  document.querySelectorAll('.steam-gallery').forEach((gal) => {
    if (gal.id) {
      initSteamGallery(gal.id);
    }
  });
});

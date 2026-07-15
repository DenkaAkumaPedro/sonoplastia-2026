/* ============================================
   Audio Player — Sonoplastia 2026
   ============================================ */
(function () {
  const openBtn = document.getElementById('open-player');
  const modal = document.getElementById('audio-modal');
  const closeBtn = document.getElementById('player-close');
  const audio = document.getElementById('audio-element');
  const playBtn = document.getElementById('play-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const progressBar = document.getElementById('progress-bar');
  const currentTimeEl = document.getElementById('current-time');
  const totalTimeEl = document.getElementById('total-time');
  const volumeSlider = document.getElementById('volume-slider');
  const muteBtn = document.getElementById('mute-btn');
  const volumeIcon = document.getElementById('volume-icon');
  const lyricsToggle = document.getElementById('lyrics-toggle');
  const lyricsPanel = document.getElementById('lyrics-panel');

  let lastVolume = 0.8;

  if (!modal) return;

  function formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  function updateSliderBackground(slider) {
    const val = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = 'linear-gradient(to right, var(--accent) ' + val + '%, rgba(255,255,255,0.12) ' + val + '%)';
  }

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    playBtn.focus();
  }

  function closeModal() {
    audio.pause();
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    setPlayState(false);
    openBtn.focus();
  }

  function setPlayState(playing) {
    if (playing) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
      playBtn.setAttribute('aria-label', 'Pausar');
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
      playBtn.setAttribute('aria-label', 'Tocar');
    }
  }

  // Open / Close
  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Play / Pause
  playBtn.addEventListener('click', function () {
    if (audio.paused) {
      audio.play().catch(function () {});
    } else {
      audio.pause();
    }
  });

  audio.addEventListener('play', function () { setPlayState(true); });
  audio.addEventListener('pause', function () { setPlayState(false); });

  // Time update
  audio.addEventListener('timeupdate', function () {
    if (audio.duration) {
      progressBar.value = audio.currentTime;
      progressBar.max = audio.duration;
      currentTimeEl.textContent = formatTime(audio.currentTime);
      updateSliderBackground(progressBar);
    }
  });

  audio.addEventListener('loadedmetadata', function () {
    totalTimeEl.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
  });

  // Seek
  progressBar.addEventListener('input', function () {
    audio.currentTime = progressBar.value;
  });

  // Volume
  volumeSlider.addEventListener('input', function () {
    audio.volume = parseFloat(volumeSlider.value);
    lastVolume = audio.volume;
    updateSliderBackground(volumeSlider);
    updateVolumeIcon();
  });

  // Mute
  muteBtn.addEventListener('click', function () {
    if (audio.volume > 0) {
      lastVolume = audio.volume;
      audio.volume = 0;
      volumeSlider.value = 0;
    } else {
      audio.volume = lastVolume || 0.8;
      volumeSlider.value = audio.volume;
    }
    updateSliderBackground(volumeSlider);
    updateVolumeIcon();
  });

  function updateVolumeIcon() {
    if (audio.volume === 0) {
      volumeIcon.innerHTML = '<path d="M16.5 12A4.5 4.5 0 0014 8.5v2.09l2.41 2.41c.06-.31.09-.63.09-.97zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0021 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 003.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>';
    } else if (audio.volume < 0.5) {
      volumeIcon.innerHTML = '<path d="M18.5 12A4.5 4.5 0 0016 8.5v7l2.5-3.5zM5 9v6h4l5 5V4L9 9H5z"/>';
    } else {
      volumeIcon.innerHTML = '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 8.5v7a4.47 4.47 0 002.5-3.5zM14 3.23v2.06a7 7 0 010 13.42v2.06A9 9 0 0014 3.23z"/>';
    }
  }

  // Lyrics toggle
  lyricsToggle.addEventListener('click', function () {
    const expanded = lyricsToggle.getAttribute('aria-expanded') === 'true';
    lyricsToggle.setAttribute('aria-expanded', String(!expanded));
    lyricsPanel.classList.toggle('open');
  });

  // Init slider backgrounds
  updateSliderBackground(progressBar);
  updateSliderBackground(volumeSlider);
})();

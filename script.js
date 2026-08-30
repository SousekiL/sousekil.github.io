(() => {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-toggle__label');
  const savedTheme = window.localStorage.getItem('felix-theme');

  const setTheme = (dark) => {
    body.classList.toggle('theme-dark', dark);
    themeToggle?.setAttribute('aria-pressed', String(dark));
    if (themeLabel) themeLabel.textContent = dark ? 'Light' : 'Dark';
    window.localStorage.setItem('felix-theme', dark ? 'dark' : 'light');
  };

  setTheme(savedTheme === 'dark');
  themeToggle?.addEventListener('click', () => setTheme(!body.classList.contains('theme-dark')));

  const videoModal = document.querySelector('#video-modal');
  const photoWallModal = document.querySelector('#photo-wall-modal');
  const photoWallGrid = document.querySelector('#photo-wall-grid');
  const photoWallTitle = document.querySelector('#photo-wall-title');
  const photoWallSubtitle = document.querySelector('#photo-wall-subtitle');
  let photographyData = null;

  const showModal = (modal) => {
    if (!modal) return;
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
  };

  const closeModal = (modal) => {
    if (!modal) return;
    if (typeof modal.close === 'function') modal.close();
    else modal.removeAttribute('open');
  };

  const pauseVideos = () => {
    document.querySelectorAll('.video-modal video').forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  };

  const closeVideoModal = () => {
    pauseVideos();
    closeModal(videoModal);
  };

  const openVideoModal = (group) => {
    document.querySelectorAll('[data-video-group-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.videoGroupPanel !== group;
    });
    showModal(videoModal);
  };

  document.querySelectorAll('[data-open-video]').forEach((button) => {
    button.addEventListener('click', () => openVideoModal(button.dataset.openVideo));
  });
  document.querySelector('[data-close-video]')?.addEventListener('click', closeVideoModal);
  videoModal?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeVideoModal();
  });
  videoModal?.addEventListener('click', (event) => {
    if (event.target === videoModal) closeVideoModal();
  });

  const cityName = (city) => ({
    chicago: 'Chicago',
    florida: 'Florida',
    'new-york': 'New York',
    shanghai: 'Shanghai',
    tokyo: 'Tokyo',
    osaka: 'Osaka',
    sapporo: 'Sapporo',
    lijiang: 'Lijiang',
    hangzhou: 'Hangzhou',
    nanjing: 'Nanjing',
    kunshan: 'Kunshan',
  }[city] || city);

  const renderPhotoWall = (city) => {
    const photos = photographyData?.[city] || [];
    if (!photoWallGrid || !photoWallTitle || !photoWallSubtitle) return;
    photoWallTitle.textContent = cityName(city);
    photoWallSubtitle.textContent = `${photos.length} photographs · full archive`;
    photoWallGrid.replaceChildren();
    photos.forEach((photo) => {
      const link = document.createElement('a');
      link.className = 'photo-wall-item';
      link.href = photo.src;
      link.target = '_blank';
      link.rel = 'noreferrer';
      const image = document.createElement('img');
      image.src = photo.src;
      image.alt = photo.alt;
      image.width = photo.width;
      image.height = photo.height;
      image.loading = 'lazy';
      image.decoding = 'async';
      const label = document.createElement('span');
      label.textContent = photo.name.replaceAll('_', ' ');
      link.append(image, label);
      photoWallGrid.append(link);
    });
  };

  const openPhotoWall = async (city) => {
    if (!photographyData) {
      try {
        const response = await fetch('data/photography.json');
        if (!response.ok) throw new Error(`Photography manifest returned ${response.status}`);
        photographyData = await response.json();
      } catch (error) {
        if (photoWallSubtitle) photoWallSubtitle.textContent = 'The photography archive could not be loaded.';
        console.error(error);
        showModal(photoWallModal);
        return;
      }
    }
    renderPhotoWall(city);
    showModal(photoWallModal);
  };

  document.querySelectorAll('[data-photo-city]').forEach((button) => {
    button.addEventListener('click', () => openPhotoWall(button.dataset.photoCity));
  });
  document.querySelector('[data-close-photo]')?.addEventListener('click', () => closeModal(photoWallModal));
  photoWallModal?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeModal(photoWallModal);
  });
  photoWallModal?.addEventListener('click', (event) => {
    if (event.target === photoWallModal) closeModal(photoWallModal);
  });

})();

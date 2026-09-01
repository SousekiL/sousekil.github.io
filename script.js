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

  const tagFilterOptions = document.querySelector('[data-tag-filter-options]');
  const categoryFilterOptions = document.querySelector('[data-category-filter-options]');
  const tagFilterStatus = document.querySelector('[data-tag-filter-status]');
  const researchCards = Array.from(document.querySelectorAll('.research-card[data-tags][data-categories]'));
  let activeTag = 'all';
  const activeCategories = new Set();

  const cardValues = (card, attribute) => card.dataset[attribute].split('|').map((value) => value.trim()).filter(Boolean);
  const updateResearchFilter = () => {
    let visibleCount = 0;
    researchCards.forEach((card) => {
      const matchesTag = activeTag === 'all' || cardValues(card, 'tags').includes(activeTag);
      const categories = cardValues(card, 'categories');
      const matchesCategory = activeCategories.size === 0 || categories.some((category) => activeCategories.has(category));
      const visible = matchesTag && matchesCategory;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    tagFilterOptions?.querySelectorAll('[data-filter-tag]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.filterTag === activeTag));
    });
    categoryFilterOptions?.querySelectorAll('[data-filter-category]').forEach((button) => {
      const active = button.dataset.filterCategory === 'all' ? activeCategories.size === 0 : activeCategories.has(button.dataset.filterCategory);
      button.setAttribute('aria-pressed', String(active));
    });
    const filters = [...activeCategories];
    if (activeTag !== 'all') filters.push(activeTag);
    if (tagFilterStatus) tagFilterStatus.textContent = filters.length ? `${visibleCount} research project${visibleCount === 1 ? '' : 's'} · ${filters.join(' + ')}` : 'Showing all research projects';
  };

  if (researchCards.length) {
    const tags = [...new Set(researchCards.flatMap((card) => cardValues(card, 'tags')))].sort((a, b) => a.localeCompare(b));
    ['All projects', ...tags].forEach((tag) => {
      const button = document.createElement('button');
      button.className = 'tag-filter__option';
      button.type = 'button';
      button.dataset.filterTag = tag === 'All projects' ? 'all' : tag;
      button.setAttribute('aria-pressed', tag === 'All projects' ? 'true' : 'false');
      button.textContent = tag;
      tagFilterOptions?.append(button);
    });
    tagFilterOptions?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter-tag]');
      if (button) {
        activeTag = button.dataset.filterTag;
        updateResearchFilter();
      }
    });

    const categories = [...new Set(researchCards.flatMap((card) => cardValues(card, 'categories')))].sort((a, b) => a.localeCompare(b));
    ['All areas', ...categories].forEach((category) => {
      const button = document.createElement('button');
      button.className = 'research-categories__option';
      button.type = 'button';
      button.dataset.filterCategory = category === 'All areas' ? 'all' : category;
      button.setAttribute('aria-pressed', category === 'All areas' ? 'true' : 'false');
      button.textContent = category;
      categoryFilterOptions?.append(button);
    });
    categoryFilterOptions?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter-category]');
      if (!button) return;
      const category = button.dataset.filterCategory;
      if (category === 'all') activeCategories.clear();
      else if (activeCategories.has(category)) activeCategories.delete(category);
      else activeCategories.add(category);
      updateResearchFilter();
    });
    updateResearchFilter();
  }

  const videoModal = document.querySelector('#video-modal');
  const photoWallModal = document.querySelector('#photo-wall-modal');
  const photoWallGrid = document.querySelector('#photo-wall-grid');
  const photoWallTitle = document.querySelector('#photo-wall-title');
  const photoWallSubtitle = document.querySelector('#photo-wall-subtitle');
  const translationModal = document.querySelector('#translation-modal');
  let photographyData = null;

  const showModal = (modal) => {
    if (!modal || modal.open) return;
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

  const translationTitle = document.querySelector('#translation-title');
  const translationTitles = {
    administrative: 'Administrative borders vs. cultural boundaries',
    beijing: 'Why does everywhere feel far away in Beijing?',
    'cultural-center': 'China’s cultural center moves south',
    gaokao: 'Gaokao competition structure across provinces',
    'women-names': 'Women’s names in ancient China',
  };
  const openTranslation = (key) => {
    document.querySelectorAll('[data-translation-panel]').forEach((panel) => {
      panel.hidden = panel.dataset.translationPanel !== key;
    });
    if (translationTitle) translationTitle.textContent = translationTitles[key] || 'English article preview';
    showModal(translationModal);
  };

  document.querySelectorAll('[data-open-translation]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      openTranslation(button.dataset.openTranslation);
    });
  });
  document.querySelector('[data-close-translation]')?.addEventListener('click', () => closeModal(translationModal));
  translationModal?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeModal(translationModal);
  });
  translationModal?.addEventListener('click', (event) => {
    if (event.target === translationModal) closeModal(translationModal);
  });

})();

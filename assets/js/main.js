(() => {
  /* ─── UTILS ─── */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ─── TRADUÇÕES ─── */
  const translations = {
    pt: {
      navBiografia: "Biografia", navObras: "Obras", navCatalogo: "Catálogo", navContato: "Contato",
      heroTitle: "Edney Fernandes",
      heroManifest: "Canções que permanecem depois da despedida",
      heroSubtitle: "Uma presença que continua através das canções e de gerações",
      heroManifestSide: "Há vozes que, mesmo depois da despedida, não se apagam. Atravessam o invisível, o tempo e a ausência, e continuam ecoando.",
      heroCtaPrimary: "Explorar catálogo", heroCtaSecondary: "Ler história",
      heroScroll: "Role para descobrir",
      biografiaEyebrow: "Biografia",
      relevanciaTitle: "Relevância da obra",
      relevanciaLead: "As obras de Edney Fernandes continuam sendo lembradas em rodas de samba, plataformas digitais e repertórios de diversos intérpretes do samba e do pagode.",
      metricViews: "visualizações acumuladas em gravações e interpretações do catálogo",
      metric2: "obras registradas oficialmente",
      metric3Title: "Anos 90–Hoje",
      metric3: "presença contínua no samba e pagode brasileiro",
      partnersTitle: "Catálogo em Editoras e Entidades",
      presencaTitle: "Presença na música brasileira",
      presencaP1: "Edney Fernandes construiu sua trajetória em rodas de samba, shows, estúdios e projetos que marcaram o fim dos anos 90 e os anos 2000.",
      presencaP2: "Ao longo desse percurso, trabalhou com artistas, produtores, compositores e parceiros que fizeram parte da sua história e do movimento do samba e do pagode. Entre esses nomes estão Thaís Nascimento, Valtinho Jota, Marcelo Lombardo, Lua Lafaiette, Almirzinho, Bete Carvalho, Netinho de Paula, Billy SP, Dedé Paraíso e outros nomes ligados à música brasileira.",
      presencaP3: "Foi uma trajetória feita de trabalho, criação e presença em projetos que ajudaram a consolidar a história do samba e do pagode.",
      projetosTitle: "Projetos que marcaram a trajetória",
      projetosLead: "Entre o fim dos anos 90 e os anos 2000, Edney Fernandes participou de projetos importantes para o samba e o pagode, deixando sua presença em composições, interpretações e músicas que marcaram uma geração.",
      terraTag: "Projeto fonográfico", terraTitle: "Terra Brasil — Pagode de Mesa 3",
      terraText: "Projeto fonográfico ao vivo ligado ao universo do samba e do pagode, reunindo diferentes intérpretes em formato de roda e consolidando uma estética importante do gênero em registros musicais da época.",
      edTag: "Discografia", edTitle: "Ed & A Tripulação",
      edText: "Projeto central da trajetória de Edney Fernandes, onde atuou como vocalista e consolidou sua identidade artística dentro do pagode paulista. Produzido por Arnaldo Sacomani, permanece como uma das principais referências de sua caminhada musical.",
      gestoTag: "Álbum póstumo", gestoTitle: "Gesto de Carinho",
      gestoText: "Projeto póstumo que dá continuidade à trajetória solo de Edney Fernandes, a partir de um trabalho que ficou sem ser concluído em vida e que hoje retorna como parte de seu legado artístico.",
      curadoriaTitle: "Curadorias musicais",
      curadoriaLead: "Antes de ouvir as composições, conheça o universo musical que influenciou essa trajetória.",
      cancoesTitle: "Composições gravadas por outros artistas",
      cancoesLead: "A obra de Edney Fernandes seguiu adiante em outras vozes, outros grupos e outras interpretações, mantendo viva sua presença no repertório do samba e do pagode.",
      registrosTitle: "Registros televisivos e de imprensa",
      registrosLead: "Imagens raras de uma trajetória que marcou quem viu, ouviu e viveu o pagode nos anos 90.",
      registrosBody: "Poucos registros em imagem e som que atravessam o tempo e revelam o carisma, a presença e a força artística de Edney Fernandes.",
      catalogoTitle: "Obras abertas a novas interpretações",
      catalogoP1: "Este catálogo reúne composições que fizeram parte de uma geração e seguem tocando até hoje, prontas para ganhar novas leituras, gravações e caminhos de interpretação.",
      catalogoP2: "Um repertório vivo, com identidade própria, presença histórica e potencial para circular novamente na voz de novos artistas.",
      catalogoCardTitle: "Grave uma obra",
      catalogoCardText: "Conheça composições disponíveis, possibilidades de licenciamento e caminhos de interpretação do catálogo de Edney Fernandes.",
      catalogoCardBtn: "Quero gravar uma obra",
      ineditasTitle: "Composições",
      ineditasLead: "Três composições foram selecionadas deste acervo como forma de apresentar um lado mais íntimo da obra de Edney Fernandes. São registros que revelam emoções, caminhos e nuances importantes da sua trajetória autoral.",
      spotifySoon: "Disponível em breve no Spotify",
      memorialTitle: "Presenças que permanecem",
      memorialLead: "Fragmentos íntimos de uma trajetória que continua viva.",
      contatoTitle: "Converse sobre o legado",
      contatoText: "Para imprensa, parcerias, gravações, licenciamento e contato institucional, fale com a curadoria do projeto.",
      contatoBtn1: "Fale com a curadoria",
      contatoBtn2: "Conheça o projeto Instituto Edney Fernandes",
      footer1: "Edney Fernandes — Todos os direitos reservados",
      footer2: "Curadoria e desenvolvimento por Laiá Music"
    },
    en: {
      navBiografia: "Biography", navObras: "Works", navCatalogo: "Catalog", navContato: "Contact",
      heroTitle: "Edney Fernandes",
      heroManifest: "Songs that remain after farewell",
      heroSubtitle: "A presence that continues through songs and generations",
      heroManifestSide: "There are voices that do not fade after farewell. They cross the invisible, time and absence, and keep resonating.",
      heroCtaPrimary: "Explore catalog", heroCtaSecondary: "Read story",
      heroScroll: "Scroll to discover"
    },
    es: {
      navBiografia: "Biografía", navObras: "Obras", navCatalogo: "Catálogo", navContato: "Contacto",
      heroTitle: "Edney Fernandes",
      heroManifest: "Canciones que permanecen después de la despedida",
      heroSubtitle: "Una presencia que continúa a través de las canciones y generaciones",
      heroManifestSide: "Hay voces que, incluso después de la despedida, no se apagan. Atraviesan lo invisible, el tiempo y la ausencia, y siguen resonando.",
      heroCtaPrimary: "Explorar catálogo", heroCtaSecondary: "Leer historia",
      heroScroll: "Desliza para descubrir"
    }
  };

  // Herdar PT para EN e ES
  translations.en = { ...translations.pt, ...translations.en };
  translations.es = { ...translations.pt, ...translations.es };

  /* ─── I18N ─── */
  const applyLanguage = lang => {
    const dict = translations[lang] || translations.pt;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    $$('[data-i18n]').forEach(n => {
      const k = n.dataset.i18n;
      if (!dict[k]) return;
      if (k === 'heroTitle') {
        const p = dict[k].split(' ');
        n.innerHTML = `<span>${p[0] || 'Edney'}</span><span>${p.slice(1).join(' ') || 'Fernandes'}</span>`;
      } else {
        n.textContent = dict[k];
      }
    });
    $$('.lang-btn').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
    try { localStorage.setItem('edney_lang', lang) } catch {}
  };

  let savedLang = 'pt';
  try { savedLang = localStorage.getItem('edney_lang') || 'pt' } catch {}
  $$('.lang-btn').forEach(b => b.addEventListener('click', () => applyLanguage(b.dataset.lang)));
  applyLanguage(savedLang);

  /* ─── MENU MOBILE ─── */
  const menuToggle = $('#menuToggle');
  const mobileMenu = $('#mobileMenu');

  menuToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.toggle('is-open');
    document.body.classList.toggle('menu-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  /* ─── SMOOTH SCROLL ─── */
  $$('a[href^="#"]').forEach(l => l.addEventListener('click', e => {
    const id = l.getAttribute('href');
    const t = $(id);
    if (!id || id === '#' || !t) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 76;
    const top = t.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    mobileMenu?.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

  /* ─── REVEAL com IntersectionObserver ─── */
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObserver.unobserve(e.target);
      }
    }),
    { threshold: .12 }
  );
  $$('.reveal').forEach(e => revealObserver.observe(e));

  /* ─── BLUR REVEAL ─── */
  const blurObs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); blurObs.unobserve(e.target); }
    }),
    { threshold: .08 }
  );
  $$('.reveal--blur').forEach(el => blurObs.observe(el));

  /* ─── HEADER SCROLL-AWARE ─── */
  const hdr = $('.site-header');
  const updateHeader = () => hdr?.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ─── HERO PARALLAX ─── */
  const heroFrame = $('#heroFrame');
  const spacer = $('.hero-visual__spacer');

  const animateHero = () => {
    if (!heroFrame || !spacer) return;
    const r = spacer.getBoundingClientRect();
    const v = innerHeight;
    const s = v * .88, en = -v * .22;
    const p = Math.min(1, Math.max(0, (s - r.top) / (s - en)));
    const scale = 1 - .07 * p;
    const y = 9 * p;
    const rad = 20 * p;
    heroFrame.style.transform = `translateY(${y}px) scale(${scale})`;
    heroFrame.style.borderRadius = `${rad}px`;
  };

  window.addEventListener('scroll', animateHero, { passive: true });
  window.addEventListener('resize', animateHero, { passive: true });
  animateHero();

  /* ─── COUNTER ANIMADO ─── */
  const formatCounter = v => `+${Math.floor(v).toLocaleString('pt-BR')}`;

  const animateCounter = el => {
    const target = Number(el.dataset.counter || 0);
    if (!target) return;
    const duration = target > 1e6 ? 1800 : 1200;
    const start = performance.now();
    const step = now => {
      const prog = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3);
      el.textContent = formatCounter(target * ease);
      if (prog < 1) requestAnimationFrame(step);
      else el.textContent = formatCounter(target);
    };
    requestAnimationFrame(step);
  };

  const counterObs = new IntersectionObserver(
    (entries, obs) => entries.forEach(e => {
      if (!e.isIntersecting) return;
      animateCounter(e.target);
      obs.unobserve(e.target);
    }),
    { threshold: .5 }
  );
  $$('[data-counter]').forEach(e => counterObs.observe(e));

  /* ─── STAGGER delay nas métricas ─── */
  $$('.prestige-metric').forEach((el, i) => {
    el.style.transitionDelay = (i * .14) + 's';
  });

  /* ─── HORIZONTAL SCROLL ROWS ─── */
  const setupHorizontalRow = row => {
    const trackSel = '.edge-strip__track, .projects-marquee__track';
    const track = $(trackSel, row) || row.querySelector('[class*="track"]');
    const prev = $('[data-scroll-prev]', row);
    const next = $('[data-scroll-next]', row);
    if (!track) return;

    // Clone para loop
    const original = Array.from(track.children);
    if (original.length && !track.dataset.cloned) {
      original.forEach(i => {
        const c = i.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        track.appendChild(c);
      });
      track.dataset.cloned = 'true';
    }

    let paused = false;
    const speed = Number(row.dataset.speed || .24);

    const loop = () => {
      if (!paused && track.scrollWidth > track.clientWidth) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth / 2) track.scrollLeft = 0;
      }
      requestAnimationFrame(loop);
    };

    const scrollAmount = () => Math.min(track.clientWidth * .82, 500);
    prev?.addEventListener('click', () => {
      paused = true;
      track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
      setTimeout(() => paused = false, 1100);
    });
    next?.addEventListener('click', () => {
      paused = true;
      track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
      setTimeout(() => paused = false, 1100);
    });

    row.addEventListener('mouseenter', () => paused = true);
    row.addEventListener('mouseleave', () => paused = false);
    row.addEventListener('touchstart', () => paused = true, { passive: true });
    row.addEventListener('touchend', () => setTimeout(() => paused = false, 1300), { passive: true });

    loop();
  };

  $$('[data-scroll-row]').forEach(setupHorizontalRow);

  /* ─── PLAYER DE ÁUDIO CUSTOMIZADO ─── */
  const buildCustomPlayer = (audioEl, trackEl) => {
    if (trackEl.querySelector('.custom-player')) return;

    const player = document.createElement('div');
    player.className = 'custom-player';
    player.innerHTML = `
      <button class="custom-player__btn" aria-label="Play/Pause" type="button">
        <svg viewBox="0 0 16 16"><path d="M4 2.5v11l9-5.5z"/></svg>
      </button>
      <div class="custom-player__progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
        <div class="custom-player__bar"></div>
      </div>
      <span class="custom-player__time">0:00</span>
    `;

    trackEl.appendChild(player);

    const btn = player.querySelector('.custom-player__btn');
    const bar = player.querySelector('.custom-player__bar');
    const progress = player.querySelector('.custom-player__progress');
    const timeEl = player.querySelector('.custom-player__time');
    const svg = btn.querySelector('svg');

    const playIcon = `<path d="M4 2.5v11l9-5.5z"/>`;
    const pauseIcon = `<path d="M4 2h3v12H4zm5 0h3v12H9z"/>`;

    const formatTime = s => {
      const m = Math.floor(s / 60);
      const sec = Math.floor(s % 60);
      return `${m}:${sec.toString().padStart(2, '0')}`;
    };

    // Pausar todos os outros ao tocar
    const pauseAll = () => {
      $$('audio').forEach(a => {
        if (a !== audioEl) {
          a.pause();
          const otherTrack = a.closest('.spotify-track');
          const otherBtn = otherTrack?.querySelector('.custom-player__btn svg');
          if (otherBtn) otherBtn.innerHTML = playIcon;
          const otherBar = otherTrack?.querySelector('.custom-player__bar');
          if (otherBar) otherBar.style.width = '0%';
        }
      });
    };

    btn.addEventListener('click', () => {
      if (audioEl.paused) {
        pauseAll();
        audioEl.play();
      } else {
        audioEl.pause();
      }
    });

    audioEl.addEventListener('play', () => {
      svg.innerHTML = pauseIcon;
    });

    audioEl.addEventListener('pause', () => {
      svg.innerHTML = playIcon;
    });

    audioEl.addEventListener('ended', () => {
      svg.innerHTML = playIcon;
      bar.style.width = '0%';
      timeEl.textContent = '0:00';
      progress.setAttribute('aria-valuenow', '0');
    });

    audioEl.addEventListener('timeupdate', () => {
      if (!audioEl.duration) return;
      const pct = (audioEl.currentTime / audioEl.duration) * 100;
      bar.style.width = pct + '%';
      timeEl.textContent = formatTime(audioEl.currentTime);
      progress.setAttribute('aria-valuenow', Math.round(pct));
    });

    // Click na barra para navegar
    progress.addEventListener('click', e => {
      if (!audioEl.duration) return;
      const rect = progress.getBoundingClientRect();
      const pct = (e.clientX - rect.left) / rect.width;
      audioEl.currentTime = pct * audioEl.duration;
    });
  };

  // Inicializar players customizados
  $$('.spotify-track').forEach(trackEl => {
    const audioEl = $('audio', trackEl);
    if (audioEl) buildCustomPlayer(audioEl, trackEl);
  });

  /* ─── LIGHTBOX ─── */
  const lightbox = $('#lightbox');
  const lightboxImage = $('#lightboxImage');
  const lightboxClose = $('#lightboxClose');

  if (lightbox && lightboxImage && lightboxClose) {
    const openLightbox = (src, alt) => {
      lightboxImage.src = src;
      lightboxImage.alt = alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('menu-open');
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImage.src = '';
      document.body.classList.remove('menu-open');
    };

    $$('.memory-card').forEach(card => card.addEventListener('click', () => {
      const img = $('img', card);
      if (img?.src) openLightbox(img.src, img.alt || '');
    }));

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox() });
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
    });
  }

})();

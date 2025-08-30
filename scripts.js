/* =========================================================================
   PISCINA ZERO STRESS — scripts.js (versión final)
   - Menú móvil (is-open) con delegación de clicks
   - Scroll suave tras cerrar menú
   - Modal de servicios
   - Hero autoslide (crossfade 2 capas)
   - Reveal on Scroll
   - Navbar efecto scrolled
   ======================================================================== */

/* === Arranque siempre en top + sin restaurar scroll previo === */
(function () {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
  window.addEventListener('pageshow', (e) => { if (e.persisted) window.scrollTo(0, 0); });
})();

/* ===== Datos del modal (fuera de funciones para no recrear) ===== */
const INFO_SERVICIOS = {
  Piscina: {
    img: "images/piscina.png",
    titulo: "Piscina Temperada",
    descripcion: "Sumérgete en nuestra <strong>piscina cubierta y temperada</strong>, perfecta para cualquier clima. <br><strong>Uso obligatorio de gorro de baño</strong>."
  },
  Hidromasaje: {
    img: "images/hidro.png",
    titulo: "Hidromasaje",
    descripcion: "Déjate envolver por burbujas relajantes en nuestro <strong>hidromasaje</strong>."
  },
  SaunaTurco: {
    img: "images/sauna-turco.png",
    titulo: "Sauna y Turco",
    descripcion: "Purifica tu cuerpo en <strong>sauna seco</strong> y <strong>baño turco</strong>."
  },
  Verde: {
    img: "images/area.jpg",
    titulo: "Área Verde",
    descripcion: "Conecta con la naturaleza en nuestras <strong>amplias áreas verdes</strong>.",
    extra: [ "images/area2.jpg", "images/verde.png"]
  },
  Bar: {
    img: "images/bar.jpg",
    titulo: "Servicio de Bar",
    descripcion: "Bebidas frías y snacks para complementar tu visita."
  },
  Cursos: {
    img: "images/cursos.png",
    titulo: "Cursos Permanentes de Natación",
    descripcion: "<strong>Jueves y Viernes</strong> de 17h30 a 18h30. <em>Consulta disponibilidad de cupos</em>."
  },
  Reservaciones: {
    img: "images/piscinaglobos.jpg",
    titulo: "Reservaciones",
    descripcion: "Asegura tu lugar para eventos, celebraciones o visitas en familia.",
    extra: ["images/reserva.jpg", "images/cumple.jpg", "images/cumple2.jpg", "images/cumple3.jpg"]
  },
  Parqueadero: {
    img: "images/parqueadero.jpg",
    titulo: "Parqueadero",
    descripcion: "Contamos con un espacio cómodo y seguro para que pueda estacionar su vehículo mientras disfruta de nuestras instalaciones. ¡Su comodidad es lo primero!."
  },
  Videovigilancia: {
    img: "images/videovigilancia.jpg",
    titulo: "Videovigilancia",
    descripcion: "Para su tranquilidad, nuestras instalaciones cuentan con cámaras de videovigilancia que garantizan un ambiente seguro en todo momento.."
  }
};

/* =========================
   DOM Ready
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  /* ====== Cache de elementos ====== */
  const menuPanel = document.getElementById('menuLinks');   // <ul> del menú
  const menuBtn   = document.querySelector('.menu-toggle');  // botón hamburguesa
  const backdrop  = document.getElementById('menuBackdrop'); // capa oscura

  /* ====== Menú móvil (clase .is-open) ====== */
  function openMenu() {
    if (!menuPanel) return;
    menuPanel.classList.add('is-open');
    menuBtn && menuBtn.classList.add('is-open');
    backdrop && backdrop.classList.add('is-open');
    menuBtn && menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // bloquea scroll fondo
  }

  function closeMenu() {
    if (!menuPanel) return;
    menuPanel.classList.remove('is-open');
    // compat antiguo
    menuPanel.classList.remove('show');
    menuBtn && menuBtn.classList.remove('is-open');
    backdrop && backdrop.classList.remove('is-open');
    menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (!menuPanel) return;
    menuPanel.classList.contains('is-open') ? closeMenu() : openMenu();
  }

  // Exponer para el onclick del botón y para futuros usos
  window.openMenu = openMenu;
  window.closeMenu = closeMenu;
  window.toggleMenu = toggleMenu;

  // Cerrar al tocar backdrop
  backdrop && backdrop.addEventListener('click', closeMenu);

  // Cerrar si se hace clic fuera del panel y del botón
  document.addEventListener('click', (e) => {
    if (!menuPanel || !menuPanel.classList.contains('is-open')) return;
    if (!menuPanel.contains(e.target) && !menuBtn.contains(e.target)) closeMenu();
  });

  // Delegación de clicks en el panel del menú (un solo listener)
  if (menuPanel) {
    menuPanel.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      e.preventDefault();            // evita salto brusco
      closeMenu();                   // libera el overflow del body
      setTimeout(() => {
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // actualiza el hash sin interrumpir el scroll suave
        try { history.replaceState(null, '', href); } catch {}
      }, 40);
    });
  }

   /* ===== HERO autoslide (crossfade en 2 capas) ===== */
  (function () {
    const hero = document.getElementById("bienvenidos");
    if (!hero) return;

    const capaA = hero.querySelector(".hero-bg-a");
    const capaB = hero.querySelector(".hero-bg-b");
    const fotosHero = [
      "images/piscina.png",
      "images/cuartos.jpg",
      "images/area.jpg",
      "images/parqueadero.jpg",
      "images/baile.jpg",
      "images/yo.jpg",
      "images/imagen3.jpg",
    ];

    const INTERVALO = 3000;
    let i = 0, usandoA = true;

    capaA.style.backgroundImage = `url('${fotosHero[i]}')`;
    capaA.classList.add("is-visible");

    setInterval(() => {
      const next = (i + 1) % fotosHero.length;
      const vis = usandoA ? capaA : capaB;
      const hid = usandoA ? capaB : capaA;
      hid.style.backgroundImage = `url('${fotosHero[next]}')`;
      hid.classList.add("is-visible");
      vis.classList.remove("is-visible");
      usandoA = !usandoA;
      i = next;
    }, INTERVALO);
  })();

  /* ===== Reveal on Scroll global (aparece una vez) ===== */
  (function(){
    const groups = [
      ".service-card",
      ".menu-grid > .menu-item",
      ".horarios-section .horario-box",
      "#bienvenidos .hero-badges span",
      ".map-wrapper",
      ".contact-info .icon-link",
      "section > h2",
      "footer"
    ];

    const targets = document.querySelectorAll(groups.join(","));
    if (!targets.length) return;

    targets.forEach((el, i) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${(i % 6) * 60}ms`;
    });

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25, rootMargin: "0px 0px -10% 0px" });

    targets.forEach((el) => io.observe(el));
  })();
});

  // Enlaces ancla fuera del panel (ej. “Ver servicios” del héroe)
  document.querySelectorAll('.hero-ctas a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', href); } catch {}
    });
  });
/* ===== Modal de Servicios ===== */
window.mostrarModal = function (servicio) {
  const modal = document.getElementById("modal-servicio");
  const img = document.getElementById("modal-img");
  const carrusel = document.getElementById("carousel-reservaciones");
  const carruselInner = carrusel.querySelector(".carousel-inner");
  const titulo = document.getElementById("modal-titulo");
  const descripcion = document.getElementById("modal-descripcion");

  const info = INFO_SERVICIOS[servicio];
  if (!info) return;

  titulo.textContent = info.titulo;
  descripcion.innerHTML = info.descripcion;

  // Mostrar carrusel para Reservaciones o Área Verde
  if (servicio === "Reservaciones" || servicio === "Verde") {
    img.classList.add("d-none");
    carrusel.classList.remove("d-none");
    carruselInner.innerHTML = `
      <div class="carousel-item active">
        <img src="${info.img}" class="d-block w-100" alt="${info.titulo} 1">
      </div>
    `;
    (info.extra || []).forEach((ruta, i) => {
      const el = document.createElement("div");
      el.className = "carousel-item";
      el.innerHTML = `<img src="${ruta}" class="d-block w-100" alt="${info.titulo} ${i + 2}">`;
      carruselInner.appendChild(el);
    });
  } else {
    carrusel.classList.add("d-none");
    img.classList.remove("d-none");
    img.src = info.img;
    img.alt = info.titulo;
  }

  modal.style.display = "flex";
  modal.classList.remove("hide");
  modal.classList.add("show");
  setTimeout(() => modal.querySelector(".modal-content").classList.add("show"), 10);
};

window.cerrarModal = function () {
  const modal = document.getElementById("modal-servicio");
  const modalContent = modal.querySelector(".modal-content");
  modalContent.classList.remove("show");
  modalContent.classList.add("hide");
  modal.classList.remove("show");
  modal.classList.add("hide");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("hide");
  }, 300);
};

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal-servicio");
  if (e.target === modal) window.cerrarModal();
});

/* ===== Animaciones de scroll + efecto navbar ===== */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".scroll-animate").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });
  const nav = document.querySelector(".navbar");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 50);
});
 
// =======================================================
// HORARIOS — semana dinámica + estado (por-abrir/abierto/por-cerrar/cerrado)
// =======================================================
(() => {
  // -------- CONFIG editable --------
  // Días abiertos: 0=Dom, 1=Lun, ..., 6=Sáb
  const OPEN_DAYS = new Set([4, 5, 6, 0]);  // Jue, Vie, Sáb, Dom
  const OPEN_MIN  = 10 * 60;                // 10h00
  const CLOSE_MIN = 19 * 60;                // 19h00
  const CLOSING_SOON_MIN = 30;              // últimos 30' = "por-cerrar"

  // Si quieres forzar zona horaria, usa Intl con "America/Guayaquil".
  // Aquí usamos la hora del navegador para evitar overhead.

  // -------- Utilitarios --------
  const pad2 = (n) => String(n).padStart(2, "0");
  const fmt = (h, m = 0) => `${pad2(h)}h${pad2(m)}`;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // -------- Pinta tira semanal (qué días abren + día actual) --------
  function paintWeekStrip(now = new Date()) {
    const dow = now.getDay();
    $$('.week-strip .w-day').forEach(el => {
      const d = Number(el.dataset.dow);
      const isOpenDay = OPEN_DAYS.has(d);
      el.classList.toggle('is-open',   isOpenDay);
      el.classList.toggle('is-closed', !isOpenDay);
      el.classList.toggle('today', d === dow);
      // Accesibilidad
      el.setAttribute('aria-label', `${el.textContent.trim()}: ${isOpenDay ? 'Abre' : 'Cerrado'}`);
      el.setAttribute('aria-pressed', d === dow ? 'true' : 'false');
    });
  }

  // -------- Calcula estado del horario regular --------
  // Estados posibles: "por-abrir" | "abierto" | "por-cerrar" | "cerrado"
  function getOpenState(now = new Date()) {
    const dow   = now.getDay();
    const mins  = now.getHours() * 60 + now.getMinutes();
    if (!OPEN_DAYS.has(dow)) return 'cerrado';

    if (mins < OPEN_MIN) return 'por-abrir';
    if (mins >= OPEN_MIN && mins < CLOSE_MIN) {
      return (CLOSE_MIN - mins <= CLOSING_SOON_MIN) ? 'por-cerrar' : 'abierto';
    }
    return 'cerrado';
  }

  // -------- Pinta el chip de estado del horario regular --------
  function paintMainScheduleState(now = new Date()) {
    const state = getOpenState(now);
    const labelByState = {
      'por-abrir':  `Por abrir (${fmt(10)})`,
      'abierto':    'Abierto',
      'por-cerrar': `Por cerrar (${fmt(19)})`,
      'cerrado':    'Cerrado'
    };

    $$('.cal-card[aria-label="Horario general"] .cal-state').forEach(el => {
      // limpiar posibles clases de pulso
      el.classList.remove('pulse-green', 'pulse-amber');
      // setear estado
      el.dataset.state = state;
      el.textContent = labelByState[state] || 'Cerrado';

      // micro-animaciones: solo en abierto/por-cerrar
      if (state === 'abierto') el.classList.add('pulse-green');
      if (state === 'por-cerrar') el.classList.add('pulse-amber');

      // accesibilidad
      el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
    });

    // (Opcional) resaltar el dot si hoy está abierto
    const isOpenVisual = (state === 'abierto' || state === 'por-cerrar');
    $$('.tl-dot').forEach(dot => {
      dot.style.boxShadow = isOpenVisual
        ? '0 0 0 8px rgba(24,106,59,.12)'
        : '0 0 0 6px rgba(0,114,255,.12)';
    });
  }

  // -------- Init + auto refresh --------
  function paintAll() {
    const now = new Date();
    paintWeekStrip(now);
    paintMainScheduleState(now);
  }

  // Pintar al cargar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', paintAll);
  } else {
    paintAll();
  }

  // Actualizar cada minuto (por si el usuario deja abierta la página)
  setInterval(paintAll, 60 * 1000);

})();
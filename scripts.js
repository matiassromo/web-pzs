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
    img: "images/verde.png",
    titulo: "Área Verde",
    descripcion: "Conecta con la naturaleza en nuestras <strong>amplias áreas verdes</strong>."
  },
  Bar: {
    img: "images/bar.jpg",
    titulo: "Servicio de Bar",
    descripcion: "Bebidas frías y snacks para complementar tu visita."
  },
  Cursos: {
    img: "images/cursos.png",
    titulo: "Cursos Permanentes de Natación",
    descripcion: "<strong>Martes y Jueves</strong> de 16h00 a 17h00. <em>Consulta disponibilidad de cupos</em>."
  },
  Reservaciones: {
    img: "images/piscinaglobos.jpg",
    titulo: "Reservaciones",
    descripcion: "Asegura tu lugar para eventos, celebraciones o visitas en familia.",
    extra: ["images/reserva.jpg", "images/cumple.jpg", "images/cumple2.jpg", "images/cumple3.jpg"]
  }
};

/* ===== Modal de Servicios ===== */
function mostrarModal(servicio) {
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

  if (servicio === "Reservaciones") {
    img.classList.add("d-none");
    carrusel.classList.remove("d-none");
    carruselInner.innerHTML = `
      <div class="carousel-item active">
        <img src="${info.img}" class="d-block w-100" alt="Reservación 1">
      </div>
    `;
    (info.extra || []).forEach((ruta, i) => {
      const el = document.createElement("div");
      el.className = "carousel-item";
      el.innerHTML = `<img src="${ruta}" class="d-block w-100" alt="Reservación ${i + 2}">`;
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
}

function cerrarModal() {
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
}

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (e) => {
  const modal = document.getElementById("modal-servicio");
  if (e.target === modal) cerrarModal();
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

/* ===== Menú móvil (unificado a clase .is-open) ===== */
function openMenu() {
  const menu = document.getElementById('menuLinks');
  const btn  = document.querySelector('.menu-toggle');
  const bd   = document.getElementById('menuBackdrop');
  menu.classList.add('is-open');
  btn.classList.add('is-open');
  bd.classList.add('is-open');
  btn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  const menu = document.getElementById('menuLinks');
  const btn  = document.querySelector('.menu-toggle');
  const bd   = document.getElementById('menuBackdrop');
  menu.classList.remove('is-open');
  btn.classList.remove('is-open');
  bd.classList.remove('is-open');
  btn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function toggleMenu() {
  const menu = document.getElementById('menuLinks');
  menu.classList.contains('is-open') ? closeMenu() : openMenu();
}

// Cierra al tocar enlaces o backdrop
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.navbar-links a').forEach(a => a.addEventListener('click', closeMenu));
  const backdrop = document.getElementById('menuBackdrop');
  if (backdrop) backdrop.addEventListener('click', closeMenu);
});

// Cerrar si se hace clic fuera del panel y del botón (extra)
document.addEventListener('click', (e) => {
  const menu = document.getElementById('menuLinks');
  const btn  = document.querySelector('.menu-toggle');
  if (!menu.classList.contains('is-open')) return;
  if (!menu.contains(e.target) && !btn.contains(e.target)) closeMenu();
});

/* ===== HERO autoslide (crossfade en 2 capas) ===== */
(function () {
  const hero = document.getElementById("bienvenidos");
  if (!hero) return;

  const capaA = hero.querySelector(".hero-bg-a");
  const capaB = hero.querySelector(".hero-bg-b");
  const fotosHero = [
    "images/piscina.png",
    "images/imagen1.jpg",
    "images/cuartos.jpg",
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

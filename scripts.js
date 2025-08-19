function mostrarModal(servicio) {
  const modal = document.getElementById("modal-servicio");
  const img = document.getElementById("modal-img");
  const carrusel = document.getElementById("carousel-reservaciones");
  const carruselInner = carrusel.querySelector(".carousel-inner");
  const titulo = document.getElementById("modal-titulo");
  const descripcion = document.getElementById("modal-descripcion");

  const datos = {
    Piscina: {
      img: "images/piscina.png",
      titulo: "Piscina Temperada",
      descripcion: "Sumérgete en nuestra <strong>piscina cubierta y temperada</strong>, perfecta para disfrutar en cualquier clima. Ideal para familias, amigos o momentos de relajación personal. <br><strong>Uso obligatorio de gorro de baño</strong> para garantizar higiene y seguridad en todo momento."
    },
    Hidromasaje: {
      img: "images/hidro.png",
      titulo: "Hidromasaje",
      descripcion: "Déjate envolver por burbujas relajantes en nuestro <strong>delicioso hidromasaje</strong>. Reduce el estrés, relaja tus músculos y siente cómo desaparece la tensión acumulada. ¡Una experiencia reconfortante que tu cuerpo agradecerá!"
    },
    SaunaTurco: {
      img: "images/sauna-turco.png",
      titulo: "Sauna y Turco",
      descripcion: "Purifica tu cuerpo en nuestros ambientes de <strong>sauna seco y baño turco</strong>. El calor ayuda a eliminar toxinas, mejorar la circulación y despejar tu mente. Ideal para complementar tu rutina de salud y bienestar."
    },
    Verde: {
      img: "images/verde.png",
      titulo: "Área Verde",
      descripcion: "Conecta con la naturaleza en nuestras <strong>amplias áreas verdes</strong>. Un entorno tranquilo para descansar, tomar el sol o compartir en familia. ¡Tu momento de paz empieza aquí!"
    },
    Bar: {
      img: "images/bar.jpg",
      titulo: "Servicio de Bar",
      descripcion: "Disfruta de nuestro bar con una <strong>variedad de bebidas y alimentos</strong>. Desde jugos naturales y cervezas frías hasta salchipapas y choclos con queso. El complemento perfecto para tu día de diversión en la piscina."
    },
    Cursos: {
      img: "images/cursos.png",
      titulo: "Cursos Vacacionales de Natación",
      descripcion: "Inscríbete en nuestros <strong>cursos vacacionales</strong> para aprender a nadar con instructores certificados. Ideal para niños, jóvenes y adultos. <br><strong>Horarios:</strong> 9:00 – 10:00 am o 10:00 – 11:00 am de lunes a viernes. <em>Consulta disponibilidad de cupos, ¡se llenan rápido!</em>"
    },
    Reservaciones: {
      img: "images/piscinaglobos.jpg",
      titulo: "Reservaciones",
      descripcion: "Planifica tu visita sin contratiempos. Con nuestro sistema de reservaciones, puedes asegurar espacios para ti, tu familia o tu grupo. Ideal para eventos, celebraciones o simplemente para tener un día sin preocupaciones. ¡Reservar nunca fue tan fácil!",
      extra: [
        "images/reserva.jpg",
        "images/cumple.jpg",
        "images/cumple2.jpg",
        "images/cumple3.jpg",
      ]
    }
  };

  const info = datos[servicio];
  if (!info) return;

  titulo.textContent = info.titulo;
  descripcion.innerHTML = info.descripcion;

  if (servicio === "Reservaciones") {
    img.classList.add("d-none");
    carrusel.classList.remove("d-none");
    carruselInner.innerHTML = "";

    const firstItem = document.createElement("div");
    firstItem.className = "carousel-item active";
    firstItem.innerHTML = `<img src="${info.img}" class="d-block w-100" alt="Reservación 1">`;
    carruselInner.appendChild(firstItem);

    if (info.extra) {
      info.extra.forEach((ruta, index) => {
        const item = document.createElement("div");
        item.className = "carousel-item";
        item.innerHTML = `<img src="${ruta}" class="d-block w-100" alt="Reservación ${index + 2}">`;
        carruselInner.appendChild(item);
      });
    }
  } else {
    carrusel.classList.add("d-none");
    img.classList.remove("d-none");
    img.src = info.img;
  }

  modal.style.display = "flex";
  modal.classList.remove("hide");
  modal.classList.add("show");

  setTimeout(() => {
    modal.querySelector(".modal-content").classList.add("show");
  }, 10);
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

window.addEventListener("click", function (event) {
  const modal = document.getElementById("modal-servicio");
  const content = document.querySelector(".modal-content");
  if (event.target === modal) cerrarModal();
});

// Animación scroll + efecto navbar
window.addEventListener("scroll", function () {
  document.querySelectorAll(".scroll-animate").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("animate__animated", "animate__fadeInUp");
    }
  });

  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Carrusel sección Bienvenidos
let indexBienvenida = 0;
function moverCarruselBienvenida(direccion) {
  const carrusel = document.querySelector("#carruselBienvenida .carrusel");
  const total = carrusel.querySelectorAll(".carrusel-img").length;
  indexBienvenida = (indexBienvenida + direccion + total) % total;
  carrusel.style.transform = `translateX(-${indexBienvenida * 100}%)`;
}

// Navbar hamburguesa con animación
function toggleMenu() {
  const menu = document.getElementById("menuLinks");
  menu.classList.toggle("show");

  if (menu.classList.contains("show")) {
    menu.classList.add("animate__animated", "animate__fadeInDown");
  } else {
    menu.classList.remove("animate__fadeInDown");
  }
}

// Cerrar menú hamburguesa al hacer clic en un enlace
document.querySelectorAll('.navbar-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById("menuLinks");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show", "animate__fadeInDown");
    }
  });
});

/* ===== Promo Vacaciones ($5/clase hasta 29 de agosto) ===== */
(function initPromoVacaciones(){
  const bar = document.getElementById('promoVacaciones');
  if(!bar) return;

  // Fecha límite: 29 de agosto del año actual (hora 23:59:59 en Ecuador, UTC-5)
  const now = new Date();
  const year = now.getFullYear();
  // Mes indexado desde 0: agosto = 7
  const deadline = new Date(Date.UTC(year, 7, 30, 4, 59, 59)); 
  // Explicación: 29/08 23:59:59 GMT-5 == 30/08 04:59:59 UTC

  // Si ya pasó, oculta la barra
  if (now.getTime() > deadline.getTime()) {
    bar.style.display = 'none';
    return;
  }

  // Cuenta regresiva
  const $count = document.getElementById('promoCountdown');
  function updateCountdown(){
    const t = deadline.getTime() - Date.now();
    if (t <= 0) {
      bar.style.display = 'none';
      clearInterval(timer);
      return;
    }
    const d = Math.floor(t / (1000*60*60*24));
    const h = Math.floor((t / (1000*60*60)) % 24);
    const m = Math.floor((t / (1000*60)) % 60);
    $count.textContent = `Termina en ${d}d ${h}h ${m}m`;
  }
  const timer = setInterval(updateCountdown, 60 * 1000); // cada minuto
  updateCountdown();

  // Cerrar manualmente
  bar.querySelector('.promo-close')?.addEventListener('click', () => {
    bar.classList.add('animate__fadeOutUp');
    setTimeout(()=> bar.remove(), 250);
  });
})();

/* ===== Popup Promo Vacaciones ($5/clase hasta 29 de agosto) ===== */
(function(){
  const popup = document.getElementById('promoPopup');
  if (!popup) return;

  const closeBtn = popup.querySelector('.promo-pop__close');
  const countEl = document.getElementById('promoPopCountdown');

  // Fecha límite: 29 de agosto 23:59:59 -05 (Ecuador)
  const year = new Date().getFullYear();
  const deadline = new Date(Date.UTC(year, 7, 30, 4, 59, 59)); 

  (function(){
  const popup    = document.getElementById('promoPopup');
  if (!popup) return;

  const dialog   = popup.querySelector('.promo-pop__dialog');
  const backdrop = popup.querySelector('.promo-pop__backdrop');
  const closeBtn = popup.querySelector('.promo-pop__close');

  const $days = document.getElementById('cd-days');
  const $hrs  = document.getElementById('cd-hours');
  const $min  = document.getElementById('cd-mins');
  const $sec  = document.getElementById('cd-secs');
  const $wrap = popup.querySelector('.promo-countdown');

  // 29/08 23:59:59 (-05) -> UTC
  const year = new Date().getFullYear();
  const deadline = new Date(Date.UTC(year, 7, 30, 4, 59, 59));

  const pad = n => (n < 10 ? '0' + n : '' + n);

  // Actualiza tarjetas y les aplica una animación al cambiar
  function setNum(el, value){
    if (el.textContent !== value){
      el.textContent = value;
      el.classList.remove('cd-anim'); // reinicia animación si ya estaba
      // forzamos reflow para reiniciar anim
      void el.offsetWidth;
      el.classList.add('cd-anim');
    }
  }

  function tick(){
    const now = Date.now();
    let total = Math.floor((deadline.getTime() - now)/1000);

    if (total <= 0){
      popup.remove(); clearInterval(timer); return;
    }

    const d = Math.floor(total / 86400);
    total %= 86400;
    const h = Math.floor(total / 3600);
    total %= 3600;
    const m = Math.floor(total / 60);
    const s = total % 60;

    setNum($days, pad(d));
    setNum($hrs , pad(h));
    setNum($min , pad(m));
    setNum($sec , pad(s));

    // Estados visuales
    $wrap.classList.toggle('urgent',  (d === 0));
    $wrap.classList.toggle('critical',(d === 0 && h < 1));
  }

  // Mostrar y arrancar
  popup.classList.remove('hidden');
  tick();
  const timer = setInterval(tick, 1000);

  // Cerrar con efecto (zoom out + fade backdrop)
  function closeWithEffect(){
    popup.classList.add('is-hiding');
    dialog.classList.remove('animate__zoomIn');
    dialog.classList.add('animate__animated','animate__zoomOut');
    dialog.addEventListener('animationend', ()=> popup.remove(), { once:true });
  }
  closeBtn.addEventListener('click', closeWithEffect);
  backdrop.addEventListener('click', closeWithEffect);
})();

  // Mostrar popup
  popup.classList.remove('hidden');
  updateCountdown();
  setInterval(updateCountdown, 60000);

  // Botón cerrar
  closeBtn.addEventListener('click', ()=>{
    popup.classList.add('animate__fadeOut');
    setTimeout(()=> popup.remove(), 250);
  });
})();

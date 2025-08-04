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

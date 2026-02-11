import imgPiscina from '../assets/piscina.png';
import imgHidro from '../assets/hidro.png';
import imgSauna from '../assets/sauna-turco.png';
import imgArea from '../assets/area.jpg';
import imgArea2 from '../assets/area2.jpg';
import imgVerde from '../assets/verde.png';
import imgBar from '../assets/bar.jpg';
import imgCursos from '../assets/cursos.png';
import imgReserva from '../assets/piscinaglobos.jpg';
import imgReserva2 from '../assets/reserva.jpg';
import imgCumple from '../assets/cumple.jpg';
import imgCumple2 from '../assets/cumple2.jpg';
import imgCumple3 from '../assets/cumple3.jpg';
import imgParqueadero from '../assets/parqueadero.jpg';
import imgVideo from '../assets/videovigilancia.jpg';

export const servicesData = [
    {
        id: "Piscina",
        title: "Piscina Temperada",
        img: imgPiscina,
        description: "Sumérgete en nuestra piscina cubierta y temperada, perfecta para cualquier clima. Uso obligatorio de gorro de baño.",
        shortDesc: "Disfruta de nuestra piscina con agua temperada.",
        highlight: "Uso obligatorio de gorro de baño",
    },
    {
        id: "Hidromasaje",
        title: "Hidromasaje",
        img: imgHidro,
        description: "Déjate envolver por burbujas relajantes en nuestro hidromasaje.",
        shortDesc: "Relaja tus músculos en nuestras modernas tinas de hidromasaje.",
    },
    {
        id: "SaunaTurco",
        title: "Sauna y Turco",
        img: imgSauna,
        description: "Purifica tu cuerpo en sauna seco y baño turco.",
        shortDesc: "Desintoxica tu cuerpo y mejora tu circulación.",
    },
    {
        id: "Verde",
        title: "Área Verde",
        img: imgArea,
        description: "Conecta con la naturaleza en nuestras amplias áreas verdes.",
        shortDesc: "Espacios al aire libre para descansar y disfrutar.",
        images: [imgArea, imgArea2, imgVerde]
    },
    {
        id: "Bar",
        title: "Servicio de Bar",
        img: imgBar,
        description: "Bebidas frías y snacks para complementar tu visita.",
        shortDesc: "Bebidas y snacks refrescantes.",
    },
    {
        id: "Cursos",
        title: "Cursos Permanentes",
        img: imgCursos,
        description: "Jueves y Viernes de 17h30 a 18h20. Consulta disponibilidad de cupos.",
        shortDesc: "Jueves y Viernes: 17h30 a 18h20.",
    },
    {
        id: "Reservaciones",
        title: "Reservaciones",
        img: imgReserva,
        description: "Asegura tu lugar para eventos, celebraciones o visitas en familia.",
        shortDesc: "¡Asegura tu lugar con anticipación y disfruta sin preocupaciones!",
        images: [imgReserva, imgReserva2, imgCumple, imgCumple2, imgCumple3]
    },
    {
        id: "Parqueadero",
        title: "Parqueadero",
        img: imgParqueadero,
        description: "Contamos con un espacio cómodo y seguro para que pueda estacionar su vehículo mientras disfruta de nuestras instalaciones. ¡Su comodidad es lo primero!.",
        shortDesc: "Ponemos a su disposición parqueadero privado para su comodidad.",
    },
    {
        id: "Videovigilancia",
        title: "Videovigilancia",
        img: imgVideo,
        description: "Para su tranquilidad, nuestras instalaciones cuentan con cámaras de videovigilancia que garantizan un ambiente seguro en todo momento..",
        shortDesc: "Contamos con zonas videovigiladas para su tranquilidad.",
    },
];

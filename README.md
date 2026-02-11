# 🌊 Piscina Zero Stress - Página Web Oficial

Este repositorio contiene el código fuente de la nueva versión de la página web de **Piscina Zero Stress**, desarrollada con tecnologías modernas para ofrecer una experiencia de usuario superior, fluida y adaptativa.

## ✨ Características principales

-   **Diseño Moderno y Responsivo:** Interfaz minimalista con estética _glassmorphism_, totalmente adaptada tanto para dispositivos móviles como de escritorio.
-   **Horario Dinámico e Inteligente:** Indicador de estado en tiempo real que muestra si el local está "Abierto", "Cerrado" o "Cierra pronto" según la hora actual.
-   **Menú Digital Interactivo:** Visualización clara y categorizada de alimentos y bebidas.
-   **Galería de Servicios:** Modales interactivos con carruseles de imágenes para mostrar las instalaciones en detalle.
-   **Contacto Directo:** Integración con WhatsApp y ubicación exacta mediante Google Maps.

## �️ Tecnologías utilizadas

-   **Core:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) - Para un desarrollo rápido y una aplicación optimizada.
-   **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Para un diseño moderno y completamente responsivo.
-   **Animaciones:** [Framer Motion](https://www.framer.com/motion/) - Para transiciones suaves y profesionales.
-   **Iconos:** [Lucide React](https://lucide.dev/) - Iconografía limpia y unificada.
-   **Navegación:** [React Router](https://reactrouter.com/) - Manejo de rutas SPA.

## 📂 Estructura del Proyecto

```
/
├── public/          # Archivos estáticos públicos
├── src/
│   ├── assets/      # Imágenes, logos y recursos multimedia
│   ├── components/  # Componentes reutilizables (Navbar, Footer, ServiceModal)
│   ├── data/        # Datos estructurados (items del menú, lista de servicios)
│   ├── sections/    # Secciones principales (Hero, Menu, Schedule, Contact)
│   ├── App.jsx      # Componente raíz y configuración de rutas
│   └── main.jsx     # Punto de entrada de la aplicación
├── index.html       # Archivo HTML principal
├── tailwind.config.js # Configuración de diseño y temas
└── vite.config.js   # Configuración del empaquetador
```

## � Instalación y Despliegue

Si deseas correr este proyecto en local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/matiassromo/web-pzs.git
    cd web-pzs
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abrir `http://localhost:5173/` en el navegador.

4.  **Construir para producción (Build):**
    ```bash
    npm run build
    ```
    Esto generará la carpeta `dist/` lista para desplegar.

## 👥 Créditos

-   **Piscina Zero Stress** – Marca y contenidos.
-   **Desarrollo Web** – [Matías Romo](https://github.com/matiassromo)

## � Licencia

Este proyecto es propiedad de **Piscina Zero Stress**.
No está permitido su uso comercial ni distribución sin autorización previa.

// ============================================================
//  TODO EL CONTENIDO DEL PORTAFOLIO SE EDITA DESDE ESTE ARCHIVO
//  - Imágenes: ponlas en /public/img y referencia "/img/archivo.jpg"
//  - CV: coloca tu archivo en /public/cv.pdf
// ============================================================

export const perfil = {
  nombre: "Gael Enrique Nuñez Piña",
  nombreCorto: "Gael Nuñez",
  saludo: "Hola, soy Gael",
  rol: "Desarrollador full-stack",
  descripcion:
    "Actualmente estudio la Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de Escuinapa. Enfoque en desarrollo web y administración de bases de datos.\n\nMe especializo en la lógica de backend y diseñar interfaces de usuario minimalistas.",
  cv: "/cv.pdf",
  textoBotonCv: "Ver CV",
  textoBotonDescarga: "Descargar CV",
  nombreArchivoCv: "CV_GAEL_ENRIQUE_NUÑEZ_PIÑA_2026.pdf", // nombre con el que se guarda al descargar
};

// Nombre de cada sección en el menú y en el título
export const secciones = {
  sobre: "Sobre mí",
  educacion: "Educación",
  software: "Software",
  proyectos: "Proyectos",
  logros: "Logros",
  contacto: "Contáctame",
};

export const educacion = [
  {
    grado: "Ingeniería en Desarrollo y Gestión de Software",
    escuela: "Universidad Tecnológica de Escuinapa (UTEsc)",
    periodo: "2025 - Actualidad",
    descripcion: "Desarrollo de software, administración de bases de datos, extracción de conocimiento de bases de datos, y administración de proyectos de TI.",
    estado: "Estudiante"
  },
  {
    grado: "Técnico Superior Universitario (TSU)",
    escuela: "Universidad Tecnológica de Escuinapa (UTEsc)",
    periodo: "2023 – 2025",
    descripcion: "Formación en desarrollo de software, programación web y bases de datos.",
    estado: "Egresado"
  },
  {
    grado: "Técnico Superior Bachiller",
    escuela: "Conalep 121",
    periodo: "2020 - 2023",
    descripcion: "Fundamentos de programación.",
    estado: "Egresado"
  },
];

// Herramientas de software. Se agrupan solas por "categoria".
// "logo" es opcional: "/img/react.svg"
export const software = [
  { nombre: "Figma", categoria: "Frontend" },
  { nombre: "HTML", categoria: "Frontend" },
  { nombre: "CSS", categoria: "Frontend" },
  { nombre: "React", categoria: "Frontend" },
  { nombre: "PHP", categoria: "Backend" },
  { nombre: "JavaScript", categoria: "Frontend" },
  { nombre: "Tailwind CSS", categoria: "Frontend" },
  { nombre: "Node.js", categoria: "Backend" },
  { nombre: "Express", categoria: "Backend" },
  { nombre: "MySQL", categoria: "SGBD's" },
  { nombre: "MongoDB", categoria: "SGBD's" },
  { nombre: "PostgreSQL", categoria: "SGBD's" },
  { nombre: "Python", categoria: "Análisis de Datos" },
  { nombre: "Pandas", categoria: "Análisis de Datos" },
  { nombre: "JupyterLab", categoria: "Análisis de Datos" },
  { nombre: "Git", categoria: "Herramientas" },
  { nombre: "GitHub", categoria: "Herramientas" },
  { nombre: "Visual Studio Code", categoria: "Herramientas" },
  { nombre: "Xampp", categoria: "Herramientas" },
  { nombre: "DataGrip", categoria: "Herramientas" },
];

// Proyectos. En la tarjeta se ve "descripcion" (breve); al hacer click se abre un modal
// con el carrusel de "imagenes" y "descripcionCompleta" (los saltos de línea se respetan).
export const proyectos = [
  {
    titulo: "Sistema web Papelería Aracely",
    descripcion: "Sistema de ventas, inventario y proveedores para una papelería de El Rosario, Sinaloa.",
    descripcionCompleta:
      "Sistema web full-stack para la administración de la Papelería Aracely.\n\nIncluye módulos de ventas, inventario, entradas de mercancía, proveedores y un dashboard con indicadores. Maneja ventas fraccionadas guardando el stock siempre en la unidad base más pequeña.\n\nFrontend en React + Vite, backend en Node.js con Express y base de datos MySQL. Trabajé en equipo con Git y GitHub.",
    fecha: "2026",
    imagenes: ["/img/papeleria/p1.png", "/img/papeleria/p2.png", "/img/papeleria/p3.png", "/img/papeleria/p4.png", "/img/papeleria/p5.png"], // ej. ["/img/aracely-1.png", "/img/aracely-2.png"]
    etiquetas: ["React", "Node.js", "Express.js", "MySQL"],
    enlace: "", // opcional: repositorio o demo
  },
  {
    titulo: "QuizStorm",
    descripcion: "Juego de cuestionarios con fondo dinámico con base en las respuestas del usuario.",
    descripcionCompleta:
      "Juego de cuestionarios para el aprendizaje con fondo dinámico con base en las respuestas del usuario.",
    imagenes: ["/img/quizz/q1.png", "/img/quizz/q2.png", "/img/quizz/q3.png", "/img/quizz/q4.png", "/img/quizz/q5.png", "/img/quizz/q6.png", "/img/quizz/q7.png", "/img/quizz/q8.png", "/img/quizz/q9.png", "/img/quizz/q10.png",],
    etiquetas: ["HTML", "CSS", "JavaScript", "MySQL", "Google Recaptcha"],
    enlace: "",
  },
  {
    titulo: "Sistema de control escolar Colegio El Molino",
    descripcion: "Sistema de gestión de grupos, profesores, alumnos, ciclos escolares, y demás.",
    descripcionCompleta:
      "Sistema de gestión de agenda para las taquizas de la Taquería Los Compadres.\n\nPermite registrar cada evento con su tipo, descripción, datos de contacto, fecha y anticipo, y dar seguimiento a abonos hasta la liquidación. Al hacer clic en una cita del calendario se abre el detalle de la taquiza.",
    fecha: "2026",
    imagenes: ["/img/colegio/c1.png"],
    etiquetas: ["PHP", "HTML", "CSS", "Tailwind CSS"],
    enlace: "",
  },
  {
    titulo: "Sistema de gestión de citas para un consultorio médico",
    descripcion: "Gestión de personal, pacientes, citas, y pagos.",
    descripcionCompleta:
      "Proyecto de análisis de datos en JupyterLab con estadísticas de juegos de la NBA entre 2011 y 2020.\n\nPlantea la hipótesis de un cambio en la frecuencia de tiros antes y después de 2016, y la contrasta con gráficas y tablas.\n\nHerramientas: Python, Pandas, NumPy y Matplotlib.",
    fecha: "2026",
    imagenes: ["/img/consultorio/c1.png"],
    etiquetas: ["PHP", "HTML", "CSS", "Tailwind CSS"],
    enlace: "",
  },
  {
    titulo: "Sitio temático de Spider-Man",
    descripcion: "Personajes, comics, e imagenes destacadas sobre el superherore Spider-Man.",
    descripcionCompleta:
      "Proyecto de análisis de datos en JupyterLab con estadísticas de juegos de la NBA entre 2011 y 2020.\n\nPlantea la hipótesis de un cambio en la frecuencia de tiros antes y después de 2016, y la contrasta con gráficas y tablas.\n\nHerramientas: Python, Pandas, NumPy y Matplotlib.",
    fecha: "2026",
    imagenes: ["/img/spider/s1.png"],
    etiquetas: ["HTML", "CSS"],
    enlace: "",
  },
  {
    titulo: "Portafolio de actividades de la materia Estructuras de Datos Aplicadas",
    descripcion: "Ejercicios de recursividad, selectividad, y miscelaneos.",
    descripcionCompleta:
      "Proyecto de análisis de datos en JupyterLab con estadísticas de juegos de la NBA entre 2011 y 2020.\n\nPlantea la hipótesis de un cambio en la frecuencia de tiros antes y después de 2016, y la contrasta con gráficas y tablas.\n\nHerramientas: Python, Pandas, NumPy y Matplotlib.",
    fecha: "2024",
    imagenes: ["/img/eda/e1.png"],
    etiquetas: ["HTML", "CSS", "JavaScript"],
    enlace: "",
  },
];

// Título de TSU, reconocimiento de estadías, proyectos, etc.
// "imagenes" puede tener varias; si está vacío se muestra un recuadro vacío.
export const logros = [
  {
    titulo: "Título de TSU",
    descripcion: "Título de Técnico Superior Universitario en Teconologías de la Información, Área Desarrollo de Software Múltiplataforma. Otorgado por la Universidad Tecnológica de Escuinapa.",
    fecha: "2025",
    imagenes: ["/img/titulo.jpeg"], // ej. ["/img/titulo-tsu.jpg"]
    etiquetas: ["Título", "UTEsc"],
    enlace: "", // opcional
  },
  {
    titulo: "Reconocimiento como Auxiliar de Desarrollo de Software",
    descripcion: "Reconocimiento por haber realizado estadías en al área de Transformación e Innovación en Universidad Grupo Petroil.",
    fecha: "2025",
    imagenes: ["/img/reconocimiento.jpeg"], // ej. ["/img/estadias-1.jpg", "/img/estadias-2.jpg"]
    etiquetas: ["Estadías", "Reconocimiento", "Grupo Petroil"],
    enlace: "",
  },
];

export const contacto = {
  texto: "¿Quieres trabajar conmigo o tienes una idea? Escríbeme.",
  correo: "al202300138tidsm@gmail.com",
  github: "https://github.com/Nostalgick0",
  linkedin: "https://www.linkedin.com/in/gael-enrique-nuñez-piña",
};

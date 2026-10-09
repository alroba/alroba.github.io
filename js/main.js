(() => {
  const user = "alvrobh", domain = "gmail.com";
  const email = `${user}@${domain}`; // assembled at runtime to keep it away from simple scrapers

  const cv = {
    en: "cv/alvaro-bachiller-cv-en.pdf",
    es: "cv/alvaro-bachiller-cv-es.pdf",
  };

  const es = {
    "skip": "Saltar al contenido",
    "nav.about": "Sobre mí",
    "nav.path": "Experiencia",
    "nav.contact": "Contacto",
    "role": "Support Lead en CARTO",
    "lede": "Estudié la Tierra. Ahora uso datos espaciales y agentes de IA para ayudar a las personas a resolver problemas reales.",
    "cta.contact": "Escríbeme",
    "cta.cv": "Descargar CV",
    "about.title": "Sobre mí",
    "about.p1": "Mi camino empezó al aire libre. Estudié Ingeniería Forestal en la Universidad Politécnica de Madrid, con un año de Erasmus en la Universidad Checa de Ciencias de la Vida de Praga, y pasé veranos en una brigada helitransportada de extinción de incendios y cartografiando inventarios de arbolado. Después, un máster en Ingeniería Geodésica y Cartografía me llevó a la topografía: fotogrametría con drones, modelos digitales del terreno y trabajo de campo con estación total robotizada y GPS.",
    "about.p2": "En el Instituto Geográfico Nacional y el Centro Nacional de Información Geográfica (IGN-CNIG) pasé del campo a la web. Trabajé en la Infraestructura de Datos Espaciales de España (IDEE), investigando servicios de teselas vectoriales, creando servicios WMS y WMTS, implementando servicios INSPIRE y presentando el trabajo en congresos internacionales. Mientras tanto, también cursé estudios de Ingeniería Informática en la UNED.",
    "about.p3": "Desde 2020 estoy en CARTO, la plataforma Agentic GIS. Pasé de Support Engineer a Senior Support Engineer y Technical Account Manager, desarrollando pruebas de concepto de SIG y ciencia de datos, instalando y manteniendo despliegues self-hosted e impartiendo formaciones. Desde julio de 2024 lidero el equipo de soporte, para que nuestros clientes obtengan respuestas claras a preguntas geoespaciales difíciles. También programo con agentes de IA como Claude, ChatGPT y Gemini para automatizar casos de uso de usuarios mediante CLI y procesos internos de soporte.",
    "path.title": "Experiencia",
    "path.carto.when": "2020 – hoy",
    "path.carto.desc": "Coordinación y desarrollo del equipo, soporte y asesoramiento técnico, instalación y mantenimiento de entornos self-hosted, gestión técnica de cuentas y proyectos, pruebas de concepto de SIG y ciencia de datos, y desarrollo e impartición de formación.",
    "path.cnig.org": "Instituto Geográfico Nacional (IGN-CNIG)",
    "path.cnig.role": "Equipo de la Infraestructura de Datos Espaciales de España (IDEE)",
    "path.cnig.desc": "Investigación y desarrollo de servicios de teselas vectoriales, creación de servicios WMS y WMTS, implementación y revisión de servicios INSPIRE, y mantenimiento del portal de la IDEE. Ponencias en las VIII y IX Jornadas Ibéricas de Infraestructuras de Datos Espaciales (Lisboa y Mahón) y en la XIII Conferencia de la Asociación Cartográfica Internacional en Madrid.",
    "path.zumain.role": "Ingeniero superior en prácticas",
    "path.zumain.desc": "Vuelos fotogramétricos con drones y tratamiento de ortofotografías para generar modelos digitales del terreno. Levantamiento de 43 hectáreas con estación total robotizada y GPS para el inventario de Zonas Verdes del Ayuntamiento de Madrid.",
    "upm": "Universidad Politécnica de Madrid (UPM)",
    "skills.title": "Con qué trabajo",
    "skills.lead.t": "Liderar soporte",
    "skills.lead.d": "Coordinación y desarrollo de equipos, soporte técnico, gestión técnica de cuentas y de proyectos, diseño e impartición de formación.",
    "skills.geo.t": "Geoespacial",
    "skills.geo.d": "Bases de datos espaciales y PostGIS, SIG, teselas vectoriales, WMS y WMTS, INSPIRE e infraestructuras de datos espaciales, topografía y fotogrametría.",
    "skills.tech.t": "Plataforma y código",
    "skills.tech.d": "Cloud computing, Kubernetes, despliegues self-hosted, administración de Linux, Python.",
    "skills.lang.t": "Idiomas",
    "skills.lang.d": "Español (nativo) e inglés (C1).",
    "contact.title": "Contacto",
    "contact.text": "La forma más rápida de contactarme es por email. También estoy en LinkedIn y GitHub.",
    "contact.copy": "Copiar email",
    "contact.copied": "Email copiado",
    "contact.copyFail": "No se pudo copiar. Selecciona la dirección y cópiala a mano.",
    "contact.cv": "CV (PDF)",
    "title": "Álvaro Bachiller · Support Lead en CARTO",
    "role.lead": "Support Lead",
    "role.lead.when": "jul. 2024 – hoy",
    "role.tam": "Technical Account Manager",
    "role.tam.when": "feb. – jun. 2024",
    "role.sse": "Senior Support Engineer",
    "role.sse.when": "ago. 2022 – ene. 2024",
    "role.se": "Support Engineer",
    "role.se.when": "ene. 2020 – jul. 2022",
    "path.upm.org": "Universidad Politécnica de Madrid (UPM)",
    "path.upm.role": "Becario de colaboración",
    "path.upm.desc": "Investigación y desarrollo de programación y ontologías para el proyecto “España Virtual”.",
    "path.early.title": "Primeros trabajos de campo y docencia",
    "path.early.desc": "Brigada helitransportada de extinción de incendios forestales (FCC Environmental, 2013), inventario y cartografía de arbolado y elementos botánicos (Jesgar Jardinería, 2014) y refuerzo escolar a alumnos con dificultades (Piensa Piensa, 2015).",
    "edu.title": "Formación",
    "edu.uned": "Ingeniería Informática (estudios sin finalizar)",
    "edu.uned.org": "Universidad Nacional de Educación a Distancia (UNED)",
    "edu.geo": "Máster en Ingeniería Geodésica y Cartografía",
    "edu.prague": "Intercambio Erasmus, Ingeniería Forestal",
    "edu.prague.org": "Universidad Checa de Ciencias de la Vida de Praga",
    "edu.forest": "Ingeniería Forestal",
    "cert.title": "Certificaciones",
    "cert.manager": "Manager Essentials, Insight Partners (2024)",
    "cert.linux": "Essentials of Linux System Administration (LFS201), Linux Foundation",
    "cert.postgis": "Bases de datos espaciales: PostGIS 2",
    "cert.webmapping": "Desarrollo de aplicaciones web mapping, MappingGIS",
    "cv.profile.t": "Perfil",
    "cv.profile": "Ingeniero geoespacial al frente del soporte técnico de CARTO, la plataforma Agentic GIS. Formación en ingeniería forestal y en geodesia y cartografía, además de estudios de ingeniería informática, con diez años de experiencia en infraestructuras de datos espaciales, servicios de mapas web y plataformas cloud. Uso datos espaciales y agentes de IA para ayudar a las personas a resolver problemas reales.",
    "cv.skills.t": "Aptitudes",
    "cv.location": "Madrid, España",
    "skills.ai.t": "Agentes de IA",
    "skills.ai.d": "Programación con agentes de IA como Claude, ChatGPT y Gemini para automatizar casos de uso de usuarios mediante CLI y procesos internos de soporte.",
  };

  const nodes = [...document.querySelectorAll("[data-i18n]")];
  const en = {};
  nodes.forEach(n => { en[n.dataset.i18n] = n.textContent; });
  Object.assign(en, {
    "contact.copied": "Email copied",
    "contact.copyFail": "Couldn't copy. Select the address and copy it manually.",
    "title": document.title,
  });
  const dict = { en, es };
  let current = "en";

  function setLang(lang, persist = true) {
    if (!dict[lang]) lang = "en";
    current = lang;
    nodes.forEach(n => {
      const v = dict[lang][n.dataset.i18n];
      if (v !== undefined) n.textContent = v;
    });
    document.documentElement.lang = lang;
    document.title = dict[lang].title;
    document.querySelectorAll("[data-cv]").forEach(a => a.setAttribute("href", cv[lang]));
    document.querySelectorAll("[data-set-lang]").forEach(b =>
      b.setAttribute("aria-pressed", String(b.dataset.setLang === lang)));
    if (persist) { try { localStorage.setItem("lang", lang); } catch (e) {} }
  }

  document.querySelectorAll("[data-set-lang]").forEach(b =>
    b.addEventListener("click", () => setLang(b.dataset.setLang)));

  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  setLang(saved || (browser === "es" ? "es" : "en"), false);

  // Email
  const link = document.getElementById("email");
  link.textContent = email;
  link.href = `mailto:${email}`;

  const toast = document.getElementById("toast");
  let timer;
  function say(key) {
    toast.textContent = dict[current][key];
    clearTimeout(timer);
    timer = setTimeout(() => { toast.textContent = ""; }, 2500);
  }
  document.getElementById("copy").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(email);
      say("contact.copied");
    } catch (e) {
      say("contact.copyFail");
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();

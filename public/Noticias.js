const GNEWS_API_KEY = "ad4702e9b217ca588aa1e1605417528d";

// Breaking news data
const breakingNews = [
  {
    title: "Durango lidera alarmante alza económica informal",
    image: "Imagenes/Mexico1.jpg",
    description:
      "Durango destaca en México por un preocupante aumento del 18% en economía informal, superando récords y generando alerta nacional.",
    url: "Noticia1.html",
  },
  {
    title: "Impacto de los aranceles al noreste mexicano",
    image: "Imagenes/aranceles.jpg",
    description:
      "Empresarios del noreste advierten afectaciones por aranceles de EE. UU. a exportaciones e inversiones clave en la región.",
    url: "Noticia2.html",
  },
  {
    title: "Empresarios del noreste alertan por riesgos globales",
    image: "Imagenes/Problema.jpg",
    description:
      "Líderes empresariales del noreste mexicano priorizan amenazas externas como aranceles, inflación y tensiones comerciales en sus estrategias.",
    url: "Noticia3.html",
  },
];

// Sample news data
const newsData = [
  {
    id: 1,
    title: "Economía Regional en Crisis",
    description: "Crisis agrícola por sequía amenaza la economía de La Laguna",
    category: "local",
    image: "Imagenes/Crisis agricola.jpg",
    date: "20-05-2025",
  },
  {
    id: 2,
    title: "Inversiones en infraestructura hídrica",
    description:
      "Inversiones millonarias para infraestructura hídrica y tecnificación por parte del gobierno federal",
    category: "economia",
    image: "Imagenes/Infraestructura hidrica.jpg",
    date: "15-05-2025",
  },
  {
    id: 3,
    title: "Nueva inversión en La Laguna",
    description: "Importante empresa anuncia inversión millonaria en la región",
    category: "local",
    image: "Imagenes/Investment.jpg",
    date: "13-05-2025",
  },
  {
    id: 4,
    title: "El Near Shore en La Laguna",
    description: "El Near Shore en La Laguna: Oportunidades y desafíos",
    category: "local",
    image: "Imagenes/NearShore.jpg",
    date: "12-05-2025",
  },
  {
    id: 5,
    title: "Proyecciones económicas a la baja para 2025",
    description:
      "La Secretaría de Hacienda redujo en abril el rango estimado de crecimiento del PIB de entre 2.0% y 3.0% a entre 1.5% y 2.3%",
    category: "nacional",
    image: "Imagenes/Proyecciones baja.jpg",
    date: "10-05-2025",
  },
  {
    id: 6,
    title: "México busca reducir incertidumbre antes de la revisión del TMEC",
    description:
      "El secretario de Economía afirmó que México busca reducir la incertidumbre económica mediante un diálogo más cordial con Estados Unidos",
    category: "economia",
    image: "Imagenes/Acuerdo.jpg",
    date: "10-05-2025",
  },
  // Add more news items as needed
];

// Initialize the page
document.addEventListener("DOMContentLoaded", async () => {
  const NUM_GNEWS_ARTICLES = 6; // Número de artículos de GNews a obtener

  // Inicializar carrusel y filtros
  initializeCarousel();
  initializeFilters();
  initializeSearch();
  loadRSSFeeds();

  // Obtener noticias de GNews
  // 1. Buscar noticias específicas
  let gnewsArticles = await fetchGNewsArticles(
    "economía Coahuila",
    NUM_GNEWS_ARTICLES
  );
  // 2. Si hay menos de las necesarias, buscar noticias generales
  if (gnewsArticles.length < NUM_GNEWS_ARTICLES) {
    const fallbackArticles = await fetchGNewsArticles(
      "economía México",
      NUM_GNEWS_ARTICLES
    );
    // Añadir solo los que faltan (evita duplicados)
    const urlsYaIncluidas = new Set(
      gnewsArticles.map((article) => article.url)
    );
    const nuevosArticulos = fallbackArticles.filter(
      (article) => !urlsYaIncluidas.has(article.url)
    );
    gnewsArticles = gnewsArticles.concat(
      nuevosArticulos.slice(0, NUM_GNEWS_ARTICLES - gnewsArticles.length)
    );
  }

  // 3. Transformar y mostrar
  const gnewsNewsData = transformGNewsToNewsData(gnewsArticles);
  newsData.unshift(...gnewsNewsData);

  // Mostrar todas las noticias
  displayNews("todas");
});

// Initialize carousel
function initializeCarousel() {
  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.innerHTML = ""; // Limpia contenido previo

  breakingNews.forEach((news, index) => {
    const div = document.createElement("div");
    div.className = `carousel-item ${index === 0 ? "active" : ""}`;
    div.innerHTML = `
        <a href="${
          news.url || "#"
        }" target="_blank" style="text-decoration: none; color: inherit;">
            <div class="carousel-card">
            <img src="${news.image}" alt="${
      news.title
    }" class="carousel-thumbnail">
            <div class="carousel-text">
                <small>Destacado</small>
                <h5>${news.title}</h5>
                <p>${news.description}</p>
            </div>
            </div>
        </a>
        `;

    carouselInner.appendChild(div);
  });
}

// Display news based on category
function displayNews(category) {
  const newsContainer = document.getElementById("mainNews");
  newsContainer.innerHTML = "";

  const filteredNews =
    category === "todas"
      ? newsData
      : newsData.filter((news) => news.category === category);

  filteredNews.forEach((news) => {
    const article = document.createElement("article");
    article.className = "news-item";
    article.innerHTML = `
            <img src="${news.image}" alt="${
      news.title
    }" onclick="window.open('${
      news.url || "#"
    }', '_blank')" style="cursor:pointer">
            <div class="news-content">
                <h3><a href="${news.url || "#"}" target="_blank">${
      news.title
    }</a></h3>
                <p>${news.description}</p>
                <span class="date">${news.date}</span>
            </div>
        `;
    newsContainer.appendChild(article);
  });
}

// Initialize category filters
function initializeFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      displayNews(button.dataset.category);
    });
  });
}

// Initialize search functionality
function initializeSearch() {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredNews = newsData.filter(
      (news) =>
        news.title.toLowerCase().includes(searchTerm) ||
        news.description.toLowerCase().includes(searchTerm)
    );

    const newsContainer = document.getElementById("mainNews");
    newsContainer.innerHTML = "";

    filteredNews.forEach((news) => {
      const article = document.createElement("article");
      article.className = "news-item";
      article.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <div class="news-content">
                    <h3>${news.title}</h3>
                    <p>${news.description}</p>
                    <span class="date">${news.date}</span>
                </div>
            `;
      newsContainer.appendChild(article);
    });
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchButton.click();
    }
  });
}

// Load RSS feeds
// async function loadRSSFeeds() {
//     // const rssUrl = 'https://www.reforma.com/rss/negocios.xml'; // Cambia por tu URL de RSS
//     // const rssUrl = 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZ4Y0d0b0VnSmxiaWdBUAE?hl=es-419&gl=MX&ceid=MX:es-419';
//     const rssUrl = 'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://www.reforma.com/rss/negocios.xml');
//     const response = await fetch(rssUrl);
//     const text = await response.text();
//     const parser = new DOMParser();
//     const xml = parser.parseFromString(text, 'application/xml');
//     const items = xml.querySelectorAll('item');

//     const rssFeedContent = document.getElementById('rssFeedContent');
//     rssFeedContent.innerHTML = ''; // Limpia contenido previo

//     items.forEach((item, index) => {
//         if (index < 5) { // Limita a 5 noticias
//             const title = item.querySelector('title').textContent;
//             const description = item.querySelector('description').textContent;
//             const link = item.querySelector('link').textContent;

//             const rssItem = document.createElement('div');
//             rssItem.className = 'rss-item';
//             rssItem.innerHTML = `
//                 <h4><a href="${link}" target="_blank">${title}</a></h4>
//                 <p>${description}</p>
//             `;
//             rssFeedContent.appendChild(rssItem);
//         }
//     });
// }

// Array of RSS feed URLs
const rssFeeds = [
  //'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://expansion.mx/rss/empresas'),
  "https://api.allorigins.win/raw?url=" +
    encodeURIComponent(
      "https://cdn.feedcontrol.net/10268/18374-UEuzIY9gDjDwH.xml"
    ),
  //'https://www.eleconomista.com.mx/rss/ultimas-noticias',
  //'https://api.allorigins.win/raw?url=' + encodeURIComponent('https://news.google.com/rss/search?q=laguna+economía&hl=es-419&gl=MX&ceid=MX:es-419')
  // 'https://www.eleconomista.com.mx/rss/ultimas-noticias',
  // 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZ4Y0d0b0VnSmxiaWdBUAE?hl=es-419&gl=MX&ceid=MX:es-419',
  //'http://www.elsiglodetorreon.com.mx/channel/finanzas.xml',
  //'https://api.allorigins.win/raw?url=' + encodeURIComponent('http://www.elsiglodetorreon.com.mx/channel/finanzas.xml'),
  //'https://api.allorigins.win/raw?url=' + encodeURIComponent('http://www.elsiglodetorreon.com.mx/channel/local.xml')
];

// Fetch and parse multiple RSS feeds
async function fetchRssFeed(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
    return Array.from(xml.querySelectorAll("item")).slice(0, 10); // Limit to 10 items
  } catch (error) {
    console.error(`Error fetching RSS from ${url}:`, error);
    return [];
  }
}

// Load multiple RSS feeds
async function loadRSSFeeds() {
  const rssFeedContent = document.getElementById("rssFeedContent");
  rssFeedContent.innerHTML = "";

  for (const feed of rssFeeds) {
    const items = await fetchRssFeed(feed);
    items.forEach((item) => {
      const title = item.querySelector("title")?.textContent || "";
      const description = item.querySelector("description")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";

      const rssItem = document.createElement("div");
      rssItem.className = "rss-item";
      rssItem.innerHTML = `
                <h4><a href="${link}" target="_blank">${title}</a></h4>
                <p>${description}</p>
            `;
      rssFeedContent.appendChild(rssItem);
    });
  }
}

// https://gnews.io/api/v4/search?q=agua+OR+infraestructura+Coahuila&lang=es&country=mx&max=6&from=2025-05-24&to=2025-05-26&in=title,description&apikey=TU_API_KEY
// Parámetro	Tipo	Ejemplo
// q	Palabras clave	laguna+economía
// lang	Idioma	es
// country	País	mx
// topic	Categoría	business
// max	Resultados	6
// from/to	Fecha	2025-05-24
// in	Campos a buscar	title,description
async function fetchGNewsArticles(query = "economía Coahuila", max = 6) {
  const today = new Date();
  const fromDate = "2025-05-01"; // Fixed start date
  const toDate = today.toISOString().split("T")[0]; // Current date
  //const url = `https://gnews.io/api/v4/search?q=(economía+OR+finanzas+OR+industria+OR+TMEC)+(Torreón+OR+Coahuila+OR+México)&lang=es&country=mx&topic=business&max=6&from=2025-05-24&to=2025-05-26&in=title,description&apikey=${GNEWS_API_KEY}`;
  //MEJOR--> const url = `https://gnews.io/api/v4/search?q=México&lang=es&country=mx&topic=business&max=6&from=2025-05-24&to=2025-05-26&in=title,description&apikey=${GNEWS_API_KEY}`;
  const url = `https://gnews.io/api/v4/top-headlines?q=México+AND+(Economía+OR+Finanzas)&lang=es&country=mx&category=general&max=6&from=2025-05-24&to=2025-05-26&in=title,description,content&apikey=${GNEWS_API_KEY}`;
  // const url = `https://gnews.io/api/v4/search?q=negocios+OR+tecnología+OR+empresa&lang=es&country=mx&max=6&from=2025-05-24&to=2025-05-26&in=title,description&apikey=${GNEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error al obtener noticias de GNews:", error);
    return [];
  }
}

function transformGNewsToNewsData(articles) {
  return articles.map((article) => ({
    id: Math.random(),
    title: article.title,
    description: article.description || "",
    category: "nacional",
    image: article.image || "Imagenes/default.jpg",
    date: new Date(article.publishedAt).toLocaleDateString("es-MX"),
    url: article.url,
  }));
}

export const importAllImages = (parameter) =>
  parameter
    .keys()
    .filter((path) => !path.includes("Profilbild.jpg"))
    .map(parameter);

export const images = importAllImages(
  require.context("../images", false, /\.(png|jpe?g|svg)$/)
);

export const imageData = [
  {
    src: images[0],
    href: "https://api-weather-project.netlify.app/",
    title: "Weather App",
    description: "Beschreibung des Wetterprojekts.",
    tags: "HTML, CSS and JavaScript",
  },
  {
    src: images[1],
    href: "https://world-clock-example.com",
    title: "World Clock",
    description: "Beschreibung des Weltuhrprojekts.",
    tags: "HTML, CSS and JavaScript",
  },
  {
    src: images[2],
    href: "https://ai-poem-generator.netlify.app/",
    title: "AI Poem Generator",
    description: "Beschreibung des KI-Gedichtgenerators.",
    tags: "HTML, CSS and JavaScript",
  },
];

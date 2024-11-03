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
    src: images[1],
    href: "https://linas-blog.netlify.app/",
    title: "Blog",
    description:
      "Created a blog platform with Next.js to share articles on various topics. This project showcases my ability to build interactive, user-friendly web applications.",
    tags: "Next.js and Tailwind",
  },
  {
    src: images[2],
    href: "https://recipes-storage.netlify.app",
    title: "Recipe Book",
    description:
      "Built a Recipe Book app with Next.js, allowing users to browse, search, and filter recipes by category. This project demonstrates my skills in creating organized, intuitive user interfaces for efficient content exploration.",
    tags: "Next.js and Tailwind",
  },
  {
    src: images[3],
    href: "https://api-weather-project.netlify.app/",
    title: "Weather App",
    description:
      "Developed a Weather App that provides real-time weather updates via API. This project highlights my ability to work with APIs and create dynamic, user-friendly interfaces.",
    tags: "HTML, CSS and JavaScript",
  },
];

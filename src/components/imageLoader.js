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
    src: images[3],
    href: "https://traunkirchen-rental.vercel.app",
    title: "Rental Page",
    description:
      "Work in progress. Developing a Rental Page with Next.js and Tailwind. This project will feature an intuitive design for showcasing a rental property, including images, descriptions, and booking options.",
    tags: "Next.js and Tailwind",
  },
  {
    src: images[1],
    href: "https://linas-blog.vercel.app/",
    title: "Blog",
    description:
      "Created a blog platform with Next.js to share articles on various topics. This project showcases my ability to build interactive, user-friendly web applications.",
    tags: "Next.js and Tailwind",
  },
  {
    src: images[2],
    href: "https://recipe-storage.vercel.app",
    title: "Recipe Book",
    description:
      "Built a Recipe Book app with Next.js, allowing users to browse, search, and filter recipes by category. This project demonstrates my skills in creating organized, intuitive user interfaces for efficient content exploration.",
    tags: "Next.js and Tailwind",
  },

  {
    src: images[5],
    href: "https://api-weather-project.netlify.app/",
    title: "Weather App",
    description:
      "Developed a Weather App that provides real-time weather updates via API. This project highlights my ability to work with APIs and create dynamic, user-friendly interfaces.",
    tags: "HTML, CSS and JavaScript",
  },
  {
    src: images[4],
    href: "https://todo-list-gg.vercel.app/",
    title: "Task Manager",
    description:
      "A Next.js app that allows users to add, edit, and delete tasks, with data stored in Firebase Firestore. It demonstrates cloud database integration and dynamic data management.",
    tags: "Next.js, Firebase, Firestore, TypeScript and Tailwind",
  },

  {
    src: images[6],
    href: "https://shecodesplus-timezones-project.netlify.app",
    title: "World Clock",
    description:
      "Developed a World Clock page that provides real-time time updates via API. This project highlights my ability to work with APIs and create dynamic, user-friendly interfaces.",
    tags: "HTML, CSS and JavaScript",
  },
];

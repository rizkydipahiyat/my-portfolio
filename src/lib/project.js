import Quran from "@/assets/quranapp.webp";
import Animax from "@/assets/animaxplus.webp";
import Nimaze from "@/assets/nimaze.webp";
import Fashion from "@/assets/fashion-shop.webp";

const Projects = [
  {
    id: 1,
    title: "Quran Digital",
    image: Quran,
    url: "https://quran-theta.vercel.app",
    desc: "Quran Digital merupakan platform interaktif yang menggabungkan ajaran Al-Quran dengan teknologi modern. Dibangun menggunakan ReactJS, Bootstrap, dan REST API.",
    stack: ["ReactJS", "Bootstrap", "Rest API"],
  },
  {
    id: 2,
    title: "Animax+",
    image: Animax,
    url: "https://animaxplus.vercel.app/",
    desc: "Animax+ merupakan sebuah platform streaming. Menggunakan teknologi Next.js, Express.js, MongoDB, Tailwind CSS, dan REST API, Animax+ menyediakan pengalaman streaming yang lancar dan tampilan menarik, sambil memungkinkan fitur-fitur seperti pencarian dan penjelajahan anime yang mudah diakses.",
    stack: ["NextJs", "ExpressJS", "MongoDB", "TailwindCSS"],
  },
  {
    id: 3,
    title: "Nimazenext",
    image: Nimaze,
    url: "https://nimazenext.vercel.app/",
    desc: "Nimazenext merupakan aplikasi hasil scraping dari website layanan streaming yang telah dijadikan sebuah Rest API. Menggunakan teknologi Next.js, Cheerio.js, Tailwind CSS, dan REST API, Nimazenext menyediakan pengalaman streaming yang lancar dan tampilan menarik, dan memungkinkan fitur-fitur seperti pencarian dan penjelajahan anime yang mudah diakses.",
    stack: ["NextJs", "Cheerio", "TailwindCSS", "Rest API"],
  },
  {
    id: 4,
    title: "Landing Page Fashion Shop",
    image: Fashion,
    url: "https://landingpage-fashion.vercel.app/",
    desc: "Fashion Shop merupakan website landing page yang dibangun menggunakan teknologi dari NextJS dan TailwindCSS",
    stack: ["NextJs", "TailwindCSS"],
  },
];

export default Projects;

import Quran from "@/assets/quranappcom.webp";
import Animax from "@/assets/animaxplus.webp";
import Nimaze from "@/assets/nimaze.webp";
import Fashion from "@/assets/fashion-shop.webp";
import SPK from "@/assets/spkwsm.webp";
import Epidemic from "@/assets/epidemic.webp";
import Advanced from "@/assets/new-portfolio.webp";
import JqueryApp from "@/assets/jqueryapp.png";

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
  {
    id: 5,
    title: "SPK Menentukan Jasa Pengiriman Barang",
    image: SPK,
    url: "https://spkwsm.000webhostapp.com/login",
    desc: "SPK WSM merupakan project skripsi yang telah diselesaikan menggunakan teknologi Larevel dan MySQL",
    stack: ["Laravel", "MySQL", "TailwindCSS"],
  },
  {
    id: 6,
    title: "Epidemic Clone Shop",
    image: Epidemic,
    url: "https://epidemic-orpin.vercel.app/",
    desc: "Epidemic Clone merupakan sebuah website cloning dari epidemic.id yang telah terintegrasi pembayaran menggunakan paypal sandbox",
    stack: ["NextJS", "MongoDB", "ReduxJS", "TailwindCSS", "REST API"],
  },
  {
    id: 7,
    title: "ShopXpress Advanced Filter React Typescript🔥",
    image: Advanced,
    url: "https://shopxpress-advanced-filter.vercel.app/",
    desc: "Advanced Filter sebuah project pribadi untuk melakukan filter suatu product berdasarkan harga, category, pagination dan pencarian",
    stack: [
      "React",
      "Typescript",
      "TailwindCSS",
      "REST API",
      "React Query",
      "NestJS Typescript",
    ],
  },
  {
    id: 8,
    title: "Simple commerce using jquery",
    image: JqueryApp,
    url: "https://simple-commerce-jquery.netlify.app/",
    desc: "Jquery Simple Commerce merupakan  project pribadi untuk melakukan tambah data ke cart dan filter suatu product berdasarkan category dan pencarian",
    stack: ["HTML", "Javascript", "TailwindCSS", "REST API", "JQuery"],
  },
];

export default Projects;

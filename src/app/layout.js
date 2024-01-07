import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { DarkModeProvider } from "@/context/DarkModeContext";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | Rizky Dipahiyat Alghipari",
  description:
    "Hello, I am Rizky Dipahiyat Alghipari. A fresh computer science graduate who is trying to specialize in frontend & React web development.",
  openGraph: {
    images:
      "https://res.cloudinary.com/dtun3i3dj/image/upload/v1695719655/upload/logo-rda_bphalm.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeProvider>
          <Navbar />
          {children}
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}

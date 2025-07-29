import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css/animate.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinite Journeys",
  description: "Start your travelling journey with us",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: 'any',
      url: '/Infinite-journeys-logo.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/Infinite-journeys-logo.png',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
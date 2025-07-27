import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Infinite Journeys",
  description: "Start your travelling journey with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
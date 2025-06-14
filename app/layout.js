import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify required weights
  variable: "--font-poppins",
});

export const metadata = {
  title: "Coborg Care Clincs",
  description: "Accessible, Quality Healthcare for Coburg Families.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased   px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6  `}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

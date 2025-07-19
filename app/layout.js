import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/NavBar";
import Progress from "@/components/ProgressBar";

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
  title: "Cobourg Care Clinics",
  description: "Accessible, Quality Healthcare for Cobourg Families.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased   px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6  `}
      >
        <NavBar />
        <Progress />
        {children}
        <Footer />
      </body>
    </html>
  );
}

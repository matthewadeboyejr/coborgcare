import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/NavBar";
import Progress from "@/components/ProgressBar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cobourg Care Clinic",
  description: "Accessible, Quality Healthcare for Cobourg Families.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R6ESZ2TYTN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R6ESZ2TYTN');
          `}
        </Script>
      </head>
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

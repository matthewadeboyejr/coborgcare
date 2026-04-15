import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/NavBar";
import Progress from "@/components/ProgressBar";
import Notice from "@/components/Notice";
import PreventiveHealthPopup from "@/components/FamilyDayPopup";
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
  metadataBase: new URL("https://www.cobourgcareclinic.ca"),
  title: {
    default: "Cobourg Care Clinic | Family Healthcare in Cobourg, Ontario",
    template: "%s | Cobourg Care Clinic",
  },
  description:
    "Accessible, quality healthcare for Cobourg families. We offer compassionate medical care, preventive health screenings, immunizations, walk-in appointments, and chronic disease management.",
  keywords: [
    "Cobourg clinic",
    "family doctor Cobourg",
    "walk-in clinic Cobourg",
    "healthcare Cobourg Ontario",
    "preventive health screenings",
    "immunizations Cobourg",
    "flu vaccine Cobourg",
    "Cobourg Care Clinic",
  ],
  openGraph: {
    title: "Cobourg Care Clinic | Family Healthcare in Cobourg, Ontario",
    description:
      "Accessible, quality healthcare for Cobourg families. Book appointments for preventive screenings, immunizations, and general consultations.",
    url: "https://www.cobourgcareclinic.ca",
    siteName: "Cobourg Care Clinic",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.cobourgcareclinic.ca",
  },
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

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1521308238868785');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased   px-4 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6  `}
      >
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1521308238868785&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <NavBar />
        <PreventiveHealthPopup />
        <Notice />
        <Progress />
        {children}
        <Footer />
      </body>
    </html>
  );
}

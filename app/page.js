import Blog from "@/components/home/Blog";
import AppointmentBooking from "@/components/home/bookingappointment/AppointmentBooking";
import OceanBooking from "@/components/home/bookingappointment/OceanBooking";
import ZohoBooking from "@/components/home/bookingappointment/ZohoBooking";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import IntroVideo from "@/components/home/IntroVideo";
import Kiosks from "@/components/home/kiosks";
import Map from "@/components/home/Map";
import MarqueeService from "@/components/home/MarqueeService";
import OurDoctors from "@/components/home/OurDoctors";
import OverView from "@/components/home/OverView";
import PictureGallary from "@/components/home/PictureGallary";
import Procedure from "@/components/home/Procedure";
import RespectfulPolicy from "@/components/home/RespectfulPolicy";
import Testimonials from "@/components/home/Testimonials";
import Why from "@/components/home/Why";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <Header />
      <IntroVideo />
      <MarqueeService />
      <OverView />
      <Why />
      {/* <Testimonials /> */}
      <OurDoctors />
      {/* <Blog /> */}
      <MarqueeService />
      <OceanBooking />
      <Kiosks />
      <PictureGallary />
      {/* <Procedure /> */}
      <RespectfulPolicy />
      <Map />
    </div>
  );
}

import Blog from "@/components/home/Blog";
import AppointmentBooking from "@/components/home/bookingappointment/AppointmentBooking";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Map from "@/components/home/Map";
import MarqueeService from "@/components/home/MarqueeService";
import OurDoctors from "@/components/home/OurDoctors";
import OverView from "@/components/home/OverView";
import Testimonials from "@/components/home/Testimonials";
import Why from "@/components/home/Why";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <Header />
      <MarqueeService />
      <OverView />
      <Why />
      <Testimonials />
      <OurDoctors />
      <Blog />
      <MarqueeService />
      <Map />
    </div>
  );
}

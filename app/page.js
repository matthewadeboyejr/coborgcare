import AppointmentChoice from "@/components/home/bookingappointment/AppointmentChoice";
import FluVaccine from "@/components/home/FluVaccine";
import Header from "@/components/home/Header";
import IntroVideo from "@/components/home/IntroVideo";
import Kiosks from "@/components/home/kiosks";
import Map from "@/components/home/Map";
import MarqueeService from "@/components/home/MarqueeService";
import OurDoctors from "@/components/home/OurDoctors";
import OverView from "@/components/home/OverView";
import PictureGallary from "@/components/home/PictureGallary";
import RespectfulPolicy from "@/components/home/RespectfulPolicy";
import Testimonials from "@/components/home/Testimonials";
import Tests from "@/components/home/Tests";
import Why from "@/components/home/Why";

import Notice from "@/components/Notice";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <Header />
      <MarqueeService />
      <OverView />
      <IntroVideo />
      <Why />
      <FluVaccine />
      <Tests />
      <Testimonials />
      <OurDoctors />
      {/* <Blog /> */}
      <MarqueeService />
      <Notice />
      <AppointmentChoice />
      <Kiosks />
      <PictureGallary />
      {/* <Procedure /> */}
      <RespectfulPolicy />
      <Map />
    </div>
  );
}

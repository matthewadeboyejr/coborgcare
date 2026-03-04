export const metadata = {
  title: "Our Doctors",
  description:
    "Meet the experienced family physicians at Cobourg Care Clinic. Our doctors provide general consultations, chronic disease management, preventive care, and immunization services.",
  openGraph: {
    title: "Our Doctors | Cobourg Care Clinic",
    description:
      "Meet the doctors at Cobourg Care Clinic — experienced family physicians dedicated to your health.",
    url: "https://www.cobourgcareclinic.ca/doctors",
  },
  alternates: {
    canonical: "https://www.cobourgcareclinic.ca/doctors",
  },
};

export default function DoctorsLayout({ children }) {
  return <div className="mb-24 mt-7 md:mt-24">{children}</div>;
}

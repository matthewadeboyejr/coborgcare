export const metadata = {
  title: "Book an Appointment",
  description:
    "Book an appointment at Cobourg Care Clinic. Schedule online with our experienced doctors for consultations, preventive screenings, immunizations, blood work, and more.",
  openGraph: {
    title: "Book an Appointment | Cobourg Care Clinic",
    description:
      "Schedule your visit with Cobourg Care Clinic. Online booking available for consultations, screenings, and immunizations.",
    url: "https://www.cobourgcareclinic.ca/appointments",
  },
  alternates: {
    canonical: "https://www.cobourgcareclinic.ca/appointments",
  },
};

export default function AppointmentsLayout({ children }) {
  return <div className="mb-24 mt-7 md:mt-24">{children}</div>;
}

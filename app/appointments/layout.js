export const metadata = {
  title: "Book an Appointment",
  description:
    "Book an appointment at Cobourg Care Clinic across our two Cobourg branches: 609 William Street (Dr. Isah Usman & Dr. Paul) and 628 Ontario Street (Dr. Sunday — accepting new patients).",
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

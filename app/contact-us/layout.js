export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cobourg Care Clinic across our two Cobourg locations (Unit 5A, 609 William Street & 628 Ontario Street). Find hours, directions, phone, and fax.",
  openGraph: {
    title: "Contact Us | Cobourg Care Clinic",
    description:
      "Reach Cobourg Care Clinic for appointments, inquiries, or directions. We're here to help.",
    url: "https://www.cobourgcareclinic.ca/contact-us",
  },
  alternates: {
    canonical: "https://www.cobourgcareclinic.ca/contact-us",
  },
};

export default function ContactUsLayout({ children }) {
  return <div className="mb-24 mt-7 md:mt-24">{children}</div>;
}

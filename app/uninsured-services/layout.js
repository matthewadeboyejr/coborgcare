export const metadata = {
  title: "Uninsured Services & Fee Schedule",
  description:
    "View Cobourg Care Clinic's fee schedule for uninsured medical services, medical forms, sick notes, driver's exams, medical records, accepted payment methods, and FAQs.",
  openGraph: {
    title: "Uninsured Services & Fee Schedule | Cobourg Care Clinic",
    description:
      "Transparent fee schedule for non-OHIP medical services, forms, sick notes, and examinations at Cobourg Care Clinic.",
    url: "https://www.cobourgcareclinic.ca/uninsured-services",
  },
  alternates: {
    canonical: "https://www.cobourgcareclinic.ca/uninsured-services",
  },
};

export default function UninsuredServicesLayout({ children }) {
  return <div className="mb-24 mt-7 md:mt-24">{children}</div>;
}

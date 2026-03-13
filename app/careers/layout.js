export const metadata = {
  title: "Careers",
  description:
    "Join the team at Cobourg Care Clinic. We are currently looking for passionate family physicians to join our medical practice in Cobourg, Ontario.",
  openGraph: {
    title: "Careers | Cobourg Care Clinic",
    description:
      "Join our healthcare team in Cobourg. Now hiring family physicians.",
    url: "https://www.cobourgcareclinic.ca/careers",
  },
  alternates: {
    canonical: "https://www.cobourgcareclinic.ca/careers",
  },
};

export default function CareersLayout({ children }) {
  return <div className="mb-24 mt-7 md:mt-24">{children}</div>;
}

export const metadata = {
  title: "About Us",
  description:
    "Learn about Cobourg Care Clinic — our mission, values, and dedicated team of healthcare professionals serving Cobourg families with compassionate, quality medical care.",
  openGraph: {
    title: "About Us | Cobourg Care Clinic",
    description:
      "Meet the team behind Cobourg Care Clinic. Dedicated healthcare professionals committed to your family's well-being.",
    url: "https://www.cobourgcareclinic.ca/about-us",
  },
  alternates: {
    canonical: "https://www.cobourgcareclinic.ca/about-us",
  },
};

export default function AboutUsLayout({ children }) {
  return <div className="mb-24 mt-7 md:mt-24">{children}</div>;
}

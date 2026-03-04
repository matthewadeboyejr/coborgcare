export const metadata = {
    title: "Privacy & Respectful Workplace Policy",
    description:
        "Read Cobourg Care Clinic's privacy policy and respectful workplace policy. We are committed to a safe, respectful environment and protecting your personal health information.",
    openGraph: {
        title: "Privacy & Respectful Workplace Policy | Cobourg Care Clinic",
        description:
            "Cobourg Care Clinic's commitment to patient privacy and a safe, respectful healthcare environment.",
        url: "https://www.cobourgcareclinic.ca/policy",
    },
    alternates: {
        canonical: "https://www.cobourgcareclinic.ca/policy",
    },
};

export default function PolicyLayout({ children }) {
    return <div className="mb-24 mt-7 md:mt-24">{children}</div>;
}

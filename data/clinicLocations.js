export const CLINIC_CONTACT = {
  phone: "6475089094",
  phoneFormatted: "647-508-9094",
  fax: "(905) 291-7547",
  email: "cobourgcareclinic@gmail.com",
};

export const CLINIC_BRANCHES = [
  {
    id: "william",
    anchor: "william-street",
    name: "609 William Street Branch",
    shortAddress: "Unit 5A, 609 William Street",
    cityRegion: "Cobourg, Ontario, K9A 3A6",
    fullAddress: "Unit 5A, 609 William Street, Cobourg, Ontario, K9A 3A6, Canada",
    mapQuery: "Unit+5A,+609+William+Street,Cobourg,Ontario,K9A+3A6,Canada",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Unit+5A+609+William+Street+Cobourg+Ontario+K9A+3A6",
    acceptingNewPatients: false,
    walkInAvailable: true,
    hours: {
      weekday: "Mon – Fri: 9:30 AM – 5:00 PM",
      saturday: "Sat: 10:00 AM – 4:00 PM",
      sunday: "Sun: Closed",
    },
    leadDoctor: {
      name: "Dr. Isah Usman",
      shortName: "Dr. Isah",
      role: "Experienced Family Physician",
      bio: "Experienced Family Physician with over a decade of clinical experience.",
      image: "/drusmas.png",
      bookingUrl:
        "https://ocean.cognisantmd.com/online-booking/e98fec3a-48b6-4f68-a13a-b22d9af268bc",
      bookingLabel: "Book with Dr. Isah (William St)",
      linkedin:
        "https://www.linkedin.com/in/isah-usman-651991131/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      services: [
        "General Consultations",
        "Walk-In Care",
        "Health Check-ups",
        "Chronic Disease Management",
        "Preventive Care & Family Medicine",
      ],
      note: "Dr. Isah attends to all general medical issues at 609 William Street except venepuncture (blood work) and seasonal vaccines.",
    },
    supportingClinician: {
      name: "Dr. Paul Edokpayi",
      shortName: "Dr. Paul",
      role: "Venepuncture & Vaccination (609 William St Only)",
      bookingUrl:
        "https://ocean.cognisantmd.com/online-booking/0f4224b4-b14a-49bf-a933-85d80d914726",
      bookingLabel: "Book Blood Work / Vaccines (Dr. Paul)",
      services: [
        "Phlebotomy / Venepuncture (Blood Work)",
        "Vaccinations & Immunizations",
      ],
      note: "Available at our 609 William Street location only for existing/rostered clinic patients.",
    },
  },
  {
    id: "ontario",
    anchor: "ontario-street",
    name: "628 Ontario Street Branch",
    shortAddress: "628 Ontario Street",
    cityRegion: "Cobourg, Ontario",
    fullAddress: "628 Ontario Street, Cobourg, Ontario, Canada",
    mapQuery: "628+Ontario+Street,Cobourg,Ontario,Canada",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=628+Ontario+Street+Cobourg+Ontario",
    acceptingNewPatients: true,
    walkInAvailable: true,
    hours: {
      weekday: "Mon – Fri: 9:30 AM – 5:00 PM",
      saturday: "Sat: 10:00 AM – 3:00 PM",
      sunday: "Sun: Closed",
    },
    leadDoctor: {
      name: "Dr. Sunday",
      shortName: "Dr. Sunday",
      role: "Family Physician — Accepting New Patients",
      bio: "Our newest Family Physician, currently accepting new family practice patients and walk-in visits at 628 Ontario Street.",
      image: null,
      bookingUrl:
        "https://ocean.cognisantmd.com/online-booking/d3bc06fb-7ba1-4c02-91aa-e99dcf8ec3d7",
      bookingLabel: "Book / Register with Dr. Sunday (Ontario St)",
      linkedin: null,
      services: [
        "New Family Practice Patient Registration",
        "Walk-In Medical Services",
        "General Consultations",
        "Health Check-ups & Preventive Care",
        "Chronic Disease Management",
      ],
      note: "Accepting new family practice patients and walk-in patients at our 628 Ontario Street location.",
    },
    supportingClinician: null,
  },
];

export const NEW_PATIENT_BOOKING_URL =
  "https://ocean.cognisantmd.com/online-booking/d3bc06fb-7ba1-4c02-91aa-e99dcf8ec3d7";


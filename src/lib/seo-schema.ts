const BASE_URL = "https://solverdeck.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Solverdeck",
  url: BASE_URL,
  logo: `${BASE_URL}/sd.png`,
  sameAs: [
    "https://x.com/solverdeck",
    "https://linkedin.com/company/solverdeck",
    "https://instagram.com/solverdeck",
    "https://web.facebook.com/people/Solverdeck/61578877721977"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Solverdeck",
  image: `${BASE_URL}/sd.png`,
  url: BASE_URL,
  telephone: "", // User will add later
  address: {
    "@type": "PostalAddress",
    streetAddress: "", // User will add later
    addressLocality: "Hull",
    addressRegion: "England",
    addressCountry: "UK"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.7676,
    longitude: -0.3274
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    opens: "09:00",
    closes: "17:00"
  }
};

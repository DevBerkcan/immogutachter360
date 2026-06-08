import { SITE } from './site';

export function buildTitle(title?: string) {
  if (!title) return `${SITE.name} — Immobiliengutachter Düsseldorf`;
  return `${title} · ${SITE.name}`;
}

// ── LocalBusiness + ProfessionalService ──────────────────────────────────────
export const localBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: 'immogutachter360° — Sachverständigenbüro Erdem Tanrikulu',
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.url}/logo_immo.png`,
    width: 320,
    height: 80,
  },
  image: `${SITE.url}/me.jpeg`,
  telephone: SITE.phone,
  email: SITE.email,
  description: SITE.description,
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Rechnung, Überweisung',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    postalCode: SITE.address.zip,
    addressLocality: SITE.address.city,
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  areaServed: [
    { '@type': 'City', name: 'Düsseldorf' },
    { '@type': 'State', name: 'Nordrhein-Westfalen' },
    { '@type': 'Country', name: 'Deutschland' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phone,
    email: SITE.email,
    contactType: 'customer service',
    availableLanguage: ['German'],
  },
  // UPDATE MONTHLY: sync with https://www.provenexpert.com/immogutachter360/
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'DEKRA-Zertifizierung Sachverständiger für Immobilienbewertung (DIN EN ISO/IEC 17024)',
      credentialCategory: 'certificate',
      recognizedBy: {
        '@type': 'Organization',
        name: 'DEKRA SE',
        url: 'https://www.dekra.de',
        sameAs: 'https://www.wikidata.org/wiki/Q882094',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Öffentlich bestellter und vereidigter Sachverständiger',
      credentialCategory: 'certificate',
      recognizedBy: {
        '@type': 'Organization',
        name: 'IHK Düsseldorf',
        url: 'https://www.ihk.de/duesseldorf',
      },
    },
  ],
  knowsAbout: [
    'Immobilienbewertung',
    'Verkehrswertgutachten nach §194 BauGB',
    'ImmoWertV 2021',
    'Erbschaft und Immobilienbewertung',
    'Scheidung und Immobilienbewertung',
    'Restnutzungsdauer-Gutachten AfA',
    'Bauschäden und Schimmelpilz',
    'Energieausweis und Energieberatung',
    'Kaufberatung beim Immobilienerwerb',
    'Versicherungsschäden an Immobilien',
  ],
  sameAs: [SITE.social.instagram, SITE.social.linkedin].filter(
    (s) => s && !s.startsWith('#')
  ),
});

// ── WebSite ───────────────────────────────────────────────────────────────────
export const webSiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: 'de-DE',
  publisher: { '@id': `${SITE.url}/#organization` },
});

// ── Person (Sachverständiger) ─────────────────────────────────────────────────
export const personJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#person`,
  name: 'Erdem Tanrikulu',
  jobTitle: 'DEKRA-zertifizierter Sachverständiger für Immobilienbewertung',
  url: `${SITE.url}/ueber-uns`,
  image: `${SITE.url}/me.jpeg`,
  worksFor: { '@id': `${SITE.url}/#organization` },
  knowsAbout: [
    'Immobilienbewertung',
    'Verkehrswertgutachten',
    'Bauschäden',
    'Energieberatung',
    'Kaufberatung Immobilien',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'DEKRA-Zertifizierung Sachverständiger für Immobilienbewertung',
      recognizedBy: {
        '@type': 'Organization',
        name: 'DEKRA SE',
        url: 'https://www.dekra.de',
        sameAs: 'https://www.wikidata.org/wiki/Q882094',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Öffentlich bestellter und vereidigter Sachverständiger',
      recognizedBy: {
        '@type': 'Organization',
        name: 'IHK Düsseldorf',
        url: 'https://www.ihk.de/duesseldorf',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Zugelassener Energieberater (BAFA/KfW)',
    },
  ],
  sameAs: [
    SITE.social.instagram,
    SITE.social.linkedin,
    'https://www.provenexpert.com/immogutachter360/',
  ].filter((s) => s && !s.startsWith('#')),
  alumniOf: {
    '@type': 'Organization',
    name: 'IHK Düsseldorf',
    url: 'https://www.ihk.de/duesseldorf',
  },
});

// ── FAQPage ───────────────────────────────────────────────────────────────────
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// ── Article ───────────────────────────────────────────────────────────────────
export function articleJsonLd(opts: {
  title: string;
  description: string;
  date: Date;
  dateModified?: Date;
  author: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${SITE.url}${opts.url}/#article`,
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date.toISOString(),
    dateModified: (opts.dateModified ?? opts.date).toISOString(),
    inLanguage: 'de-DE',
    author: {
      '@type': 'Person',
      '@id': `${SITE.url}/#person`,
      name: opts.author,
      url: `${SITE.url}/ueber-uns`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/logo_immo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}${opts.url}`,
    },
    isPartOf: { '@id': `${SITE.url}/#website` },
    ...(opts.image
      ? {
          image: {
            '@type': 'ImageObject',
            url: opts.image.startsWith('http') ? opts.image : `${SITE.url}${opts.image}`,
          },
        }
      : {}),
  };
}

// ── Service ───────────────────────────────────────────────────────────────────
export function serviceJsonLd(opts: {
  title: string;
  description: string;
  slug: string;
  benefits?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE.url}/leistungen/${opts.slug}/#service`,
    name: opts.title,
    description: opts.description,
    url: `${SITE.url}/leistungen/${opts.slug}`,
    serviceType: opts.title,
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: [
      { '@type': 'City', name: 'Düsseldorf' },
      { '@type': 'State', name: 'Nordrhein-Westfalen' },
      { '@type': 'Country', name: 'Deutschland' },
    ],
    offers: {
      '@type': 'Offer',
      url: `${SITE.url}/online-bewertung`,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
  };
}

// ── BreadcrumbList ────────────────────────────────────────────────────────────
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}

// ── WebPage ───────────────────────────────────────────────────────────────────
export function webPageJsonLd(opts: {
  url: string;
  title: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'CollectionPage';
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    '@id': `${SITE.url}${opts.url}`,
    url: `${SITE.url}${opts.url}`,
    name: opts.title,
    description: opts.description,
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
  };
}

// ── HowTo ─────────────────────────────────────────────────────────────────────
export function howToJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  totalTime?: string;
  steps: { name: string; text: string; url?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.url}`,
    inLanguage: 'de-DE',
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: `${SITE.url}${s.url}` } : {}),
    })),
  };
}

// ── OfferCatalog (Preisseite) ─────────────────────────────────────────────────
export function offerCatalogJsonLd(
  offers: { name: string; description: string; lowPrice: number; highPrice?: number }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    '@id': `${SITE.url}/preise/#offerCatalog`,
    name: 'Leistungen & Honorare — immogutachter360',
    itemListElement: offers.map((o, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Offer',
        name: o.name,
        description: o.description,
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: o.lowPrice,
          ...(o.highPrice ? { maxPrice: o.highPrice } : {}),
          priceCurrency: 'EUR',
        },
        seller: { '@id': `${SITE.url}/#organization` },
        areaServed: { '@type': 'State', name: 'Nordrhein-Westfalen' },
        availability: 'https://schema.org/InStock',
      },
    })),
  };
}

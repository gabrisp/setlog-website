export interface Translations {
  hero: {
    label: string;
    title: string;
    subtitle: string;
    support: string;
  };
  screenshots: {
    title: string;
    subtitle: string;
  };
  features: {
    heading: string;
    items: Array< { title: string; description: string } >;
  };
  cta: {
    title: string;
    text: string;
  };
  nav: {
    home: string;
    privacy: string;
    terms: string;
    support: string;
  };
  footer: {
    description: string;
    legal: string;
    contact: string;
    copyright: string;
  };
  legal: {
    privacyTitle: string;
    termsTitle: string;
  };
  support: {
    title: string;
    subtitle: string;
    emailLabel: string;
    responseTime: string;
    faqTitle: string;
    faqItems: Array<{ q: string; a: string }>;
  };
}

export const languages = {
  en: 'English',
  no: 'Norsk',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export type IconName = 'clock' | 'route' | 'target' | 'code' | 'headset' | 'megaphone' | 'trendingUp' | 'chat';

interface ActivityCopy {
  icon: IconName;
  title: string;
  short: string;
  description: string;
  bullets: [string, string, string];
}

interface ValueCopy {
  title: string;
  body: string;
}

interface CrewCopy {
  heading: string;
  body: string;
}

interface Dictionary {
  meta: {
    siteName: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    solutions: string;
    products: string;
    company: string;
    getStarted: string;
    contact: string;
    menuLabel: string;
  };
  footer: {
    tagline: string;
    siteHeading: string;
    companyHeading: string;
    login: string;
    copyright: string;
  };
  a11y: {
    skipToContent: string;
    languageLabel: string;
  };
  home: {
    seoTitle: string;
    seoDescription: string;
    heroEyebrow: string;
    heroTitleLead: string;
    heroTitleAccent: string;
    heroSubhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stackHeading: string;
    stackSubhead: string;
    stackLink: string;
    valueEyebrow: string;
    valueHeading: string;
    valueGrid: ValueCopy[];
    productsEyebrow: string;
    productsHeading: string;
    productsBody: string;
    productsLink: string;
    closingHeading: string;
    closingBody: string;
    closingCta: string;
  };
  solutions: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    heading: string;
    subhead: string;
    activities: ActivityCopy[];
    closingHeading: string;
    closingBody: string;
    closingCta: string;
  };
  products: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    heading: string;
    subhead: string;
    body: string;
    hubCenterLabel: string;
    chatBubbleGreeting: string;
    chatBubbleReply: string;
    crewsHeading: string;
    crews: [CrewCopy, CrewCopy, CrewCopy];
    cta: string;
    ctaBody: string;
  };
  company: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    heading: string;
    aboutHeading: string;
    aboutBody: string;
    aboutPlaceholder: string;
    careersHeading: string;
    careersBody: string;
    contactHeading: string;
    contactBody: string;
  };
}

export const ui: Record<Lang, Dictionary> = {
  en: {
    meta: {
      siteName: 'Mielikkix',
      defaultDescription:
        'Mielikkix AS builds AI-powered software and SaaS solutions — chatbots, automation, and multi-agent systems for growing businesses.',
    },
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      products: 'Products',
      company: 'Company',
      getStarted: 'Get Started',
      contact: 'Contact Us',
      menuLabel: 'Menu',
    },
    footer: {
      tagline: 'AI-powered software and automation for growing businesses.',
      siteHeading: 'Site',
      companyHeading: 'Company',
      login: 'Log in',
      copyright: '© {year} Mielikkix AS. All rights reserved.',
    },
    a11y: {
      skipToContent: 'Skip to content',
      languageLabel: 'Language',
    },
    home: {
      seoTitle: 'AI Software & SaaS Solutions',
      seoDescription:
        'Mielikkix AS builds AI-powered software and SaaS solutions — chatbots, automation, and multi-agent systems for growing businesses.',
      heroEyebrow: 'AI Software & SaaS Solutions',
      heroTitleLead: 'Run your business at ',
      heroTitleAccent: 'AI speed.',
      heroSubhead:
        'Mielikkix AS builds AI-powered software and SaaS solutions — chatbots, automation, and multi-agent systems that handle the busywork so your team can focus on what matters.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Talk to Us',
      stackHeading: 'AI Solutions for Every Part of Your Business',
      stackSubhead:
        'From customer-facing chatbots to backend automation, Mielikkix builds the AI layer that connects your tools, your team, and your customers.',
      stackLink: 'See all solutions',
      valueEyebrow: 'Why Mielikkix',
      valueHeading: 'Built for teams who want AI that actually works',
      valueGrid: [
        { title: 'AI-first architecture', body: 'Every solution is designed around modern AI models from day one, not bolted on after the fact.' },
        { title: 'Fast integration', body: 'Connects to your existing website, CRM, and business systems without a lengthy rebuild.' },
        { title: 'Multi-agent orchestration', body: 'Multiple specialized AI agents working together, not a single do-everything bot.' },
        { title: 'Human-in-the-loop', body: 'Escalate to a human teammate whenever a conversation needs one.' },
        { title: 'Nordic roots, built for everyone', body: 'Mielikkix AS is built in the Nordics, with AI solutions for businesses everywhere.' },
        { title: 'Ongoing support', body: 'Our team stays involved after launch — monitoring, iterating, and improving your AI systems over time.' },
      ],
      productsEyebrow: 'Products',
      productsHeading: 'Mielikkix Chat Widget & Force Agents',
      productsBody:
        'Alongside custom AI development, we build our own product line: a live Chat Widget backed by 10 specialized AI Force Agents — handling support, sales, and growth for your website.',
      productsLink: 'Explore the products',
      closingHeading: "Let's build your AI advantage.",
      closingBody: "Tell us about your business and we'll show you where AI can save the most time.",
      closingCta: 'Contact Us',
    },
    solutions: {
      seoTitle: 'Solutions',
      seoDescription:
        'AI chatbots and SaaS, customer service and sales automation, multi-agent AI, custom AI development, and business system integrations.',
      eyebrow: 'Solutions',
      heading: 'AI Solutions for Every Part of Your Business',
      subhead:
        'From customer-facing chatbots to backend automation, Mielikkix builds the AI layer that connects your tools, your team, and your customers.',
      activities: [
        {
          icon: 'chat',
          title: 'AI Chatbots & SaaS Solutions',
          short: 'Chatbots & SaaS',
          description:
            'We design and build AI-powered chatbot and SaaS products for businesses — from customer-facing assistants to internal tools.',
          bullets: ['Custom chatbot design and training', 'SaaS product build and deployment', 'Ongoing model tuning and updates'],
        },
        {
          icon: 'headset',
          title: 'AI Customer Service, Sales & Lead Generation',
          short: 'Customer Service & Sales',
          description:
            'AI that handles first-line support, qualifies leads, and moves prospects through your sales funnel automatically.',
          bullets: ['24/7 AI customer support', 'Lead capture and qualification', 'Sales follow-up automation'],
        },
        {
          icon: 'route',
          title: 'AI Automation & Multi-Agent Solutions',
          short: 'Automation & Multi-Agent AI',
          description: 'Multi-agent AI systems that take on multi-step business processes — not just single-task bots.',
          bullets: ['Workflow automation', 'Multi-agent orchestration', 'Handoffs between AI and your team'],
        },
        {
          icon: 'code',
          title: 'Custom AI Software Development',
          short: 'Custom AI Development',
          description: 'Bespoke AI software built around your business logic, not a one-size-fits-all template.',
          bullets: ['Custom AI application development', 'Model and API integration', 'Legacy system modernization'],
        },
        {
          icon: 'target',
          title: 'Website, API & Business System Integrations',
          short: 'Integrations',
          description: 'We connect AI into the systems you already run — your website, APIs, CRM, and internal tools.',
          bullets: ['Website and CMS integration', 'API development and integration', 'CRM, ERP, and business system connections'],
        },
      ],
      closingHeading: 'Not sure where to start?',
      closingBody: "Tell us what you're working on and we'll help you find the right AI solution.",
      closingCta: 'Contact Us',
    },
    products: {
      seoTitle: 'Products',
      seoDescription: 'The Mielikkix Chat Widget and 10 specialized AI Force Agents — handling support, sales, and growth for your website.',
      eyebrow: 'Products',
      heading: 'Mielikkix Chat Widget & Force Agents',
      subhead: 'Our flagship product line: a live Chat Widget for your website, backed by 10 specialized AI Force Agents.',
      body:
        'Alongside custom AI development and integrations, Mielikkix builds its own product: a Chat Widget that greets visitors and routes conversations to the right Force Agent, and a crew of 10 specialized AI agents grouped into three teams.',
      hubCenterLabel: 'Chat Widget',
      chatBubbleGreeting: 'Hi! How can I help today?',
      chatBubbleReply: 'Can I book an appointment?',
      crewsHeading: 'Meet the Crew',
      crews: [
        {
          heading: 'Front Desk & Support',
          body: 'Voice Receptionist, Booking Assistant, and Support Triage — handling calls, bookings, and first-line support.',
        },
        {
          heading: 'Sales & Marketing',
          body: 'Review & Reputation, Social Media, Email Marketing, and SEO Copywriter — keeping your pipeline and presence active.',
        },
        {
          heading: 'Growth & Retention',
          body: 'Feedback & Survey, Loyalty & Re-engagement, and Quote & Invoice — helping you keep and grow every customer.',
        },
      ],
      cta: 'Get Started',
      ctaBody: 'Ready to add the Chat Widget and Force Agents to your site?',
    },
    company: {
      seoTitle: 'Company',
      seoDescription: 'About Mielikkix AS — an AI-powered software and SaaS company providing AI solutions and automation services for businesses.',
      eyebrow: 'Company',
      heading: 'About Mielikkix',
      aboutHeading: 'About',
      aboutBody:
        'Mielikkix AS is an AI-powered software and SaaS company providing AI solutions and automation services for businesses — including AI chatbots, business automation, multi-agent AI solutions, customer service and sales automation, custom AI software development, and AI integrations.',
      aboutPlaceholder: 'PLACEHOLDER: Founding story and mission to be added.',
      careersHeading: 'Careers',
      careersBody: 'PLACEHOLDER: Open roles will be listed here. No positions confirmed yet.',
      contactHeading: 'Contact',
      contactBody: 'PLACEHOLDER: Contact details (email, address, social links) to be added.',
    },
  },
  no: {
    meta: {
      siteName: 'Mielikkix',
      defaultDescription:
        'Mielikkix AS bygger AI-drevne programvare- og SaaS-løsninger — chatboter, automatisering og multiagent-systemer for bedrifter i vekst.',
    },
    nav: {
      home: 'Hjem',
      solutions: 'Løsninger',
      products: 'Produkter',
      company: 'Om oss',
      getStarted: 'Kom i gang',
      contact: 'Kontakt oss',
      menuLabel: 'Meny',
    },
    footer: {
      tagline: 'AI-drevet programvare og automatisering for bedrifter i vekst.',
      siteHeading: 'Nettsted',
      companyHeading: 'Om oss',
      login: 'Logg inn',
      copyright: '© {year} Mielikkix AS. Alle rettigheter forbeholdt.',
    },
    a11y: {
      skipToContent: 'Hopp til innhold',
      languageLabel: 'Språk',
    },
    home: {
      seoTitle: 'AI-programvare og SaaS-løsninger',
      seoDescription:
        'Mielikkix AS bygger AI-drevne programvare- og SaaS-løsninger — chatboter, automatisering og multiagent-systemer for bedrifter i vekst.',
      heroEyebrow: 'AI-programvare og SaaS-løsninger',
      heroTitleLead: 'Drift virksomheten din i ',
      heroTitleAccent: 'AI-tempo.',
      heroSubhead:
        'Mielikkix AS bygger AI-drevne programvare- og SaaS-løsninger — chatboter, automatisering og multiagent-systemer som tar seg av rutinearbeidet, slik at teamet ditt kan fokusere på det som betyr noe.',
      ctaPrimary: 'Kom i gang',
      ctaSecondary: 'Snakk med oss',
      stackHeading: 'AI-løsninger for enhver del av virksomheten din',
      stackSubhead:
        'Fra kundevendte chatboter til automatisering i bakgrunnen — Mielikkix bygger AI-laget som knytter sammen verktøyene, teamet og kundene dine.',
      stackLink: 'Se alle løsninger',
      valueEyebrow: 'Hvorfor Mielikkix',
      valueHeading: 'Bygget for team som vil ha AI som faktisk fungerer',
      valueGrid: [
        { title: 'AI-først arkitektur', body: 'Hver løsning er utviklet rundt moderne AI-modeller fra dag én, ikke lagt til i etterkant.' },
        { title: 'Rask integrasjon', body: 'Kobles til nettsiden, CRM-et og forretningssystemene dine uten en langvarig ombygging.' },
        { title: 'Multiagent-orkestrering', body: 'Flere spesialiserte AI-agenter som jobber sammen, ikke én bot som skal gjøre alt.' },
        { title: 'Menneske i sløyfen', body: 'Eskaler til en kollega når en samtale trenger det.' },
        { title: 'Nordiske røtter, bygget for alle', body: 'Mielikkix AS er bygget i Norden, med AI-løsninger for bedrifter overalt.' },
        { title: 'Løpende support', body: 'Teamet vårt følger opp etter lansering — overvåker, justerer og forbedrer AI-systemene dine over tid.' },
      ],
      productsEyebrow: 'Produkter',
      productsHeading: 'Mielikkix Chatteassistent og Force Agents',
      productsBody:
        'Ved siden av skreddersydd AI-utvikling bygger vi vår egen produktlinje: en live chatteassistent støttet av 10 spesialiserte AI Force Agents — som håndterer support, salg og vekst for nettsiden din.',
      productsLink: 'Utforsk produktene',
      closingHeading: 'La oss bygge ditt AI-fortrinn.',
      closingBody: 'Fortell oss om virksomheten din, så viser vi deg hvor AI kan spare mest tid.',
      closingCta: 'Kontakt oss',
    },
    solutions: {
      seoTitle: 'Løsninger',
      seoDescription:
        'AI-chatboter og SaaS, kundeservice- og salgsautomatisering, multiagent-AI, skreddersydd AI-utvikling og integrasjon av forretningssystemer.',
      eyebrow: 'Løsninger',
      heading: 'AI-løsninger for enhver del av virksomheten din',
      subhead:
        'Fra kundevendte chatboter til automatisering i bakgrunnen — Mielikkix bygger AI-laget som knytter sammen verktøyene, teamet og kundene dine.',
      activities: [
        {
          icon: 'chat',
          title: 'AI-chatboter og SaaS-løsninger',
          short: 'Chatboter og SaaS',
          description:
            'Vi designer og bygger AI-drevne chatbot- og SaaS-produkter for bedrifter — fra kundevendte assistenter til interne verktøy.',
          bullets: ['Skreddersydd chatbot-design og trening', 'Bygging og lansering av SaaS-produkter', 'Løpende modelljustering og oppdateringer'],
        },
        {
          icon: 'headset',
          title: 'AI-kundeservice, salg og leadgenerering',
          short: 'Kundeservice og salg',
          description:
            'AI som håndterer førstelinjesupport, kvalifiserer leads og fører prospekter gjennom salgstrakten din automatisk.',
          bullets: ['AI-kundesupport døgnet rundt', 'Fange og kvalifisere leads', 'Automatisert salgsoppfølging'],
        },
        {
          icon: 'route',
          title: 'AI-automatisering og multiagent-løsninger',
          short: 'Automatisering og multiagent-AI',
          description: 'Multiagent-AI-systemer som tar seg av flertrinns forretningsprosesser — ikke bare enkle enkeltoppgave-boter.',
          bullets: ['Arbeidsflytautomatisering', 'Multiagent-orkestrering', 'Overleveringer mellom AI og teamet ditt'],
        },
        {
          icon: 'code',
          title: 'Skreddersydd AI-programvareutvikling',
          short: 'Skreddersydd AI-utvikling',
          description: 'Skreddersydd AI-programvare bygget rundt din forretningslogikk, ikke en standardmal.',
          bullets: ['Utvikling av skreddersydde AI-applikasjoner', 'Modell- og API-integrasjon', 'Modernisering av eldre systemer'],
        },
        {
          icon: 'target',
          title: 'Integrasjon av nettside, API og forretningssystemer',
          short: 'Integrasjoner',
          description: 'Vi kobler AI inn i systemene du allerede bruker — nettsiden din, API-er, CRM og interne verktøy.',
          bullets: ['Integrasjon med nettside og CMS', 'API-utvikling og -integrasjon', 'Tilkobling til CRM, ERP og forretningssystemer'],
        },
      ],
      closingHeading: 'Usikker på hvor du skal starte?',
      closingBody: 'Fortell oss hva du jobber med, så hjelper vi deg med å finne riktig AI-løsning.',
      closingCta: 'Kontakt oss',
    },
    products: {
      seoTitle: 'Produkter',
      seoDescription: 'Mielikkix Chatteassistent og 10 spesialiserte AI Force Agents — som håndterer support, salg og vekst for nettsiden din.',
      eyebrow: 'Produkter',
      heading: 'Mielikkix Chatteassistent og Force Agents',
      subhead: 'Vår flaggskip-produktlinje: en live chatteassistent for nettsiden din, støttet av 10 spesialiserte AI Force Agents.',
      body:
        'Ved siden av skreddersydd AI-utvikling og integrasjoner bygger Mielikkix sitt eget produkt: en chatteassistent som møter besøkende og videresender samtaler til riktig Force Agent, og et mannskap på 10 spesialiserte AI-agenter gruppert i tre team.',
      hubCenterLabel: 'Chat Widget',
      chatBubbleGreeting: 'Hei! Hva kan jeg hjelpe deg med i dag?',
      chatBubbleReply: 'Kan jeg bestille time?',
      crewsHeading: 'Møt mannskapet',
      crews: [
        {
          heading: 'Front Desk & Support',
          body: 'Voice Receptionist, Booking Assistant og Support Triage — håndterer samtaler, booking og førstelinjesupport.',
        },
        {
          heading: 'Sales & Marketing',
          body: 'Review & Reputation, Social Media, Email Marketing og SEO Copywriter — holder rørledningen og synligheten din aktiv.',
        },
        {
          heading: 'Growth & Retention',
          body: 'Feedback & Survey, Loyalty & Re-engagement og Quote & Invoice — hjelper deg å beholde og vokse hver kunde.',
        },
      ],
      cta: 'Kom i gang',
      ctaBody: 'Klar til å legge chatteassistenten og Force Agents til nettsiden din?',
    },
    company: {
      seoTitle: 'Om oss',
      seoDescription: 'Om Mielikkix AS — et AI-drevet programvare- og SaaS-selskap som leverer AI-løsninger og automatiseringstjenester for bedrifter.',
      eyebrow: 'Om oss',
      heading: 'Om Mielikkix',
      aboutHeading: 'Om oss',
      aboutBody:
        'Mielikkix AS er et AI-drevet programvare- og SaaS-selskap som leverer AI-løsninger og automatiseringstjenester for bedrifter — inkludert AI-chatboter, forretningsautomatisering, multiagent-AI-løsninger, kundeservice- og salgsautomatisering, skreddersydd AI-programvareutvikling og AI-integrasjoner.',
      aboutPlaceholder: 'PLASSHOLDER: Grunnleggelseshistorie og misjon legges til her.',
      careersHeading: 'Karriere',
      careersBody: 'PLASSHOLDER: Ledige stillinger vil bli listet her. Ingen stillinger er bekreftet ennå.',
      contactHeading: 'Kontakt',
      contactBody: 'PLASSHOLDER: Kontaktinformasjon (e-post, adresse, sosiale lenker) legges til her.',
    },
  },
};

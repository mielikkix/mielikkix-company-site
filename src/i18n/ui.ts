export const languages = {
  en: 'English',
  no: 'Norsk',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

interface AgentCopy {
  name: string;
  body: string;
}

interface AgentGroupCopy {
  heading: string;
  agents: AgentCopy[];
}

interface PricingTierCopy {
  name: string;
  body: string;
  price: string;
  cta: string;
}

interface CapabilityCopy {
  title: string;
  body: string;
}

interface Dictionary {
  meta: {
    siteName: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    chatWidget: string;
    forceAgents: string;
    pricing: string;
    company: string;
    getStarted: string;
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
    heroTitle: string;
    heroSubhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chatWidgetHeading: string;
    chatWidgetBody: string;
    chatWidgetLink: string;
    chatBubbleGreeting: string;
    chatBubbleReply: string;
    forceAgentsHeading: string;
    forceAgentsBody: string;
    forceAgentsLink: string;
    closingHeading: string;
    closingBody: string;
    closingCta: string;
  };
  chatWidget: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    heading: string;
    subhead: string;
    whatHeading: string;
    whatBody: string;
    capabilitiesHeading: string;
    capabilities: CapabilityCopy[];
    ctaHeading: string;
    ctaBody: string;
    cta: string;
  };
  forceAgents: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    heading: string;
    subhead: string;
    groups: {
      frontDesk: AgentGroupCopy;
      salesMarketing: AgentGroupCopy;
      growthRetention: AgentGroupCopy;
    };
    closingHeading: string;
    closingBody: string;
    closingCta: string;
  };
  pricing: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    heading: string;
    subhead: string;
    tiers: PricingTierCopy[];
    note: string;
  };
  company: {
    seoTitle: string;
    seoDescription: string;
    eyebrow: string;
    heading: string;
    aboutHeading: string;
    aboutBody: string;
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
        'Mielikkix pairs a live Chat Widget with a crew of 10 specialized AI Force Agents that handle support, sales, and growth for your business.',
    },
    nav: {
      home: 'Home',
      chatWidget: 'Chat Widget',
      forceAgents: 'Force Agents',
      pricing: 'Pricing',
      company: 'Company',
      getStarted: 'Get Started',
      menuLabel: 'Menu',
    },
    footer: {
      tagline: 'AI-powered support, sales, and growth agents for growing businesses.',
      siteHeading: 'Site',
      companyHeading: 'Company',
      login: 'Log in',
      copyright: '© {year} Mielikkix. All rights reserved.',
    },
    a11y: {
      skipToContent: 'Skip to content',
      languageLabel: 'Language',
    },
    home: {
      seoTitle: 'AI Chat Widget & Force Agents',
      seoDescription:
        'One live Chat Widget backed by 10 specialized AI Force Agents — handling support, bookings, marketing, and growth for your business.',
      heroEyebrow: 'AI Support & Growth Agents',
      heroTitle: 'One Chat Widget. Ten AI agents working your front line.',
      heroSubhead:
        "Mielikkix puts a live Chat Widget on your site and backs it with a crew of specialized AI Force Agents — handling support, bookings, marketing, and growth so your team doesn't have to do it all manually.",
      ctaPrimary: 'Get Started',
      ctaSecondary: 'See Force Agents',
      chatWidgetHeading: 'Meet the Chat Widget',
      chatWidgetBody:
        'A live, embeddable chat experience for your website — answering questions, qualifying leads, and routing conversations to the right Force Agent, around the clock.',
      chatWidgetLink: 'Explore the Chat Widget',
      chatBubbleGreeting: 'Hi! How can I help today?',
      chatBubbleReply: 'Can I book an appointment?',
      forceAgentsHeading: 'Meet the Crew',
      forceAgentsBody:
        '10 specialized AI Force Agents, grouped into three crews — Front Desk & Support, Sales & Marketing, and Growth & Retention — each built to handle a specific part of running your business.',
      forceAgentsLink: 'View all Force Agents',
      closingHeading: 'Ready to put your Force Agents to work?',
      closingBody: 'Pick the plan that fits — from a single agent to the Full Crew.',
      closingCta: 'View Pricing',
    },
    chatWidget: {
      seoTitle: 'Chat Widget',
      seoDescription:
        'The Mielikkix Chat Widget is a live, embeddable chat experience that answers questions, qualifies leads, and routes conversations 24/7.',
      eyebrow: 'Product',
      heading: 'The Chat Widget',
      subhead: 'A live chat experience that sits on your website and never clocks out.',
      whatHeading: 'What it does',
      whatBody:
        'The Chat Widget greets visitors the moment they land, answers common questions instantly, and hands off to the right Force Agent — or a human — when a conversation needs it.',
      capabilitiesHeading: 'Key capabilities',
      capabilities: [
        { title: '24/7 live coverage', body: 'Never miss a visitor question, day or night.' },
        { title: 'Smart routing', body: 'Conversations are routed to the right Force Agent automatically.' },
        { title: 'Lead qualification', body: 'Captures visitor intent and hands off warm leads to your team.' },
        { title: 'On-brand, embeddable', body: 'Drops into your existing site with a lightweight embed script.' },
      ],
      ctaHeading: 'See it on your site',
      ctaBody: 'Get started and add the Chat Widget to your website in minutes.',
      cta: 'Get Started',
    },
    forceAgents: {
      seoTitle: 'Force Agents',
      seoDescription:
        '10 specialized AI Force Agents grouped into three crews — Front Desk & Support, Sales & Marketing, and Growth & Retention.',
      eyebrow: 'Product',
      heading: 'Force Agents',
      subhead:
        '10 specialized AI agents, grouped into three crews — each one built to run a specific part of your business.',
      groups: {
        frontDesk: {
          heading: 'Front Desk & Support',
          agents: [
            { name: 'Voice Receptionist', body: 'Answers and routes incoming calls so no customer hits a dead end.' },
            { name: 'Booking Assistant', body: 'Handles appointment scheduling and confirmations automatically.' },
            { name: 'Support Triage', body: 'Sorts and prioritizes incoming support requests before they reach your team.' },
          ],
        },
        salesMarketing: {
          heading: 'Sales & Marketing',
          agents: [
            { name: 'Review & Reputation', body: 'Monitors and responds to reviews to help protect your reputation.' },
            { name: 'Social Media Agent', body: 'Keeps your social channels active with on-brand posts.' },
            { name: 'Email Marketing', body: 'Builds and sends campaigns that keep your audience engaged.' },
            { name: 'SEO Copywriter', body: 'Writes search-optimized content to grow your organic reach.' },
          ],
        },
        growthRetention: {
          heading: 'Growth & Retention',
          agents: [
            { name: 'Feedback & Survey', body: 'Collects customer feedback and surfaces the insights that matter.' },
            { name: 'Loyalty & Re-engagement', body: 'Reaches out to past customers to bring them back.' },
            { name: 'Quote & Invoice', body: 'Generates quotes and invoices so deals move faster.' },
          ],
        },
      },
      closingHeading: 'Ready to build your crew?',
      closingBody: 'Start with one agent or bring on the Full Crew.',
      closingCta: 'Get Started',
    },
    pricing: {
      seoTitle: 'Pricing',
      seoDescription:
        'Plans for every crew size — from a single Force Agent to the Full Crew. Final pricing to be announced.',
      eyebrow: 'Pricing',
      heading: 'Plans for every crew size',
      subhead: 'Start with a single agent, bundle three, or bring on the Full Crew. Exact pricing coming soon.',
      tiers: [
        {
          name: 'Single Agent',
          body: 'Add one Force Agent to your site.',
          price: 'PLACEHOLDER — pricing not yet finalized',
          cta: 'Get Started',
        },
        {
          name: '3-Agent Bundle',
          body: 'Pick any three Force Agents for your crew.',
          price: 'PLACEHOLDER — pricing not yet finalized',
          cta: 'Get Started',
        },
        {
          name: 'Full Crew',
          body: 'All 10 Force Agents plus the Chat Widget.',
          price: 'PLACEHOLDER — pricing not yet finalized',
          cta: 'Get Started',
        },
      ],
      note: 'PLACEHOLDER: Final pricing, billing cadence, and plan details will be confirmed before launch.',
    },
    company: {
      seoTitle: 'Company',
      seoDescription: 'About Mielikkix — company background, careers, and contact information.',
      eyebrow: 'Company',
      heading: 'About Mielikkix',
      aboutHeading: 'About',
      aboutBody: 'PLACEHOLDER: Company story, mission, and background to be added.',
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
        'Mielikkix kombinerer en live chatteassistent med et team på 10 spesialiserte AI Force Agents som håndterer support, salg og vekst for virksomheten din.',
    },
    nav: {
      home: 'Hjem',
      chatWidget: 'Chatteassistent',
      forceAgents: 'Force Agents',
      pricing: 'Priser',
      company: 'Om oss',
      getStarted: 'Kom i gang',
      menuLabel: 'Meny',
    },
    footer: {
      tagline: 'AI-drevne agenter for support, salg og vekst — for bedrifter i utvikling.',
      siteHeading: 'Nettsted',
      companyHeading: 'Om oss',
      login: 'Logg inn',
      copyright: '© {year} Mielikkix. Alle rettigheter forbeholdt.',
    },
    a11y: {
      skipToContent: 'Hopp til innhold',
      languageLabel: 'Språk',
    },
    home: {
      seoTitle: 'AI-chatteassistent og Force Agents',
      seoDescription:
        'Én live chatteassistent støttet av 10 spesialiserte AI Force Agents — som håndterer support, booking, markedsføring og vekst for virksomheten din.',
      heroEyebrow: 'AI-agenter for support og vekst',
      heroTitle: 'Én chatteassistent. Ti AI-agenter på førstelinjen.',
      heroSubhead:
        'Mielikkix setter en live chatteassistent på nettsiden din, støttet av et team spesialiserte AI Force Agents — som håndterer support, booking, markedsføring og vekst, slik at teamet ditt slipper å gjøre alt manuelt.',
      ctaPrimary: 'Kom i gang',
      ctaSecondary: 'Se Force Agents',
      chatWidgetHeading: 'Møt chatteassistenten',
      chatWidgetBody:
        'En live, innebygd chatteopplevelse for nettsiden din — som svarer på spørsmål, kvalifiserer leads og sender samtaler videre til riktig Force Agent, døgnet rundt.',
      chatWidgetLink: 'Utforsk chatteassistenten',
      chatBubbleGreeting: 'Hei! Hva kan jeg hjelpe deg med i dag?',
      chatBubbleReply: 'Kan jeg bestille time?',
      forceAgentsHeading: 'Møt mannskapet',
      forceAgentsBody:
        '10 spesialiserte AI Force Agents, gruppert i tre team — Front Desk & Support, Sales & Marketing og Growth & Retention — hver bygget for å håndtere en spesifikk del av driften av virksomheten din.',
      forceAgentsLink: 'Se alle Force Agents',
      closingHeading: 'Klar til å sette Force Agents i arbeid?',
      closingBody: 'Velg planen som passer — fra én enkelt agent til hele mannskapet.',
      closingCta: 'Se priser',
    },
    chatWidget: {
      seoTitle: 'Chatteassistent',
      seoDescription:
        'Mielikkix sin chatteassistent er en live, innebygd chatteopplevelse som svarer på spørsmål, kvalifiserer leads og videresender samtaler døgnet rundt.',
      eyebrow: 'Produkt',
      heading: 'Chatteassistenten',
      subhead: 'En live chatteopplevelse som sitter på nettsiden din og aldri tar fri.',
      whatHeading: 'Hva den gjør',
      whatBody:
        'Chatteassistenten møter besøkende idet de lander på siden, svarer umiddelbart på vanlige spørsmål, og sender samtalen videre til riktig Force Agent — eller et menneske — når det trengs.',
      capabilitiesHeading: 'Nøkkelfunksjoner',
      capabilities: [
        { title: 'Live døgnet rundt', body: 'Gå aldri glipp av et spørsmål fra en besøkende, dag eller natt.' },
        { title: 'Smart videresending', body: 'Samtaler sendes automatisk til riktig Force Agent.' },
        { title: 'Kvalifisering av leads', body: 'Fanger opp besøkendes hensikt og sender varme leads videre til teamet ditt.' },
        { title: 'Merkevaretilpasset og innebygd', body: 'Legges rett inn på nettsiden din med et lettvekts embed-skript.' },
      ],
      ctaHeading: 'Se den på din side',
      ctaBody: 'Kom i gang og legg til chatteassistenten på nettsiden din på få minutter.',
      cta: 'Kom i gang',
    },
    forceAgents: {
      seoTitle: 'Force Agents',
      seoDescription:
        '10 spesialiserte AI Force Agents gruppert i tre team — Front Desk & Support, Sales & Marketing og Growth & Retention.',
      eyebrow: 'Produkt',
      heading: 'Force Agents',
      subhead:
        '10 spesialiserte AI-agenter, gruppert i tre team — hver bygget for å drive en spesifikk del av virksomheten din.',
      groups: {
        frontDesk: {
          heading: 'Front Desk & Support',
          agents: [
            { name: 'Voice Receptionist', body: 'Svarer og videresender innkommende samtaler, slik at ingen kunder møter en blindvei.' },
            { name: 'Booking Assistant', body: 'Håndterer timebestilling og bekreftelser automatisk.' },
            { name: 'Support Triage', body: 'Sorterer og prioriterer innkommende supporthenvendelser før de når teamet ditt.' },
          ],
        },
        salesMarketing: {
          heading: 'Sales & Marketing',
          agents: [
            { name: 'Review & Reputation', body: 'Overvåker og svarer på anmeldelser for å beskytte omdømmet ditt.' },
            { name: 'Social Media Agent', body: 'Holder sosiale kanaler aktive med innhold som passer merkevaren din.' },
            { name: 'Email Marketing', body: 'Bygger og sender kampanjer som holder målgruppen din engasjert.' },
            { name: 'SEO Copywriter', body: 'Skriver søkeoptimalisert innhold som øker den organiske rekkevidden din.' },
          ],
        },
        growthRetention: {
          heading: 'Growth & Retention',
          agents: [
            { name: 'Feedback & Survey', body: 'Samler inn tilbakemeldinger fra kunder og løfter frem innsikten som betyr noe.' },
            { name: 'Loyalty & Re-engagement', body: 'Tar kontakt med tidligere kunder for å få dem tilbake.' },
            { name: 'Quote & Invoice', body: 'Genererer tilbud og fakturaer slik at avtaler går raskere.' },
          ],
        },
      },
      closingHeading: 'Klar til å bygge mannskapet ditt?',
      closingBody: 'Start med én agent, eller ta med hele mannskapet.',
      closingCta: 'Kom i gang',
    },
    pricing: {
      seoTitle: 'Priser',
      seoDescription:
        'Planer for ethvert mannskap — fra én enkelt Force Agent til hele mannskapet. Endelige priser kunngjøres senere.',
      eyebrow: 'Priser',
      heading: 'Planer for ethvert mannskap',
      subhead: 'Start med én agent, kombiner tre, eller ta med hele mannskapet. Eksakte priser kommer snart.',
      tiers: [
        {
          name: 'Én agent',
          body: 'Legg til én Force Agent på nettsiden din.',
          price: 'PLASSHOLDER — pris ikke fastsatt ennå',
          cta: 'Kom i gang',
        },
        {
          name: '3-agent-pakke',
          body: 'Velg tre Force Agents til mannskapet ditt.',
          price: 'PLASSHOLDER — pris ikke fastsatt ennå',
          cta: 'Kom i gang',
        },
        {
          name: 'Hele mannskapet',
          body: 'Alle 10 Force Agents pluss chatteassistenten.',
          price: 'PLASSHOLDER — pris ikke fastsatt ennå',
          cta: 'Kom i gang',
        },
      ],
      note: 'PLASSHOLDER: Endelige priser, faktureringsintervall og planinnhold bekreftes før lansering.',
    },
    company: {
      seoTitle: 'Om oss',
      seoDescription: 'Om Mielikkix — bakgrunn, karrieremuligheter og kontaktinformasjon.',
      eyebrow: 'Om oss',
      heading: 'Om Mielikkix',
      aboutHeading: 'Om oss',
      aboutBody: 'PLASSHOLDER: Selskapets historie, misjon og bakgrunn legges til her.',
      careersHeading: 'Karriere',
      careersBody: 'PLASSHOLDER: Ledige stillinger vil bli listet her. Ingen stillinger er bekreftet ennå.',
      contactHeading: 'Kontakt',
      contactBody: 'PLASSHOLDER: Kontaktinformasjon (e-post, adresse, sosiale lenker) legges til her.',
    },
  },
};

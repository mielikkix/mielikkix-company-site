export const languages = {
  en: 'English',
  no: 'Norsk',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export type IconName = 'clock' | 'route' | 'target' | 'code' | 'headset' | 'megaphone' | 'trendingUp' | 'chat' | 'shield' | 'help' | 'check' | 'close';

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
    withoutHeading: string;
    withoutList: string[];
    withHeading: string;
    withList: string[];
    activities: ActivityCopy[];
    faqHeading: string;
    faq: { q: string; a: string }[];
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
    withoutHeading: string;
    withoutList: string[];
    withHeading: string;
    withList: string[];
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
    heroKicker: string;
    heroIntro: string;
    heroIntro2: string;
    heroCta: string;
    mythHeading: string;
    mythBody: string;
    mythBody2: string;
    worksHeading: string;
    worksIntro: string;
    worksList: string[];
    worksClosing: string;
    agentsHeading: string;
    agentsBody: string;
    agentsBody2: string;
    agentsBody3: string;
    solutionsHeading: string;
    solutionsGrid: { icon: IconName; title: string; body: string }[];
    approachHeading: string;
    approachSteps: { title: string; body: string }[];
    visionHeading: string;
    visionBody: string;
    visionBody2: string;
    missionHeading: string;
    missionBody: string;
    missionTagline: string;
    whyStoryHeading: string;
    whyStoryGrid: { title: string; body: string }[];
    closingHeading2: string;
    closingBody2: string;
    finalCtaHeading: string;
    finalCtaBody: string;
    finalCtaPricing: string;
    aboutHeading: string;
    aboutBody: string;
    careersHeading: string;
    careersBody: string;
    contactHeading: string;
    contactBody: string;
    contactEmail: string;
    contactEmailLabel: string;
    securityHeading: string;
    securityBody: string;
    demoHeading: string;
    demoBody: string;
    demoNameLabel: string;
    demoCompanyLabel: string;
    demoEmailLabel: string;
    demoPhoneLabel: string;
    demoCountryLabel: string;
    demoAutomateLabel: string;
    demoAutomatePlaceholder: string;
    demoRequirementsLabel: string;
    demoRequirementsPlaceholder: string;
    demoDateLabel: string;
    demoDatePlaceholder: string;
    demoSubmit: string;
    demoSending: string;
    demoSuccessHeading: string;
    demoSuccessBody: string;
    demoResetLabel: string;
    demoFallbackHeading: string;
    demoFallbackBody: string;
    demoCopyLabel: string;
    demoCopiedLabel: string;
  };
  notFound: {
    seoTitle: string;
    heading: string;
    body: string;
    homeLink: string;
    solutionsLink: string;
    contactLink: string;
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
      productsHeading: 'Mielikkix AI Agents',
      productsBody:
        'Alongside custom AI development, we build ready-to-use AI agents — an AI Chatbot, Voice Receptionist, and Booking Assistant — plus fully custom agents for the workflows specific to your business.',
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
      withoutHeading: 'Without Mielikkix',
      withoutList: [
        'Answer the same customer questions over and over, manually, every day.',
        'Miss leads outside business hours because no one is watching the chat.',
        'Juggle customer data across disconnected tools and spreadsheets.',
        'Spend hours on repetitive admin instead of higher-value work.',
        'Scale support and sales by hiring, not by automating.',
      ],
      withHeading: 'With Mielikkix',
      withList: [
        'Let an AI chatbot handle repeat questions instantly, day or night.',
        'Capture and qualify every lead the moment they show up — 24/7.',
        'Connect AI to your existing systems so data flows automatically.',
        'Automate the repetitive workflows so your team focuses on real work.',
        'Scale support and sales with AI agents, not just headcount.',
      ],
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
      faqHeading: 'Frequently Asked Questions',
      faq: [
        {
          q: 'How long does it take to get an AI solution up and running?',
          a: "It depends on scope — a chatbot integration can move fast, while a custom multi-agent build takes longer. We'll give you a realistic timeline after a short scoping call.",
        },
        {
          q: 'Who owns the data our AI systems process?',
          a: 'You do. We build and integrate the systems — your business data stays yours. Ask us about the specifics for your setup.',
        },
        {
          q: 'What happens if something breaks after launch?',
          a: "We stay involved after launch to monitor, fix, and adjust — this isn't a build-and-disappear engagement.",
        },
        {
          q: 'Do we need our own AI/ML team to work with you?',
          a: 'No — we handle the AI and technical implementation. You bring the business context; we bring the AI layer.',
        },
      ],
      closingHeading: 'Not sure where to start?',
      closingBody: "Tell us what you're working on and we'll help you find the right AI solution.",
      closingCta: 'Contact Us',
    },
    products: {
      seoTitle: 'Products',
      seoDescription:
        'Ready-to-use AI agents — AI Chatbot, Voice Receptionist, and Booking Assistant — plus custom AI agents built around your business, from Mielikkix.',
      eyebrow: 'Products',
      heading: 'AI Agents Built Around Your Business',
      subhead:
        'Automate customer conversations, phone calls, bookings, support, and business workflows with AI agents designed for your business.',
      body:
        'Alongside custom AI development and integrations, Mielikkix builds ready-to-use AI agents — an AI Chatbot, Voice Receptionist, and Booking Assistant — plus additional agents like Support Triage and Review & Reputation, and fully custom agents designed around your workflow.',
      hubCenterLabel: 'AI Agents',
      chatBubbleGreeting: 'Hi! How can I help today?',
      chatBubbleReply: 'Can I book an appointment?',
      withoutHeading: 'Without Mielikkix AI Agents',
      withoutList: [
        'Miss calls and messages outside business hours.',
        'Handle bookings, FAQs, and follow-ups manually, one at a time.',
        'Chase reviews and support tickets separately, by hand.',
        'Let leads go quiet after the first conversation.',
        'Build every new workflow automation from scratch.',
      ],
      withHeading: 'With Mielikkix AI Agents',
      withList: [
        'A Voice Receptionist and Booking Assistant pick up every call and booking, day or night.',
        'An AI Chatbot answers customer questions and captures leads instantly.',
        'Support Triage and Review & Reputation agents keep tickets and reviews handled automatically.',
        'Custom agents follow up automatically so no lead goes cold.',
        'New agents can be designed around any workflow specific to your business.',
      ],
      crewsHeading: 'Core AI Solutions',
      crews: [
        {
          heading: 'AI Chatbot',
          body: '24/7 AI-powered customer conversations that answer questions, capture leads, and help customers instantly.',
        },
        {
          heading: 'Voice Receptionist',
          body: 'An AI receptionist that answers calls, handles customer questions, and can assist with appointments.',
        },
        {
          heading: 'Booking Assistant',
          body: 'An AI booking assistant that helps customers schedule appointments and manage booking-related conversations.',
        },
      ],
      cta: 'Get Started',
      ctaBody: 'Ready to add AI agents to your business?',
    },
    company: {
      seoTitle: 'Company',
      seoDescription: 'About Mielikkix AS — an AI-powered software and SaaS company providing AI solutions and automation services for businesses.',
      eyebrow: 'Company',
      heading: 'About Mielikkix',
      heroKicker: 'Building Smarter Businesses with AI',
      heroIntro:
        'Mielikkix AS is an AI-powered software and SaaS company helping businesses use artificial intelligence to work smarter, automate faster, and create better customer experiences.',
      heroIntro2:
        "We build practical AI solutions that go beyond simple chatbots — AI-powered customer service, sales automation, intelligent business workflows, multi-agent AI systems, custom software, and AI integrations. Our goal is simple: make AI useful, accessible, and measurable for real businesses.",
      heroCta: 'Book a Free Demo',
      mythHeading: 'Why "Mielikki"?',
      mythBody:
        "In Finnish mythology, Mielikki is the goddess of the forest — a guardian who watches over what's hers and makes sure nothing gets lost under her care. That's the job we wanted our product to do for the businesses that use it: stand watch, catch every visitor who shows up, and make sure no one wanders off unanswered.",
      mythBody2:
        "A chat widget that never sleeps, never gets overwhelmed, and never lets a lead slip through is the smallest possible promise of that idea — and it's where we started.",
      worksHeading: 'AI That Works for Your Business',
      worksIntro:
        'Every business has different challenges. Some spend hours answering the same customer questions. Others lose leads because they cannot respond quickly enough. Teams may spend valuable time on repetitive administrative tasks, moving information between systems, or manually following up with customers.',
      worksList: [
        'Automate repetitive customer and business processes',
        'Respond to customers faster with AI-powered communication',
        'Capture and qualify leads automatically',
        'Automate sales and customer-service workflows',
        'Connect AI with existing business systems and APIs',
        'Build intelligent AI agents for specific business tasks',
        'Create multi-agent systems where specialized AI agents work together',
        'Develop custom AI-powered software for unique business requirements',
      ],
      worksClosing:
        'We don’t believe businesses should adopt AI simply because it is trending. We believe AI should solve a real problem, save time, improve efficiency, or create new opportunities.',
      agentsHeading: 'From AI Assistants to AI Agents',
      agentsBody:
        'The next generation of business software is not just about asking AI questions. It is about giving AI the ability to understand, decide, communicate, and take action.',
      agentsBody2:
        'Mielikkix is building toward this future with AI agents designed around real business workflows. An AI agent can become a digital member of a team — helping with customer conversations, lead generation, support, sales, administration, and other operational tasks.',
      agentsBody3:
        'For more complex requirements, multiple specialized agents can work together as a multi-agent AI system, allowing businesses to automate complete workflows rather than individual tasks — the thinking behind our own growing agent lineup, with the first already live and answering real calls today.',
      solutionsHeading: 'Our AI Solutions',
      solutionsGrid: [
        {
          icon: 'chat',
          title: 'AI Chatbots',
          body: "Intelligent chat experiences for websites and digital channels — answering questions, engaging visitors, and capturing opportunities around the clock, trained on a business's own data.",
        },
        {
          icon: 'headset',
          title: 'AI Customer Service',
          body: 'Automate repetitive customer-service interactions while human teams focus on conversations that genuinely need their expertise.',
        },
        {
          icon: 'megaphone',
          title: 'AI Sales & Lead Automation',
          body: 'Engage visitors, qualify leads, collect information, follow up, and support sales teams throughout the customer journey.',
        },
        {
          icon: 'route',
          title: 'Business Automation',
          body: 'Automate repetitive workflows and connect different parts of a business so information moves automatically.',
        },
        {
          icon: 'trendingUp',
          title: 'Multi-Agent AI',
          body: 'Teams of specialized AI agents that collaborate across different business functions and workflows.',
        },
        {
          icon: 'code',
          title: 'Custom AI Software',
          body: "AI-powered applications designed around specific business requirements that off-the-shelf products can't solve.",
        },
        {
          icon: 'target',
          title: 'AI Integrations',
          body: 'Connect AI with existing apps, APIs, databases, CRMs, and communication platforms for end-to-end workflows.',
        },
      ],
      approachHeading: 'Our Approach',
      approachSteps: [
        {
          title: 'Understand the Business First',
          body: 'Technology comes second. We start with the business problem, the existing workflow, and where AI can deliver the greatest impact.',
        },
        {
          title: 'Design the Right AI Solution',
          body: 'Not every problem needs an AI agent. We choose the technology based on the problem — not the other way around.',
        },
        {
          title: 'Build for Real-World Use',
          body: 'Practical solutions businesses can actually use, integrate, and scale — designed with usability, reliability, security, and growth in mind.',
        },
        {
          title: 'Continuously Improve',
          body: 'AI systems evolve with the business, expanding to support new use cases as requirements change.',
        },
      ],
      visionHeading: 'Our Vision',
      visionBody:
        'We believe the future of business software will be AI-native. Instead of businesses using dozens of disconnected tools and manually moving information between them, intelligent software will increasingly understand business context, communicate with people, make decisions within defined boundaries, and execute tasks automatically.',
      visionBody2:
        'Mielikkix aims to be part of that transformation — helping businesses build intelligent digital operations where people and AI work together.',
      missionHeading: 'Our Mission',
      missionBody:
        'Our mission is to make advanced AI technology practical for businesses of all sizes. We want to help companies:',
      missionTagline: 'Work smarter. Automate better. Respond faster. Scale efficiently. Build with AI.',
      whyStoryHeading: 'Why Mielikkix?',
      whyStoryGrid: [
        { title: 'AI With a Business Purpose', body: 'We focus on solving business problems rather than adding AI for the sake of AI.' },
        { title: 'Built for Real Workflows', body: 'Our solutions are designed around how businesses actually operate.' },
        {
          title: 'Flexible & Customizable',
          body: 'From ready-to-use SaaS products to completely custom AI systems, adapted to different business needs.',
        },
        { title: 'Automation First', body: 'We look for opportunities where intelligent automation reduces repetitive work.' },
        {
          title: 'Human + AI',
          body: 'The best systems combine AI automation with human expertise when human judgment matters most.',
        },
      ],
      closingHeading2: 'Building the Future of AI-Powered Business',
      closingBody2:
        'Mielikkix is building a growing ecosystem of AI-powered software, intelligent agents, automation solutions, and integrations designed to help businesses operate more efficiently. Whether the need is an AI chatbot, an AI receptionist, a customer-service agent, sales automation, a multi-agent workflow, a custom AI application, or integration with existing systems, Mielikkix helps turn the idea into a working AI solution.',
      finalCtaHeading: "Let's Build Something Intelligent",
      finalCtaBody:
        'Every business has unique challenges. Your AI solution should be unique too. Talk to Mielikkix about how AI, automation, and intelligent software can transform the way your business works.',
      finalCtaPricing: 'See Pricing',
      aboutHeading: 'About',
      aboutBody:
        'Mielikkix AS is an AI-powered software and SaaS company providing AI solutions and automation services for businesses — including AI chatbots, business automation, multi-agent AI solutions, customer service and sales automation, custom AI software development, and AI integrations.',
      careersHeading: 'Careers',
      careersBody:
        "Mielikkix AS is a small, early-stage team, and we're not actively hiring right now. If you'd like to be considered for future openings, reach out via the contact details below.",
      contactHeading: 'Contact',
      contactBody: 'Have a question about our AI solutions, or want to talk through a project? Email us — we read every message and reply personally.',
      contactEmail: 'post@mielikkix.no',
      contactEmailLabel: 'Email us',
      securityHeading: 'Data & Security',
      securityBody:
        "Mielikkix AS is based in Norway and builds every AI system with data protection and GDPR principles in mind. If you need specifics on hosting, data residency, or a data processing agreement for your business, email us and we'll walk you through it.",
      demoHeading: 'Book a Free Demo',
      demoBody: "Tell us a bit about your business and what you'd like to automate. Submitting opens an email to us with your details already filled in — we'll get back to you to set up a time.",
      demoNameLabel: 'Full Name',
      demoCompanyLabel: 'Business / Company Name',
      demoEmailLabel: 'Work Email',
      demoPhoneLabel: 'Phone Number',
      demoCountryLabel: 'Country',
      demoAutomateLabel: 'What would you like to automate?',
      demoAutomatePlaceholder: 'e.g. customer support, lead follow-up, booking...',
      demoRequirementsLabel: 'Message / Requirements',
      demoRequirementsPlaceholder: 'Any other details we should know before the call...',
      demoDateLabel: 'Preferred demo date/time',
      demoDatePlaceholder: 'e.g. Tuesday afternoon, or a specific date/time',
      demoSubmit: 'Send Request',
      demoSending: 'Sending...',
      demoSuccessHeading: 'Thanks — request sent!',
      demoSuccessBody: "We've got your details and will be in touch soon to set up a time.",
      demoResetLabel: 'Submit another request',
      demoFallbackHeading: "Couldn't send automatically",
      demoFallbackBody: 'No problem — email us directly, or copy your details below and paste them into a message:',
      demoCopyLabel: 'Copy details',
      demoCopiedLabel: 'Copied!',
    },
    notFound: {
      seoTitle: 'Page Not Found',
      heading: 'This page took a wrong turn.',
      body: "Even our AI agents get lost sometimes. The page you're looking for doesn't exist, or it may have moved.",
      homeLink: 'Back to Home',
      solutionsLink: 'Browse Solutions',
      contactLink: 'Contact Us',
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
      productsHeading: 'Mielikkix AI-agenter',
      productsBody:
        'Ved siden av skreddersydd AI-utvikling bygger vi ferdige AI-agenter — en AI-chatbot, en Voice Receptionist og en Booking Assistant — i tillegg til helt skreddersydde agenter for arbeidsflytene som er spesifikke for virksomheten din.',
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
      withoutHeading: 'Uten Mielikkix',
      withoutList: [
        'Svare på de samme kundespørsmålene om og om igjen, manuelt, hver dag.',
        'Miste leads utenfor arbeidstiden fordi ingen følger med på chatten.',
        'Sjonglere kundedata på tvers av frakoblede verktøy og regneark.',
        'Bruke timevis på repeterende administrasjon i stedet for arbeid med høyere verdi.',
        'Skalere support og salg ved å ansette, ikke ved å automatisere.',
      ],
      withHeading: 'Med Mielikkix',
      withList: [
        'La en AI-chatbot håndtere gjentakende spørsmål umiddelbart, døgnet rundt.',
        'Fang opp og kvalifiser hvert lead i det øyeblikket det dukker opp — 24/7.',
        'Koble AI til eksisterende systemer slik at data flyter automatisk.',
        'Automatiser de repeterende arbeidsflytene slik at teamet fokuserer på det som betyr noe.',
        'Skaler support og salg med AI-agenter, ikke bare med flere ansatte.',
      ],
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
      faqHeading: 'Ofte stilte spørsmål',
      faq: [
        {
          q: 'Hvor lang tid tar det å få en AI-løsning i drift?',
          a: 'Det avhenger av omfanget — en chatbot-integrasjon kan gå raskt, mens en skreddersydd multiagent-løsning tar lengre tid. Vi gir deg en realistisk tidsplan etter en kort kartleggingssamtale.',
        },
        {
          q: 'Hvem eier dataene AI-systemene våre behandler?',
          a: 'Det gjør du. Vi bygger og integrerer systemene — forretningsdataene dine forblir dine. Spør oss om detaljene for ditt oppsett.',
        },
        {
          q: 'Hva skjer hvis noe går galt etter lansering?',
          a: 'Vi følger opp etter lansering — overvåker, retter og justerer. Dette er ikke et bygg-og-forsvinn-oppdrag.',
        },
        {
          q: 'Trenger vi et eget AI/ML-team for å jobbe med dere?',
          a: 'Nei — vi tar oss av AI-en og den tekniske implementeringen. Du bidrar med forretningskonteksten; vi bidrar med AI-laget.',
        },
      ],
      closingHeading: 'Usikker på hvor du skal starte?',
      closingBody: 'Fortell oss hva du jobber med, så hjelper vi deg med å finne riktig AI-løsning.',
      closingCta: 'Kontakt oss',
    },
    products: {
      seoTitle: 'Produkter',
      seoDescription:
        'Ferdige AI-agenter — AI-chatbot, Voice Receptionist og Booking Assistant — samt skreddersydde AI-agenter bygget rundt virksomheten din, fra Mielikkix.',
      eyebrow: 'Produkter',
      heading: 'AI-agenter bygget rundt din virksomhet',
      subhead:
        'Automatiser kundesamtaler, telefonsamtaler, bookinger, support og forretningsprosesser med AI-agenter designet for virksomheten din.',
      body:
        'Ved siden av skreddersydd AI-utvikling og integrasjoner bygger Mielikkix ferdige AI-agenter — en AI-chatbot, en Voice Receptionist og en Booking Assistant — i tillegg til flere agenter som Support Triage og Review & Reputation, og helt skreddersydde agenter designet rundt arbeidsflyten din.',
      hubCenterLabel: 'AI-agenter',
      chatBubbleGreeting: 'Hei! Hva kan jeg hjelpe deg med i dag?',
      chatBubbleReply: 'Kan jeg bestille time?',
      withoutHeading: 'Uten Mielikkix AI-agenter',
      withoutList: [
        'Miste anrop og meldinger utenfor arbeidstiden.',
        'Håndtere booking, ofte stilte spørsmål og oppfølging manuelt, ett om gangen.',
        'Følge opp anmeldelser og supporthenvendelser hver for seg, for hånd.',
        'La leads bli stille etter den første samtalen.',
        'Bygge hver ny arbeidsflyt-automatisering fra bunnen av.',
      ],
      withHeading: 'Med Mielikkix AI-agenter',
      withList: [
        'En Voice Receptionist og Booking Assistant tar imot hvert anrop og hver booking, døgnet rundt.',
        'En AI-chatbot svarer på kundespørsmål og fanger opp leads umiddelbart.',
        'Support Triage- og Review & Reputation-agenter holder henvendelser og anmeldelser håndtert automatisk.',
        'Skreddersydde agenter følger opp automatisk, slik at ingen leads blir kalde.',
        'Nye agenter kan designes rundt enhver arbeidsflyt som er spesifikk for virksomheten din.',
      ],
      crewsHeading: 'Kjerneløsninger innen AI',
      crews: [
        {
          heading: 'AI-chatbot',
          body: 'AI-drevne kundesamtaler døgnet rundt som svarer på spørsmål, fanger opp leads og hjelper kunder umiddelbart.',
        },
        {
          heading: 'Voice Receptionist',
          body: 'En AI-resepsjonist som svarer på anrop, håndterer kundespørsmål og kan bistå med avtaler.',
        },
        {
          heading: 'Booking Assistant',
          body: 'En AI-bookingassistent som hjelper kunder med å bestille time og håndtere bookingrelaterte samtaler.',
        },
      ],
      cta: 'Kom i gang',
      ctaBody: 'Klar til å legge AI-agenter til virksomheten din?',
    },
    company: {
      seoTitle: 'Om oss',
      seoDescription: 'Om Mielikkix AS — et AI-drevet programvare- og SaaS-selskap som leverer AI-løsninger og automatiseringstjenester for bedrifter.',
      eyebrow: 'Om oss',
      heading: 'Om Mielikkix',
      heroKicker: 'Vi bygger smartere virksomheter med AI',
      heroIntro:
        'Mielikkix AS er et AI-drevet programvare- og SaaS-selskap som hjelper bedrifter med å bruke kunstig intelligens til å jobbe smartere, automatisere raskere og skape bedre kundeopplevelser.',
      heroIntro2:
        'Vi bygger praktiske AI-løsninger som går lenger enn enkle chatboter — AI-drevet kundeservice, salgsautomatisering, intelligente forretningsprosesser, multiagent-AI-systemer, skreddersydd programvare og AI-integrasjoner. Målet vårt er enkelt: gjøre AI nyttig, tilgjengelig og målbart for reelle bedrifter.',
      heroCta: 'Book en gratis demo',
      mythHeading: 'Hvorfor «Mielikki»?',
      mythBody:
        'I finsk mytologi er Mielikki skogens gudinne — en vokter som passer på sitt og sørger for at ingenting går tapt under hennes omsorg. Det var jobben vi ønsket at produktet vårt skulle gjøre for bedriftene som bruker det: stå vakt, fange opp hver besøkende som dukker opp, og sørge for at ingen vandrer av gårde ubesvart.',
      mythBody2:
        'En chatteassistent som aldri sover, aldri blir overveldet, og aldri lar et lead gli unna, er det minste mulige løftet av den ideen — og det er der vi startet.',
      worksHeading: 'AI som fungerer for din virksomhet',
      worksIntro:
        'Hver virksomhet har ulike utfordringer. Noen bruker timevis på å svare på de samme kundespørsmålene. Andre mister leads fordi de ikke klarer å respondere raskt nok. Team kan bruke verdifull tid på repeterende administrative oppgaver, flytting av informasjon mellom systemer, eller manuell oppfølging av kunder.',
      worksList: [
        'Automatisere repeterende kunde- og forretningsprosesser',
        'Svare kundene raskere med AI-drevet kommunikasjon',
        'Fange opp og kvalifisere leads automatisk',
        'Automatisere salgs- og kundeserviceprosesser',
        'Koble AI til eksisterende forretningssystemer og API-er',
        'Bygge intelligente AI-agenter for spesifikke forretningsoppgaver',
        'Lage multiagent-systemer der spesialiserte AI-agenter jobber sammen',
        'Utvikle skreddersydd AI-programvare for unike forretningsbehov',
      ],
      worksClosing:
        'Vi tror ikke bedrifter bør ta i bruk AI bare fordi det er trendy. Vi tror AI bør løse et reelt problem, spare tid, forbedre effektiviteten eller skape nye muligheter.',
      agentsHeading: 'Fra AI-assistenter til AI-agenter',
      agentsBody:
        'Neste generasjon forretningsprogramvare handler ikke bare om å stille AI spørsmål. Det handler om å gi AI evnen til å forstå, beslutte, kommunisere og handle.',
      agentsBody2:
        'Mielikkix bygger mot denne fremtiden med AI-agenter designet rundt reelle forretningsprosesser. En AI-agent kan bli et digitalt medlem av teamet — og hjelpe til med kundesamtaler, leadgenerering, support, salg, administrasjon og andre driftsoppgaver.',
      agentsBody3:
        'For mer komplekse behov kan flere spesialiserte agenter jobbe sammen som et multiagent-AI-system, slik at bedrifter kan automatisere hele arbeidsflyter i stedet for enkeltoppgaver — tankegangen bak vårt eget voksende mannskap av agenter, der den første allerede er live og besvarer reelle samtaler i dag.',
      solutionsHeading: 'Våre AI-løsninger',
      solutionsGrid: [
        {
          icon: 'chat',
          title: 'AI-chatboter',
          body: 'Intelligente chatteopplevelser for nettsider og digitale kanaler — som svarer på spørsmål, engasjerer besøkende og fanger opp muligheter døgnet rundt, trent på bedriftens egne data.',
        },
        {
          icon: 'headset',
          title: 'AI-kundeservice',
          body: 'Automatiser repeterende kundeservicehenvendelser, mens menneskelige team fokuserer på samtaler som virkelig krever deres ekspertise.',
        },
        {
          icon: 'megaphone',
          title: 'AI-salg og leadautomatisering',
          body: 'Engasjer besøkende, kvalifiser leads, samle inn informasjon, følg opp og støtt salgsteam gjennom hele kundereisen.',
        },
        {
          icon: 'route',
          title: 'Forretningsautomatisering',
          body: 'Automatiser repeterende arbeidsflyter og koble sammen ulike deler av virksomheten, slik at informasjon flyter automatisk.',
        },
        {
          icon: 'trendingUp',
          title: 'Multiagent-AI',
          body: 'Team av spesialiserte AI-agenter som samarbeider på tvers av ulike forretningsfunksjoner og arbeidsflyter.',
        },
        {
          icon: 'code',
          title: 'Skreddersydd AI-programvare',
          body: 'AI-drevne applikasjoner designet rundt spesifikke forretningsbehov som hyllevareprodukter ikke kan løse.',
        },
        {
          icon: 'target',
          title: 'AI-integrasjoner',
          body: 'Koble AI til eksisterende apper, API-er, databaser, CRM-er og kommunikasjonsplattformer for helhetlige arbeidsflyter.',
        },
      ],
      approachHeading: 'Vår tilnærming',
      approachSteps: [
        {
          title: 'Forstå virksomheten først',
          body: 'Teknologi kommer i andre rekke. Vi starter med forretningsproblemet, den eksisterende arbeidsflyten, og hvor AI kan gi størst effekt.',
        },
        {
          title: 'Design den riktige AI-løsningen',
          body: 'Ikke alle problemer trenger en AI-agent. Vi velger teknologien ut fra problemet — ikke omvendt.',
        },
        {
          title: 'Bygget for reell bruk',
          body: 'Praktiske løsninger bedrifter faktisk kan bruke, integrere og skalere — designet med brukervennlighet, pålitelighet, sikkerhet og vekst i tankene.',
        },
        {
          title: 'Kontinuerlig forbedring',
          body: 'AI-systemene utvikler seg med virksomheten, og utvides til å støtte nye bruksområder etter hvert som behovene endrer seg.',
        },
      ],
      visionHeading: 'Vår visjon',
      visionBody:
        'Vi tror fremtidens forretningsprogramvare vil være AI-native. I stedet for at bedrifter bruker dusinvis av frakoblede verktøy og manuelt flytter informasjon mellom dem, vil intelligent programvare i økende grad forstå forretningskontekst, kommunisere med mennesker, ta beslutninger innenfor definerte rammer, og utføre oppgaver automatisk.',
      visionBody2:
        'Mielikkix ønsker å være en del av den transformasjonen — og hjelpe bedrifter med å bygge intelligent digital drift der mennesker og AI jobber sammen.',
      missionHeading: 'Vårt oppdrag',
      missionBody: 'Vårt oppdrag er å gjøre avansert AI-teknologi praktisk for bedrifter i alle størrelser. Vi vil hjelpe selskaper med å:',
      missionTagline: 'Jobbe smartere. Automatisere bedre. Svare raskere. Skalere effektivt. Bygge med AI.',
      whyStoryHeading: 'Hvorfor Mielikkix?',
      whyStoryGrid: [
        { title: 'AI med et forretningsformål', body: 'Vi fokuserer på å løse forretningsproblemer fremfor å legge til AI for AI-ens skyld.' },
        { title: 'Bygget for reelle arbeidsflyter', body: 'Løsningene våre er designet rundt hvordan bedrifter faktisk drives.' },
        {
          title: 'Fleksibelt og tilpasningsdyktig',
          body: 'Fra ferdige SaaS-produkter til helt skreddersydde AI-systemer, tilpasset ulike forretningsbehov.',
        },
        { title: 'Automatisering først', body: 'Vi leter etter muligheter der intelligent automatisering reduserer repeterende arbeid.' },
        {
          title: 'Menneske + AI',
          body: 'De beste systemene kombinerer AI-automatisering med menneskelig ekspertise når menneskelig vurdering betyr mest.',
        },
      ],
      closingHeading2: 'Vi bygger fremtidens AI-drevne virksomhet',
      closingBody2:
        'Mielikkix bygger et voksende økosystem av AI-drevet programvare, intelligente agenter, automatiseringsløsninger og integrasjoner designet for å hjelpe bedrifter med å drive mer effektivt. Enten behovet er en AI-chatbot, en AI-resepsjonist, en kundeserviceagent, salgsautomatisering, en multiagent-arbeidsflyt, en skreddersydd AI-applikasjon, eller integrasjon med eksisterende systemer, hjelper Mielikkix med å gjøre ideen om til en fungerende AI-løsning.',
      finalCtaHeading: 'La oss bygge noe intelligent',
      finalCtaBody:
        'Hver virksomhet har unike utfordringer. AI-løsningen din bør også være unik. Snakk med Mielikkix om hvordan AI, automatisering og intelligent programvare kan transformere måten virksomheten din jobber på.',
      finalCtaPricing: 'Se priser',
      aboutHeading: 'Om oss',
      aboutBody:
        'Mielikkix AS er et AI-drevet programvare- og SaaS-selskap som leverer AI-løsninger og automatiseringstjenester for bedrifter — inkludert AI-chatboter, forretningsautomatisering, multiagent-AI-løsninger, kundeservice- og salgsautomatisering, skreddersydd AI-programvareutvikling og AI-integrasjoner.',
      careersHeading: 'Karriere',
      careersBody:
        'Mielikkix AS er et lite team i en tidlig fase, og vi ansetter ikke aktivt akkurat nå. Ønsker du å bli vurdert for fremtidige stillinger, ta kontakt via kontaktinformasjonen under.',
      contactHeading: 'Kontakt',
      contactBody: 'Har du et spørsmål om AI-løsningene våre, eller vil du snakke om et prosjekt? Send oss en e-post — vi leser alle henvendelser og svarer personlig.',
      contactEmail: 'post@mielikkix.no',
      contactEmailLabel: 'Send e-post',
      securityHeading: 'Data og sikkerhet',
      securityBody:
        'Mielikkix AS er basert i Norge, og vi bygger alle AI-systemer med personvern og GDPR-prinsipper i bunn. Trenger du detaljer om hosting, datalagringssted eller en databehandleravtale for din bedrift, send oss en e-post så går vi gjennom det med deg.',
      demoHeading: 'Book en gratis demo',
      demoBody: 'Fortell oss litt om virksomheten din og hva du ønsker å automatisere. Når du sender inn åpnes en e-post til oss med detaljene dine allerede fylt ut — vi tar kontakt for å avtale et tidspunkt.',
      demoNameLabel: 'Fullt navn',
      demoCompanyLabel: 'Bedrift / firmanavn',
      demoEmailLabel: 'Jobb-e-post',
      demoPhoneLabel: 'Telefonnummer',
      demoCountryLabel: 'Land',
      demoAutomateLabel: 'Hva ønsker du å automatisere?',
      demoAutomatePlaceholder: 'f.eks. kundeservice, oppfølging av leads, booking...',
      demoRequirementsLabel: 'Melding / behov',
      demoRequirementsPlaceholder: 'Andre detaljer vi bør vite før samtalen...',
      demoDateLabel: 'Foretrukket dato/tidspunkt for demo',
      demoDatePlaceholder: 'f.eks. tirsdag ettermiddag, eller en spesifikk dato/tid',
      demoSubmit: 'Send forespørsel',
      demoSending: 'Sender...',
      demoSuccessHeading: 'Takk — forespørsel sendt!',
      demoSuccessBody: 'Vi har mottatt detaljene dine og tar kontakt snart for å avtale et tidspunkt.',
      demoResetLabel: 'Send en ny forespørsel',
      demoFallbackHeading: 'Kunne ikke sende automatisk',
      demoFallbackBody: 'Ikke noe problem — send oss en e-post direkte, eller kopier detaljene dine under og lim dem inn i en melding:',
      demoCopyLabel: 'Kopier detaljer',
      demoCopiedLabel: 'Kopiert!',
    },
    notFound: {
      seoTitle: 'Siden ble ikke funnet',
      heading: 'Denne siden tok en feil sving.',
      body: 'Selv AI-agentene våre går seg bort iblant. Siden du leter etter finnes ikke, eller den har blitt flyttet.',
      homeLink: 'Tilbake til forsiden',
      solutionsLink: 'Se løsninger',
      contactLink: 'Kontakt oss',
    },
  },
};

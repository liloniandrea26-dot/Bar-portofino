import type { Dictionary } from "./index";

/** ENGLISH dictionary. [TO BE FILLED IN] fields await the client's real data. */
export const en: Dictionary = {
  langName: "English",
  meta: {
    title: "[TO BE FILLED IN] Pizzeria Name — Pizzeria in Town",
    description:
      "[TO BE FILLED IN] SEO description of the pizzeria: specialities, area, opening hours. Max ~155 characters.",
  },
  brand: {
    name: "Nome Pizzeria",
    tagline: "Pizzeria",
  },
  nav: {
    home: "Home",
    info: "Information",
    call: "Call us",
    menu: "Menu",
    allergens: "Allergens",
    privacy: "Privacy Policy",
    gallery: "Gallery",
    faq: "FAQ",
    language: "Language",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  status: {
    open: "Open now",
    closed: "Closed now",
  },
  hero: {
    subtitle:
      "[TO BE FILLED IN] One catchy sentence introducing the pizzeria: specialities, atmosphere, what makes it unique.",
    ctaMenu: "Open the Menu",
    ctaInfo: "Information",
  },
  about: {
    eyebrow: "About us",
    title: "Our story, one dish at a time",
    p1: "[TO BE FILLED IN] First part of the story: how long the pizzeria has existed, who runs it, what makes it special.",
    p2: "[TO BE FILLED IN] Second part: the kitchen philosophy, the ingredients, the bond with the local area.",
    badges: ["[TO BE FILLED IN] Strength 1", "[TO BE FILLED IN] Strength 2", "[TO BE FILLED IN] Strength 3"],
  },
  menuSection: {
    eyebrow: "The Menu",
    title: "From the oven to your table",
    intro:
      "Download the full menu as a PDF or browse the categories here on the website. No online ordering: the menu is meant to be enjoyed at the table.",
    download: "Open the Menu (PDF)",
    downloadNote: "[TO BE FILLED IN] Upload the real menu PDF to public/menu.pdf",
    viewOnline: "Browse the menu online",
    allergensLink: "See the allergen table",
  },
  menuPage: {
    title: "The Menu",
    breadcrumb: "Menu",
    subtitle:
      "[TO BE FILLED IN] Menu page subtitle: specialities and price range.",
    note: "The menu may change with the seasons. For allergies and intolerances see the Allergens page or ask our staff.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A look inside our kitchen",
    subtitle: "The dishes, the dining room, the evenings: the restaurant in pictures.",
    alts: Array(8).fill("Photo of the restaurant — to be replaced") as string[],
  },
  hours: {
    eyebrow: "Opening hours",
    title: "When we are open",
    closedLabel: "Closed",
    note: "[TO BE FILLED IN] Note about opening hours (e.g. open all day, seasonal closures).",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    everydayLabel: "Every day",
    deliveryLabel: "Home delivery",
    todayLabel: "today",
  },
  location: {
    eyebrow: "Where to find us",
    title: "Come visit us",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    vatLabel: "VAT number",
    directions: "Get directions",
    mapTitle: "Map: where the restaurant is located",
  },
  infoPage: {
    title: "Information",
    breadcrumb: "Information",
    subtitle: "About us, opening hours, contacts and how to reach us.",
  },
  allergensPage: {
    title: "Allergens",
    breadcrumb: "Allergens",
    subtitle:
      "List of the 14 substances or products causing allergies or intolerances under EU Regulation 1169/2011 (Annex II).",
    intro:
      "Some dishes on our menu may contain one or more of the following allergens. Detailed dish-by-dish information is available in the dining room: please ask our staff before ordering.",
    disclaimer:
      "Despite all care taken during preparation, cross-contamination between foods cannot be excluded. If you have a severe allergy, always inform our staff.",
    items: [
      { icon: "🌾", name: "Cereals containing gluten", examples: "wheat, rye, barley, oats, spelt, kamut" },
      { icon: "🦐", name: "Crustaceans", examples: "shrimps, langoustines, crabs and derived products" },
      { icon: "🥚", name: "Eggs", examples: "eggs and egg-based products" },
      { icon: "🐟", name: "Fish", examples: "fish and fish-based products" },
      { icon: "🥜", name: "Peanuts", examples: "peanuts and derived products" },
      { icon: "🫘", name: "Soybeans", examples: "soy and soy-based products" },
      { icon: "🥛", name: "Milk", examples: "milk and dairy products, including lactose" },
      { icon: "🌰", name: "Tree nuts", examples: "almonds, hazelnuts, walnuts, pistachios, cashews" },
      { icon: "🥬", name: "Celery", examples: "celery and derived products" },
      { icon: "🟡", name: "Mustard", examples: "mustard and derived products" },
      { icon: "⚪", name: "Sesame seeds", examples: "sesame seeds and derived products" },
      { icon: "🍷", name: "Sulphur dioxide and sulphites", examples: "at concentrations above 10 mg/kg or 10 mg/l" },
      { icon: "🌼", name: "Lupin", examples: "lupin and lupin-based products" },
      { icon: "🦪", name: "Molluscs", examples: "mussels, clams, squid and derived products" },
    ],
  },
  faqPage: {
    title: "Frequently Asked Questions",
    breadcrumb: "FAQ",
    subtitle: "Everything you need to know before visiting us: opening hours, reservations, delivery, allergies and more.",
    items: [
      {
        q: "What are your opening hours?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Do I need to book a table?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Do you offer takeaway and home delivery?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Do you have vegetarian dishes?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "How do you handle allergies and intolerances?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Do you have outdoor tables?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Is there live music?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Are you family friendly?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "How much does a meal cost on average?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Can I pay by card?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Are pets allowed?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
      {
        q: "Is there parking nearby?",
        a: "[TO BE FILLED IN] Answer to be added.",
      },
    ],
  },
  privacyPage: {
    title: "Privacy Policy",
    breadcrumb: "Privacy Policy",
    subtitle: "Information on the processing of personal data under EU Regulation 2016/679 (GDPR).",
    updated: "[TO BE FILLED IN] Last updated",
    sections: [
      {
        h: "Data controller",
        p: "[TO BE FILLED IN] Company name, address, VAT number and contact details of the data controller.",
      },
      {
        h: "Data processed",
        p: "This website does not require registration and does not collect personal data through forms. While browsing, technical data (IP address, server logs) required for the website to work may be processed.",
      },
      {
        h: "Cookies and third-party services",
        p: "The site embeds a Google Maps map that may set third-party cookies. See Google's privacy policy for details. [TO BE FILLED IN] Add here the full list of services actually in use (e.g. analytics).",
      },
      {
        h: "Your rights",
        p: "As a data subject you can exercise the rights under Articles 15-22 of the GDPR (access, rectification, erasure, restriction, objection) by writing to the controller's contact details above.",
      },
    ],
  },
  footer: {
    quickLinks: "Explore",
    contacts: "Contacts",
    follow: "Follow us",
    hoursTitle: "Opening hours",
    credits: "[TO BE FILLED IN] Website by — name/agency",
  },
  cookie: {
    title: "This website uses third-party cookies",
    text: "We only use the technical cookies needed to run the site and, with your consent, Google Maps cookies to show you the restaurant's map. No advertising or profiling cookies.",
    accept: "Accept",
    reject: "Reject",
    privacyLink: "Read the Privacy Policy",
    mapBlockedTitle: "Map disabled",
    mapBlockedText: "The Google Maps map stays disabled until you accept third-party cookies.",
    mapBlockedButton: "Accept and show the map",
    mapExternal: "Open in Google Maps",
  },
  common: {
    backHome: "Back to home",
  },
};

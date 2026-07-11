import type { Dictionary } from "./index";

/** ENGLISH dictionary. [TO BE CONFIRMED] fields await the client's real data. */
export const en: Dictionary = {
  langName: "English",
  meta: {
    title: "Peperoncino & Co — Restaurant in Lignano Sabbiadoro",
    description:
      "Restaurant in Lignano Sabbiadoro: Italian cuisine, vegetarian dishes, outdoor seating and live music. Via Carinzia 23, open until 11 pm. Download the menu and come visit us.",
  },
  brand: {
    name: "Peperoncino & Co",
    tagline: "Restaurant · Lignano Sabbiadoro",
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
      "Pizza, fresh seafood and Italian cuisine a stone's throw from the sea: outdoor tables, live music and true summer evenings. Every day, 11 am to 11 pm.",
    ctaMenu: "Open the Menu",
    ctaInfo: "Information",
  },
  about: {
    eyebrow: "About us",
    title: "Our story, one dish at a time",
    p1: "[TO BE CONFIRMED - proposed copy] In the heart of Lignano Sabbiadoro, Peperoncino & Co is where Italian cuisine meets the holiday mood: outdoor tables, dishes prepared with care and evenings that stretch on with live music.",
    p2: "[TO BE CONFIRMED - proposed copy] Our menu has something for everyone, with genuine attention to vegetarian dishes and seasonal ingredients. And the numbers speak for themselves: 4.3 stars on Google with almost a thousand reviews.",
    badges: ["Outdoor seating", "Vegetarian dishes", "Live music", "★ 4.3 on Google"],
  },
  menuSection: {
    eyebrow: "The Menu",
    title: "From the oven to your table",
    intro:
      "Download the full menu as a PDF or browse the categories here on the website. No online ordering: the menu is meant to be enjoyed at the table.",
    download: "Open the Menu (PDF)",
    downloadNote: "Official Summer menu as PDF — Italian, English and German",
    viewOnline: "Browse the menu online",
    allergensLink: "See the allergen table",
  },
  menuPage: {
    title: "The Menu",
    breadcrumb: "Menu",
    subtitle:
      "The Summer menu: seafood and land cuisine, pizzas made with 100% Friuli Venezia Giulia flour. Average price € 20-30 per person.",
    note: "The menu may change with the seasons and the catch of the day. For allergies and intolerances see the Allergens page or ask our staff.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A look inside our kitchen",
    subtitle: "The dishes, the dining room, the evenings: the restaurant in pictures.",
    alts: [
      "Freshly baked pizza with tomato and basil",
      "The restaurant's wood-fired oven",
      "Plate of homemade fresh pasta",
      "A set table at the restaurant",
      "Dessert of the day served at the table",
      "The restaurant's dining room",
      "The kitchen at work during service",
      "Wine glasses at the counter",
    ],
  },
  hours: {
    eyebrow: "Opening hours",
    title: "When we are open",
    closedLabel: "Closed",
    note: "Open all day: kitchen and pizzeria always open.",
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
      "Dear guest, if you have any food allergies or intolerances, please ask us about our dishes: we are trained to advise you in the best possible way. Below are the 14 substances identified by EU law; dish-by-dish information is available in the dining room.",
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
        a: "We are open every day from 11 am to 11 pm, all day long: kitchen and pizzeria are always available, from lunch through the evening.",
      },
      {
        q: "Do I need to book a table?",
        a: "Booking is not required, but it is recommended on weekends and summer evenings. Call us or write to us on WhatsApp at +39 0431 403099.",
      },
      {
        q: "Do you offer takeaway and home delivery?",
        a: "Yes. Takeaway can be ordered by phone; home delivery runs every day from 12 pm to 11 pm through the deliveryco.it service.",
      },
      {
        q: "Do you have vegetarian dishes?",
        a: "Yes: a vegetarian dish with grilled Dobbiaco DOP cheese and grilled vegetables, a vegetarian sandwich, vegetable pizzas, salads and many other meat-free and fish-free options.",
      },
      {
        q: "How do you handle allergies and intolerances?",
        a: "Our staff is trained to advise you: see the Allergens page with the 14 substances under EU Regulation 1169/2011 and always tell us about your needs before ordering.",
      },
      {
        q: "Do you have outdoor tables?",
        a: "Yes, the restaurant has outdoor seating: perfect for summer lunches and dinners.",
      },
      {
        q: "Is there live music?",
        a: "Yes, we host evenings with live music. [TO BE CONFIRMED] The updated calendar is published on our social channels.",
      },
      {
        q: "Are you family friendly?",
        a: "Of course! We have a dedicated kids' menu: pennette, tortellini, cordon bleu, nuggets and even the Mickey Mouse pizza with Frankfurters and fries.",
      },
      {
        q: "How much does a meal cost on average?",
        a: "Roughly € 20-30 per person. The cover charge is € 3.50. Pizzas start at € 6.80 and daily dishes vary with the catch of the day.",
      },
      {
        q: "Can I pay by card?",
        a: "[TO BE CONFIRMED] We accept the main payment methods (cash and cards).",
      },
      {
        q: "Are pets allowed?",
        a: "[TO BE CONFIRMED] Please ask when booking.",
      },
      {
        q: "Is there parking nearby?",
        a: "[TO BE CONFIRMED] The restaurant is at Via Carinzia 23, Lignano Sabbiadoro: describe the parking options in the area here.",
      },
    ],
  },
  privacyPage: {
    title: "Privacy Policy",
    breadcrumb: "Privacy Policy",
    subtitle: "Information on the processing of personal data under EU Regulation 2016/679 (GDPR).",
    updated: "[TO BE CONFIRMED] Last updated",
    sections: [
      {
        h: "Data controller",
        p: "[TO BE CONFIRMED] Company name, address, VAT number and contact details of the data controller.",
      },
      {
        h: "Data processed",
        p: "This website does not require registration and does not collect personal data through forms. While browsing, technical data (IP address, server logs) required for the website to work may be processed.",
      },
      {
        h: "Cookies and third-party services",
        p: "The site embeds a Google Maps map that may set third-party cookies. See Google's privacy policy for details. [TO BE CONFIRMED] Add here the full list of services actually in use (e.g. analytics).",
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
    credits: "[TO BE CONFIRMED] Website by — name/agency",
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

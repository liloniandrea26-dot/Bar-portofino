import type { Dictionary } from "./index";

/** ENGLISH dictionary. [TO BE CONFIRMED] fields await the client's real data. */
export const en: Dictionary = {
  langName: "English",
  meta: {
    title: "[TO BE CONFIRMED] Restaurant Name — Restaurant & Pizzeria",
    description:
      "[TO BE CONFIRMED] Italian restaurant and pizzeria: wood-fired pizzas and seasonal ingredients. Download the menu and come visit us.",
  },
  brand: {
    name: "Restaurant Name",
    tagline: "Restaurant · Pizzeria",
  },
  nav: {
    home: "Home",
    info: "Information",
    call: "Call us",
    menu: "Menu",
    allergens: "Allergens",
    privacy: "Privacy Policy",
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
      "[TO BE CONFIRMED] Italian cuisine and pizza in the heart of town: fresh ingredients, a wood-fired oven and a warm welcome.",
    ctaMenu: "Download the Menu",
    ctaInfo: "Information",
  },
  about: {
    eyebrow: "About us",
    title: "Our story, one dish at a time",
    p1: "[TO BE CONFIRMED] A short story about the restaurant's identity: how long it has existed, who runs it, what makes it special.",
    p2: "[TO BE CONFIRMED] Second part of the story: the kitchen philosophy, the choice of ingredients, the bond with the local area.",
    badges: ["Wood-fired oven", "Seasonal ingredients", "Slow-proofed dough"],
  },
  menuSection: {
    eyebrow: "The Menu",
    title: "From the oven to your table",
    intro:
      "Download the full menu as a PDF or browse the categories here on the website. No online ordering: the menu is meant to be enjoyed at the table.",
    download: "Download the Menu (PDF)",
    downloadNote: "Updated PDF — [TO BE CONFIRMED] upload the real menu file",
    viewOnline: "Browse the menu online",
    allergensLink: "See the allergen table",
  },
  menuPage: {
    title: "The Menu",
    breadcrumb: "Menu",
    subtitle: "Our dishes, from the kitchen and the oven. Dishes and prices [TO BE CONFIRMED].",
    note: "The menu may change with the seasons. For allergies and intolerances see the Allergens page or ask our staff.",
    priceLabel: "Price",
    categories: [
      {
        id: "antipasti",
        label: "Starters",
        items: [
          { name: "[TO BE CONFIRMED] Starter 1", desc: "Description of the dish's ingredients.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Starter 2", desc: "Description of the dish's ingredients.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Starter 3", desc: "Description of the dish's ingredients.", price: "€ 0.00" },
        ],
      },
      {
        id: "primi",
        label: "First courses",
        items: [
          { name: "[TO BE CONFIRMED] First course 1", desc: "Description of the dish's ingredients.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] First course 2", desc: "Description of the dish's ingredients.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] First course 3", desc: "Description of the dish's ingredients.", price: "€ 0.00" },
        ],
      },
      {
        id: "pizze",
        label: "Pizzas",
        items: [
          { name: "[TO BE CONFIRMED] Pizza 1", desc: "Description of the pizza's toppings.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Pizza 2", desc: "Description of the pizza's toppings.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Pizza 3", desc: "Description of the pizza's toppings.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Pizza 4", desc: "Description of the pizza's toppings.", price: "€ 0.00" },
        ],
      },
      {
        id: "secondi",
        label: "Main courses",
        items: [
          { name: "[TO BE CONFIRMED] Main course 1", desc: "Description of the dish's ingredients.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Main course 2", desc: "Description of the dish's ingredients.", price: "€ 0.00" },
        ],
      },
      {
        id: "contorni",
        label: "Side dishes",
        items: [
          { name: "[TO BE CONFIRMED] Side dish 1", desc: "Description of the side dish.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Side dish 2", desc: "Description of the side dish.", price: "€ 0.00" },
        ],
      },
      {
        id: "dolci",
        label: "Desserts",
        items: [
          { name: "[TO BE CONFIRMED] Dessert 1", desc: "Description of the dessert.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Dessert 2", desc: "Description of the dessert.", price: "€ 0.00" },
        ],
      },
      {
        id: "bevande",
        label: "Drinks",
        items: [
          { name: "[TO BE CONFIRMED] Drink 1", desc: "Water, soft drinks, beers and wines.", price: "€ 0.00" },
          { name: "[TO BE CONFIRMED] Drink 2", desc: "Water, soft drinks, beers and wines.", price: "€ 0.00" },
        ],
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "A look inside our kitchen",
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
    note: "[TO BE CONFIRMED] Indicative hours: check and update the real opening times.",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
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

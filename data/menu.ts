/**
 * ============================================================
 *  MENU COMPLETO — Peperoncino & Co (Summer 2026)
 * ============================================================
 *  Trascritto dal PDF ufficiale del menu. I nomi dei piatti
 *  restano in italiano (come sul menu reale); le descrizioni
 *  sono nelle tre lingue, riprese dalle traduzioni del PDF.
 *  L'asterisco * indica prodotti surgelati o congelati.
 *
 *  Cocktail, carta dei vini, birre e caffetteria sono
 *  riassunti: l'elenco completo è nel PDF scaricabile.
 * ============================================================
 */

export interface LocalizedText {
  it: string;
  en: string;
  de: string;
}

export interface MenuItem {
  name: string;
  desc?: LocalizedText;
  price: string;
}

export interface MenuCategory {
  id: string;
  label: LocalizedText;
  items: MenuItem[];
}

export const menuNotes = {
  cover: {
    it: "Coperto € 3,50 · Prezzo medio 20-30 € a persona",
    en: "Cover charge € 3.50 · Average price € 20-30 per person",
    de: "Gedeck € 3,50 · Durchschnittspreis 20-30 € pro Person",
  },
  frozen: {
    it: "* prodotti surgelati o congelati",
    en: "* frozen products",
    de: "* Kühl- und Tiefkühlprodukte",
  },
  flour: {
    it: "Pizze prodotte con farine 100% provenienti dal Friuli Venezia Giulia",
    en: "Pizzas made with 100% flour from Friuli Venezia Giulia",
    de: "Pizzen aus 100% Mehl aus Friaul-Julisch Venetien",
  },
} as const;

export const menuCategories: MenuCategory[] = [
  {
    id: "antipasti",
    label: { it: "Per Incominciare", en: "To Start", de: "Vorspeisen" },
    items: [
      {
        name: "Schiacciatina classica all'olio d'oliva",
        desc: {
          it: "La nostra schiacciatina appena sfornata, con olio d'oliva.",
          en: "Classic 'schiacciatina' flatbread with olive oil.",
          de: "Klassisches Schiacciatina-Fladenbrot mit Olivenöl.",
        },
        price: "€ 6,00",
      },
      {
        name: "Schiacciatina prosciutto crudo San Daniele “Suavis”",
        desc: {
          it: "Schiacciatina con prosciutto crudo San Daniele “Suavis”.",
          en: "Flatbread with San Daniele 'Suavis' prosciutto.",
          de: "Fladenbrot mit San-Daniele-Schinken 'Suavis'.",
        },
        price: "€ 11,50",
      },
      {
        name: "Schiacciatina San Daniele e burrata pugliese",
        desc: {
          it: "Schiacciatina con prosciutto crudo San Daniele “Suavis” e burrata pugliese.",
          en: "Flatbread with San Daniele 'Suavis' prosciutto and Apulian burrata.",
          de: "Fladenbrot mit San-Daniele-Schinken 'Suavis' und apulischer Burrata.",
        },
        price: "€ 15,30",
      },
      {
        name: "Prosciutto crudo San Daniele “Suavis” e melone",
        desc: {
          it: "Il classico dell'estate, con crudo San Daniele.",
          en: "San Daniele 'Suavis' prosciutto with melon.",
          de: "San-Daniele-Schinken 'Suavis' mit Melone.",
        },
        price: "€ 14,00",
      },
      {
        name: "Caprese di bufala campana DOP",
        desc: {
          it: "Mozzarella di bufala campana DOP, pomodoro e prosciutto crudo San Daniele “Suavis”.",
          en: "Campania DOP buffalo mozzarella, tomatoes and San Daniele 'Suavis' prosciutto.",
          de: "DOP-Büffelmozzarella aus Kampanien, Tomaten und San-Daniele-Schinken 'Suavis'.",
        },
        price: "€ 15,80",
      },
      {
        name: "Caprese di burrata pugliese",
        desc: {
          it: "Burrata pugliese, prosciutto crudo San Daniele “Suavis” e pomodori secchi.",
          en: "Apulian burrata, San Daniele 'Suavis' prosciutto and sun-dried tomatoes.",
          de: "Apulische Burrata, San-Daniele-Schinken 'Suavis' und getrocknete Tomaten.",
        },
        price: "€ 16,30",
      },
      {
        name: "San Daniele, fichi freschi e burrata",
        desc: {
          it: "Prosciutto crudo San Daniele “Suavis” 24 mesi con fichi freschi e burrata pugliese.",
          en: "San Daniele 'Suavis' prosciutto (24 months) with fresh figs and Apulian burrata.",
          de: "San-Daniele-Schinken 'Suavis' (24 Monate) mit frischen Feigen und apulischer Burrata.",
        },
        price: "€ 17,50",
      },
      {
        name: "Carpaccio di manzo affumicato",
        desc: {
          it: "Insalata riccia, burrata, crema di peperone crusco di Senise e crostone di pane.",
          en: "Smoked beef carpaccio, curly endive, burrata, Senise 'crusco' pepper cream and toasted bread.",
          de: "Geräuchertes Rinder-Carpaccio, Friséesalat, Burrata, Creme von Senise-Paprika und geröstetes Brot.",
        },
        price: "€ 18,50",
      },
    ],
  },
  {
    id: "antipasti-pesce",
    label: { it: "Antipasti di Pesce", en: "Seafood Appetizers", de: "Fisch-Vorspeisen" },
    items: [
      {
        name: "Antipasto Peperoncino & Co. per 2 persone *",
        desc: {
          it: "Misto caldo e freddo di mare, il nostro biglietto da visita.",
          en: "Mixed hot and cold seafood platter for two.",
          de: "Gemischte warme und kalte Fischplatte für zwei Personen.",
        },
        price: "€ 47,00",
      },
      {
        name: "Sautè di cozze al pomodoro",
        desc: {
          it: "Con crostoni di pane croccante. Disponibile anche alla marinara in bianco.",
          en: "Sautéed mussels in tomato sauce (or in white wine) with crispy bread croutons.",
          de: "Gedünstete Miesmuscheln in Tomatensauce (oder in Weißweinsauce) mit knusprigen Brotcroûtons.",
        },
        price: "€ 15,50",
      },
      {
        name: "Tartare di tonno",
        desc: {
          it: "Con avocado, lime e menta fresca.",
          en: "Tuna tartare with avocado, lime and fresh mint.",
          de: "Thunfischtatar mit Avocado, Limette und frischer Minze.",
        },
        price: "€ 18,50",
      },
      {
        name: "Antipasto freddo di mare *",
        desc: {
          it: "Polipo, seppie e mazzancolle.",
          en: "Cold seafood appetizer with octopus, cuttlefish and king prawns.",
          de: "Kalte Meeresfrüchte-Vorspeise mit Oktopus, Sepia und Königsgarnelen.",
        },
        price: "€ 16,80",
      },
      {
        name: "Capesante e canestrelli gratinati *",
        desc: {
          it: "Gratinati al forno.",
          en: "Oven-baked scallops au gratin.",
          de: "Gratinierte Jakobsmuscheln und Kammmuscheln aus dem Ofen.",
        },
        price: "€ 18,50",
      },
      {
        name: "Tartare di gambero rosso di Sicilia",
        desc: {
          it: "Con pepe rosa.",
          en: "Sicilian red prawn tartare with pink pepper.",
          de: "Tatar von sizilianischen roten Garnelen mit rosa Pfeffer.",
        },
        price: "€ 17,50",
      },
      {
        name: "Carpaccio di trota “La Regina di San Daniele”",
        desc: {
          it: "Insalata riccia, perle di balsamico e crostone di pane.",
          en: "'La Regina di San Daniele' trout carpaccio, curly endive, balsamic pearls and toasted bread.",
          de: "Forellen-Carpaccio 'La Regina di San Daniele', Friséesalat, Balsamico-Perlen und Brot-Croston.",
        },
        price: "€ 19,00",
      },
      {
        name: "Humus di cannellini e mazzancolle *",
        desc: {
          it: "Code di mazzancolle, crema di peperone crusco di Senise e basilico.",
          en: "Cannellini bean hummus, king prawn tails, Senise 'crusco' pepper cream and basil.",
          de: "Hummus aus Cannellini-Bohnen, Riesengarnelenschwänze, Creme von Senise-Paprika und Basilikum.",
        },
        price: "€ 18,50",
      },
    ],
  },
  {
    id: "primi",
    label: { it: "Primi Piatti", en: "First Courses", de: "Erste Gänge" },
    items: [
      { name: "Penne o spaghetti al pomodoro", desc: { it: "Con salsa di pomodoro fresco.", en: "With fresh tomato sauce.", de: "Mit frischer Tomatensoße." }, price: "€ 10,50" },
      { name: "Penne all'arrabbiata", desc: { it: "Pomodoro piccante, prezzemolo, aglio e peperoncino.", en: "Spicy tomato sauce, parsley, garlic and chili.", de: "Würzige Tomatensoße, Petersilie, Knoblauch und Chili." }, price: "€ 11,00" },
      { name: "Spaghetti aglio, olio e peperoncino", desc: { it: "Il grande classico.", en: "With garlic, olive oil and chili.", de: "Mit Knoblauch, Olivenöl und Chili." }, price: "€ 12,00" },
      { name: "Penne o spaghetti al ragù", desc: { it: "Con ragù tradizionale.", en: "With traditional meat sauce.", de: "Mit traditioneller Fleischsoße." }, price: "€ 13,00" },
      { name: "Penne ai quattro formaggi", desc: { it: "Con crema ai quattro formaggi.", en: "With four-cheese sauce.", de: "Mit Vier-Käse-Soße." }, price: "€ 13,50" },
      { name: "Tortellini panna e prosciutto", desc: { it: "Con panna e prosciutto cotto.", en: "With cream and cooked ham.", de: "Mit Sahne und gekochtem Schinken." }, price: "€ 13,00" },
      { name: "Spaghetti alla carbonara", desc: { it: "Uovo, pecorino e guanciale.", en: "With egg, pecorino cheese and guanciale.", de: "Mit Ei, Pecorino-Käse und Guanciale." }, price: "€ 15,50" },
      { name: "Lasagna al forno", desc: { it: "La lasagna tradizionale al forno.", en: "Oven-baked traditional lasagna.", de: "Traditionelle gebackene Lasagne." }, price: "€ 15,00" },
      { name: "Gnocchi al pomodoro", desc: { it: "Anche al ragù (€ 14,00).", en: "With fresh tomato sauce; also with meat sauce (€ 14.00).", de: "Mit Tomatensoße; auch mit Fleischsoße (€ 14,00)." }, price: "€ 12,00" },
      { name: "Gnocchi al pesto genovese", desc: { it: "Con pesto genovese tradizionale.", en: "With traditional Genovese pesto.", de: "Mit traditionellem Genueser Pesto." }, price: "€ 15,50" },
      { name: "Tagliolini al San Daniele e rucola", desc: { it: "Prosciutto crudo di San Daniele e rucola.", en: "With San Daniele ham and arugula.", de: "Mit San-Daniele-Schinken und Rucola." }, price: "€ 17,50" },
      { name: "Caserecci cime di rapa e salsiccia", desc: { it: "Pasta “Pastificio Cocco” con cime di rapa condite e salsiccia nostrana.", en: "'Pastificio Cocco' caserecci with seasoned turnip greens and local sausage.", de: "Caserecci-Nudeln mit gewürztem Stängelkohl und hausgemachter Wurst." }, price: "€ 18,50" },
      { name: "Fusilloni pomodorini gialli e pistacchio", desc: { it: "Pomodorini gialli confit, pesto di pistacchio e burrata.", en: "Fusilloni with confit yellow cherry tomatoes, pistachio pesto and burrata.", de: "Fusilloni mit konfierten gelben Kirschtomaten, Pistazienpesto und Burrata." }, price: "€ 19,50" },
    ],
  },
  {
    id: "primi-pesce",
    label: { it: "Primi di Pesce", en: "Seafood First Courses", de: "Erste Gänge mit Fisch" },
    items: [
      { name: "Gnocchi al salmone", desc: { it: "Con salmone.", en: "Gnocchi with salmon.", de: "Gnocchi mit Lachs." }, price: "€ 16,00" },
      { name: "Tagliolini gamberi e zucchine *", desc: { it: "Con gamberi e zucchine.", en: "Tagliolini with prawns and zucchini.", de: "Tagliolini mit Garnelen und Zucchini." }, price: "€ 17,00" },
      { name: "Fusilloni alla capasanta *", desc: { it: "Pasta “Pastificio Cocco” con capesante.", en: "Fusilloni with scallops.", de: "Fusilloni mit Jakobsmuscheln." }, price: "€ 18,50" },
      { name: "Mezzi paccheri al tonno fresco *", desc: { it: "Tonno fresco, pomodorini e olive.", en: "Mezzi paccheri with fresh tuna, cherry tomatoes and olives.", de: "Mezzi Paccheri mit frischem Thunfisch, Kirschtomaten und Oliven." }, price: "€ 19,00" },
      { name: "Spaghetti alla chitarra con calamaretti *", desc: { it: "Calamaretti, polvere di limone e bottarga di muggine.", en: "Spaghetti alla chitarra with baby squid, lemon powder and mullet bottarga.", de: "Spaghetti alla Chitarra mit kleinen Tintenfischen, Zitronenpulver und Meeräschen-Bottarga." }, price: "€ 20,50" },
      { name: "Spaghetti alle vongole", desc: { it: "Con vongole.", en: "Spaghetti with clams.", de: "Spaghetti mit Venusmuscheln." }, price: "€ 21,00" },
      { name: "Spaghetti ai frutti di mare *", desc: { it: "Con frutti di mare.", en: "Spaghetti with seafood.", de: "Spaghetti mit Meeresfrüchten." }, price: "€ 22,00" },
      { name: "Maccheroni gran scogliera *", desc: { it: "Misto mare Peperoncino & Co. servito in padella.", en: "Peperoncino & Co. seafood mix served in a pan.", de: "Maccheroni mit Meeresfrüchten, in der Pfanne serviert." }, price: "€ 28,00" },
    ],
  },
  {
    id: "secondi",
    label: { it: "Secondi Piatti", en: "Main Courses", de: "Hauptgerichte" },
    items: [
      { name: "Cotoletta di maiale alla milanese (300 g) *", desc: { it: "Il classico, in versione abbondante.", en: "Milanese-style pork cutlet (300 g).", de: "Schweineschnitzel Mailänder Art (300 g)." }, price: "€ 13,50" },
      { name: "Tagliata di pollo con verdure grigliate *", desc: { it: "Con verdure alla griglia.", en: "Sliced chicken with grilled vegetables.", de: "Hühnerbrust mit gegrilltem Gemüse." }, price: "€ 16,50" },
      { name: "Piatto vegetariano", desc: { it: "Formaggio Dobbiaco DOP alla piastra con verdure grigliate.", en: "Grilled 'Dobbiaco DOP' cheese with grilled vegetables.", de: "Gegrillter 'Dobbiaco DOP' Käse mit gegrilltem Gemüse." }, price: "€ 16,50" },
      { name: "Ribs di maialino friulano in BBQ", desc: { it: "Cotte a bassa temperatura, con patate grigliate.", en: "Friulian pork ribs in BBQ sauce, slow-cooked, with grilled potatoes.", de: "Schweinerippchen aus Friaul in BBQ-Sauce, niedergegart, mit Grillkartoffeln." }, price: "€ 19,50" },
      { name: "Tagliata di manzo", desc: { it: "Rucola e scaglie di grana.", en: "Sliced beef with rocket salad and Grana cheese flakes.", de: "Rinderfilet mit Rucola und Grana-Käseflocken." }, price: "€ 22,00" },
      { name: "Costata di manzo (1.000/1.200 g ca.)", desc: { it: "Con verdure grigliate.", en: "Beef rib (approx. 1000/1200 g) with grilled vegetables.", de: "Rinderkotelett (ca. 1000/1200 g) mit gegrilltem Gemüse." }, price: "€ 6,50 all'hg" },
    ],
  },
  {
    id: "secondi-pesce",
    label: { it: "Secondi di Pesce", en: "Seafood Main Courses", de: "Fisch-Hauptgerichte" },
    items: [
      { name: "Gamberoni alla griglia con polenta *", desc: { it: "Gamberoni alla griglia.", en: "Grilled king prawns with polenta.", de: "Gegrillte Riesengarnelen mit Polenta." }, price: "€ 19,00" },
      { name: "Calamari alla griglia o fritti con polenta *", desc: { it: "A scelta, alla griglia o fritti.", en: "Grilled or fried calamari with polenta.", de: "Gegrillte oder frittierte Calamari mit Polenta." }, price: "€ 19,50" },
      { name: "Tentacolo di polipo alla griglia *", desc: { it: "Su vellutata di datterino giallo e patate viola.", en: "Grilled octopus tentacle on yellow datterino velouté and purple potatoes.", de: "Gegrillter Oktopustentakel auf gelber Datterino-Velouté und violetten Kartoffeln." }, price: "€ 21,50" },
      { name: "Tagliata di tonno", desc: { it: "Con pistacchio e salsa guacamole.", en: "Tuna steak with pistachio crust and guacamole sauce.", de: "Thunfischsteak mit Pistazienkruste und Guacamole-Sauce." }, price: "€ 21,50" },
      { name: "Orata o branzino alla griglia (400/600 g)", desc: { it: "Con polenta. Al forno con pomodorini, patate e olive € 26,00.", en: "Grilled sea bream or sea bass with polenta; oven-baked with cherry tomatoes, potatoes and olives € 26.00.", de: "Gegrillte Dorade oder Wolfsbarsch mit Polenta; aus dem Ofen mit Kirschtomaten, Kartoffeln und Oliven € 26,00." }, price: "€ 23,00" },
      { name: "Fritto misto con polenta *", desc: { it: "Frittura mista di mare.", en: "Mixed fried seafood with polenta.", de: "Gemischte frittierte Meeresfrüchte mit Polenta." }, price: "€ 23,00" },
      { name: "Sogliola alla griglia (250/300 g) *", desc: { it: "Con patate grigliate.", en: "Grilled sole with grilled potatoes.", de: "Gegrillte Seezunge mit gegrillten Kartoffeln." }, price: "€ 26,00" },
      { name: "Grigliata mista per 2 persone *", desc: { it: "Con contorno di verdure grigliate.", en: "Mixed grill for 2 people with grilled vegetables.", de: "Gemischte Fischgrillplatte für 2 Personen mit Grillgemüse." }, price: "€ 58,00" },
      { name: "Pescato del giorno per 2/4 persone", desc: { it: "Rombo, branzino, san pietro, ricciola, ombrina — secondo disponibilità.", en: "Catch of the day for 2/4 people (turbot, sea bass, John Dory, amberjack, croaker) — subject to availability.", de: "Fang des Tages für 2/4 Personen (Steinbutt, Wolfsbarsch, Petersfisch, Bernsteinmakrele, Umberfisch) — je nach Verfügbarkeit." }, price: "€ 6,00–8,00 all'hg" },
    ],
  },
  {
    id: "insalatone",
    label: { it: "Insalatone", en: "Salads", de: "Große Salatteller" },
    items: [
      { name: "Greca", desc: { it: "Misticanza, pomodoro, cetriolo, olive, cipolla di Tropea, feta greca.", en: "Mixed salad, tomato, cucumber, olives, Tropea onion, Greek feta.", de: "Gemischter Salat, Tomaten, Gurken, Oliven, Tropea-Zwiebeln, griechischer Feta." }, price: "€ 14,50" },
      { name: "Delizia", desc: { it: "Misticanza, pomodoro, carote, tonno, mozzarelline, olive, uova sode.", en: "Mixed salad, tomato, carrots, tuna, mozzarella, olives, boiled eggs.", de: "Gemischter Salat, Tomaten, Karotten, Thunfisch, Mozzarella, Oliven, gekochte Eier." }, price: "€ 14,50" },
      { name: "Sfiziosa", desc: { it: "Misticanza, pollo alla griglia*, verdure grigliate, olive, ciliegine di mozzarella.", en: "Mixed salad, grilled chicken*, grilled vegetables, olives, mozzarella.", de: "Gemischter Salat, gegrilltes Hähnchen*, Grillgemüse, Oliven, Mozzarella." }, price: "€ 15,00" },
      { name: "Glamour", desc: { it: "Misticanza, burrata pugliese, fragole, melone, riduzione di balsamico, olive.", en: "Mixed salad, Apulian burrata, strawberries, melon, balsamic reduction, olives.", de: "Gemischter Salat, apulische Burrata, Erdbeeren, Melone, Balsamico-Reduktion, Oliven." }, price: "€ 16,00" },
      { name: "Puglia", desc: { it: "Misticanza, rucola, pomodoro, burrata pugliese, cetriolo, crudo “Suavis” 24 mesi.", en: "Mixed salad, rocket, tomato, Apulian burrata, cucumber, 'Suavis' ham (24 months).", de: "Gemischter Salat, Rucola, Tomaten, apulische Burrata, Gurken, 'Suavis'-Schinken (24 Monate)." }, price: "€ 16,50" },
      { name: "Ficus", desc: { it: "Misticanza, crudo “Suavis” 24 mesi, salsa tzatziki, fichi.", en: "Mixed salad, 'Suavis' ham (24 months), tzatziki sauce, figs.", de: "Gemischter Salat, 'Suavis'-Schinken (24 Monate), Tzatziki-Soße, Feigen." }, price: "€ 17,50" },
    ],
  },
  {
    id: "panini",
    label: { it: "Panini & Burger", en: "Sandwiches & Burgers", de: "Sandwiches & Burger" },
    items: [
      { name: "Panino vegetariano *", desc: { it: "Verdure grigliate, formaggio e patate fritte.", en: "Grilled vegetables, cheese and French fries.", de: "Gegrilltes Gemüse, Käse und Pommes Frites." }, price: "€ 15,00" },
      { name: "Hamburger “Peperoncino & Co.” *", desc: { it: "Hamburger di fassona, formaggio, cipolla rossa grigliata, pomodoro, lattuga, salsa grill, patate fritte.", en: "Fassona hamburger, cheese, grilled red onion, tomato, lettuce, barbecue sauce, French fries.", de: "Fassona-Burger, Käse, gegrillte rote Zwiebeln, Tomaten, Salat, Grill-Soße, Pommes Frites." }, price: "€ 16,50" },
      { name: "Panino dell'artista *", desc: { it: "Insalata, pomodoro, formaggio, cipolla, hamburger di fassona, pancetta al pepe, patate fritte.", en: "Salad, tomato, cheese, onion, fassona hamburger, peppered bacon, French fries.", de: "Salat, Tomaten, Käse, Zwiebel, Fassona-Burger, Pfefferspeck, Pommes Frites." }, price: "€ 17,00" },
    ],
  },
  {
    id: "pizze",
    label: { it: "Pizze", en: "Pizzas", de: "Pizzen" },
    items: [
      { name: "Marinara fresca", desc: { it: "Pomodoro, aglio, origano.", en: "Tomato, garlic, oregano.", de: "Tomaten, Knoblauch, Oregano." }, price: "€ 6,80" },
      { name: "Margherita", desc: { it: "Pomodoro, mozzarella.", en: "Tomato, mozzarella.", de: "Tomaten, Mozzarella." }, price: "€ 8,20" },
      { name: "Pugliese", desc: { it: "Pomodoro, mozzarella, cipolla.", en: "Tomato, mozzarella, onion.", de: "Tomaten, Mozzarella, Zwiebel." }, price: "€ 9,20" },
      { name: "Prosciutto", desc: { it: "Pomodoro, mozzarella, prosciutto cotto.", en: "Tomato, mozzarella, ham.", de: "Tomaten, Mozzarella, Schinken." }, price: "€ 9,80" },
      { name: "Funghi", desc: { it: "Pomodoro, mozzarella, funghi.", en: "Tomato, mozzarella, mushrooms.", de: "Tomaten, Mozzarella, Pilze." }, price: "€ 9,80" },
      { name: "Diavola", desc: { it: "Pomodoro, mozzarella, salame piccante Wolf di Sauris.", en: "Tomato, mozzarella, spicy 'Wolf' salami from Sauris.", de: "Tomaten, Mozzarella, scharfe 'Wolf'-Salami aus Sauris." }, price: "€ 9,80" },
      { name: "Milano", desc: { it: "Pomodoro, mozzarella, salame dolce friulano.", en: "Tomato, mozzarella, sweet Friulian salami.", de: "Tomaten, Mozzarella, süße Salami aus Friaul." }, price: "€ 9,80" },
      { name: "Carciofi", desc: { it: "Pomodoro, mozzarella, carciofi.", en: "Tomato, mozzarella, artichokes.", de: "Tomaten, Mozzarella, Artischocken." }, price: "€ 9,80" },
      { name: "Peperoni", desc: { it: "Pomodoro, mozzarella, peperoni alla griglia.", en: "Tomato, mozzarella, grilled peppers.", de: "Tomaten, Mozzarella, gegrillte Paprika." }, price: "€ 9,80" },
      { name: "Viennese", desc: { it: "Pomodoro, mozzarella, würstel.", en: "Tomato, mozzarella, Frankfurter sausage.", de: "Tomaten, Mozzarella, Würstchen." }, price: "€ 9,80" },
      { name: "Patapizza *", desc: { it: "Pomodoro, mozzarella, patatine fritte.", en: "Tomato, mozzarella, French fries.", de: "Tomaten, Mozzarella, Pommes Frites." }, price: "€ 9,80" },
      { name: "Napoli", desc: { it: "Pomodoro, mozzarella, acciughe, origano.", en: "Tomato, mozzarella, anchovies, oregano.", de: "Tomaten, Mozzarella, Sardellen, Oregano." }, price: "€ 10,50" },
      { name: "Tonno", desc: { it: "Pomodoro, mozzarella, tonno.", en: "Tomato, mozzarella, tuna.", de: "Tomaten, Mozzarella, Thunfisch." }, price: "€ 10,50" },
      { name: "Hawai", desc: { it: "Pomodoro, mozzarella, prosciutto cotto, ananas.", en: "Tomato, mozzarella, ham, pineapple.", de: "Tomaten, Mozzarella, Schinken, Ananas." }, price: "€ 10,80" },
      { name: "Bismark", desc: { it: "Pomodoro, mozzarella, prosciutto cotto, uovo in cottura.", en: "Tomato, mozzarella, ham, egg.", de: "Tomaten, Mozzarella, Schinken, Ei." }, price: "€ 10,80" },
      { name: "Estiva", desc: { it: "Pomodoro, mozzarella, pomodorini ciliegini, rucola.", en: "Tomato, mozzarella, cherry tomatoes, rocket.", de: "Tomaten, Mozzarella, Kirschtomaten, Rucola." }, price: "€ 11,00" },
      { name: "Siciliana", desc: { it: "Pomodoro, olive, capperi, acciughe.", en: "Tomato, olives, capers, anchovies.", de: "Tomaten, Oliven, Kapern, Sardellen." }, price: "€ 11,30" },
      { name: "Prosciutto e funghi", desc: { it: "Pomodoro, mozzarella, prosciutto cotto, funghi.", en: "Tomato, mozzarella, ham, mushrooms.", de: "Tomaten, Mozzarella, Schinken, Pilze." }, price: "€ 11,50" },
      { name: "Parmigiana", desc: { it: "Pomodoro, mozzarella, melanzane, pomodorini freschi, grana.", en: "Tomato, mozzarella, aubergine, cherry tomatoes, Grana cheese.", de: "Tomaten, Mozzarella, Auberginen, frische Tomaten, Parmesan." }, price: "€ 11,60" },
      { name: "Pata Würst *", desc: { it: "Pomodoro, mozzarella, würstel, patatine fritte.", en: "Tomato, mozzarella, Frankfurter sausage, French fries.", de: "Tomaten, Mozzarella, Würstel, Pommes Frites." }, price: "€ 11,70" },
      { name: "Capricciosa", desc: { it: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi.", en: "Tomato, mozzarella, ham, mushrooms, artichokes.", de: "Tomaten, Mozzarella, Schinken, Pilze, Artischocken." }, price: "€ 11,80" },
      { name: "Tonno e cipolla", desc: { it: "Pomodoro, mozzarella, tonno, cipolla.", en: "Tomato, mozzarella, tuna, onion.", de: "Tomaten, Mozzarella, Thunfisch, Zwiebeln." }, price: "€ 12,00" },
      { name: "4 Formaggi", desc: { it: "Pomodoro, mozzarella, gorgonzola, brie, grana.", en: "Tomato, mozzarella, gorgonzola, brie, Grana cheese.", de: "Tomaten, Mozzarella, Gorgonzola, Brie, Parmesan." }, price: "€ 12,00" },
      { name: "Calzone", desc: { it: "Pomodoro, mozzarella, prosciutto cotto, funghi.", en: "Tomato, mozzarella, ham, mushrooms.", de: "Tomaten, Mozzarella, Schinken, Pilze." }, price: "€ 12,00" },
      { name: "4 Stagioni", desc: { it: "Pomodoro, mozzarella, prosciutto cotto, funghi, carciofi, olive.", en: "Tomato, mozzarella, ham, mushrooms, artichokes, olives.", de: "Tomaten, Mozzarella, Schinken, Pilze, Artischocken, Oliven." }, price: "€ 12,30" },
      { name: "Trentina", desc: { it: "Pomodoro, mozzarella, gorgonzola, speck di Sauris.", en: "Tomato, mozzarella, gorgonzola, Sauris speck.", de: "Tomaten, Mozzarella, Gorgonzola, Speck aus Sauris." }, price: "€ 12,30" },
      { name: "Mediterranea", desc: { it: "Pomodoro, mozzarella, tonno, capperi, olive, cipolla.", en: "Tomato, mozzarella, tuna, capers, olives, onion.", de: "Tomaten, Mozzarella, Thunfisch, Kapern, Oliven, Zwiebel." }, price: "€ 12,40" },
      { name: "Dolce Amara", desc: { it: "Pomodoro, mozzarella, gorgonzola, salamino piccante Wolf di Sauris, rucola.", en: "Tomato, mozzarella, gorgonzola, spicy 'Wolf' salami, rocket.", de: "Tomaten, Mozzarella, Gorgonzola, scharfe 'Wolf'-Salami, Rucola." }, price: "€ 12,50" },
      { name: "Camilla *", desc: { it: "Pomodoro, mozzarella, salsiccia friulana, peperoni, patatine fritte.", en: "Tomato, mozzarella, Friulian sausage, peppers, French fries.", de: "Tomaten, Mozzarella, friulanische Wurst, Paprika, Pommes Frites." }, price: "€ 12,50" },
      { name: "Nonna Lucia", desc: { it: "Pomodoro, mozzarella, funghi, rucola, speck di Sauris.", en: "Tomato, mozzarella, mushrooms, rocket, Sauris speck.", de: "Tomaten, Mozzarella, Pilze, Rucola, Speck aus Sauris." }, price: "€ 12,80" },
      { name: "Bufalina", desc: { it: "Salsa di pomodoro, mozzarella di bufala campana DOP.", en: "Tomato sauce, DOP buffalo mozzarella.", de: "Tomatensauce, Büffelmozzarella 'Campana DOP'." }, price: "€ 13,00" },
      { name: "Verdure grill", desc: { it: "Pomodoro, mozzarella, verdure grigliate: peperoni, zucchine, melanzane.", en: "Tomato, mozzarella, grilled vegetables (peppers, zucchini, aubergine).", de: "Tomaten, Mozzarella, Grillgemüse (Paprika, Zucchini, Auberginen)." }, price: "€ 13,00" },
      { name: "Speck e brie", desc: { it: "Pomodoro, mozzarella, speck di Sauris, brie, scaglie di grana.", en: "Tomato, mozzarella, Sauris speck, brie, Grana flakes.", de: "Tomaten, Mozzarella, Speck aus Sauris, Brie, Parmesan." }, price: "€ 13,00" },
      { name: "Annesa", desc: { it: "Pomodoro, mozzarella, zucchine, speck di Sauris, grana.", en: "Tomato, mozzarella, zucchini, Sauris speck, Grana cheese.", de: "Tomaten, Mozzarella, Zucchini, Speck aus Sauris, Parmesan." }, price: "€ 13,20" },
      { name: "Pork", desc: { it: "Pomodoro, mozzarella, würstel, salamino Wolf di Sauris, salsiccia e cipolla.", en: "Tomato, mozzarella, Frankfurter, 'Wolf' salami, sausage and onion.", de: "Tomaten, Mozzarella, Würstel, 'Wolf'-Salami, Wurst und Zwiebel." }, price: "€ 13,50" },
      { name: "Ghiotta", desc: { it: "Mozzarella, cime di rapa, scamorza affumicata, salsiccia friulana.", en: "Mozzarella, turnip greens, smoked scamorza, Friulian sausage.", de: "Mozzarella, Stängelkohl, geräucherte Scamorza, friulanische Wurst." }, price: "€ 13,80" },
      { name: "Summer", desc: { it: "Pomodoro, olive, mozzarella di bufala DOP, pomodoro a fette, basilico.", en: "Tomato, olives, DOP buffalo mozzarella, sliced tomato, basil.", de: "Tomaten, Oliven, Büffelmozzarella DOP, Tomaten in Scheiben, Basilikum." }, price: "€ 14,50" },
      { name: "Exotic Friends", desc: { it: "Salsa di pomodoro, pomodorini, bufala DOP campana, salamino piccante Wolf, olive.", en: "Tomato sauce, cherry tomatoes, DOP buffalo mozzarella, spicy 'Wolf' salami, olives.", de: "Tomatensauce, Kirschtomaten, Büffelmozzarella DOP, scharfe 'Wolf'-Salami, Oliven." }, price: "€ 15,00" },
      { name: "San Daniele", desc: { it: "Pomodoro, mozzarella di bufala DOP, prosciutto crudo “Suavis” 24 mesi.", en: "Tomato, DOP buffalo mozzarella, 24-month San Daniele ham.", de: "Tomaten, Büffelmozzarella DOP, 24 Monate gereifter San-Daniele-Schinken." }, price: "€ 15,50" },
      { name: "Pescatora *", desc: { it: "Pomodoro, mozzarella, frutti di mare.", en: "Tomato, mozzarella, seafood.", de: "Tomaten, Mozzarella, Meeresfrüchte." }, price: "€ 15,50" },
      { name: "Jolokia arrotolata", desc: { it: "Mozzarella, brie, olive, funghi; a fine cottura crudo “Suavis” 24 mesi, pomodorini, rucola.", en: "Rolled pizza with mozzarella, brie, olives, mushrooms; finished with 'Suavis' ham, cherry tomatoes, rocket.", de: "Gerollte Pizza mit Mozzarella, Brie, Oliven, Pilzen; am Ende 'Suavis'-Schinken, Kirschtomaten, Rucola." }, price: "€ 15,50" },
    ],
  },
  {
    id: "pizze-gourmet",
    label: { it: "Pizze Gourmet", en: "Gourmet Pizzas", de: "Gourmet-Pizzen" },
    items: [
      { name: "Capri", desc: { it: "Pesto di agrumi, bufala DOP, pomodorini confit gialli, bottarga di muggine.", en: "Citrus pesto, DOP buffalo mozzarella, yellow confit tomatoes, mullet bottarga.", de: "Zitruspesto, Büffelmozzarella DOP, gelbe Confit-Tomaten, Meeräschen-Bottarga." }, price: "€ 17,50" },
      { name: "Genova *", desc: { it: "Pesto genovese, mozzarella, code di mazzancolle, pomodoro confit giallo.", en: "Genovese pesto, mozzarella, prawn tails, yellow confit tomatoes.", de: "Genueser Pesto, Mozzarella, Garnelenschwänze, gelbe Confit-Tomaten." }, price: "€ 17,50" },
      { name: "Firenze", desc: { it: "Mozzarella, granella di pistacchi, pancetta croccante, melanzane, burrata DOP.", en: "Mozzarella, chopped pistachios, crispy smoked bacon, aubergines, Apulian burrata DOP.", de: "Mozzarella, Pistazien, knuspriger Speck, Auberginen, Burrata DOP." }, price: "€ 17,40" },
      { name: "Valencia", desc: { it: "Mozzarella, burrata pugliese, alici del Cantabrico, fichi freschi.", en: "Mozzarella, Apulian burrata, Cantabrian anchovies, fresh figs.", de: "Mozzarella, apulische Burrata, kantabrische Sardellen, frische Feigen." }, price: "€ 18,80" },
      { name: "Regina", desc: { it: "Mozzarella, carpaccio di trota affumicata, stracciatella di burrata, melograno, rucola.", en: "Mozzarella, smoked trout carpaccio, burrata stracciatella, pomegranate, rocket.", de: "Mozzarella, geräuchertes Forellen-Carpaccio, Burrata-Stracciatella, Granatapfel, Rucola." }, price: "€ 20,00" },
      { name: "Thierry", desc: { it: "Mozzarella, bufala campana DOP, uovo, tartufo nero estivo.", en: "Mozzarella, DOP buffalo mozzarella, egg, black summer truffle.", de: "Mozzarella, Büffelmozzarella DOP, Ei, schwarzer Sommertrüffel." }, price: "€ 20,00" },
      { name: "Fumè", desc: { it: "Bufala campana DOP, carpaccio di manzo affumicato, yogurt dressing, tartufo nero estivo.", en: "DOP buffalo mozzarella, smoked beef carpaccio, yogurt dressing, black summer truffle.", de: "Büffelmozzarella DOP, geräuchertes Rinder-Carpaccio, Joghurt-Dressing, Sommertrüffel." }, price: "€ 22,00" },
    ],
  },
  {
    id: "contorni",
    label: { it: "Contorni", en: "Side Dishes", de: "Beilagen" },
    items: [
      { name: "Patatine fritte *", price: "€ 5,50" },
      { name: "Insalata mista", desc: { it: "Insalata mista di stagione.", en: "Mixed salad.", de: "Gemischter Salat." }, price: "€ 6,00" },
      { name: "Verdure grigliate", desc: { it: "Verdure di stagione alla griglia.", en: "Grilled vegetables.", de: "Gegrilltes Gemüse." }, price: "€ 7,00" },
    ],
  },
  {
    id: "baby",
    label: { it: "Menu Baby", en: "Kids' Menu", de: "Kinderkarte" },
    items: [
      { name: "Pizza Margherita baby", desc: { it: "Pomodoro, mozzarella.", en: "Tomato, mozzarella.", de: "Tomaten, Mozzarella." }, price: "€ 7,30" },
      { name: "Pennette al pomodoro baby", desc: { it: "Pennette con salsa di pomodoro.", en: "Pennette with tomato sauce.", de: "Pennette mit Tomatensoße." }, price: "€ 7,50" },
      { name: "Pennette al ragù baby", desc: { it: "Pennette al ragù.", en: "Pennette with Bolognese sauce.", de: "Pennette mit Bolognese-Soße." }, price: "€ 9,00" },
      { name: "Pizza Mickey Mouse *", desc: { it: "Pomodoro, mozzarella, würstel, patatine.", en: "Tomato, mozzarella, Frankfurter sausage, French fries.", de: "Tomaten, Mozzarella, Würstchen, Pommes Frites." }, price: "€ 9,00" },
      { name: "Tortellini panna e prosciutto baby", desc: { it: "Tortellini con panna e prosciutto.", en: "Tortellini with cream and ham.", de: "Tortellini mit Sahne und Schinken." }, price: "€ 9,50" },
      { name: "Cordon bleu con patatine *", desc: { it: "Prosciutto cotto e formaggio, con patatine fritte.", en: "Cordon bleu with ham and cheese, served with fries.", de: "Cordon Bleu mit Schinken und Käse, mit Pommes Frites." }, price: "€ 9,50" },
      { name: "Nuggets di pollo con patatine *", desc: { it: "Con patatine fritte.", en: "Chicken nuggets with French fries.", de: "Chicken Nuggets mit Pommes Frites." }, price: "€ 9,50" },
      { name: "Würstel alla griglia con patatine *", desc: { it: "Con patatine fritte.", en: "Grilled Frankfurters with French fries.", de: "Gegrillte Würstchen mit Pommes Frites." }, price: "€ 9,50" },
    ],
  },
  {
    id: "bar",
    label: { it: "Bar & Cantina", en: "Bar & Wine List", de: "Bar & Weinkarte" },
    items: [
      { name: "Cocktail & Spritz", desc: { it: "Spritz Aperol, Hugo, Moscow Mule, Mojito, gin tonic premium e analcolici.", en: "Aperol Spritz, Hugo, Moscow Mule, Mojito, premium gin & tonic and alcohol-free cocktails.", de: "Aperol Spritz, Hugo, Moscow Mule, Mojito, Premium-Gin-Tonic und alkoholfreie Cocktails." }, price: "€ 3,00 – 16,00" },
      { name: "Carta dei vini", desc: { it: "Bianchi, rossi e bollicine da cantine del Friuli e d'Italia: dal Prosecco DOC al Franciacorta Ca' del Bosco.", en: "White, red and sparkling wines from Friuli and Italy: from Prosecco DOC to Ca' del Bosco Franciacorta.", de: "Weiß-, Rot- und Schaumweine aus dem Friaul und Italien: vom Prosecco DOC bis zum Franciacorta Ca' del Bosco." }, price: "€ 16,00 – 65,00" },
      { name: "Birre alla spina", desc: { it: "Malteus e Franziskaner, piccola o grande; Radler.", en: "Malteus and Franziskaner on tap, small or large; Radler.", de: "Malteus und Franziskaner vom Fass, klein oder groß; Radler." }, price: "€ 3,50 – 7,00" },
      { name: "Caffetteria", desc: { it: "Espresso, cappuccino, latte macchiato, tè caldo; amari e grappe.", en: "Espresso, cappuccino, latte macchiato, hot tea; amari and grappa.", de: "Espresso, Cappuccino, Latte Macchiato, heißer Tee; Amari und Grappa." }, price: "€ 2,00 – 8,00" },
    ],
  },
];

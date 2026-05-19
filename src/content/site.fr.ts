export type ServiceItem = {
  title: string;
  description: string;
  icon: "build" | "renovation" | "stairs" | "finish" | "support";
};

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  placeholder?: boolean;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  location: string;
  placeholder?: boolean;
};

export const siteData = {
  company: {
    name: "ELB - Entreprise Leader du Batiment",
    tagline: "Leader in Building",
    address: "36 Rue de la Fosse Rouge, Paris, France",
    phoneDisplay: "+33 6 51 71 99 54",
    phoneHref: "tel:+33651719954",
    whatsappHref:
      "https://wa.me/33651719954?text=Bonjour%20ELB%2C%20je%20souhaite%20demander%20un%20devis%20pour%20mon%20projet.",
    instagram: "https://www.instagram.com/elb.construction?igsh=MTljZ2Q4NXRweGdwaA==",
    facebook: "https://www.facebook.com/share/197xG5A3VH/?mibextid=wwXIfr",
    recurringPhrase:
      "Donnez vie a vos idees, nous nous occupons du reste.",
    mapEmbedUrl:
      "https://www.google.com/maps?q=36+Rue+de+la+Fosse+Rouge+Paris+France&output=embed"
  },
  nav: [
    { label: "Accueil", href: "#accueil" },
    { label: "A propos", href: "#a-propos" },
    { label: "Services", href: "#services" },
    { label: "Pourquoi nous", href: "#pourquoi-nous" },
    { label: "Realisations", href: "#realisations" },
    { label: "Temoignages", href: "#temoignages" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    title: "DES ESPACES QUI INSPIRENT. DES RESULTATS QUI DURENT.",
    subtitle:
      "Entreprise de construction et renovation a Paris. Votre projet, notre engagement.",
    cta: "Demandez un devis gratuit",
    secondaryCta: "Contactez-nous",
    image: "/assets/hero/hero-main.png"
  },
  about: {
    title: "Votre projet, notre engagement.",
    text: "ELB accompagne chaque client avec exigence, transparence et precision. De la conception a la livraison, nous pilotons votre projet avec un interlocuteur unique et une execution rigoureuse.",
    points: [
      "Accompagnement personnalise de A a Z",
      "Coordination claire et delais maitrises",
      "Qualite de finition a chaque etape"
    ]
  },
  services: [
    {
      title: "Construction neuve",
      description:
        "Des batiments solides, penses pour durer et repondre aux standards actuels.",
      icon: "build"
    },
    {
      title: "Renovation interieure",
      description:
        "Modernisation complete de vos espaces de vie ou professionnels avec une execution soignee.",
      icon: "renovation"
    },
    {
      title: "Escaliers sur mesure",
      description:
        "Conception sur mesure alliant esthetique, securite et performance.",
      icon: "stairs"
    },
    {
      title: "Finitions haut de gamme",
      description:
        "Des finitions minutieuses pour un rendu premium et durable.",
      icon: "finish"
    },
    {
      title: "Accompagnement personnalise",
      description:
        "Un interlocuteur dedie a chaque etape pour une experience fluide et rassurante.",
      icon: "support"
    }
  ] as ServiceItem[],
  pillars: [
    {
      name: "Qualite",
      text: "Des standards eleves et controles a chaque phase du chantier."
    },
    {
      name: "Confiance",
      text: "Une relation claire, fiable et orientee resultat."
    },
    {
      name: "Reactivite",
      text: "Des reponses rapides et un suivi proactif de votre projet."
    },
    {
      name: "Durabilite",
      text: "Des solutions concues pour traverser le temps."
    }
  ],
  portfolio: [
    {
      title: "Identite ELB",
      category: "Marque & Qualite",
      image: "/assets/portfolio/project-1.png"
    },
    {
      title: "Renovation interieure - Projet a venir",
      category: "Placeholder",
      image:
        "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1200&q=80",
      placeholder: true
    },
    {
      title: "Escalier sur mesure - Projet a venir",
      category: "Placeholder",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      placeholder: true
    },
    {
      title: "Construction neuve - Projet a venir",
      category: "Placeholder",
      image:
        "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
      placeholder: true
    }
  ] as PortfolioItem[],
  testimonials: [
    {
      quote:
        "Travail soigne et equipe a l'ecoute. Le resultat est au-dela de nos attentes.",
      author: "M. D.",
      location: "Paris",
      placeholder: true
    },
    {
      quote:
        "Renovation livree dans les delais avec un suivi clair de bout en bout.",
      author: "Famille L.",
      location: "Region parisienne",
      placeholder: true
    },
    {
      quote:
        "Escalier sur mesure magnifique, finitions impeccables et chantier propre.",
      author: "Client ELB",
      location: "Paris",
      placeholder: true
    }
  ] as TestimonialItem[]
};

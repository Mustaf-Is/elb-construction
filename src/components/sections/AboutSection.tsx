import SectionTitle from "../common/SectionTitle";
import { siteData } from "../../content/site.fr";

const highlights = [
  {
    title: "Notre Mission",
    text: siteData.company.recurringPhrase,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    title: "Excellence",
    text: "Des standards de qualite intransigeants a chaque etape, avec une attention particuliere aux details qui font la difference.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  },
  {
    title: "Proximite",
    text: "Un interlocuteur unique du premier contact a la remise des cles, pour une communication fluide et des reponses rapides.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
];

export default function AboutSection() {
  return (
    <section id="a-propos" className="section section--about">
      <div className="container about-grid reveal-on-scroll">
        <div>
          <SectionTitle eyebrow="A propos" title={siteData.about.title} />
          <p className="about-description">{siteData.about.text}</p>
          <ul className="about-points">
            {siteData.about.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className="about-highlights">
          {highlights.map((highlight, index) => (
            <aside 
              key={highlight.title} 
              className={`about-highlight about-highlight--float-${index + 1}`}
            >
              <div className="about-highlight__icon">
                {highlight.icon}
              </div>
              <p className="about-highlight__title">{highlight.title}</p>
              <p>{highlight.text}</p>
            </aside>
          ))}
        </div>
      </div>
    </section>
  );
}

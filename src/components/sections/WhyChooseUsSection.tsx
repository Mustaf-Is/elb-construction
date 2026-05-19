import SectionTitle from "../common/SectionTitle";
import { siteData } from "../../content/site.fr";

export default function WhyChooseUsSection() {
  return (
    <section id="pourquoi-nous" className="section section--pillars">
      <div className="container reveal-on-scroll">
        <SectionTitle
          eyebrow="Pourquoi nous choisir"
          title="Qualite. Confiance. Reactivite. Durabilite."
          subtitle="Des engagements clairs pour transformer vos idees en resultats concrets."
          align="center"
        />
        <div className="pillars-grid">
          {siteData.pillars.map((pillar) => (
            <article key={pillar.name} className="pillar-card">
              <h3>{pillar.name}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

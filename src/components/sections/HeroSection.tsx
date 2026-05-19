import { siteData } from "../../content/site.fr";

export default function HeroSection() {
  return (
    <section id="accueil" className="hero-section geometric-background">
      <div className="hero-overlay" />
      <img
        src={siteData.hero.image}
        alt="Projet ELB de construction et renovation"
        className="hero-image"
        loading="eager"
      />
      <div className="container hero-content">
        <p className="hero-kicker">Entreprise Leader du Batiment - Paris</p>
        <h1>{siteData.hero.title}</h1>
        <p>{siteData.hero.subtitle}</p>
        <div className="hero-actions">
          <a
            href={siteData.company.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            {siteData.hero.cta}
          </a>
          <a href="#contact" className="button button--ghost">
            {siteData.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}

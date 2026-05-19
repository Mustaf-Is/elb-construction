import SectionTitle from "../common/SectionTitle";
import { siteData } from "../../content/site.fr";

export default function PortfolioSection() {
  return (
    <section id="realisations" className="section section--portfolio">
      <div className="container reveal-on-scroll">
        <SectionTitle
          eyebrow="Portfolio"
          title="Des realisations qui parlent d'elles-memes"
          subtitle="Une selection de projets ELB et d'apercus representatifs de notre niveau d'exigence."
        />
        <div className="portfolio-grid">
          {siteData.portfolio.map((item) => (
            <article key={item.title} className="portfolio-card">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <div className="portfolio-card__content">
                <p>{item.category}</p>
                <h3>{item.title}</h3>
                {item.placeholder ? (
                  <span className="portfolio-card__badge">Projet a venir</span>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

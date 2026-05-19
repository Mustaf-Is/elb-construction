import SectionTitle from "../common/SectionTitle";
import ServiceIcon from "../common/ServiceIcon";
import { siteData } from "../../content/site.fr";

export default function ServicesSection() {
  return (
    <section id="services" className="section section--services">
      <div className="container reveal-on-scroll">
        <SectionTitle
          eyebrow="Nos services"
          title="Un savoir-faire complet pour vos projets"
          subtitle="Construction, renovation et finitions premium avec un accompagnement personnalise."
          align="center"
        />
        <div className="services-grid">
          {siteData.services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                <ServiceIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

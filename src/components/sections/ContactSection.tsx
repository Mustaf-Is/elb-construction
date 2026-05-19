import SectionTitle from "../common/SectionTitle";
import { siteData } from "../../content/site.fr";

export default function ContactSection() {
  return (
    <section id="contact" className="section section--contact">
      <div className="container reveal-on-scroll">
        <SectionTitle
          eyebrow="Contact"
          title="Parlons de votre projet"
          subtitle="Une reponse rapide et un accompagnement sur mesure pour lancer votre chantier sereinement."
        />

        <div className="contact-grid">
          <div className="contact-card">
            <h3>Coordonnees ELB</h3>
            <p>{siteData.company.address}</p>
            <a href={siteData.company.phoneHref}>{siteData.company.phoneDisplay}</a>
            <a href={siteData.company.whatsappHref} target="_blank" rel="noreferrer">
              Ecrire sur WhatsApp
            </a>
            <a href={siteData.company.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={siteData.company.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <p className="contact-phrase">{siteData.company.recurringPhrase}</p>
          </div>

          <div className="contact-card contact-card--map">
            <h3>Nous trouver</h3>
            <iframe
              title="Carte ELB Paris"
              src={siteData.company.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

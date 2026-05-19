import { siteData } from "../../content/site.fr";

export default function Footer() {
  return (
    <footer className="site-footer geometric-background">
      <div className="container site-footer__grid">
        <div>
          <img
            src="/assets/logo/elb-brand.png"
            alt="Logo ELB"
            className="site-footer__logo"
            loading="lazy"
          />
          <p className="site-footer__tagline">{siteData.company.recurringPhrase}</p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul className="site-footer__links">
            {siteData.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="site-footer__links">
            <li>
              <a href={siteData.company.phoneHref}>{siteData.company.phoneDisplay}</a>
            </li>
            <li>
              <a href={siteData.company.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={siteData.company.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__legal">
        <a href="#">Mentions legales</a>
        <a href="#">Politique de confidentialite</a>
        <p>© {new Date().getFullYear()} ELB - Entreprise Leader du Batiment</p>
      </div>
    </footer>
  );
}

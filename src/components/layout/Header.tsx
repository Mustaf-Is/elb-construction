import { useState, useEffect } from "react";
import { siteData } from "../../content/site.fr";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#accueil" className="site-logo-link" aria-label="Retour en haut de page">
          <img
            src="/assets/logo/elb-brand.png"
            alt="ELB Entreprise Leader du Batiment"
            className="site-logo"
          />
        </a>

        <nav aria-label="Navigation principale" className={`site-nav-wrapper ${mobileMenuOpen ? "is-open" : ""}`}>
          <ul className="site-nav">
            {siteData.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>{item.label}</a>
              </li>
            ))}
          </ul>
          <a 
            className="button button--primary mobile-cta" 
            href={siteData.company.whatsappHref} 
            target="_blank" 
            rel="noreferrer"
            onClick={closeMenu}
          >
            Demandez un devis
          </a>
        </nav>

        <a className="button button--compact desktop-cta" href={siteData.company.whatsappHref} target="_blank" rel="noreferrer">
          Demandez un devis
        </a>

        <button 
          className={`hamburger ${mobileMenuOpen ? "is-active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>
      </div>

      {mobileMenuOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </header>
  );
}

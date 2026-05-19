import SectionTitle from "../common/SectionTitle";
import { siteData } from "../../content/site.fr";

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="section section--testimonials">
      <div className="container reveal-on-scroll">
        <SectionTitle
          eyebrow="Temoignages"
          title="Ils nous font confiance"
          subtitle="Des retours clients qui refletent notre niveau de professionnalisme."
          align="center"
        />
        <div className="testimonials-grid">
          {siteData.testimonials.map((testimonial) => (
            <blockquote key={testimonial.quote} className="testimonial-card">
              <p>"{testimonial.quote}"</p>
              <footer>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.location}</span>
                {testimonial.placeholder ? (
                  <small>Temoignage en attente de validation client</small>
                ) : null}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

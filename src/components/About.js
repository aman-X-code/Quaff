'use client';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-image-wrapper reveal-left">
            <img src="https://res.cloudinary.com/dave3np5n/image/upload/v1773117278/IMG_1017_kkr6vy.jpg" alt="Quaff Brewing Co. craft beers" />
          </div>

          <div className="about-content">
            <div className="section-label reveal">Our Story</div>
            <h2 className="section-title reveal">
              Crafted With <span className="gold-text">Passion</span>,
              Served With <span className="gold-text">Pride</span>
            </h2>
            <div className="divider reveal" />
            <p className="section-subtitle reveal" style={{ maxWidth: '100%' }}>
              With locations in DLF Cyber Hub and Eros City Square, Quaff Brewing Co. is more than just a brewpub — 
              it&apos;s a celebration of the art of brewing. Every pint we pour carries the soul of 
              our master brewers, who blend tradition with innovation to create brews that redefine 
              your drinking experience.
            </p>
            <p className="section-subtitle reveal" style={{ maxWidth: '100%', marginTop: '1rem' }}>
              From our signature IPAs to our rich, velvety stouts, every drop is brewed in-house 
              with the finest ingredients sourced from around the world. Pair them with our 
              chef-curated gourmet menu for an evening you&apos;ll never forget.
            </p>

            <div className="about-stats reveal">
              <div className="about-stat">
                <div className="about-stat-number">12+</div>
                <div className="about-stat-label">Craft Brews</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">50+</div>
                <div className="about-stat-label">Menu Items</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">5★</div>
                <div className="about-stat-label">Rating</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">2K+</div>
                <div className="about-stat-label">Happy Guests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand reveal">
          <img src="/logo2.png" alt="Quaff Brewing Co." style={{
            height: '72px',
            width: 'auto',
            objectFit: 'contain',
            marginBottom: '1.2rem',
            display: 'block',
          }} />
          <p>
            Gurgaon&apos;s finest brewpub, with locations in DLF Cyber Hub and Eros City Square. 
            Where handcrafted brews meet gourmet cuisine and unforgettable nights.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col reveal" style={{ transitionDelay: '0.1s' }}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">Our Story</a></li>
            <li><a href="#brews">Our Brews</a></li>
            <li><a href="#menu">Food Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#events">Events</a></li>
          </ul>
        </div>

        <div className="footer-col reveal" style={{ transitionDelay: '0.2s' }}>
          <h4>Visit Us</h4>
          <div style={{ marginBottom: '1.5rem' }}>
            <h5 style={{ color: 'var(--rich-gold)', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '500' }}>Quaff Cyber Hub</h5>
            <ul>
              <li><a href="#">DLF Cyber Hub</a></li>
              <li><a href="#">Gurgaon, Haryana</a></li>
              <li><a href="tel:+919654659050" style={{ color: 'var(--rich-gold)', marginTop: '0.5rem', display: 'inline-block' }}>+91 9654659050</a></li>
              <li><a href="#" style={{ marginTop: '0.5rem', display: 'inline-block' }}>Get Directions →</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ color: 'var(--rich-gold)', marginBottom: '0.5rem', fontSize: '1.1rem', fontWeight: '500' }}>QUAFF Eros City Square</h5>
            <ul>
              <li><a href="#">Eros City Square, Sector 49</a></li>
              <li><a href="#">Gurgaon, Haryana</a></li>
              <li><a href="tel:+917059800007" style={{ color: 'var(--rich-gold)', marginTop: '0.5rem', display: 'inline-block' }}>+91 7059800007</a></li>
              <li><a href="#" style={{ marginTop: '0.5rem', display: 'inline-block' }}>Get Directions →</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-col reveal" style={{ transitionDelay: '0.3s' }}>
          <h4>Hours</h4>
          <ul>
            <li><a href="#">Mon — Thu: 12 PM – 12 AM</a></li>
            <li><a href="#">Fri — Sat: 12 PM – 1 AM</a></li>
            <li><a href="#">Sunday: 11 AM – 11 PM</a></li>
            <li style={{ marginTop: '1rem' }}>
              <a href="mailto:Quaff@vegahospitality.co.in" style={{ color: 'var(--rich-gold)' }}>
                Quaff@vegahospitality.co.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Quaff Brewing Co. All rights reserved.</span>
        <span>Crafted with 🍺 in Gurgaon</span>
      </div>
    </footer>
  );
}

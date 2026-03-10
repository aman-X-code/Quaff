'use client';

export default function Gallery() {
  const images = [
    { src: 'https://res.cloudinary.com/dave3np5n/image/upload/v1773117270/IMG_0998_h1zegt.jpg', label: 'The Bar' },
    { src: 'https://res.cloudinary.com/dave3np5n/image/upload/v1773117269/IMG_1001_2_w1hw6e.jpg', label: 'Our Brews' },
    { src: 'https://res.cloudinary.com/dave3np5n/image/upload/v1773117264/IMG_0998_2_vtglwe.jpg', label: 'Gourmet Bites' },
    { src: 'https://res.cloudinary.com/dave3np5n/image/upload/v1773117259/IMG_0991_2_r3tdfj.jpg', label: 'Live Nights' },
    { src: 'https://res.cloudinary.com/dave3np5n/image/upload/v1773117258/IMG_0994_2_qglhlp.jpg', label: 'Golden Harvest' },
  ];

  return (
    <section className="section gallery" id="gallery">
      <div className="section-inner">
        <div className="gallery-header">
          <div className="section-label reveal">The Vibe</div>
          <h2 className="section-title reveal">
            Step Inside <span className="gold-text">Quaff</span>
          </h2>
          <p className="section-subtitle reveal">
            A glimpse into the evenings that make Quaff the most talked-about spot in Cyber Hub.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="gallery-item reveal-scale" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <img src={img.src} alt={img.label} />
              <div className="gallery-item-overlay">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

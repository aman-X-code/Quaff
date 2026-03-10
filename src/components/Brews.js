'use client';

const brews = [
  {
    name: 'Golden Harvest IPA',
    style: 'India Pale Ale',
    desc: 'A bold and citrusy IPA bursting with hoppy bitterness and tropical fruit notes. Our flagship brew.',
    abv: '6.5% ABV',
    image: 'https://res.cloudinary.com/dave3np5n/image/upload/v1773117245/IMG_0961_hwijga.jpg',
  },
  {
    name: 'Midnight Velvet Stout',
    style: 'Chocolate Stout',
    desc: 'Rich, creamy, and indulgent — brewed with dark roasted malts and a hint of Belgian chocolate.',
    abv: '5.8% ABV',
    image: 'https://res.cloudinary.com/dave3np5n/image/upload/v1773117272/IMG_1002_2_q7uepn.jpg',
  },
  {
    name: 'Summer Haze Hefeweizen',
    style: 'Wheat Beer',
    desc: 'Light and refreshing with banana and clove aromatics. Perfect for those laid-back afternoons.',
    abv: '4.9% ABV',
    image: 'https://res.cloudinary.com/dave3np5n/image/upload/v1773117281/IMG_1020_o4rogp.jpg',
  },
];

export default function Brews() {
  return (
    <section className="section brews" id="brews">
      <div className="section-inner">
        <div className="brews-header">
          <div className="section-label reveal">Signature Collection</div>
          <h2 className="section-title reveal">
            Our <span className="gold-text">Finest</span> Brews
          </h2>
          <p className="section-subtitle reveal">
            Each brew is a masterpiece, crafted in-house by our award-winning brewmasters 
            using the finest hops, malts, and yeast.
          </p>
        </div>

        <div className="brews-grid stagger-children">
          {brews.map((brew, i) => (
            <div className="brew-card reveal" key={i}>
              <img
                src={brew.image}
                alt={brew.name}
                className="brew-card-image"
              />
              <div className="brew-card-style">{brew.style}</div>
              <h3 className="brew-card-name">{brew.name}</h3>
              <p className="brew-card-desc">{brew.desc}</p>
              <span className="brew-card-abv">{brew.abv}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

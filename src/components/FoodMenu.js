'use client';

const menuItems = [
  {
    name: 'Truffle Loaded Fries',
    desc: 'Crispy fries with truffle oil, parmesan & herbs',
    price: '₹495',
  },
  {
    name: 'Smoked BBQ Sliders',
    desc: 'Three pulled pork sliders with house-made BBQ sauce',
    price: '₹695',
  },
  {
    name: 'Honey Sriracha Wings',
    desc: 'Crispy wings glazed with sweet & spicy honey sriracha',
    price: '₹595',
  },
  {
    name: 'Brewmaster\'s Platter',
    desc: 'Artisan cheese, cured meats, olives & sourdough crostini',
    price: '₹995',
  },
  {
    name: 'Grilled Lamb Chops',
    desc: 'Herb-crusted lamb with rosemary jus & mashed potatoes',
    price: '₹1,295',
  },
  {
    name: 'Pan-Seared Salmon',
    desc: 'Atlantic salmon with lemon butter, asparagus & quinoa',
    price: '₹1,195',
  },
];

export default function FoodMenu() {
  return (
    <section className="section food-menu" id="menu">
      <div className="section-inner">
        <div className="food-grid">
          <div className="food-image-container reveal-left">
            <img src="https://res.cloudinary.com/dave3np5n/image/upload/v1773117269/IMG_1000_wumeqn.jpg" alt="Gourmet food at Quaff Brewing Co." />
            <div className="food-image-overlay" />
          </div>

          <div className="food-content">
            <div className="section-label reveal">Gastropub Cuisine</div>
            <h2 className="section-title reveal">
              Brews & <span className="gold-text">Bites</span>
            </h2>
            <p className="section-subtitle reveal" style={{ marginBottom: 'var(--space-xl)' }}>
              Chef-curated dishes designed to perfectly complement our craft brews.
            </p>

            <div className="food-items">
              {menuItems.map((item, i) => (
                <div className="food-item reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="food-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <div className="food-item-price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

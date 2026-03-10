'use client';

const events = [
  {
    date: 'Every Friday',
    title: 'Live Jazz & Blues Night',
    desc: 'Unwind with smooth jazz and soulful blues performed by the city\'s finest musicians. Pair it with our Happy Hour specials.',
    time: '8:00 PM — Late',
  },
  {
    date: 'Every Saturday',
    title: 'Brew & Beats',
    desc: 'Our resident DJ spins the best house, techno, and Bollywood remixes. Dance the night away with freshly brewed pints.',
    time: '9:00 PM — 1:00 AM',
  },
  {
    date: 'First Sunday',
    title: 'Brewmaster\'s Table',
    desc: 'An exclusive 5-course beer pairing dinner hosted by our Head Brewmaster. Limited to 20 guests — book early!',
    time: '7:00 PM — 10:00 PM',
  },
];

export default function Events() {
  return (
    <section className="section events" id="events">
      <div className="section-inner">
        <div className="section-label reveal">What&apos;s On</div>
        <h2 className="section-title reveal">
          Nights at <span className="gold-text">Quaff</span>
        </h2>
        <p className="section-subtitle reveal">
          From live music to brewmaster dinners — there&apos;s always something brewing at Quaff.
        </p>

        <div className="events-grid stagger-children">
          {events.map((event, i) => (
            <div className="event-card reveal" key={i}>
              <span className="event-date">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
              <div className="event-time">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                {event.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

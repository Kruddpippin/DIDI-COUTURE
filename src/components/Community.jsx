import './Community.css'

const partners = [
  {
    name: 'Fairways to africa',
    description: 'Bespoke golf travel. Like our clients, we are golfers. We are young-at-heart and seek unique experiences whilst playing the sport we love around the world. We believe in quality above all else, and that is what we aim to deliver.',
    href: 'https://fairwaystoafrica.com/',
  },
  {
    name: 'StartWell Foundation',
    description: "At StartWell, we're a passionate team making a measurable difference in the fight against a specific kind of malnutrition which is the leading cause of child stunting. We don't just talk about the problem – we take action by designing, producing, and delivering nutrient-rich, ready-to-eat meals directly to vulnerable communities.",
    href: 'https://startwellfoundation.org/',
  },
  {
    name: '242',
    description: "The world moves fast, but we believe there's something powerful about slowing down. A moment to take in. To connect. To be present. It's a reminder of what happens when people gather around something simple, yet made with care: coffee & connections.",
    href: 'https://www.instagram.com/twofortytwo.co/',
  },
  {
    name: 'running late club',
    description: 'The Running Late Club is a community where Everyday Athletes can find a place to belong. We cater to all paces and levels of fitness, and strive to provide the accountability and inspiration needed to reach your goals.',
    href: 'https://www.runninglateclub.com/',
  },
]

function Community() {
  return (
    <section className="community section">
      <div className="container">
        <h3 className="community__label">OUR GREATER COMMUNITY</h3>

        <div className="community__list">
          {partners.map((partner, idx) => (
            <article key={idx} className="community__item">
              <h4 className="community__name">{partner.name}</h4>
              <p className="community__desc">{partner.description}</p>
              <a
                href={partner.href}
                className="community__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="bracket">[</span>
                <span>VISIT WEBSITE</span>
                <span className="bracket">]</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Community

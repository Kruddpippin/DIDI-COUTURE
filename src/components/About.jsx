import './About.css'

function About() {
  return (
    <section className="about section">
      <div className="container about__inner">
        <div className="about__icons">
          {/* OR Monogram + Bird Icon stacked */}
          <svg className="about__icon about__icon--monogram" viewBox="0 0 60 60" xmlns="https://res.cloudinary.com/dw7fjuhra/image/upload/v1780792961/Screenshot_2026-06-07_013527_ba2x02.png">
            <path d="M30 5 C 16 5, 5 16, 5 30 C 5 44, 16 55, 30 55 C 44 55, 55 44, 55 30 C 55 16, 44 5, 30 5 Z M30 12 C 40 12, 48 20, 48 30 C 48 40, 40 48, 30 48 C 20 48, 12 40, 12 30 C 12 20, 20 12, 30 12 Z" fill="currentColor"/>
            <path d="M22 20 L 22 40 L 26 40 L 26 32 L 32 32 L 38 40 L 42 40 L 35 31 C 39 30, 42 27, 42 23 C 42 19, 39 20, 35 20 Z M26 24 L 35 24 C 37 24, 38 25, 38 26 C 38 28, 37 28, 35 28 L 26 28 Z" fill="white"/>
          </svg>

          <svg className="about__icon about__icon--bird" viewBox="0 0 100 100" xmlns="https://res.cloudinary.com/dw7fjuhra/image/upload/v1780792961/Screenshot_2026-06-07_013527_ba2x02.png">
            <ellipse cx="60" cy="35" rx="20" ry="22" fill="currentColor"/>
            <circle cx="68" cy="30" r="2" fill="white"/>
            <path d="M45 38 Q 35 45, 30 60 Q 25 70, 30 80 L 80 80 Q 85 70, 80 60 Q 75 45, 65 38 Z" fill="currentColor"/>
            <path d="M30 80 L 35 90 M 75 80 L 80 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <text x="83" y="92" fontSize="8" fill="currentColor">TM</text>
          </svg>
        </div>

        <div className="about__text">
          <p>
            Crafted from a deep appreciation for Art, culture, and individual expression, our brand is built on the belief that what we wear should reflect who we are. Every piece is designed to capture the effortless connection between style and experience—where craftsmanship, authenticity, and creativity meet. Inspired by the moments that shape us, and the stories we create, we celebrate the intersection of fashion, movement, and culture, creating garments that tell a story and leave a lasting impression.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

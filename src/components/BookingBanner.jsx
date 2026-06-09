import './BookingBanner.css'

function BookingBanner({ onBooking }) {
  return (
    <section className="booking-banner">
      <div className="booking-banner__inner container">
        <div className="booking-banner__text">
          <span className="booking-banner__eyebrow serif">Made for you, measured to perfection</span>
          <h2 className="booking-banner__heading">Book a Private Fitting</h2>
          <p className="booking-banner__desc">
            Every piece we create begins with a conversation. Reserve your session with our
            atelier team — in-person or virtually — and let us craft something made entirely for you.
          </p>
          <ul className="booking-banner__services">
            <li>Initial Consultation · Free</li>
            <li>Custom Order & Fitting</li>
            <li>Alteration & Tailoring</li>
            <li>Virtual Fitting</li>
          </ul>
        </div>
        <div className="booking-banner__cta-wrap">
          <button className="booking-banner__btn" onClick={onBooking}>
            Reserve Your Appointment
          </button>
          <span className="booking-banner__availability">
            Available Mon – Sat &nbsp;·&nbsp; 9 AM – 5 PM
          </span>
        </div>
      </div>
    </section>
  )
}

export default BookingBanner

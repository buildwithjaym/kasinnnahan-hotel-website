
"use client";

import {
  useState,
  useEffect,
  type CSSProperties,
  type FormEvent,
} from "react";

const rooms = [
  {
    name: "Deluxe Room",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85",
    description: "A welcoming space to unwind and enjoy a comfortable stay.",
    detail: "Comfort · Relaxation",
  },
  {
    name: "Family Room",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=85",
    description: "A place to reconnect and make memories with loved ones.",
    detail: "Togetherness · Comfort",
  },
  {
    name: "Premium Stay",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=85",
    description: "A relaxing retreat for your next special getaway.",
    detail: "Relaxation · Escape",
  },
];

const experiences = [
  {
    number: "01",
    title: "Relax & Unwind",
    description:
      "Take a break from the everyday and make time for yourself.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    title: "Celebrate Together",
    description:
      "Bring your favorite people together for moments worth remembering.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    title: "Make It Special",
    description:
      "Start planning your next gathering, celebration, or special occasion.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85",
  },
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    alt: "Tropical resort and hotel exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
    alt: "Comfortable hotel bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85",
    alt: "Event and celebration venue",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85",
    alt: "Resort swimming pool",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
    alt: "Special event arrangement",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Any available room");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [bookingMessage, setBookingMessage] = useState("");
  const [contactMessage, setContactMessage] = useState("");

 const [today, setToday] = useState("");
const [currentYear, setCurrentYear] = useState<number | null>(null);

useEffect(() => {
  const now = new Date();

  // Format the local date as YYYY-MM-DD for date inputs.
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  setToday(`${year}-${month}-${day}`);
  setCurrentYear(year);
}, []);

  function handleBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (checkOut <= checkIn) {
      setBookingMessage("Check-out must be later than check-in.");
      return;
    }

    setBookingMessage(
      `Your inquiry: ${selectedRoom}, ${guests} guest(s), ${checkIn} to ${checkOut}. Please contact Kasinnahan to confirm availability. This is not a confirmed reservation.`,
    );
  }

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setContactMessage(
      "Thank you for your interest! This demo form is not connected to a server yet, so your message has not been sent.",
    );
  }

  function selectRoom(room: string) {
    setSelectedRoom(room);
    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* Navigation */}
      <header className="site-header">
        <div className="container navbar">
          <a
            className="brand"
            href="#home"
            aria-label="Kasinnahan Hotel and Resort home"
            onClick={closeMenu}
          >
            <img
              className="brand-logo"
              src="/logo.jpg"
              alt="Kasinnahan emblem"
            />

            <span className="brand-copy">
              <span className="brand-name">KASINNAHAN</span>
              <span className="brand-tagline">HOTEL &amp; RESORT</span>
            </span>
          </a>

          <nav
            id="main-navigation"
            className={`nav-links ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>Our Story</a>
            <a href="#rooms" onClick={closeMenu}>Accommodation</a>
            <a href="#experiences" onClick={closeMenu}>Experiences</a>
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <a
              href="#booking"
              className="btn btn-primary mobile-booking"
              onClick={closeMenu}
            >
              Make an Inquiry <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <a href="#booking" className="btn btn-primary nav-booking">
            Book Your Stay <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero hero-premium" id="home">
          <div className="hero-decoration" aria-hidden="true" />

          <div className="container hero-container">
            <div className="hero-content hero-entrance">
              <span className="hero-kicker">
                <span className="hero-kicker-line" />
                YOUR ESCAPE IN ISABELA CITY, BASILAN
              </span>

              <h1>
                Where every
                <br />
                moment feels
                <br />
                <em>like a celebration.</em>
              </h1>

              <p className="hero-description">
                Find your moment of relaxation. Gather your favorite
                people. Celebrate the memories that matter at
                Kasinnahan Hotel &amp; Resort.
              </p>

              <div className="hero-actions">
                <a href="#booking" className="btn btn-hero-primary">
                  Discover Your Stay
                  <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>

                <a href="#experiences" className="hero-secondary-link">
                  Explore the resort
                  <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="hero-location">
                <span className="location-dot" />
                <span>ISABELA CITY · BASILAN · PHILIPPINES</span>
              </div>
            </div>

            <a href="#about" className="hero-scroll" aria-label="Scroll to discover">
              <span>SCROLL TO DISCOVER</span>
              <span className="hero-scroll-line" />
            </a>
          </div>

          <div className="hero-bottom-label" aria-hidden="true">
            KASINNAHAN <span>·</span> YOUR MOMENTS, OUR PLEASURE
          </div>
        </section>

        {/* Booking panel */}
        <section className="booking-section booking-premium" id="booking">
          <div className="container">
            <form className="booking-card" onSubmit={handleBooking}>
              <div className="booking-intro">
                <span className="booking-mini-label">PLAN YOUR VISIT</span>
                <h2>Stay a little longer.</h2>
              </div>

              <div className="field">
                <label htmlFor="checkin">Check-in</label>
                <input
                  id="checkin"
                  type="date"
                  min={today}
                  value={checkIn}
                  required
                  onChange={(event) => {
                    setCheckIn(event.target.value);
                    setBookingMessage("");

                    if (
                      checkOut &&
                      event.target.value >= checkOut
                    ) {
                      setCheckOut("");
                    }
                  }}
                />
              </div>

              <div className="field">
                <label htmlFor="checkout">Check-out</label>
                <input
                  id="checkout"
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  required
                  onChange={(event) => {
                    setCheckOut(event.target.value);
                    setBookingMessage("");
                  }}
                />
              </div>

              <div className="field">
                <label htmlFor="room">Your accommodation</label>
                <select
                  id="room"
                  value={selectedRoom}
                  onChange={(event) => {
                    setSelectedRoom(event.target.value);
                    setBookingMessage("");
                  }}
                >
                  <option>Any available room</option>
                  {rooms.map((room) => (
                    <option key={room.name}>{room.name}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="guests">Guests</label>
                <select
                  id="guests"
                  value={guests}
                  onChange={(event) => {
                    setGuests(event.target.value);
                    setBookingMessage("");
                  }}
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5+">5+ guests</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary booking-submit">
                Check Availability <span aria-hidden="true">→</span>
              </button>
            </form>

            <p className="form-message" role="status" aria-live="polite">
              {bookingMessage}
            </p>
          </div>
        </section>

        {/* About */}
        <section className="section about-premium" id="about">
          <div className="container intro-grid">
            <div className="about-visual">
              <div className="about-main-image">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
                  alt="Tropical hotel and resort"
                  loading="lazy"
                />
              </div>

              <div className="about-image-note">
                <span className="about-note-mark">K.</span>
                <span>
                  <strong>A place to belong.</strong>
                  <small>A moment to remember.</small>
                </span>
              </div>

              <div className="about-image-outline" aria-hidden="true" />
            </div>

            <div className="intro-copy about-copy">
              <span className="eyebrow">The Kasinnahan experience</span>

              <h2>
                A little escape.
                <br />
                <em className="about-emphasis">A lot of memories.</em>
              </h2>

              <p>
                Some places are more than destinations. They are
                where families reconnect, friends celebrate, and
                everyday moments become stories worth keeping.
              </p>

              <p>
                At Kasinnahan Hotel &amp; Resort, we invite you to
                discover a welcoming destination in Isabela City,
                Basilan, for your stay and special occasions.
              </p>

              <div className="about-values">
                <div>
                  <span className="value-number">01</span>
                  <span>
                    <strong>Relax</strong>
                    <small>Make time for yourself.</small>
                  </span>
                </div>

                <div>
                  <span className="value-number">02</span>
                  <span>
                    <strong>Reconnect</strong>
                    <small>Be with your favorite people.</small>
                  </span>
                </div>

                <div>
                  <span className="value-number">03</span>
                  <span>
                    <strong>Celebrate</strong>
                    <small>Make moments meaningful.</small>
                  </span>
                </div>
              </div>

              <a href="#experiences" className="btn btn-primary">
                Discover Our Experiences <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Accommodation */}
        <section className="section section-soft rooms-premium" id="rooms">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Your stay, your way</span>
              <h2>Find your place to unwind.</h2>
              <p>
                Explore our sample accommodation categories and
                contact the resort to confirm actual room types,
                amenities, rates, and availability.
              </p>
            </div>

            <div className="rooms-grid">
              {rooms.map((room, index) => (
                <article className="room-card room-card-premium" key={room.name}>
                  <div className="room-image">
                    <img src={room.image} alt={room.name} loading="lazy" />
                    <span className="room-index">
                      0{index + 1} <span>/ 03</span>
                    </span>
                  </div>

                  <div className="room-body">
                    <span className="room-category">{room.detail}</span>
                    <h3>{room.name}</h3>
                    <p>{room.description}</p>

                    <button
                      type="button"
                      className="text-link room-link"
                      onClick={() => selectRoom(room.name)}
                    >
                      Inquire about this room <span aria-hidden="true">↗</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <p className="section-footnote">
              Accommodation images are illustrative. Please confirm
              available room categories directly with the resort.
            </p>
          </div>
        </section>

        {/* Experiences */}
        <section className="section experiences-premium" id="experiences">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Make it memorable</span>
              <h2>Every reason to celebrate.</h2>
              <p>
                A relaxing escape, a family gathering, or a day worth
                remembering. Let your next occasion begin here.
              </p>
            </div>

            <div className="experience-grid">
              {experiences.map((experience) => (
                <a
                  className="experience-card experience-card-premium"
                  href="#contact"
                  key={experience.number}
                  style={
                    {
                      "--card-image": `url("${experience.image}")`,
                    } as CSSProperties
                  }
                >
                  <span className="experience-number">
                    {experience.number}
                  </span>

                  <div className="experience-content">
                    <span className="experience-overline">
                      THE KASINNAHAN EXPERIENCE
                    </span>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                    <span className="experience-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section section-soft gallery-premium" id="gallery">
          <div className="container">
            <div className="gallery-heading">
              <div className="section-heading">
                <span className="eyebrow">A glimpse of the experience</span>
                <h2>Moments worth remembering.</h2>
                <p>
                  Explore a visual mood board for your next visit.
                  These sample images can be replaced with real
                  Kasinnahan property photographs.
                </p>
              </div>

              <a href="#contact" className="text-link gallery-contact">
                Plan your visit <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="gallery-grid gallery-premium-grid">
              {gallery.map((photo, index) => (
                <a
                  href={photo.src}
                  target="_blank"
                  rel="noreferrer"
                  className={`gallery-item gallery-item-${index + 1}`}
                  key={photo.alt}
                  aria-label={`Open image: ${photo.alt}`}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <span className="gallery-image-label">
                    KASINNAHAN <span>↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="cta-section cta-premium">
          <div className="cta-inner">
            <span className="eyebrow">Your moment starts here</span>
            <h2>
              Let the good
              <br />
              moments happen.
            </h2>
            <p>
              Start planning your next stay or celebration at
              Kasinnahan Hotel &amp; Resort.
            </p>
            <a href="#contact" className="btn btn-hero-primary">
              Let&apos;s Plan Your Visit <span aria-hidden="true">↗</span>
            </a>
          </div>
          <span className="cta-watermark" aria-hidden="true">K.</span>
        </section>

        {/* Contact */}
        <section className="section contact-premium" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="eyebrow">We are here for you</span>
              <h2>
                Let&apos;s make
                <br />
                something memorable.
              </h2>

              <p>
                Have questions about accommodation, resort experiences,
                or an upcoming event? Tell us what you have in mind.
              </p>

              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">⌖</span>
                <div>
                  <strong>Visit Kasinnahan</strong>
                  <span>Isabela City, Basilan, Philippines</span>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon" aria-hidden="true">✳</span>
                <div>
                  <strong>Reservations &amp; celebrations</strong>
                  <span>
                    Contact the resort to discuss your preferred dates,
                    accommodation, or event requirements.
                  </span>
                </div>
              </div>
            </div>

            <form className="contact-form contact-form-premium" onSubmit={handleContact}>
              <div className="contact-form-heading">
                <span className="booking-mini-label">GET IN TOUCH</span>
                <h3>Send us an inquiry.</h3>
                <p>Share a few details and tell us how we can help.</p>
              </div>

              <div className="field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="field field-full">
                <label htmlFor="subject">Inquiry type</label>
                <select id="subject" name="subject" defaultValue="Accommodation">
                  <option>Accommodation</option>
                  <option>Resort experience</option>
                  <option>Events and celebrations</option>
                  <option>General inquiry</option>
                </select>
              </div>

              <div className="field field-full">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your plans..."
                  required
                />
              </div>

              <div className="field field-full">
                <button type="submit" className="btn btn-primary contact-submit">
                  Send Inquiry <span aria-hidden="true">↗</span>
                </button>

                <p className="form-message" role="status" aria-live="polite">
                  {contactMessage}
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer footer-premium">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <a href="#home" className="brand footer-brand">
                <img src="/logo.jpg" alt="Kasinnahan logo" />
                <span className="brand-copy">
                  <span className="brand-name">KASINNAHAN</span>
                  <span className="brand-tagline">HOTEL &amp; RESORT</span>
                </span>
              </a>

              <p>
                Where life&apos;s moments are happily celebrated.
                Your destination for stays and special occasions
                in Isabela City, Basilan.
              </p>
            </div>

            <div>
              <h3>Discover</h3>
              <div className="footer-links">
                <a href="#about">Our Story</a>
                <a href="#rooms">Accommodation</a>
                <a href="#experiences">Experiences</a>
                <a href="#gallery">Gallery</a>
              </div>
            </div>

            <div>
              <h3>Plan Your Visit</h3>
              <div className="footer-links">
                <a href="#booking">Booking Inquiry</a>
                <a href="#contact">Contact Us</a>
                <a href="#experiences">Events &amp; Celebrations</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
            © {currentYear ?? ""} Kasinnahan Hotel &amp; Resort.
              All rights reserved.
            </span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </>
  );
}

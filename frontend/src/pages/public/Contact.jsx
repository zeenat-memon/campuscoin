function Contact() {
  return (
    <section className="simple-page">

      <div className="simple-container">

        <span className="section-label">CONTACT</span>

        <h1>Get in Touch</h1>

        <p>
          Have a question about Campus Coin? Send us a message.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;

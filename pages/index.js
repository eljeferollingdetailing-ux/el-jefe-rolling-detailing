export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVIGATION BAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #D4AF37",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png"
            alt="El Jefe Rolling Detailing Logo"
            style={{ height: "50px" }}
          />
          <strong style={{ color: "#D4AF37", fontSize: "18px" }}>
            El Jefe Rolling Detailing
          </strong>
        </div>

        {/* Navigation Links */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#contact" style={linkStyle}>Contact</a>

          {/* Booking Button */}
          <a href="#booking" style={buttonStyle}>
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={{ padding: "80px 40px", textAlign: "center" }}>
        <h1 style={{ color: "#D4AF37", fontSize: "42px" }}>
          El Jefe Rolling Detailing
        </h1>
        <p style={{ fontSize: "20px", marginTop: "10px" }}>
          We Bring the Shine to You
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "60px 40px" }}>
        <h2 style={{ color: "#D4AF37" }}>Services</h2>
        <ul>
          <li>Exterior Detail (60 minutes)</li>
          <li>Interior Detail (90 minutes)</li>
          <li>Full Detail Package (150 minutes)</li>
        </ul>
      </section>

      {/* BOOKING FORM */}
      <section
        id="booking"
        style={{
          padding: "60px 40px",
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#D4AF37" }}>Book Your Detail</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "✅ Booking received! We will contact you shortly."
            );
          }}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="date" required style={inputStyle} />

          <select required style={inputStyle}>
            <option value="">Select a Service</option>
            <option>Exterior Detail</option>
            <option>Interior Detail</option>
            <option>Full Detail Package</option>
          </select>

          <button type="submit" style={buttonStyle}>
            Submit Booking
          </button>
        </form>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px 40px", textAlign: "center" }}>
        <h2 style={{ color: "#D4AF37" }}>Contact</h2>
        <p>
          <a href="tel:15598608139" style={{ color: "#D4AF37" }}>
            (559) 860‑8139
          </a>
        </p>
      </section>
    </div>
  );
}

/* Styles */
const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
};

const buttonStyle = {
  backgroundColor: "#D4AF37",
  color: "#000000",
  padding: "10px 18px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #D4AF37",
  backgroundColor: "#000000",
  color: "#ffffff",
};
``

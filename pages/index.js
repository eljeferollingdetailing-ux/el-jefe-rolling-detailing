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

      {/* BOOKING */}
      <section id="booking" style={{ padding: "60px 40px" }}>
        <h2 style={{ color: "#D4AF37" }}>Book Your Detail</h2>
        <p>
          To book an appointment, call or text us:
        </p>
        <p style={{ fontSize: "20px" }}>
          <a
            href="tel:15598608139"
            style={{ color: "#D4AF37", textDecoration: "none" }}
          >
            (559) 860‑8139
          </a>
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "60px 40px" }}>
        <h2 style={{ color: "#D4AF37" }}>Contact</h2>
        <p>
          Mobile service — we come to you.
        </p>
      </section>
    </div>
  );
}

/* Styles */
const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontSize: "16px",
};

const buttonStyle = {
  backgroundColor: "#D4AF37",
  color: "#000000",
  padding: "10px 18px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold",
};

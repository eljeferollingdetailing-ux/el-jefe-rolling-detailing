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
      <nav style={navStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="/logo.png" alt="Logo" style={{ height: "50px" }} />
          <strong style={{ color: "#D4AF37" }}>
            El Jefe Rolling Detailing
          </strong>
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#booking" style={buttonStyle}>Book Now</a>
        </div>
      </nav>

      {/* HERO */}
   <section id="home" style={{ padding: "80px 40px", textAlign: "center" }}>

  {/* BIG CENTER LOGO */}
  <img
    src="/logo.png"
    alt="El Jefe Rolling Detailing Logo"
    style={{
      width: "220px",
      marginBottom: "20px"
    }}
  />

  {/* Business Name */}
  <h1 style={{ color: "#D4AF37", fontSize: "38px" }}>
    El Jefe Rolling Detailing
  </h1>

  {/* Tagline */}
  <p style={{ fontSize: "20px", marginTop: "10px" }}>
    We Bring the Shine to You
  </p>

</section>
      {/* SERVICES */}
      <section id="services" style={sectionStyle}>
        <h2 style={{ color: "#D4AF37" }}>Services</h2>
        <ul>
          <li>Exterior Detail (60 minutes)</li>
          <li>Interior Detail (90 minutes)</li>
          <li>Full Detail Package (150 minutes)</li>
        </ul>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" style={sectionStyle}>
        <h2 style={{ color: "#D4AF37" }}>Book Your Detail</h2>

        <form
          action="https://formspree.io/f/meenrlpz"
          method="POST"
          style={formStyle}
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
          />

          <input
            name="date"
            type="date"
            required
            style={inputStyle}
          />

          <select name="service" required style={inputStyle}>
            <option value="">Select a Service</option>
            <option>Exterior Detail</option>
            <option>Interior Detail</option>
            <option>Full Detail Package</option>
          </select>

          <button type="submit" style={buttonStyle}>
            Submit Booking
          </button>
        </form>

        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          $50 booking fee required (non-refundable)
        </p>
      </section>

      {/* CONTACT */}
      <section style={sectionStyle}>
        <h2 style={{ color: "#D4AF37" }}>Contact</h2>
        <a href="tel:15598608139" style={{ color: "#D4AF37" }}>
          (559) 860-8139
        </a>
      </section>
    </div>
  );
}

/* STYLES */
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 40px",
  borderBottom: "1px solid #D4AF37",
};

const sectionStyle = {
  padding: "60px 40px",
  textAlign: "center",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  maxWidth: "400px",
  margin: "0 auto",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
};

const buttonStyle = {
  backgroundColor: "#D4AF37",
  color: "#000000",
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  fontWeight: "bold",
};

const inputStyle = {
  padding: "12px",
  border: "1px solid #D4AF37",
  borderRadius: "6px",
  backgroundColor: "#000000",
  color: "#ffffff",
};

export default function Home() {
  return (
    <div style={{
      backgroundColor: "#000000",
      color: "#ffffff",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
    }}>

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

      {/* HERO SECTION */}
      <section
        id="home"
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
        }} />

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 2,
          animation: "fadeIn 1.5s ease-in-out",
        }}>

          {/* LOGO */}
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: "260px",
              marginBottom: "20px",
              filter: "drop-shadow(0 0 20px #D4AF37)",
            }}
          />

          <h1 style={{ color: "#D4AF37", fontSize: "42px" }}>
            El Jefe Rolling Detailing
          </h1>

          <p style={{ fontSize: "20px", marginTop: "10px" }}>
            We Bring the Shine to You
          </p>
        </div>
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
  name="phone"
  type="tel"
  placeholder="Your Phone Number"
  required
  style={inputStyle}
/>

<input
  name="_replyto"
  type="email"
  placeholder="Your Email"
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
          $25 booking fee required (non-refundable)
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

/* FADE ANIMATION */
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);
}

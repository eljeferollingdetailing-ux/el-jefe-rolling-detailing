export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.png"
        alt="El Jefe Rolling Detailing Logo"
        style={{ maxWidth: "180px", marginBottom: "20px" }}
      />

      {/* Business Name */}
      <h1 style={{ color: "#D4AF37", marginBottom: "10px" }}>
        El Jefe Rolling Detailing
      </h1>

      {/* Tagline */}
      <p style={{ fontSize: "18px", marginBottom: "40px" }}>
        We Bring the Shine to You
      </p>

      {/* Services */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#D4AF37" }}>Mobile Auto Detailing</h2>
        <p>
          Professional mobile detailing services delivered to your home or
          workplace.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#D4AF37" }}>Services</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Exterior Detail (60 minutes)</li>
          <li>Interior Detail (90 minutes)</li>
          <li>Full Detail Package (150 minutes)</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 style={{ color: "#D4AF37" }}>Contact</h2>
        <p>
          Call or text:{" "}
          <a
            href="tel:15598608139"
            style={{ color: "#D4AF37", textDecoration: "none" }}
          >
            (559) 860‑8139
          </a>
        </p>
      </section>
    </div>
  );
}

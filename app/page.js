
export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#000', color: '#fff' }}>
      <header style={{ padding: '20px', borderBottom: '2px solid #D4AF37' }}>
        <h1>El Jefe Rolling Detailing</h1>
        <p>We Bring the Shine to You</p>
      </header>

      <section style={{ padding: '40px' }}>
        <h2 style={{ color: '#D4AF37' }}>Premium Mobile Auto Detailing</h2>
        <p>Professional detailing services delivered to your home or workplace.</p>
      </section>

      <section style={{ padding: '40px' }}>
        <h2 style={{ color: '#D4AF37' }}>Services</h2>
        <ul>
          <li>Exterior Detail (60 min)</li>
          <li>Interior Detail (90 min)</li>
          <li>Full Detail Package (150 min)</li>
        </ul>
      </section>

      <section style={{ padding: '40px' }}>
        <h2 style={{ color: '#D4AF37' }}>Booking & Payments</h2>
        <p>A $50 non-refundable booking fee is required.</p>
        <p>Accepted payment methods:</p>
        <ul>
          <li>Zelle: (559) 860-8139</li>
          <li>Apple Pay: (559) 860-8139</li>
          <li>Cash App: Details sent by text</li>
        </ul>
        <p>Call or text: <a href="tel:15598608139" style={{ color: '#D4AF37' }}>(559) 860-8139</a></p>
      </section>

      <section style={{ padding: '40px' }}>
        <h2 style={{ color: '#D4AF37' }}>Service Areas</h2>
        <p>Visalia, Tulare, Hanford, Porterville, Fresno</p>
      </section>

      <section style={{ padding: '40px' }}>
        <h2 style={{ color: '#D4AF37' }}>Before & After Gallery</h2>
        <p>Upload photos to /public/gallery</p>
      </section>

      <footer style={{ padding: '20px', borderTop: '2px solid #D4AF37', textAlign: 'center' }}>
        © 2026 El Jefe Rolling Detailing
      </footer>
    </main>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#fff',
      padding: '40px 24px',
      marginTop: 'auto',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px',
          marginBottom: '32px',
        }}>
          {/* About Section */}
          <div>
            <h4 style={{ marginTop: 0, marginBottom: '16px', fontSize: '16px' }}>About Prop House</h4>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, opacity: 0.8 }}>
              We're dedicated to bringing nature into your home with beautiful, healthy houseplants and expert care advice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginTop: 0, marginBottom: '16px', fontSize: '16px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', opacity: 0.8 }}>Home</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/products" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', opacity: 0.8 }}>Shop Plants</a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="/cart" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', opacity: 0.8 }}>Cart</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ marginTop: 0, marginBottom: '16px', fontSize: '16px' }}>Contact</h4>
            <p style={{ fontSize: '14px', margin: '0 0 8px 0', opacity: 0.8 }}>
              Email: info@prophouse.com
            </p>
            <p style={{ fontSize: '14px', margin: '0 0 8px 0', opacity: 0.8 }}>
              Phone: (555) 123-4567
            </p>
            <p style={{ fontSize: '14px', margin: 0, opacity: 0.8 }}>
              Hours: Mon-Fri 9AM-6PM PST
            </p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid #333', paddingTop: '24px' }}>
          <p style={{ textAlign: 'center', fontSize: '14px', opacity: 0.7, margin: 0 }}>
            &copy; {currentYear} Prop House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

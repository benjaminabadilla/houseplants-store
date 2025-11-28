import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '80vh',
      backgroundImage: 'linear-gradient(135deg, #2d5016 0%, #4a7c2c 100%)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px', fontWeight: 'bold' }}>
          🌿 Houseplants Store
        </h1>
        
        <p style={{ fontSize: '18px', marginBottom: '24px', lineHeight: '1.6' }}>
          Welcome to the premier destination for beautiful houseplants! We are dedicated to bringing nature into your home with a carefully curated selection of healthy, vibrant plants. Whether you're a seasoned plant parent or just beginning your green journey, we have the perfect plant for you.
        </p>

        <p style={{ fontSize: '14px', marginBottom: '32px', opacity: 0.95, lineHeight: '1.6' }}>
          Our mission is to make plant care accessible and enjoyable for everyone. We offer expert advice, premium quality plants, and fast shipping right to your door.
        </p>

        <Link to="/products">
          <button style={{
            padding: '14px 32px',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            color: '#2d5016',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
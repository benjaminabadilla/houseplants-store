import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '80vh',
      backgroundImage: 'url("https://ca-times.brightspotcdn.com/dims4/default/618f987/2147483647/strip/true/crop/3220x2146+0+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff7%2F38%2F5e5bf77448c7aae5a7dcd2e735f1%2F1318578-wk-plant-ppl-prop-house-018.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      position: 'relative',
    }}>
      {/* Dark overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
      }} />

      <div style={{ maxWidth: '600px', position: 'relative', zIndex: 2 }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '12px',
          marginBottom: '24px',
        }}>
          <h1 style={{ fontSize: '48px', margin: '0 0 16px 0', fontWeight: 'bold' }}>
            🌿 Prop House
          </h1>
        </div>
        
        <p style={{ fontSize: '18px', marginBottom: '24px', lineHeight: '1.6' }}>
          Welcome to Prop House, your premier destination for beautiful houseplants! We are dedicated to bringing nature into your home with a carefully curated selection of healthy, vibrant plants.
        </p>

        <p style={{ fontSize: '14px', marginBottom: '32px', opacity: 0.95, lineHeight: '1.6' }}>
          Whether you're a seasoned plant parent or just beginning your green journey, we have the perfect plant for you. Our mission is to make plant care accessible and enjoyable for everyone.
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
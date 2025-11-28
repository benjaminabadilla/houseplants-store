import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import CartItem from '../../components/CartItem/CartItem';

export default function CartPage() {
  const [showCheckoutMessage, setShowCheckoutMessage] = useState(false);
  const { items, totalQuantity, totalPrice } = useSelector((state: RootState) => state.cart);

  const handleCheckout = () => {
    setShowCheckoutMessage(true);
    setTimeout(() => setShowCheckoutMessage(false), 3000);
  };

  if (items.length === 0) {
    return (
      <div style={{ padding: '40px 16px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ marginBottom: '16px' }}>Your Cart is Empty</h2>
        <p style={{ marginBottom: '24px', color: '#666' }}>Start shopping to add items to your cart.</p>
        <Link to="/products">
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#2d5016',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
          }}>
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '32px 16px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px' }}>Shopping Cart</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 300px',
        gap: '32px',
        marginBottom: '32px',
      }}>
        <div>
          <h2 style={{ marginTop: 0, marginBottom: '16px', fontSize: '18px' }}>Cart Items ({totalQuantity})</h2>
          <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#fff',
          }}>
            {items.map(item => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                image={item.image}
              />
            ))}
          </div>

          <Link to="/products">
            <button style={{
              marginTop: '20px',
              padding: '12px 24px',
              backgroundColor: '#2d5016',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold',
            }}>
              Continue Shopping
            </button>
          </Link>
        </div>

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #ddd',
          height: 'fit-content',
        }}>
          <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Order Summary</h3>

          <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #ddd' }}>
            <span>Total Items:</span>
            <strong>{totalQuantity}</strong>
          </div>

          <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold', color: '#2d5016' }}>
            <span>Total Price:</span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>

          <button
            onClick={handleCheckout}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#2d5016',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '12px',
            }}
          >
            Checkout
          </button>

          {showCheckoutMessage && (
            <div style={{
              padding: '12px',
              backgroundColor: '#e8f5e9',
              color: '#2e7d32',
              borderRadius: '4px',
              textAlign: 'center',
              fontSize: '14px',
            }}>
              ✓ Coming Soon
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
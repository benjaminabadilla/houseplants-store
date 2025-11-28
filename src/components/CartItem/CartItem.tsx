import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../../redux/cartSlice';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CartItem({ id, name, price, quantity, image }: CartItemProps) {
  const dispatch = useDispatch();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px',
      borderBottom: '1px solid #eee',
      backgroundColor: '#f9f9f9',
    }}>
      <img src={image} alt={name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '4px' }} />
      
      <div style={{ flex: 1 }}>
        <h4 style={{ marginTop: 0, marginBottom: '4px' }}>{name}</h4>
        <p style={{ marginTop: 0, marginBottom: '8px', color: '#666' }}>${price.toFixed(2)} each</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={() => dispatch(decrement(id))}
          style={{
            width: '32px',
            height: '32px',
            padding: 0,
            borderRadius: '4px',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          −
        </button>
        <span style={{ minWidth: '30px', textAlign: 'center', fontWeight: 'bold' }}>{quantity}</span>
        <button
          onClick={() => dispatch(increment(id))}
          style={{
            width: '32px',
            height: '32px',
            padding: 0,
            borderRadius: '4px',
            border: '1px solid #ddd',
            backgroundColor: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          +
        </button>
      </div>

      <div style={{ minWidth: '100px', textAlign: 'right' }}>
        <p style={{ marginTop: 0, marginBottom: '8px', fontWeight: 'bold', fontSize: '16px' }}>
          ${(price * quantity).toFixed(2)}
        </p>
        <button
          onClick={() => dispatch(removeItem(id))}
          style={{
            padding: '6px 12px',
            backgroundColor: '#d9534f',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
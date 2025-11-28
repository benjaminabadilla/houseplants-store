import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export default function ProductCard({ id, name, price, image, description }: ProductCardProps) {
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isInCart = cartItems.some(item => item.id === id);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      name,
      price,
      category: 'Plants',
      image,
      description,
    }));
    setIsAdded(true);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <img src={image} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3 style={{ marginTop: '12px', marginBottom: '8px' }}>{name}</h3>
      {description && <p style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>{description}</p>}
      <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#2d5016', marginBottom: '12px' }}>${price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        disabled={isAdded || isInCart}
        style={{
          padding: '10px 16px',
          backgroundColor: isAdded || isInCart ? '#ccc' : '#2d5016',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: isAdded || isInCart ? 'not-allowed' : 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        {isAdded || isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}
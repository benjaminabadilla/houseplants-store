import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { FiShoppingCart } from 'react-icons/fi';

export default function Header() {
  const totalQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: '#2d5016',
      color: '#fff',
      borderBottom: '1px solid #1a3009',
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>🌿 Houseplants Store</h1>
      </Link>

      <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>
          Home
        </Link>
        <Link to="/products" style={{ color: '#fff', textDecoration: 'none', fontSize: '14px' }}>
          Products
        </Link>
        <Link to="/cart" style={{ position: 'relative', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FiShoppingCart size={20} />
          <span>Cart</span>
          {totalQuantity > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              backgroundColor: '#d9534f',
              color: '#fff',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>
              {totalQuantity}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
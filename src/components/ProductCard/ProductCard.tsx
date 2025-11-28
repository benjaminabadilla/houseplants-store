interface ProductCardProps {
  id?: number;
  name?: string;
  price?: number;
  image?: string;
}

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '4px' }}>
      <h3>{name || 'Product'}</h3>
      <p>${price || 0}</p>
      <button>Add to Cart</button>
    </div>
  );
}
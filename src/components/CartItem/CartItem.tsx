interface CartItemProps {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
}

export default function CartItem({ name, price, quantity }: CartItemProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid #eee' }}>
      <span>{name || 'Item'}</span>
      <span>Qty: {quantity || 1}</span>
      <span>${(price || 0) * (quantity || 1)}</span>
    </div>
  );
}
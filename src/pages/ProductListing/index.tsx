import { useMemo } from 'react';
import { plants } from '../../data/plants';
import ProductCard from '../../components/ProductCard/ProductCard';

export default function ProductListing() {
  const groupedByCategory = useMemo(() => {
    const grouped: Record<string, typeof plants> = {};
    plants.forEach(plant => {
      if (!grouped[plant.category]) {
        grouped[plant.category] = [];
      }
      grouped[plant.category].push(plant);
    });
    return grouped;
  }, []);

  return (
    <div style={{ padding: '32px 16px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '32px', textAlign: 'center' }}>Our Houseplants Collection</h1>

      {Object.entries(groupedByCategory).map(([category, categoryPlants]) => (
        <div key={category} style={{ marginBottom: '48px' }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#2d5016',
            marginBottom: '20px',
            paddingBottom: '8px',
            borderBottom: '2px solid #2d5016',
          }}>
            {category}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '32px',
          }}>
            {categoryPlants.map(plant => (
              <ProductCard
                key={plant.id}
                id={plant.id}
                name={plant.name}
                price={plant.price}
                image={plant.image}
                description={plant.description}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
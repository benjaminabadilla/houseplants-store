export interface Plant {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 45.99,
    category: 'Indoor',
    image: 'https://growurban.uk/cdn/shop/articles/care-guide-monstera-deliciosa-668092_680bbf00-9564-4f0c-b9cb-27ededaf19d2.jpg?v=1748436514&width=2048',
    description: 'Large leafy plant with distinctive holes',
  },
  {
    id: 2,
    name: 'Pothos',
    price: 24.99,
    category: 'Indoor',
    image: 'https://www.marthastewart.com/thmb/9etIquryA7k90xAxOOOwAVZMA60=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2170686151-675aeaba15364e1c876dc485f7e6d8d8.jpg',
    description: 'Trailing houseplant, easy to care for',
  },
  {
    id: 3,
    name: 'Jade Plant',
    price: 35.99,
    category: 'Succulents',
    image: 'https://cdn.shopify.com/s/files/1/0043/3628/7813/files/beautiful_jade_plant_480x480.jpg?v=1742292476',
    description: 'Thick-leaved succulent',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 19.99,
    category: 'Succulents',
    image: 'https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/04/aloe-vera-GettyImages-1473547826-Header-1024x575.jpg',
    description: 'Low maintenance succulent with gel leaves',
  },
  {
    id: 5,
    name: 'Snake Plant',
    price: 29.99,
    category: 'Low Light',
    image: 'https://stacyling.com/wp-content/uploads/2023/01/snake-plants-750x1000.jpg',
    description: 'Tall architectural plant, tolerates low light',
  },
  {
    id: 6,
    name: 'Spider Plant',
    price: 22.99,
    category: 'Indoor',
    image: 'https://i0.wp.com/www.gardening4joy.com/wp-content/uploads/2021/01/Caring-for-spider-plants-Main.jpg?fit=1200%2C1004&ssl=1',
    description: 'Classic houseplant with cascading leaves',
  },
];

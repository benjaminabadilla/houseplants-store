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
    image: 'https://via.placeholder.com/150?text=Monstera',
    description: 'Large leafy plant with distinctive holes',
  },
  {
    id: 2,
    name: 'Pothos',
    price: 24.99,
    category: 'Indoor',
    image: 'https://via.placeholder.com/150?text=Pothos',
    description: 'Trailing houseplant, easy to care for',
  },
  {
    id: 3,
    name: 'Jade Plant',
    price: 35.99,
    category: 'Succulents',
    image: 'https://via.placeholder.com/150?text=Jade',
    description: 'Thick-leaved succulent',
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 19.99,
    category: 'Succulents',
    image: 'https://via.placeholder.com/150?text=Aloe',
    description: 'Low maintenance succulent with gel leaves',
  },
  {
    id: 5,
    name: 'Snake Plant',
    price: 29.99,
    category: 'Low Light',
    image: 'https://via.placeholder.com/150?text=SnakePlant',
    description: 'Tall architectural plant, tolerates low light',
  },
  {
    id: 6,
    name: 'Spider Plant',
    price: 22.99,
    category: 'Indoor',
    image: 'https://via.placeholder.com/150?text=Spider',
    description: 'Classic houseplant with cascading leaves',
  },
];

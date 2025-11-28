# 🌿 Prop House - Houseplants Store

A modern React e-commerce application for selling beautiful houseplants. Built with React, Redux, React Router, TypeScript, and Vite for the IBM Developing Front-End Apps with React Coursera assignment.

## 🎯 Features

- **Landing Page** — Beautiful hero section with company information and call-to-action button
- **Product Listing** — Browse 6 unique houseplants organized by 3+ categories (Indoor, Succulents, Low Light)
- **Shopping Cart** — Full cart management with add, remove, increment, and decrement functionality
- **State Management** — Redux Toolkit for global cart state management
- **Responsive Design** — Mobile-friendly layout using CSS Grid and Flexbox
- **Navigation** — React Router for seamless page transitions

## 📋 Assignment Requirements (50 Points / 19 Tasks)

### ✅ Completed Criteria:

**Landing Page (5 pts)**
- Background image with dark overlay
- Company name: "Prop House"
- Company mission paragraphs
- "Get Started" button linking to products page

**Product Listing (9 pts)**
- 6 unique houseplants with real product images, names, and prices
- Organized into 3+ categories (Indoor, Succulents, Low Light)
- Add to Cart buttons with disabled state after selection
- Cart icon updates when items are added

**Header (7 pts)**
- Displays on Product Listing and Cart pages (hidden on landing page)
- Shopping cart icon with badge showing item count
- Navigation links to Home, Products, and Cart

**Shopping Cart (23 pts)**
- Total number of items display
- Total cost calculation
- Product thumbnails, names, and unit prices
- Increment/Decrement buttons for quantity management
- Delete button to remove items
- Checkout button with "Coming Soon" message
- Continue Shopping button linking back to products

**Redux & GitHub (6 pts)**
- Redux store with cartSlice reducer
- All cart actions: addToCart, increment, decrement, removeItem
- Public GitHub repository with full source code

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/benjaminabadilla/houseplants-store.git
cd houseplants-store

# Install dependencies
npm install
```

### Running the App

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/           # Navigation header with cart icon
│   ├── ProductCard/      # Individual plant product card
│   ├── CartItem/         # Cart item with qty controls
│   └── Footer/           # Footer with company info
├── pages/
│   ├── LandingPage/      # Hero landing page
│   ├── ProductListing/   # Product grid with categories
│   └── CartPage/         # Shopping cart management
├── redux/
│   ├── store.ts          # Redux store configuration
│   └── cartSlice.ts      # Cart reducer & actions
├── data/
│   └── plants.ts         # Product data
├── App.tsx               # Main app component
├── main.tsx              # React entry point
└── index.css             # Global styles
```

## 🌱 Products

The store features 6 beautiful houseplants:

1. **Monstera Deliciosa** — $45.99 (Indoor)
2. **Pothos** — $24.99 (Indoor)
3. **Spider Plant** — $22.99 (Indoor)
4. **Jade Plant** — $35.99 (Succulents)
5. **Aloe Vera** — $19.99 (Succulents)
6. **Snake Plant** — $29.99 (Low Light)

## 🛠 Technologies Used

- **React 18** — UI library
- **Redux Toolkit** — State management
- **React Router 7** — Client-side routing
- **TypeScript** — Type safety
- **Vite 5** — Build tool and dev server
- **React Icons** — Icon library
- **CSS-in-JS** — Inline styling

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^7.9.6",
  "react-redux": "^9.2.0",
  "@reduxjs/toolkit": "^2.11.0",
  "react-icons": "^5.5.0"
}
```

## 🎨 Design Highlights

- **Hero Landing Page** — Full-screen background image with translucent title box
- **Product Cards** — Responsive grid layout with hover effects
- **Shopping Cart** — Two-column layout (items + order summary)
- **Dark Footer** — Professional footer with contact information
- **Color Scheme** — Green theme (#2d5016) aligned with plant/nature aesthetic

## 🔄 Redux State Management

### Cart State Structure
```typescript
{
  items: CartItem[],      // Array of products in cart
  totalQuantity: number,  // Total item count
  totalPrice: number      // Total cost
}
```

### Actions
- `addToCart(plant)` — Add plant to cart or increment quantity
- `increment(plantId)` — Increase item quantity
- `decrement(plantId)` — Decrease item quantity (min 1)
- `removeItem(plantId)` — Remove item from cart

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚢 Deployment

The app can be deployed to:
- **Vercel** — `vercel deploy`
- **Netlify** — `netlify deploy`
- **GitHub Pages** — `npm run build` + GitHub Pages settings

## 📝 License

This project is part of the IBM Developing Front-End Apps with React course on Coursera.

## 👤 Author

**Benjamin Abadilla**
- GitHub: [@benjaminabadilla](https://github.com/benjaminabadilla)
- Repository: [houseplants-store](https://github.com/benjaminabadilla/houseplants-store)

## 📧 Contact

For questions or inquiries about Prop House:
- Email: info@prophouse.com
- Phone: (555) 123-4567
- Hours: Mon-Fri 9AM-6PM PST

---

Built with ❤️ for plant lovers everywhere 🌱

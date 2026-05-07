# DigiTools Platform

DigiTools Platform is a responsive digital product marketplace built for Assignment 6. It includes a Figma-inspired landing page, product catalog, cart toggling, checkout flow, and toast notifications for all cart actions.

## Technologies Used

- React.js
- JavaScript ES6+
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON product data
- Vite

## Features

- Product and cart toggle section with products visible by default.
- Dynamic cart count in the navbar with add, remove, total price, and checkout clearing.
- React-Toastify alerts for add to cart, remove from cart, and checkout actions.
- Responsive 3-column product cards on desktop with tablet and mobile layouts.
- Full landing page sections: navbar, banner, stats, steps, pricing, and footer.

## Product Data

The product catalog is loaded from `public/products.json` and includes 8 digital products with id, name, description, price, period, tag, tagType, features, and icon fields.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199.99,
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Wearables"
  },
  {
    id: 3,
    name: "Portable Power Bank",
    price: 49.99,
    description: "20000mAh portable charger with fast charging capability for all your devices.",
    image: "https://images.unsplash.com/photo-1609592807825-2005f48a865d?w=800&q=80",
    category: "Accessories"
  }
];
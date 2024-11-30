import React from 'react';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

export const Navbar: React.FC = () => {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">TechStore</span>
          </div>
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
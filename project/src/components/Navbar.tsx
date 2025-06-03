import React from 'react';
import { ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-2xl font-bold text-orange-500">Foodies</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-600 hover:text-orange-500">
              <ShoppingBag className="h-6 w-6" />
            </Link>
            <Link to="/signin" className="text-gray-600 hover:text-orange-500">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
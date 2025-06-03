import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cartItems = []; // This would be managed by state management in a real app

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <Link
            to="/menu"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Cart items would go here */}
          <div className="mt-8">
            <Link
              to="/checkout"
              className="w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 text-center block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
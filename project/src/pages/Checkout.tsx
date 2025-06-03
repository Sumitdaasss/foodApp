import React, { useState } from 'react';

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              />
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="card"
                name="payment"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="card" className="ml-3">Debit/Credit Card</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="upi"
                name="payment"
                value="upi"
                checked={paymentMethod === 'upi'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="upi" className="ml-3">UPI/Google Pay/PhonePe</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="netbanking"
                name="payment"
                value="netbanking"
                checked={paymentMethod === 'netbanking'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="netbanking" className="ml-3">Net Banking</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="cod"
                name="payment"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="cod" className="ml-3">Cash on Delivery</label>
            </div>

            <button className="mt-6 w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
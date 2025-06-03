import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: 'Chicken Biryani',
    price: 299,
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
    category: 'Non-Veg',
    rating: 4.5,
    description: 'Aromatic basmati rice cooked with tender chicken pieces and special spices',
    preparationTime: '30-35 mins'
  },
  {
    id: 2,
    name: 'Chicken Curry',
    price: 249,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    category: 'Non-Veg',
    rating: 4.3,
    description: 'Traditional Indian curry with tender chicken pieces in rich gravy',
    preparationTime: '25-30 mins'
  },
  {
    id: 3,
    name: 'Veg Fried Rice',
    price: 199,
    image: 'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg',
    category: 'Veg',
    rating: 4.2,
    description: 'Wok-tossed rice with fresh vegetables and aromatic spices',
    preparationTime: '20-25 mins'
  },
  {
    id: 4,
    name: 'Noodles',
    price: 189,
    image: 'https://images.pexels.com/photos/1087906/pexels-photo-1087906.jpeg',
    category: 'Veg',
    rating: 4.0,
    description: 'Stir-fried noodles with crunchy vegetables in special sauce',
    preparationTime: '15-20 mins'
  },
  {
    id: 5,
    name: 'Chicken Fried',
    price: 249,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    category: 'Non-Veg',
    rating: 4.4,
    description: 'Crispy fried chicken with special coating and spices',
    preparationTime: '20-25 mins'
  },
  {
    id: 6,
    name: 'Paneer Tikka',
    price: 279,
    image: 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg',
    category: 'Veg',
    rating: 4.6,
    description: 'Grilled cottage cheese marinated in spicy tandoori masala',
    preparationTime: '25-30 mins'
  },
  {
    id: 7,
    name: 'Samosa',
    price: 49,
    image: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg',
    category: 'Veg',
    rating: 4.3,
    description: 'Crispy pastry filled with spiced potatoes and peas',
    preparationTime: '10-15 mins'
  },
  {
    id: 8,
    name: 'Butter Chicken',
    price: 329,
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
    category: 'Non-Veg',
    rating: 4.7,
    description: 'Tender chicken in rich, creamy tomato-based gravy',
    preparationTime: '30-35 mins'
  },
  {
    id: 9,
    name: 'Dal Makhani',
    price: 199,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    category: 'Veg',
    rating: 4.4,
    description: 'Creamy black lentils slow-cooked with butter and spices',
    preparationTime: '25-30 mins'
  },
  {
    id: 10,
    name: 'Masala Dosa',
    price: 129,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    category: 'Veg',
    rating: 4.5,
    description: 'Crispy rice crepe filled with spiced potato mixture',
    preparationTime: '15-20 mins'
  },
  {
    id: 11,
    name: 'Tandoori Roti',
    price: 35,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg',
    category: 'Veg',
    rating: 4.2,
    description: 'Whole wheat flatbread baked in tandoor',
    preparationTime: '10-15 mins'
  },
  {
    id: 12,
    name: 'Gulab Jamun',
    price: 99,
    image: 'https://images.pexels.com/photos/15913452/pexels-photo-15913452.jpeg',
    category: 'Dessert',
    rating: 4.6,
    description: 'Deep-fried milk solids soaked in sugar syrup',
    preparationTime: '10-15 mins'
  },
  {
    id: 13,
    name: 'Chicken 65',
    price: 269,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    category: 'Non-Veg',
    rating: 4.5,
    description: 'Spicy deep-fried chicken with curry leaves',
    preparationTime: '20-25 mins'
  },
  {
    id: 14,
    name: 'Palak Paneer',
    price: 229,
    image: 'https://images.pexels.com/photos/3659862/pexels-photo-3659862.jpeg',
    category: 'Veg',
    rating: 4.3,
    description: 'Cottage cheese cubes in creamy spinach gravy',
    preparationTime: '25-30 mins'
  },
  {
    id: 15,
    name: 'Rasmalai',
    price: 89,
    image: 'https://images.pexels.com/photos/14710422/pexels-photo-14710422.jpeg',
    category: 'Dessert',
    rating: 4.7,
    description: 'Soft cottage cheese dumplings in sweetened milk',
    preparationTime: '10-15 mins'
  },
  {
    id: 16,
    name: 'Gajar Ka Halwa',
    price: 129,
    image: 'https://images.pexels.com/photos/14467427/pexels-photo-14467427.jpeg',
    category: 'Dessert',
    rating: 4.5,
    description: 'Traditional carrot pudding made with milk and dry fruits',
    preparationTime: '15-20 mins'
  },
  {
    id: 17,
    name: 'Kulfi',
    price: 79,
    image: 'https://images.pexels.com/photos/13185294/pexels-photo-13185294.jpeg',
    category: 'Dessert',
    rating: 4.6,
    description: 'Traditional Indian ice cream with nuts and cardamom',
    preparationTime: '5-10 mins'
  },
  {
    id: 18,
    name: 'Kheer',
    price: 99,
    image: 'https://images.pexels.com/photos/14710417/pexels-photo-14710417.jpeg',
    category: 'Dessert',
    rating: 4.4,
    description: 'Creamy rice pudding with cardamom and dry fruits',
    preparationTime: '10-15 mins'
  }
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recommended');

  const categories = ['All', 'Veg', 'Non-Veg', 'Dessert'];

  const filteredItems = menuItems
    .filter(item => selectedCategory === 'All' || item.category === selectedCategory)
    .filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.rating - a.rating;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Menu</h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="recommended">Recommended</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
      
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-md">
                <span className="text-orange-500 font-semibold">★ {item.rating}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <span className="text-sm text-gray-500">{item.preparationTime}</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-600">₹{item.price}</span>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 transform hover:scale-105 active:scale-95">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
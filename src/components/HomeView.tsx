import { useState } from 'react';
import { restaurants, categories, Restaurant } from '../data/restaurants';

interface HomeViewProps {
  onSelectRestaurant: (restaurant: Restaurant) => void;
}

export default function HomeView({ onSelectRestaurant }: HomeViewProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = restaurants.filter(r => {
    const matchesCategory = selectedCategory === 'all' ||
      r.cuisine.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredRestaurants = restaurants.filter(r => r.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 mb-8 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">¿Tienes hambre? 🍽️</h2>
        <p className="text-orange-100 mb-6 text-lg">Pide tu comida favorita y recíbela en minutos</p>
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Buscar restaurantes o tipo de comida..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Categorías</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center gap-1 px-4 py-3 rounded-xl min-w-[80px] transition ${
                selectedCategory === cat.id
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-xs font-medium whitespace-nowrap">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured */}
      {selectedCategory === 'all' && !searchQuery && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">⭐ Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredRestaurants.map(restaurant => (
              <button
                key={restaurant.id}
                onClick={() => onSelectRestaurant(restaurant)}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-100 rounded-xl p-5 text-left hover:shadow-lg transition group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl group-hover:scale-110 transition-transform">{restaurant.image}</span>
                  <div>
                    <h4 className="font-bold text-gray-800">{restaurant.name}</h4>
                    <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="text-yellow-500">★ {restaurant.rating}</span>
                  <span>•</span>
                  <span>{restaurant.deliveryTime}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* All Restaurants */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          {searchQuery ? `Resultados para "${searchQuery}"` : 'Todos los restaurantes'}
        </h3>
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <span className="text-5xl mb-4 block">😕</span>
            <p className="text-gray-500 text-lg">No se encontraron restaurantes</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRestaurants.map(restaurant => (
              <button
                key={restaurant.id}
                onClick={() => onSelectRestaurant(restaurant)}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition text-left group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                  <span className="text-6xl group-hover:scale-110 transition-transform">{restaurant.image}</span>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-1">{restaurant.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-yellow-600 font-medium">★ {restaurant.rating}</span>
                    <span className="text-gray-500">{restaurant.deliveryTime}</span>
                    <span className="text-gray-500">${restaurant.deliveryFee.toFixed(2)} envío</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { Restaurant } from '../data/restaurants';
import { useCart } from '../context/CartContext';

interface RestaurantViewProps {
  restaurant: Restaurant;
  onBack: () => void;
}

export default function RestaurantView({ restaurant, onBack }: RestaurantViewProps) {
  const { addItem } = useCart();
  const [addedItems, setAddedItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const menuCategories = ['all', ...new Set(restaurant.menu.map(item => item.category))];
  const filteredMenu = activeCategory === 'all'
    ? restaurant.menu
    : restaurant.menu.filter(item => item.category === activeCategory);

  const handleAddItem = (item: typeof restaurant.menu[0]) => {
    addItem(item, restaurant.id, restaurant.name);
    setAddedItems(prev => [...prev, item.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== item.id));
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Restaurant Header */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 mb-6 border border-orange-100">
        <button
          onClick={onBack}
          className="text-orange-600 hover:text-orange-700 font-medium mb-4 flex items-center gap-1"
        >
          ← Volver a restaurantes
        </button>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="text-6xl">{restaurant.image}</span>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800">{restaurant.name}</h2>
            <p className="text-gray-500">{restaurant.cuisine}</p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
              <span className="text-yellow-600 font-medium">★ {restaurant.rating}</span>
              <span className="text-gray-500">🕐 {restaurant.deliveryTime}</span>
              <span className="text-gray-500">🚚 ${restaurant.deliveryFee.toFixed(2)} envío</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
        {menuCategories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
              activeCategory === cat
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat === 'all' ? 'Todo el menú' : cat}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {filteredMenu.map(item => {
          const isAdded = addedItems.includes(item.id);
          return (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition"
            >
              <div className="flex-1">
                <div className="flex items-start gap-2">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  {item.popular && (
                    <span className="bg-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full font-medium">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                <p className="text-lg font-bold text-orange-600 mt-2">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{item.image}</span>
                <button
                  onClick={() => handleAddItem(item)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition ${
                    isAdded
                      ? 'bg-green-500 text-white'
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  {isAdded ? '✓ Agregado' : '+ Agregar'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

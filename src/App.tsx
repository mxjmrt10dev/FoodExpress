import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HomeView from './components/HomeView';
import RestaurantView from './components/RestaurantView';
import CartView from './components/CartView';
import CheckoutView from './components/CheckoutView';
import OrderConfirmation from './components/OrderConfirmation';
import { Restaurant } from './data/restaurants';

type View = 'home' | 'restaurant' | 'cart' | 'checkout' | 'confirmation';

function AppContent() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleSelectRestaurant = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentView('restaurant');
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setCurrentView('home');
    setSelectedRestaurant(null);
    window.scrollTo(0, 0);
  };

  const handleCartClick = () => {
    setCurrentView('cart');
    window.scrollTo(0, 0);
  };

  const handleCheckout = () => {
    setCurrentView('checkout');
    window.scrollTo(0, 0);
  };

  const handleOrderComplete = () => {
    setCurrentView('confirmation');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        onCartClick={handleCartClick}
        onLogoClick={handleGoHome}
        currentView={currentView}
      />
      <main className="pb-20">
        {currentView === 'home' && (
          <HomeView onSelectRestaurant={handleSelectRestaurant} />
        )}
        {currentView === 'restaurant' && selectedRestaurant && (
          <RestaurantView restaurant={selectedRestaurant} onBack={handleGoHome} />
        )}
        {currentView === 'cart' && (
          <CartView
            onCheckout={handleCheckout}
            onContinueShopping={handleGoHome}
          />
        )}
        {currentView === 'checkout' && (
          <CheckoutView
            onBack={() => setCurrentView('cart')}
            onOrderComplete={handleOrderComplete}
          />
        )}
        {currentView === 'confirmation' && (
          <OrderConfirmation onGoHome={handleGoHome} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 FoodExpress. Todos los derechos reservados. 🛵
          </p>
          <p className="text-gray-400 text-xs mt-1">
            Tu comida favorita, entregada a tu puerta
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

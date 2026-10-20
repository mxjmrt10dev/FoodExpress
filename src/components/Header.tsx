import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onLogoClick: () => void;
  currentView: string;
}

export default function Header({ onCartClick, onLogoClick, currentView }: HeaderProps) {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={onLogoClick} className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-3xl">🛵</span>
          <div>
            <h1 className="text-xl font-bold text-gray-800 leading-tight">FoodExpress</h1>
            <p className="text-xs text-gray-500">Comida a domicilio</p>
          </div>
        </button>

        <div className="flex items-center gap-4">
          {currentView !== 'home' && (
            <button
              onClick={onLogoClick}
              className="text-sm text-orange-600 hover:text-orange-700 font-medium"
            >
              ← Volver al inicio
            </button>
          )}
          <button
            onClick={onCartClick}
            className="relative bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition flex items-center gap-2"
          >
            <span className="text-lg">🛒</span>
            <span className="hidden sm:inline">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

import { useCart } from '../context/CartContext';

interface CartViewProps {
  onCheckout: () => void;
  onContinueShopping: () => void;
}

export default function CartView({ onCheckout, onContinueShopping }: CartViewProps) {
  const { items, updateQuantity, removeItem, totalPrice, deliveryFee, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <span className="text-7xl mb-6 block">🛒</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-500 mb-6">Agrega algunos platos deliciosos para empezar</p>
        <button
          onClick={onContinueShopping}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Explorar restaurantes
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Tu Carrito 🛒</h2>
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-600 text-sm font-medium"
        >
          Vaciar carrito
        </button>
      </div>

      {/* Cart Items */}
      <div className="space-y-3 mb-6">
        {items.map(item => (
          <div
            key={item.menuItem.id}
            className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4"
          >
            <span className="text-3xl">{item.menuItem.image}</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-gray-800 truncate">{item.menuItem.name}</h4>
              <p className="text-sm text-gray-500">{item.restaurantName}</p>
              <p className="text-orange-600 font-bold">${(item.menuItem.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-bold text-gray-600 transition"
              >
                −
              </button>
              <span className="w-6 text-center font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full bg-orange-100 hover:bg-orange-200 flex items-center justify-center font-bold text-orange-600 transition"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(item.menuItem.id)}
              className="text-gray-400 hover:text-red-500 transition ml-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-3">Resumen del pedido</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Envío</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-2 mt-2">
            <div className="flex justify-between font-bold text-lg text-gray-800">
              <span>Total</span>
              <span className="text-orange-600">${(totalPrice + deliveryFee).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={onContinueShopping}
          className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
        >
          Seguir comprando
        </button>
        <button
          onClick={onCheckout}
          className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-bold transition"
        >
          Realizar pedido →
        </button>
      </div>
    </div>
  );
}

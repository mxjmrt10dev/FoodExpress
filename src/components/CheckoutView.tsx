import { useState } from 'react';
import { useCart } from '../context/CartContext';

interface CheckoutViewProps {
  onBack: () => void;
  onOrderComplete: () => void;
}

export default function CheckoutView({ onBack, onOrderComplete }: CheckoutViewProps) {
  const { items, totalPrice, deliveryFee, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    notes: '',
    paymentMethod: 'cash',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      clearCart();
      onOrderComplete();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <button
        onClick={onBack}
        className="text-orange-600 hover:text-orange-700 font-medium mb-4 flex items-center gap-1"
      >
        ← Volver al carrito
      </button>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Finalizar Pedido 📋</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Delivery Info */}
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📍</span> Datos de entrega
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Juan Pérez"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dirección de entrega</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Calle 123, Ciudad"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 234 567 8900"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notas adicionales</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Instrucciones especiales, timbre, piso, etc."
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>💳</span> Método de pago
          </h3>
          <div className="space-y-3">
            {[
              { value: 'cash', label: 'Efectivo', icon: '💵' },
              { value: 'card', label: 'Tarjeta de crédito/débito', icon: '💳' },
              { value: 'digital', label: 'Billetera digital', icon: '📱' },
            ].map(method => (
              <label
                key={method.value}
                className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                  formData.paymentMethod === method.value
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.value}
                  checked={formData.paymentMethod === method.value}
                  onChange={handleChange}
                  className="text-orange-500 focus:ring-orange-300"
                />
                <span className="text-xl">{method.icon}</span>
                <span className="font-medium text-gray-700">{method.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-gray-100 rounded-xl p-5">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>📦</span> Resumen del pedido
          </h3>
          <div className="space-y-2 mb-4">
            {items.map(item => (
              <div key={item.menuItem.id} className="flex justify-between text-sm">
                <span className="text-gray-600">
                  {item.quantity}x {item.menuItem.name}
                </span>
                <span className="text-gray-800 font-medium">
                  ${(item.menuItem.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-3 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Envío</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-800 pt-2 border-t border-gray-200">
              <span>Total</span>
              <span className="text-orange-600">${(totalPrice + deliveryFee).toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 rounded-full font-bold text-lg transition ${
            isSubmitting
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Procesando pedido...
            </span>
          ) : (
            `Confirmar pedido • $${(totalPrice + deliveryFee).toFixed(2)}`
          )}
        </button>
      </form>
    </div>
  );
}

import { useEffect, useState } from 'react';

interface OrderConfirmationProps {
  onGoHome: () => void;
}

export default function OrderConfirmation({ onGoHome }: OrderConfirmationProps) {
  const [showAnimation, setShowAnimation] = useState(false);
  const orderNumber = Math.floor(Math.random() * 9000) + 1000;
  const estimatedTime = Math.floor(Math.random() * 15) + 25;

  useEffect(() => {
    setTimeout(() => setShowAnimation(true), 300);
  }, []);

  return (
    <div className="max-w-lg mx-auto px-4 py-12 text-center">
      <div className={`transition-all duration-700 ${showAnimation ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-6">
          <span className="text-7xl mb-4 block animate-bounce">✅</span>
          <h2 className="text-2xl font-bold text-green-800 mb-2">¡Pedido confirmado!</h2>
          <p className="text-green-600">Tu pedido ha sido recibido y está siendo preparado</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-lg">📋</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Número de pedido</p>
                <p className="font-bold text-gray-800">#{orderNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-lg">🕐</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tiempo estimado</p>
                <p className="font-bold text-gray-800">{estimatedTime} - {estimatedTime + 10} minutos</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-lg">🛵</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Estado</p>
                <p className="font-bold text-orange-600">Preparando tu pedido...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white border border-gray-100 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-orange-600">En preparación</span>
            <span className="text-sm text-gray-400">Entregado</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full transition-all duration-1000 w-1/4" />
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-xs text-gray-500">Confirmado</span>
            <span className="text-xs text-gray-500">Preparando</span>
            <span className="text-xs text-gray-500">En camino</span>
            <span className="text-xs text-gray-500">Entregado</span>
          </div>
        </div>

        <button
          onClick={onGoHome}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition shadow-lg"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

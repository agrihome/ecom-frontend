'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { addToCart, removeFromCart, updateQuantity, clearCart } from '@/lib/redux/features/cartSlice';

export default function CartExample() {
  const dispatch = useAppDispatch();
  const { items, totalItems, totalPrice } = useAppSelector((state) => state.cart);

  const handleAddItem = () => {
    dispatch(addToCart({
      id: '1',
      name: 'Sample Product',
      price: 29.99,
      quantity: 1,
      image: '/images/sample.jpg'
    }));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart Example</h2>
      
      <div className="mb-4">
        <p className="text-lg">Total Items: {totalItems}</p>
        <p className="text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
      </div>

      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Add Sample Item
      </button>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">Price: ${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                +
              </button>
              <button
                onClick={() => handleUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                -
              </button>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length > 0 && (
        <button
          onClick={handleClearCart}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Clear Cart
        </button>
      )}
    </div>
  );
}

// Cart.js

const Cart = () => {
  // Example raw data (replace with your actual data structure)
  const products = [
    {
      id: 1,
      title: 'Classic Hue Swim Shorts',
      size: 'S',
      price: 59.00,
      quantity: 42,
      image: 'https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fsmoke-square-resized.jpg?alt=media&token=217cef84-9841-413d-81e8-c167642530fd'
    },
    {
      id: 2,
      title: 'Vintage T-Shirt',
      size: 'M',
      price: 29.99,
      quantity: 3,
      image: 'https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fsmoke-square-resized.jpg?alt=media&token=217cef84-9841-413d-81e8-c167642530fd'
    }
  ];

  // Function to calculate total price
  const calculateTotal = () => {
    return products.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      
      {/* Cart Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">Size: {item.size}</p>
              <div className="border-b border-gray-300 w-full my-2"></div>
              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-bold">${item.price.toFixed(2)}</p>
                <div className="flex items-center">
                  <button className="text-gray-500 hover:text-gray-700 px-2" onClick={() => console.log('Decrease quantity')}>-</button>
                  <span className="px-2">{item.quantity}</span>
                  <button className="text-gray-500 hover:text-gray-700 px-2" onClick={() => console.log('Increase quantity')}>+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-8 flex justify-end">
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Total:</h3>
          <p className="text-gray-800 text-xl font-bold">${calculateTotal().toFixed(2)}</p>
          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-sm">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
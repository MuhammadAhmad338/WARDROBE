import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/store";
import { submitOrder } from "../../Slice/deliverFormSlice";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCompleteOrder = async () => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      navigate('/orderSubmitted');
    } finally {
      setIsLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    paymentMethod: ''
  });

const handleChange = (e: any) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [id]: type === 'checkbox' ? checked : value,
    }));
};

const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const resultAction = await dispatch(submitOrder(formData));
    const formData1 = await resultAction.payload;
    console.log('Checkout form data: and form submitted successfully!', formData1);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="flex justify-center items-center text-2xl text-gray-800">W A R D R O B E</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 mt-8 md:flex md:space-x-8">
        {/* Delivery Details */}
        <div className="md:w-1/2 bg-white shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Delivery Details</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your first name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your last name"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email address"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your address"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                </label>
                <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your city"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                </label>
                <input
                    type="text"
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your postal code"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your phone number"
                />
            </div>

            {/* Payment Options */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4 border-b pb-2">Choose a payment method</h2>
                <label className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="paymentMethod"
                        value="COD"
                        checked={formData.paymentMethod === 'COD'}
                        onChange={handleChange}
                        className="form-radio text-blue-500 h-5 w-5 mr-2"
                        name="paymentMethod"
                    />
                    <span className="text-sm text-gray-700">Cash on Delivery (COD)</span>
                </label>
                {/* Add more payment options as needed */}
            </div>

            {/* Security Information */}
            <div className="text-sm text-gray-700 mt-4">
                <p className="mb-2">All transactions are secure and encrypted.</p>
                <p>Payment details are not stored or shared.</p>
            </div>

            <div className="mt-6">
      <button
        type="submit"
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onClick={handleCompleteOrder}
        disabled={isLoading}
      >
        {isLoading ? 'Completing Order...' : 'Complete Order'}
      </button>
    </div>
        </form>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/2 bg-white shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4 border-b pb-2">Order Summary</h2>

          {/* Product List (Example) */}
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <p className="text-base text-gray-700">Product Name</p>
              <p className="text-base text-gray-700">$99.00</p>
            </div>
            <div className="text-sm text-gray-600 mb-2">Product description lorem ipsum dolor sit amet...</div>
            {/* Add more product lines as needed */}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center pt-4">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-lg text-blue-500 font-bold">$99.00</p>
          </div>

        </div>
      </div>
      {/* Loading Indicator */}
      {isLoading && (
  <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 flex items-center space-x-4 shadow-lg">
      <svg className="animate-spin h-8 w-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12c0-3.042-1.135-5.824-3-7.938l-3 2.647A7.962 7.962 0 0120 12h4zm-6 7.291A7.962 7.962 0 0120 12h-4c0 2.208-.895 4.208-2.344 5.656l3 2.647zM8 4.709A7.962 7.962 0 014 12h4c0-2.208.895-4.208 2.344-5.656l-3-2.647z"></path>
      </svg>
      <p className="text-gray-800">Completing Order, please wait...</p>
    </div>
  </div>
)}
    </div>
    
  );
};

export default CheckoutPage;

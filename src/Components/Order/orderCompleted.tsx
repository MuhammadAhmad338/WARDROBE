import { Link } from "react-router-dom";

const OrderCompleted = () => {
  return (
    <div className="order-completed-container flex flex-col justify-center items-center min-h-screen bg-gradient-to-t from-green-100 to-white">
      <div className="order-confirmation max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="confirmation-content px-6 py-8">
          <div className="success-icon text-center mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-green-500 mx-auto"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 011-1z"
                clipRule="evenodd"
              />
              <path
                fill="#8CC63E"
                d="M12 22C6.47715 22 2 17.5228 2 12S6.47715 2 12 2s10 4.47715 10 10-4.47715 10-10 10z"
              />
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 7l6 6-6 6"
              />
            </svg>
            <h2 className="text-3xl font-bold text-green-500 mt-6">
              Congratulations!
            </h2>
            <p className="text-gray-700 mt-2">
              Your order has been placed successfully.
            </p>
          </div>
          <div className="action-buttons flex flex-col sm:flex-row justify-center mt-6">
            <button className="bg-black hover:bg-white hover:text-black text-white py-2 px-4 hover:border hover:border-black shadow-md mb-2 sm:mb-0 sm:mr-4 transition duration-300 ease-in-out">
              <Link to="/" className="block sm:inline-block">
                Continue Shopping
              </Link>
            </button>
            <button
              className="bg-black hover:bg-white hover:text-black text-white py-2 px-4 hover:border hover:border-black shadow-md transition duration-300 ease-in-out"
              onClick={() => {
                // Handle button click action, e.g., navigate back to home
              }}
            >
              View Order Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;

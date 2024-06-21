const Cart = () => {
  // Example raw data (replace with your actual data structure)
  const products = [
    {
      id: 1,
      title: "Classic Hue Swim Shorts",
      size: "S",
      price: 59.0,
      quantity: 42,
      image:
        "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fsmoke-square-resized.jpg?alt=media&token=217cef84-9841-413d-81e8-c167642530fd",
    },
    {
      id: 2,
      title: "Vintage T-Shirt",
      size: "M",
      price: 29.99,
      quantity: 3,
      image:
        "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fsmoke-square-resized.jpg?alt=media&token=217cef84-9841-413d-81e8-c167642530fd",
    },
  ];

  return (
    <div className="flex flex-col mt-8 h-full">
      <h1 className="flex justify-center text-md md:text-lg lg:text-xlg mb-6 text-gray-900 lg:text-xl">
        Shopping  Cart
      </h1>

      {/* Cart Items */}
      <div className="hidden lg:flex lg:ml-4 lg:flex-row lg:px-12 lg:space-x-12 lg:justify-between lg:items-center ">
        <p>Product </p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>

     {products.map(_ => (
         <div className="flex flex-row mb-8 p-3 md:border-t md:border-black md:m-4">
         <img
           className="w-32 h-32 ml-2 md:w-60"
           src="src/assets/pexels-david-bartus-43782-297933.jpg"
           alt=""
         />
         <div className="flex flex-col ml-4 space-y-2 lg:flex lg:flex-row lg:items-center lg:justify-between lg:space-x-10">   
           <div className="hidden lg:flex lg:flex-col lg:space-y-2">
             <h1 className="text-sm font-bold">Classic Hue Swim Shorts</h1>
             <p className="text-sm ">Size: s</p>
           </div>
           <h1 className="text-sm font-bold lg:hidden md:hidden">Classic Hue Swim Shorts</h1>
           <div className="w-full h-0.5 bg-gray-200 my-1 lg:hidden"></div>
           <p className="text-sm lg:ml-[20rem]">   $12</p>
           <div className="w-full h-0.5 bg-gray-200 my-1 lg:hidden"></div>
           <div className="space-y-4 ">
             <div className="border  lg:ml-[21rem] border-black p-2 w-32 flex justify-between items-center ">
               <p className="text-md">+</p>
               <p className="text-lg">12</p>
               <p className="text-md">-</p>
             </div>
           </div>
         <div className="lg:pl-[18rem] ">
         <p className="text-sm "> $ 2112.00</p>
         </div>
         </div>
       </div>
     ))}

    </div>
  );
};

export default Cart;

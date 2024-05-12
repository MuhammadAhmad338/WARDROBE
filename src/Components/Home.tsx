import Products from './Products';

const Home = () => {
  
    const products = [
      {
        id: 1,
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 100,
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 150,
        image: "https://via.placeholder.com/300",
      },
      {
        id: 3,
        name: "Product 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 200,
        image: "https://via.placeholder.com/300",
      },
        {
        id: 1,
        name: "Product 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 100,
        image: "https://via.placeholder.com/300",
      },
      {
        id: 2,
        name: "Product 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: 150,
        image: "https://via.placeholder.com/300",
      },
      {
        id: 3,
        name: "Product 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 200,
        image: "https://via.placeholder.com/300",
      },
    ];
    
  return (
    <div className="container mx-auto px-4 py-8">
          <Products products={products}/>        
      </div>
  )
}

export default Home;
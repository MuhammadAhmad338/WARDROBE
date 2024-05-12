// Assuming ProductCard is in a separate file
const Products = ({ products }: any) => {
  return (
    <div className="flex flex-wrap justify-between">
      {products.map((product: any, index: number) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

const ProductCard = ({ product }: any) => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-md hover:cursor-pointer">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base overflow-hidden line-clamp-2">{product.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">PKR {product.price}</span>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;
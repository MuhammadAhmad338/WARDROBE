import { useState } from "react";

const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3' },
];

interface SearchProps {
    isOpen: boolean;
    setIsSearchOpen: (isOpen: boolean) => void;
  }

const Search: React.FC<SearchProps> = ({ setIsSearchOpen }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const closeSearch = () => {
        setIsSearchOpen(false);
      };

    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-20 flex flex-col">
             <div className="flex justify-between items-center  px-4 py-2">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 focus:outline-none"
                />
                <button onClick={closeSearch} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
         <div className="flex-grow overflow-auto p-6">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div
                        key={product.id}
                        className="p-4 border-b border-gray-300 cursor-pointer"
                        onClick={() => window.location.href = `/products/${product.id}`}
                      >
                        <div key={product.id} className="p-4 border-b border-gray-300">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p>{product.description}</p>
                        </div>
                       </div>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
}

export default Search;
import { useState } from 'react';

const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3' },
    // Add more products as needed
];

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col h-screen">
            <div className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 z-20">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 focus:outline-none"
                />
            </div>
            <div className="mt-20 p-6 overflow-auto">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="p-4 border-b border-gray-300">
                            <h2 className="text-xl font-semibold">{product.name}</h2>
                            <p>{product.description}</p>
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

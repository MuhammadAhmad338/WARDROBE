import Products from '../Products/Products';

// Assuming ProductCard is in a separate file
const AllProducts = () => {

    const products = [
        {
            id: 1,
            name: "Product 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 100,
            image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_records%2Fasdsad.jpeg?alt=media&token=145e5115-a9f2-4841-b686-c3c5fad3185a",
        },
        {
            id: 2,
            name: "Product 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 150,
            image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_records%2Fasdsad.jpeg?alt=media&token=145e5115-a9f2-4841-b686-c3c5fad3185a",
        },
        {
            id: 3,
            name: "Product 3",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 200,
            image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fstayactive.jpg?alt=media&token=b6d1b473-f09c-4e34-9469-b23adf034f1c",
        },
        {
            id: 4,
            name: "Product 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 100,
            image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fsmoke-square-resized.jpg?alt=media&token=217cef84-9841-413d-81e8-c167642530fd",
        },
        {
            id: 5,
            name: "Product 5",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 150,
            image: "https://firebasestorage.googleapis.com/v0/b/wellnow-3b505.appspot.com/o/medical_tips%2Fsmoke-square-resized.jpg?alt=media&token=217cef84-9841-413d-81e8-c167642530fd",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <Products products={products} />
        </div>
    );
};


export default AllProducts;
function ProductCard({ product }) {
    return (
        <div className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
            <p className="text-gray-600 font-medium">{product.price}</p>
            <p className="text-lg font-bold">${product.description}</p>
        </div>
    );
}

export default ProductCard;
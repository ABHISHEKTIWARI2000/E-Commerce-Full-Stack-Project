import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    return (
        <Link to={`/product/${product.id}`}>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg hover:scale-101 transition duration-300 cursor-pointer">
                {product.image ? (
                    <img
                        src={`${BASEURL}${product.image}`}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-4 rounded-lg"
                    />
                ) : (
                    <div className="flex h-48 items-center justify-center rounded-lg bg-gray-200 text-gray-500">
                        No image available
                    </div>
                )}
                <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
                <p className="text-gray-600 font-medium">${product.price}</p>
                <p className="text-lg font-bold">{product.description}</p>
            </div>
        </Link>
    );
}
export default ProductCard;

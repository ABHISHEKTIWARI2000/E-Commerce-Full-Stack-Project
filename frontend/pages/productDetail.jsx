// import {Link} from "react-router-dom";

// function ProductDetail() {
//     const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
//     return (
//         <Link to="/product/{{product.id}}" className="block bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition transform p-4 cursor-pointer">
//             <img
//                 src={`${BASEURL}${product.image}`}
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded-lg"
//             />
//             <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
//             <p className="text-gray-600 font-medium">${product.price}</p>
//             <p className="text-lg font-medium">{product.description}</p>
//         </Link>
//     );
// }

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {
    const { id } = useParams();
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`${BASEURL}/api/products/${id}/`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id, BASEURL]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No product found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
            <div className="flex-1 max-w-3xl w-full p-6 bg-white rounded-xl shadow-md">
                {product.image ? (
                    <img
                        src={`${product.image}`}
                        alt={product.name}
                        className="w-full h-96 object-cover mb-4 rounded-lg"
                    />
                ) : (
                    <div className="flex h-96 items-center justify-center rounded-lg bg-gray-200 text-gray-500">
                        No image available
                    </div>
                )}
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 font-medium mb-2">${product.price}</p>
                <p className="text-lg font-medium">{product.description}</p>
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">Add to Cart</button>
                {/*Home Button*/ }
                <div className="mt-4">
                    <a href="/" className="text-blue-500 hover:underline">&larr; Back to Home</a>
                </div>
            </div>

        </div>
    );
}

export default ProductDetail;


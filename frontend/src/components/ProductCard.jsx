
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

    return (
        <Link
            to={`/product/${product.id}`}
            className="group block h-full"
        >
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                {/* Product Image */}
                <div className="flex h-56 items-center justify-center overflow-hidden bg-gray-50 p-5">
                    <img
                        src={`${BASEURL}${product.image}`}
                        alt={product.name}
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Product Information */}
                <div className="flex flex-1 flex-col p-5">

                    <h2 className="line-clamp-2 min-h-12 text-lg font-bold text-gray-800 transition-colors duration-200 group-hover:text-indigo-600">
                        {product.name}
                    </h2>

                    <div className="mt-3 flex items-center justify-between">
                        <p className="text-xl font-extrabold text-indigo-600">
                            ₹{product.price}
                        </p>

                        <span className="text-sm font-medium text-gray-400">
                            View Details
                        </span>
                    </div>

                    {/* View Product */}
                    <div className="mt-5">
                        <div className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-indigo-700">
                            View Product →
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    );
}

export default ProductCard;

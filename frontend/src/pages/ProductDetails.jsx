
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
    const { id } = useParams();
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${BASEURL}/product/${id}/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to Fetch Product Details");
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id, BASEURL]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <p className="text-lg font-medium text-gray-600 animate-pulse">
                    Loading Product...
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <p className="rounded-lg bg-red-100 px-6 py-4 text-red-600">
                    Error: {error}
                </p>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-50">
                <p className="text-xl font-semibold text-gray-600">
                    No Product Found
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-6xl">

                <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Product Image */}
                        <div className="flex items-center justify-center bg-gray-100 p-8 md:p-12">
                            <img
                                src={`${product.image}`}
                                alt={product.name}
                                className="h-80 w-full rounded-xl object-contain transition-transform duration-300 hover:scale-105 md:h-[450px]"
                            />
                        </div>

                        {/* Product Information */}
                        <div className="flex flex-col justify-center p-8 md:p-12">

                            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
                                Product Details
                            </p>

                            <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                                {product.name}
                            </h1>

                            <p className="mb-6 text-3xl font-bold text-indigo-600">
                                ₹{product.price}
                            </p>

                            <div className="mb-8">
                                <h2 className="mb-3 text-lg font-semibold text-gray-800">
                                    Description
                                </h2>

                                <p className="leading-7 text-gray-600">
                                    {product.description}
                                </p>
                            </div>

                            <button
                                className="w-full rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700 hover:shadow-lg active:scale-95 sm:w-auto"
                            >
                                ADD TO CART
                            </button>

                            <div>
                                <a href="/">Back to Home </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;

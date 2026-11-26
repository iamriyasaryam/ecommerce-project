
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;

    useEffect(() => {
        fetch(`${BASEURL}/products/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch Products");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [BASEURL]);

    if (loading) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center bg-gray-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600"></div>
                    <p className="font-medium text-gray-600">
                        Loading products...
                    </p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-md">
                    <h2 className="text-xl font-bold text-red-600">
                        Something went wrong!
                    </h2>
                    <p className="mt-3 text-gray-500">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-8 lg:px-12">

            {/* Header Section */}
            <section className="mx-auto mb-12 max-w-7xl text-center">
                <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                    Our Collection
                </span>

                <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    Explore Our Products
                </h1>

                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                    Discover our exclusive collection of products.
                    Find the perfect product that matches your needs.
                </p>

                <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-indigo-600"></div>
            </section>

            {/* Products Section */}
            <section className="mx-auto max-w-7xl">

                {/* Product Count */}
                <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
                    <h2 className="text-xl font-bold text-gray-800">
                        All Products
                    </h2>

                    <span className="text-sm font-medium text-gray-500">
                        {products.length} Products
                    </span>
                </div>

                {/* Product Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">

                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="h-full transition duration-300 hover:-translate-y-1"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}

                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">
                        <h2 className="text-xl font-bold text-gray-800">
                            No Products Available
                        </h2>

                        <p className="mt-2 text-gray-500">
                            We couldn't find any products at the moment.
                        </p>
                    </div>
                )}
            </section>
        </main>
    );
}

export default ProductList;

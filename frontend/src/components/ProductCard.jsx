function ProductCard({ product }) {
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    return (
        <div>
            <img src={`${BASEURL}${product.image}`}
            alt={product.name} 
            className="h-40"
            />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
        </div>
    )
}

export default ProductCard
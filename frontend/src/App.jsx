
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="min-h-screen bg-red-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow"
          >
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

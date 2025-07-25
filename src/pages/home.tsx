import { useEffect, useState } from "react";
import { getAllProducts } from "../api/get.products.query";
import { Link } from "react-router-dom";

type MinimalProduct = {
  id: number;
  title: string;
};

export function Home() {
  const [products, setProducts] = useState<MinimalProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
}

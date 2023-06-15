import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {products.length > 0
        ? products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid",
                marginTop: "10px",
              }}
              onClick={() => navigate(`/products/${product.id}`)}
            >
              <p>{product.title || "No title"}</p>
              <p>{product.description || "No description"}</p>
            </div>
          ))
        : !loading && <p>Something went wrong! Try again</p>}
    </>
  );
};

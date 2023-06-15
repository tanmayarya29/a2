import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const noImageURL =
  "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
export const Product = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setProduct(res);
          setLoading(false);
        });
    }
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : !product ? (
        <p>Something went wrong! Try again</p>
      ) : (
        <>
          <img
            src={product?.thumbnail || noImageURL}
            alt={product?.title}
            style={{
              width: "500px",
            }}
          />
          <p>{product?.title || "No Title"}</p>
          <p>{product?.description || "No Description"}</p>
        </>
      )}
    </div>
  );
};

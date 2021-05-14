import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProductAction } from "../../store/actions/products";

const Product = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [isLoading, setIsloading] = useState(true);

  const product = useSelector((store) =>
    store.products.find((prod) => String(prod.id) === id)
  );

  useEffect(() => {
    if (!product && id) {
      fetch(`http://localhost:8080/products/${id}`)
        .then((response) => response.json())
        .then((fetchedProduct) => {
          dispatch(addProductAction(fetchedProduct))
        })
        .finally(() => {
          setIsloading(false);
        });
    } else {
      setIsloading(false);
    }
  }, [product, id, dispatch]);

  if (isLoading) {
    return (
      <h1>IS LOADING...</h1>
    )
  }

  if (!product) {
    return (
      <div>
        <h2>There is no artist with that ID</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>
        {product.name} - {product.genre}
      </h2>
      <p>{product.startOfCareer}</p>
    </div>
  );
};

export default Product;

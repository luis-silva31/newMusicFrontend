import { useEffect, useState, Fragment } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAllProductsAction } from "../../store/actions/products";

const Home = (props) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const products = useSelector((store) => store.products);

  const [showCreatedNotification, setShowCreatedNotification] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => {
        // setProducts(data || []);
        dispatch(addAllProductsAction(data));
      });
  }, []);

  // https://coolors.co/ff8811-f4d06f-fff8f0-9dd9d2-392f5a

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const hasCreated = !!queryParams.get("created");

    if (hasCreated) {
      setShowCreatedNotification(true);

      setTimeout(() => {
        setShowCreatedNotification(false);
        history.push("/");
      }, 3000);
    }
  }, [location.search, history]);

  return (
    <div>
      {showCreatedNotification && <h2>You have inserted a new artist</h2>}
      <h1>Welcome to the best place to find new music</h1>
      <h2>Get started!</h2>
      <p>Help others find good music too by adding any artist you'd like here:</p>
      <Link to="/products/create">Insert an artist</Link>
    </div>
  );
};

export default Home;

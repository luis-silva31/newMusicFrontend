import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import "./index.css"

import Header from "./components/Header"

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import CreateProduct from "./pages/CreateProduct";
import Product from "./pages/Product";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/products/create" component={CreateProduct} />
        <Route path="/products/:id" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

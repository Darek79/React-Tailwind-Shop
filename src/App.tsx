import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from "./components/pages/Homepage";
import ProductPage from "./components/pages/ProductPage";
import CategoryPage from "./components/pages/CategoryPage";
import Cart from "./components/pages/Basket";
import Test from "./components/pages/Test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/product/:id"
          component={ProductPage}
        />
        <Route
          exact
          path="/category/:id"
          component={CategoryPage}
        />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Router>
  );
}

export default App;

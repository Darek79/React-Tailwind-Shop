import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Homepage from "./components/pages/Homepage";
//import Test from "./components/pages/Test";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;

import{
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import article from "./containers/article";
import articleListing from "/.containers/articleListing"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;

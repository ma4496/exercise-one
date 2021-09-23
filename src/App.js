import{ BrowserRouter as Router, Switch, Route} from "react-router-dom";
import article from "./container/Article";
import articleListing from "./container/ArticleListing";
import './App.css';

import Article from "./container/Article";
import ArticleListing from "./container/ArticleListing"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/article/:id">
          <Article />
        </Route>
        <Route path="/">
          <ArticleListing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

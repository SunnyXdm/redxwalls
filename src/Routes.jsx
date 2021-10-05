import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Wallpapers from "./Wallpapers";
const Routes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/r/:subreddit" component={Wallpapers} />
        </Switch>
      </div>
    </Router>
  );
};

export default Routes;

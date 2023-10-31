import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./common/NavigationBar";
import Movies from "./features/movieList/Movies";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

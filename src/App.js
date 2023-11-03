import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./common/NavigationBar";
import Movies from "./features/movieList";
import Person from "./features/personPage";
import Movie from "./features/moviePage";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/person">
          <Person />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
        <Route path="/">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;

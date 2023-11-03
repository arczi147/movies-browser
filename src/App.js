import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./common/NavigationBar";
import Movies from "./features/movieList";
import Person from "./features/personPage";
import { Wrapper } from "./styled";

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Switch>
        <Wrapper>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/person">
            <Person />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Wrapper>
      </Switch>
    </HashRouter>
  );
}

export default App;

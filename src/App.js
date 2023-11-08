import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import NavigationBar from "./common/NavigationBar";
import PopularMovies from "./features/movieList";
import PopularPeople from "./features/personList";
import Person from "./features/personPage";
import Movie from "./features/moviePage";
import NoResult from "./features/NoResult";
import Error from "./features/movieList/Error";

function App() {
	return (
		<HashRouter>
			<NavigationBar />
			<Switch>
        <Route path="/movies/:id">
          <Movie />
        </Route>
				<Route path="/movies">
					<PopularMovies />
				</Route>
				<Route path="/people">
					<PopularPeople />
				</Route>
				<Route path="/person">
					<Person />
				</Route>
				<Route path="/movie">
					<Movie />
				</Route>
				<Route path="/noresult">
					<NoResult />
				</Route>
				<Route path="/error">
					<Error />
				</Route>
				<Route path="/">
					<Redirect to="/movies" />
				</Route>
			</Switch>
		</HashRouter>
	);
};

export default App;

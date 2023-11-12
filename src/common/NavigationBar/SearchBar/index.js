import {
	StyledSearchBar,
	Input,
	Icon,
} from "./styled";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
	const location = useLocation();
	const moviesPage = location.pathname.includes("/movies");

	return (
		<StyledSearchBar>
			<Icon />
			<Input placeholder={
				moviesPage ? "Search for movies..." : "Search for people..."
			} />
		</StyledSearchBar>
	)
};

export default SearchBar;
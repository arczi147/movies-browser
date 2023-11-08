import { useDispatch } from "react-redux";
import { goToTheFirstPage } from "../../Pagination/paginationSlice";
import {
	StyledNavigation,
	Header,
	Logo,
	Caption,
	List,
	PageLink,
} from "./styled";

const Navigation = () => {
	const dispatch = useDispatch();

	const onHeaderClick = () => {
		dispatch(goToTheFirstPage());
	};

	return (
		<StyledNavigation>
			<Header to="/">
				<Logo onClick={onHeaderClick} />
				<Caption onClick={onHeaderClick}>
					Movies Browser
				</Caption>
			</Header>
			<List>
				<li>
					<PageLink to="/movies">Movies</PageLink>
				</li>
				<li>
					<PageLink to="/people">People</PageLink>
				</li>
				<li>
					<PageLink to="/person">Person</PageLink>
				</li>
				<li>
					<PageLink to="/error">Error</PageLink>
				</li>
				<li>
					<PageLink to="/noresult">NoResult</PageLink>
				</li>
			</List>
		</StyledNavigation>
	);
};

export default Navigation;
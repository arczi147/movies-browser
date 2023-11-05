import { StyledHeader, SpinnerSpace, StyledSpinner } from "./styled";
import Header from "../../common/Header";

const Loading = () => (
    <StyledHeader>
        <Header text="Search results for “Mulan”" />
        <SpinnerSpace>
            <StyledSpinner />
        </SpinnerSpace>
    </StyledHeader>
);

export default Loading;
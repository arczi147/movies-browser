import { StyledHeader, SpinnerSpace, StyledSpinner } from "./styled";
import Header from "../../../common/Header";
import { GlobalWrapper } from "../../../common/GlobalWrapper/styled";

const Loading = () => (
    <GlobalWrapper>
        <StyledHeader>
            <Header text="" />
            <SpinnerSpace>
                <StyledSpinner />
            </SpinnerSpace>
        </StyledHeader>
    </GlobalWrapper>
);

export default Loading;
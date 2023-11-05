import Header from "../../common/Header";
import { StyledHeader, StyledBigCloud, StyledSmallCloud, NoResultImage, StyledPaperPlane, StyledPlaneTrack, Image } from "./styled";

const NoResult = () => (
    <StyledHeader>
        <Header text="Sorry, there are no results for “Muan”" />
        <NoResultImage>
            <Image>
                <StyledBigCloud />
                <StyledSmallCloud />
                <StyledPaperPlane />
                <StyledPlaneTrack />
            </Image>
        </NoResultImage>
    </StyledHeader>
);

export default NoResult;
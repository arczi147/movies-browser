import { Wrapper, Prev, Previous, PageNumberContainer, Page, PageNumber, Of, PagesAmount, Next, Last } from "./styled";
import { ReactComponent as PrevVector } from "../../images/prev.svg";
import { ReactComponent as NextVector } from "../../images/next.svg";

const Pagination = () => (
    <Wrapper>
        <Prev>
            <PrevVector />
            Prev
        </Prev>
        <Previous>
            <PrevVector />
            Previous
        </Previous>
        <PageNumberContainer>
            <Page>Page</Page>
            <PageNumber>1</PageNumber>
            <Of>of</Of>
            <PagesAmount>500</PagesAmount>
        </PageNumberContainer>
        <Next>
            Next
            <NextVector />
        </Next>
        <Last>
            Last
            <NextVector />
        </Last>
    </Wrapper>
);

export default Pagination;
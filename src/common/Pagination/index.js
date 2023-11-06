import { Wrapper, First, Previous, PageNumberContainer, Page, PageNumber, Of, PagesAmount, Next, Last } from "./styled";
import { ReactComponent as PrevVector } from "../../images/prev.svg";
import { ReactComponent as NextVector } from "../../images/next.svg";
import { useState } from "react";

const Pagination = ({ onPrev, onNext, page }) => (
    <Wrapper>
        <First>
            <PrevVector />
            First
        </First>
        <Previous onClick={onPrev}>
            <PrevVector />
            Previous
        </Previous>
        <PageNumberContainer>
            <Page>Page</Page>
            <PageNumber>{page}</PageNumber>
            <Of>of</Of>
            <PagesAmount>500</PagesAmount>
        </PageNumberContainer>
        <Next onClick={onNext}>
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
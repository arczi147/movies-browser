import {
    Wrapper,
    PrevVector,
    NextVector,
    First,
    Previous,
    Next,
    Last,
    PageNumberContainer,
    Page,
    PageNumber,
    Of,
    PagesAmount,
} from "./styled";

const Pagination = ({ onFirst, onPrev, page, onNext, onLast }) => (
    <Wrapper>
        {page === 1 ? (
            <>
                <First disabled={true}>
                    <PrevVector disabled={true} />
                    First
                </First>
                <Previous disabled={true}>
                    <PrevVector disabled={true} />
                    Previous
                </Previous>
            </>
        ) : (
            <>
                <First onClick={onFirst}>
                    <PrevVector />
                    First
                </First>
                <Previous onClick={onPrev}>
                    <PrevVector />
                    Previous
                </Previous>
            </>
        )}

        <PageNumberContainer>
            <Page>Page</Page>
            <PageNumber>{page}</PageNumber>
            <Of>of</Of>
            <PagesAmount>500</PagesAmount>
        </PageNumberContainer>

        {page === 500 ? (
            <>
                <Next disabled={true}>
                    Next
                    <NextVector disabled={true} />
                </Next>
                <Last disabled={true}>
                    Last
                    <NextVector disabled={true} />
                </Last>
            </>
        ) : (
            <>
                <Next onClick={onNext}>
                    Next
                    <NextVector />
                </Next>
                <Last onClick={onLast}>
                    Last
                    <NextVector />
                </Last>
            </>
        )}
    </Wrapper >
);

export default Pagination;

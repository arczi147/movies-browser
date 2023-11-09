import { useState, useEffect } from "react";
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

const Pagination = ({ onFirst, onPrev, page, onNext, onLast }) => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 767);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 767);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    return (
        <Wrapper>
            {page === 1 ? (
                <>
                    <First disabled={true}>
                        <PrevVector />
                        {isWideScreen ? "First" : null}
                        {isWideScreen ? null : <PrevVector />}
                    </First>
                    <Previous disabled={true}>
                        <PrevVector />
                        {isWideScreen ? "Previous" : null}
                    </Previous>
                </>
            ) : (
                <>
                    <First onClick={onFirst}>
                        {isWideScreen ? "First" : null}
                        <PrevVector />
                        {isWideScreen ? null : <PrevVector />}
                    </First>
                    <Previous onClick={onPrev}>
                        <PrevVector />
                        {isWideScreen ? "Previous" : null}
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
                        {isWideScreen ? "Next" : null}
                        <NextVector />
                        {isWideScreen ? null : <NextVector />}
                    </Next>
                    <Last disabled={true}>
                        {isWideScreen ? "Last" : null}
                        <NextVector />
                    </Last>
                </>
            ) : (
                <>
                    <Next onClick={onNext}>
                        {isWideScreen ? "Next" : null}
                        <NextVector />
                    </Next>
                    <Last onClick={onLast}>
                        {isWideScreen ? "Last" : null}
                        <NextVector />
                        {isWideScreen ? null : <NextVector />}
                    </Last>
                </>
            )}
        </Wrapper>
    );
}

export default Pagination;

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
import { useLocation } from "react-router-dom";

const Pagination = ({ onFirst, onPrev, page, onNext, onLast }) => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 767);
    const location = useLocation();

    useEffect(() => {
        let newUrl; 
        newUrl = `/#${location.pathname}?page=${page}`;
        window.history.pushState({ page }, "", newUrl);
    }, [page, location.pathname]);

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
                        <PrevVector disabled={true}/>
                        {isWideScreen ? null : <PrevVector disabled={true}/>}
                        {isWideScreen ? "First" : null}
                    </First>
                    <Previous disabled={true}>
                        <PrevVector disabled={true}/>
                        {isWideScreen ? "Previous" : null}
                    </Previous>
                </>
            ) : (
                <>
                    <First onClick={onFirst}>
                        <PrevVector />
                        {isWideScreen ? null : <PrevVector />}
                        {isWideScreen ? "First" : null}

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
                        <NextVector disabled={true}/>
                    </Next>
                    <Last disabled={true}>
                        {isWideScreen ? "Last" : null}
                        {isWideScreen ? null : <NextVector disabled={true}/>}
                        <NextVector disabled={true}/>
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
                        {isWideScreen ? null : <NextVector />}
                        <NextVector />
                    </Last>
                </>
            )}
        </Wrapper>
    );
}

export default Pagination;

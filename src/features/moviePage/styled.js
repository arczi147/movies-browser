import styled from "styled-components";

export const Title = styled.h1`
    font-size: 36px;
    line-height: 120%;
    font-weight: 600;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 16px;
        font-weight: 500;
        line-height: 130%;
    };
`;
import styled from "styled-components";

export const MovieWrapper = styled.div`
    margin-bottom: 13%;
`;

export const Title = styled.h1`
    font-size: 36px;
    line-height: 120%;
    font-weight: 600;
    margin: 4.75% auto 2.4%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
        font-weight: 500;
        line-height: 130%;
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 16px;
        font-weight: 500;
        line-height: 130%;
        margin: 21px auto 12px;
    };
`;
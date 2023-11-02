import styled from "styled-components";

export const StyledHeader = styled.div`
    margin: 56px auto 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 24px auto 16px;
    }
`;

export const PeopleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
    }
`;
import styled from "styled-components";
import { PaginationButton } from "./PaginationButton";

export const Wrapper = styled.div`
    margin: 56px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Prev = styled(PaginationButton)`
    margin-right: 12px;
    background-color: ${({ theme }) => theme.color.mystic};
`;

export const Previous = styled(PaginationButton)`
    background-color: ${({ theme }) => theme.color.mystic};
`;

export const PageNumberContainer = styled.div`
    margin: 0 24px 0 24px;
    display: inline-flex;
    gap: 8px;
    font-size: 16px;
`;

export const Page = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
`;

export const PageNumber = styled.p`
    font-weight: 600;
`;

export const Of = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
`;

export const PagesAmount = styled.p`
    font-weight: 600;
`;

export const Next = styled(PaginationButton)`
    margin-right: 15px;
    background-color: ${({ theme }) => theme.color.pattensBlue};
`;

export const Last = styled(PaginationButton)`
    background-color: ${({ theme }) => theme.color.pattensBlue};
`;
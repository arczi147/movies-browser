import styled from "styled-components";
import photo from "./baner.png"

export const Baner = styled.div`
    width: 100%;
    height: 770px;
    background-image: url("${photo}");
    background-size: cover;
    background-position: center center;
    background: linear-gradient(270deg, #000 14.11%, rgba(0, 0, 0, 0.87) 15.08%, rgba(0, 0, 0, 0.72) 16.51%, rgba(0, 0, 0, 0.29) 19.99%, rgba(0, 0, 0, 0.16) 21.88%, rgba(0, 0, 0, 0.00) 25.68%), linear-gradient(90deg, #000 13.6%, rgba(0, 0, 0, 0.98) 14.58%, rgba(0, 0, 0, 0.97) 15.44%, rgba(0, 0, 0, 0.87) 16.3%, rgba(0, 0, 0, 0.23) 22.87%, rgba(0, 0, 0, 0.00) 26.64%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.69) 4.66%, rgba(0, 0, 0, 0.44) 9.34%, rgba(0, 0, 0, 0.21) 15.16%, rgba(0, 0, 0, 0.00) 24.22%), linear-gradient(189deg, rgba(0, 0, 0, 0.00) 58.48%, rgba(0, 0, 0, 0.11) 63.17%, rgba(0, 0, 0, 0.24) 68.85%, rgba(0, 0, 0, 0.49) 78.08%, rgba(0, 0, 0, 0.74) 85.86%, #000 92.87%);

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 300px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        height: 148px;
    };
`;

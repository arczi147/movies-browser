import styled from "styled-components";

export const Background = styled.div`
  background: ${({ theme }) => theme.color.black};
`;

export const BanerContainer = styled.div`
    margin: 0 auto 4.6%;
    position: relative;
    max-width: 1920px;
`;

export const Shadow = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const Baner = styled.img`
    max-height: 770px;
    max-width: 1368px;
    width: 100%;
    position: relative;
    z-index: 0; 
`;
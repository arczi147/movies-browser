import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1368px;
    max-width: 90%;
    margin: 0 auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    	width: 904px;
  	};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	width: 672px;
  	};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 592px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.smallerMobile}) {
        width: 440px;
    };

    @media (max-width: 490px) {
        width: 288px;
    };
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
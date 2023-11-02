import styled from "styled-components";

export const Container = styled.div`
    max-width: 208px;
    max-height: 339px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    transition: transform 0.3s ease;

    &:hover {
    cursor: pointer;
    transform: translateY(-8px);
  };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        border-radius: 5px;
        margin: 0 auto;
    }
`;

export const PersonDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

export const PersonPhoto = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 5px;
`;

export const Name = styled.p`
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
    }
`;

export const Character = styled.p`
    font-size: 13px;
    margin: 0;
    color: ${({ theme }) => theme.color.waterloo};
`;
import styled from "styled-components";

export const PersonTile = styled.div`
    max-width: 1368px;
    max-height: 644px;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    margin-top: 56px;
    margin-bottom: 56px;
    display: flex;
    align-items: flex-start;
    gap: 40px;
`;

export const Image = styled.img`
    max-width: 399px;
    max-height: 564px;
    border-radius: 5px;
`;

export const PersonDataContainer = styled.div`
    max-width: 849px;
    max-height: 239px;
`;

export const NameContainer = styled.h1`
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 
`;

export const BirthText = styled.span`
    color: ${({ theme }) => theme.color.stormGray};;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
`;

export const BirthDate = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
`;

export const DescriptionText = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 160%;
`;

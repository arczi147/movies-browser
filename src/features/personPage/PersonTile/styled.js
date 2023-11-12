import styled from "styled-components";

export const PersonTileContainer = styled.div`
    max-width: 1368px;
    min-height: 678px;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    margin-top: 56px;
    margin-bottom: 56px;
    gap: 40px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		flex-wrap: wrap;
		gap: 16px;
        padding: 16px;
        display: flex;
        align-items: flex-start;
	}
`;

export const Image = styled.img`
    max-width: 399px;
    border-radius: 5px;
    float: left;
    margin: 0 40px 0 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		max-width: 116px;
        margin: 0;
	}
`;

export const PersonDataContainer = styled.div`
    max-width: 1288px;
`;

export const Name = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
	margin: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 20px;
		font-weight: 500;
		line-height: 130%;
	}
`;

export const BirthText = styled.span`
    color: ${({ theme }) => theme.color.stormGray};;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 12px;
	}
`;

export const BirthDate = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 12px;
	}
`;

export const DescriptionText = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 160%;
    margin: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 14px;
	}
`;

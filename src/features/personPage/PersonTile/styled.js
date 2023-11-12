import styled from "styled-components";

export const PersonTileContainer = styled.div`
    max-width: 1368px;
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    margin-top: 56px;
    margin-bottom: 56px;
    display: flex;
    align-items: flex-start;
    gap: 40px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		flex-wrap: wrap;
		gap: 16px;
        padding: 16px;
	}
`;

export const Image = styled.img`
    max-width: 399px;
    border-radius: 5px;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		max-width: 116px;
	}
`;

export const PersonDataContainer = styled.div`
    max-width: 849px;
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

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 14px;
	}
`;

import styled from "styled-components";
import { ReactComponent as RatingStar } from "../../../images/rating.svg"

export const Container = styled.div`
    max-width: 1368px;
    padding: 40px;
    margin-top: 56px;
    margin-bottom: 56px;
    gap: 40px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    display: flex;
    flex-direction: row;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 16px;
        max-width: 100%;
        flex-wrap: wrap;
    };
`;

export const MovieDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 8px;
    };
`;

export const Poster = styled.img`
    border-radius: 5px;
    max-width: 312px;
    max-height: 464px;
    width: 100%;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 114px;
        max-height: 169px;
    };
`;

export const NoPoster = styled.img`
    border-radius: 5px;
    max-width: 292px;
    max-height: 434px;
    width: 100%;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 13px;
        width: 45%;
    };
`;

export const Year = styled.p`
    font-size: 22px;
    line-height: 120%;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 13px;
        line-height: 130%;
    };
`;

export const MovieDateText = styled.span`
    color: ${({ theme }) => theme.color.stormGray};;
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
    margin: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		display: none;
	}
`;

export const MovieDate = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 120%;
    margin: 0;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 12px;
        line-height: 130%;
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

export const GenreTags = styled.ul`
    list-style: none;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 16px;
    padding: 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 8px;
    };
`;

export const Tag = styled.li`
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    background: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    border-radius: 5px;
    padding: 8px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 10px;
        padding: 4px 8px;
        line-height: 110%;
    };
`;

export const Stats = styled.div`
    max-height: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const RatingIcon = styled(RatingStar)`
    height: 24px;
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 16px;
        width: 16px;
        margin-right: 1px;
    };
`;

export const Rating = styled.p`
    font-size: 22px;
    font-weight: 500;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 13px;
        font-weight: 600;
    };
`;

export const RatingMax = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    };
`;

export const Votes = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 13px;
        color: ${({ theme }) => theme.color.waterloo};
        line-height: 130%;
    };
`; 
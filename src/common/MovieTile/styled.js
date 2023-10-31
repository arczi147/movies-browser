import styled from "styled-components";
import { ReactComponent as RatingStar } from "../../images/rating.svg"

export const Container = styled.div`
  width: 324px;
  height: 650px;
  border-radius: 5px;
  padding: 16px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
`;

export const MovieDataContainer = styled.div`
  min-height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Poster = styled.img`
  border-radius: 5px;
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 130%;
  font-weight: 500;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin: 14px 0 8px;
`;

export const Year = styled.p`
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 0 0 8px;
`;

export const GenreTags = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  padding: 0;
`;

export const Tag = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  background: ${({ theme }) => theme.color.mystic};
  color: ${({ theme }) => theme.color.woodsmoke};
  border-radius: 5px;
  padding: 8px 16px;
`;

export const Stats = styled.div`
  max-height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  margin-top: auto;
`;

export const RatingIcon = styled(RatingStar)`
  height: 24px;
  width: 24px;
`;

export const Rating = styled.p`
  color: ${({ theme }) => theme.color.woodsmoke};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`;

export const Votes = styled.p`
  color: ${({ theme }) => theme.color.waterloo};
`; 
import styled from "styled-components";

export const NameContainer = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
	margin: 4.75% auto 2.4%;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 20px;
		font-weight: 500;
		line-height: 130%;
	}
`;
import styled from "styled-components";

export const NameContainer = styled.h1`
    font-family: Poppins;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; 

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 20px;
		font-weight: 500;
		line-height: 130%;
	}
`;
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
	${normalize}
	
	html {
		box-sizing: border-box;
	}

	*, ::after, ::before {
		box-sizing: inherit;
	}

	body {
		font-family: 'Poppins', sans-serif;
		background: ${({ theme }) => theme.color.whisper};
		margin: 0;

		zoom: 0.8; 
    -moz-transform: scale(0.8); 
    -moz-transform-origin: 0 0;
	}
`;
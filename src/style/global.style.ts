import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100%;
    }

    html,
    body {
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: 1px; // calc(1px * 480 / 375) later add medias
        background-color: ${({ theme }) => theme.palette.root};
    }

    ::-webkit-scrollbar {
        width: 0;
        height: 0;
        display: none;
    }
`;

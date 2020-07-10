import { createGlobalStyle } from 'styled-components';

export const FontStyle = createGlobalStyle`
    /* cyrillic-ext */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: local('Nunito ExtraLight'), local('Nunito-ExtraLight'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA-seUbOvIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: local('Nunito ExtraLight'), local('Nunito-ExtraLight'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA-seUZevIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: local('Nunito ExtraLight'), local('Nunito-ExtraLight'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA-seUbuvIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: local('Nunito ExtraLight'), local('Nunito-ExtraLight'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA-seUb-vIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
            U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: local('Nunito ExtraLight'), local('Nunito-ExtraLight'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA-seUYevIWzgPDA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Nunito Regular'), local('Nunito-Regular'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofIOOaBTMnFcQIG.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Nunito Regular'), local('Nunito-Regular'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofIMeaBTMnFcQIG.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Nunito Regular'), local('Nunito-Regular'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofIOuaBTMnFcQIG.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Nunito Regular'), local('Nunito-Regular'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofIO-aBTMnFcQIG.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
            U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Nunito Regular'), local('Nunito-Regular'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaBTMnFcQ.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Nunito Bold'), local('Nunito-Bold'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAjsOUbOvIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Nunito Bold'), local('Nunito-Bold'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAjsOUZevIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Nunito Bold'), local('Nunito-Bold'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAjsOUbuvIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Nunito Bold'), local('Nunito-Bold'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAjsOUb-vIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
            U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Nunito Bold'), local('Nunito-Bold'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAjsOUYevIWzgPDA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: local('Nunito Black'), local('Nunito-Black'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAtsGUbOvIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: local('Nunito Black'), local('Nunito-Black'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAtsGUZevIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: local('Nunito Black'), local('Nunito-Black'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAtsGUbuvIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: local('Nunito Black'), local('Nunito-Black'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAtsGUb-vIWzgPDEtj.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F,
            U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: local('Nunito Black'), local('Nunito-Black'),
            url(https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofAtsGUYevIWzgPDA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074,
            U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
`;
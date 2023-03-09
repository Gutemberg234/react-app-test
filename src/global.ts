import { createGlobalStyle } from "styled-components";

export const StylesGlobal = createGlobalStyle`
    /* RESET */
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
ol, ul {
    list-style: none;
}
*, 
*:after,
*:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
body{
    font-size: 100%;
    list-style-type: none;
    font-family: 'Open Sans', sans-serif;
    background: var(--space);
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

/* VARIAVEIS DE CORES */
:root{
    --night: #141414;
    --white: #ffffff;
    --space: #2f2e41;
    --blue: #009edd;
    --gray: #999999;
    --green: #039B00;
}
/* VARIAVEIS DE LARGURA */
:root{
    --desktop: 960px;
    --mobile: 100%;
}
`;
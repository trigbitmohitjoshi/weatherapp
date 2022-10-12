import { createGlobalStyle } from "styled-components";

const IndexGlobalStyle = createGlobalStyle`
:root{
    /* colors */
    --color-bg: hsl(0, 0%, 93%);
    --color-input-field: hsl(36, 39%, 77%);
    --color-p1:hsl(0, 49%, 48%);
    --color-p2:hsl(0, 67%, 60%);
    /* font familiy */
    --ff: 'Poppins', sans-serif;
}
*{
    margin:0;
    box-sizing: border-box;
}
body{
    background-color: var(--color-bg);
    font-family: var(--ff);
}
input{
    border: none;
    outline: none;
}
::placeholder{
    font-family: var(--ff);
    font-weight: 400;
}
`;
export default IndexGlobalStyle;

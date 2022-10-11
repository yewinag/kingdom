import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*:not(.fa) {
    font-family: Arial, Helvetica, sans-serif;  
  font-weight: 300;
}
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
h5,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
} /* Remove default margin */

ul[role='list'],
ol[role='list'] {
  list-style: none;
} /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */

html:focus-within {
  scroll-behavior: smooth;
} /* Set core root defaults */

body {
  min-height: 100vh;
  text-rendering: optimizespeed;
  line-height: 1.5;
} /* Set core body defaults */

a:not([class]) {
  text-decoration-skip-ink: auto;
} /* A elements that don't have a class get default styles */

img,
picture {
  max-width: 100%;
  display: block;
} /* Make images easier to work with */

input,
button,
textarea,
select {
  font: inherit;
} /* Inherit fonts for inputs and buttons */
`;
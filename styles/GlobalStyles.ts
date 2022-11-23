import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body {
    font-family: Roboto, sans-serif;
    font-size: 14px;  
    margin: 0;
}
.scroll-bar {
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #262b36;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #262b36;
  }
}
button {
  &:focus-visible {
    outline: 0;
  }
}
.flex-layout{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-center{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
a {
      text-decoration: none;
    }
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
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizespeed;
  line-height: 1.5;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
} 

input,
button,
textarea,
select {
  font: inherit;
} 
`;

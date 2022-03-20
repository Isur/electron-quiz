import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}
body {
  position: relative;
  color: white;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.colors.background};
  font-family: sans-serif;
  overflow-y: auto;
}

#root {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  color: ${(props) => props.theme.colors.secondary};
}
`;

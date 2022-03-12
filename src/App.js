import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Movies from "./components/Movies";

const theme = {
  colors: {
    dark: '#0e1014',
    white: '#fff'
  }
}

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.dark}
  }
`


const App = () => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Movies />
    </ThemeProvider>
  );
}

export default App;
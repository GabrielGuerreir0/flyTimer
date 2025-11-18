import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/defalt";
import { GlobalStyles } from "./styles/global";
import { Router } from "./Router";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

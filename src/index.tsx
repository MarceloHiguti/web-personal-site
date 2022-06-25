import { CssBaseline } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import { App } from "app/App";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "app/Store";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { i18next, initI18Next } from "resources/languages/i18n";
import { themeMaterial } from "resources/themes/ThemesConstants";

async function main() {
  await initI18Next();

  ReactDOM.render(
    <StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={themeMaterial}>
            <ReduxProvider store={store}>
              <I18nextProvider i18n={i18next}>
                <App />
              </I18nextProvider>
            </ReduxProvider>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </StrictMode>,
    document.getElementById("root")
  );
}

main();

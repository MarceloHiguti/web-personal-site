import { CssBaseline } from "@mui/material";
import { StylesProvider } from "@mui/styles";
import { App } from "app/App";
import { store } from "app/Store";
import React, { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { i18next, initI18Next } from "resources/languages/i18n";
import { themes } from "resources/themes/schema";
import { setToLocalStorage } from "utils/utils";

async function main() {
  setToLocalStorage("all-themes", themes.data);
  await initI18Next();

  ReactDOM.render(
    <StrictMode>
      <CssBaseline />
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ReduxProvider store={store}>
            <I18nextProvider i18n={i18next}>
              <App />
            </I18nextProvider>
          </ReduxProvider>
        </StylesProvider>
      </BrowserRouter>
    </StrictMode>,
    document.getElementById("root")
  );
}

main();

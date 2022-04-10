import { Button } from "@mui/material";
import { useTheme } from "hooks/useTheme";
import React, { useState, useEffect } from "react";
import { GlobalStyles } from "resources/themes//GlobalStyles";
import CreateThemeContent from "resources/themes/CreateThemeContent";
import Dialog from "resources/themes/Dialog";
import ThemeSelector from "resources/themes/ThemeSelector";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function AppTheme(): JSX.Element {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const manageDialog = () => {
    setShowDialog(!showDialog);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createTheme = (newTheme: any) => {
    console.log(newTheme);
    setShowDialog(false);
    setNewTheme(newTheme);
  };

  return themeLoaded ? (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Container style={{ fontFamily: selectedTheme.font }}>
        <h1>Theming System</h1>
        <p>
          Hey, There! It is great when the control is with you. The theming
          system helps you in building a theme of your choice and apply it to
          test live. Why wait? Just give it a try.
        </p>
        <button className="btn" onClick={manageDialog}>
          Create a Theme
        </button>
        <Dialog
          header="Create a Theme"
          body={<CreateThemeContent create={createTheme} />}
          open={showDialog}
          callback={manageDialog}
        />
        <ThemeSelector setter={setSelectedTheme} newTheme={newTheme} />
        <Button variant="contained">aaaaaaa</Button>
        <button className="btn">bbbbbbbbb</button>
      </Container>
    </ThemeProvider>
  ) : (
    <></>
  );
}

export default AppTheme;

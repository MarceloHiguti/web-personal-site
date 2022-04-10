import { Box, CssBaseline, Toolbar } from "@mui/material";
import { FC } from "react";

import {
  defaultBackgroundColor,
  Spacing,
} from "resources/themes/ThemesConstants";

import { useLayoutSelector } from "hooks/useLayoutSelector";
import { Container } from "components/Container/Container";
import { ApplicationNavbar } from "components/ApplicationNavbar/ApplicationNavbar";
import { ApplicationSidebar } from "components/ApplicationSidebar/ApplicationSidebar";
import { ProgressOverlay } from "components/ProgressOverlay/ProgressOverlay";

export const ApplicationShell: FC = ({ children }) => {
  const progressOverlay = useLayoutSelector((state) => state.progressOverlay);

  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: defaultBackgroundColor }}>
        <CssBaseline />
        <ApplicationNavbar />
        <ApplicationSidebar />
        <Container spacing={Spacing.zero}>
          <Toolbar />
          {children}
        </Container>
      </Box>
      <ProgressOverlay isOpen={progressOverlay.isActive}>
        {progressOverlay.tip}
      </ProgressOverlay>
    </>
  );
};

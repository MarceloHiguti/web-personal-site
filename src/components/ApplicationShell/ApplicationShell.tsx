import { Box, CssBaseline, Toolbar } from "@mui/material";
import { FC } from "react";

// import { Container, defaultBackgroundColor, Spacing } from '@portal/core';

// import { useLayoutSelector } from '../../hooks/useLayoutSelector';
// import { ApplicationNavbar } from '../ApplicationNavbar/ApplicationNavbar';
// import { ApplicationSidebar } from '../ApplicationSidebar/ApplicationSidebar';
// import { ProgressOverlay } from '../ProgressOverlay/ProgressOverlay';

export const ApplicationShell: FC = ({ children }) => {
  // const progressOverlay = useLayoutSelector((state) => state.progressOverlay);

  return (
    <>
      <div></div>
      {/* <Box sx={{ display: 'flex', backgroundColor: defaultBackgroundColor }}>
        <CssBaseline />
        <ApplicationNavbar />
        <ApplicationSidebar />
        <Container spacing={Spacing.zero}>
          <Toolbar />
          {children}
        </Container>
      </Box>
      <ProgressOverlay isOpen={progressOverlay.isActive}>{progressOverlay.tip}</ProgressOverlay> */}
    </>
  );
};

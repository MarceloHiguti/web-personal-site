import { Backdrop, Box, CircularProgress, Stack } from "@mui/material";
import { FC } from "react";

export interface ProgressOverlayProps {
  isOpen: boolean;
}

export const ProgressOverlay: FC<ProgressOverlayProps> = ({
  children,
  isOpen,
}) => {
  return (
    <Backdrop
      open={isOpen}
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Stack alignItems="center" spacing={2}>
        <CircularProgress
          color="inherit"
          data-testid="progress-overlay-indicator"
        />
        {Boolean(children) && <Box>{children}</Box>}
      </Stack>
    </Backdrop>
  );
};

import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { Notification } from "models/notification.types";

const DEFAULT_ELEVATION = 6;
const SPACING_XXS = 2;
const SPACING_ZERO = 0;
const DIALOG_MESSAGE_MAX_WIDTH = 256;

export type FloatingNotificationProps = {
  notification: Notification;
};

export const FloatingNotification: React.FC<FloatingNotificationProps> = ({
  notification,
}: {
  notification: Notification;
}) => {
  const { level, content, title, position } = notification;
  const duration = 3000;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, [notification, duration]);

  const handleClose: () => void = () => {
    setOpen(false);
  };

  if (content === "" || level === undefined) {
    return null;
  }

  return (
    <Stack
      spacing={SPACING_XXS}
      sx={{
        width: "100%",
        maxWidth: `${DIALOG_MESSAGE_MAX_WIDTH}px`,
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={duration}
        anchorOrigin={{
          vertical: position ? position.vertical : "bottom",
          horizontal: position ? position.horizontal : "right",
        }}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          elevation={DEFAULT_ELEVATION}
          onClose={handleClose}
          severity={level}
          sx={{ width: "100%" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {title && (
              <Typography
                variant="body2"
                component="span"
                style={{ margin: SPACING_ZERO }}
              >
                {title}
              </Typography>
            )}
            <Typography variant="body2" component="span">
              {content}
            </Typography>
          </Box>
        </Alert>
      </Snackbar>
    </Stack>
  );
};

import { Box, Typography } from "@mui/material";
import { FC } from "react";

export type ErrorPageProps = {
  title?: string;
  message?: string;
};

export const ErrorPage: FC<ErrorPageProps> = ({ title, message }) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{message}</Typography>
    </Box>
  );
};

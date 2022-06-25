import { Box, SxProps } from "@mui/material";
import { FC, memo } from "react";

type HgtColumnType = {
  sx?: SxProps;
};

export const HgtColumn: FC<HgtColumnType> = memo(
  ({ children, sx, ...props }) => {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", ...sx }} {...props}>
        {children}
      </Box>
    );
  }
);

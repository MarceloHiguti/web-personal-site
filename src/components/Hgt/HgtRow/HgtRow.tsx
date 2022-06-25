import { Box, SxProps } from "@mui/material";
import { FC, memo } from "react";

type HgtRowType = {
  sx?: SxProps;
};

export const HgtRow: FC<HgtRowType> = memo(({ children, sx, ...props }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", ...sx }} {...props}>
      {children}
    </Box>
  );
});

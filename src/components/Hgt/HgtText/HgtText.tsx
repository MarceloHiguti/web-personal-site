import { Typography, TypographyProps } from "@mui/material";
import { FC, memo } from "react";

export const HgtText: FC<TypographyProps> = memo((props) => {
  return <Typography {...props}>{props.children}</Typography>;
});

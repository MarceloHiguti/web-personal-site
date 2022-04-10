import Box from "@mui/material/Box";
import { memo } from "react";

import { fixedSize } from "resources/themes/ThemesConstants";

export type ContainerProps = {
  spacing?: number;
  children?: React.ReactNode;
  spacingTop?: number;
  backgroundColor?: string;
};

export const Container: React.FC<ContainerProps> = memo(function Container({
  children,
  spacing = fixedSize.defaultContainerSpacing,
  spacingTop,
  backgroundColor,
}: ContainerProps) {
  const flexGrow = 1;

  return (
    <Box
      component="main"
      sx={{
        flexGrow,
        backgroundColor,
        margin: (theme) =>
          theme.spacing(
            spacingTop !== undefined ? spacingTop : spacing,
            spacing,
            spacing,
            spacing
          ),
        width: (theme) =>
          `calc(100% - ${theme.spacing(spacing)} - ${theme.spacing(spacing)})`,
      }}
    >
      {children}
    </Box>
  );
});

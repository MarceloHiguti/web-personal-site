import Typography from "@mui/material/Typography";
import { FC, memo } from "react";

import { fixedSize } from "resources/themes/ThemesConstants";

import logoSrc from "resources/images/react-logo.png";

export const BrandLogo: FC = memo(function BrandLogo() {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, display: "flex" }}
    >
      <img
        src={logoSrc}
        alt="PPAAS"
        height={fixedSize.brandLogoHeight}
        width="auto"
      />
    </Typography>
  );
});

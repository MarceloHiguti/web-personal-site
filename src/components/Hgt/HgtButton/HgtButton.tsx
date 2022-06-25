import { Button, ButtonProps } from "@mui/material";
import { FC, memo } from "react";

type HgtButtonType = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonProps;

export const HgtButton: FC<HgtButtonType> = memo(
  ({ children, onClick, ...props }) => {
    return (
      <Button onClick={onClick} {...props}>
        {children}
      </Button>
    );
  }
);

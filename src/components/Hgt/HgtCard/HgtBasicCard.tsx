import {
  Card,
  CardContent,
  CardHeader,
  CardProps,
  SxProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC, ReactNode } from "react";

export interface HgtBasicCardProps extends CardProps {
  avatar?: ReactNode;
  title?: string;
  subheader?: ReactNode;
  action?: ReactNode;
  sxCard?: SxProps;
}

const CustomCardContent = styled<FC<{ hasChildren?: boolean }>>(CardContent)(
  ({ hasChildren }) => ({
    padding: hasChildren ? "16px 16px 32px 32px" : "0px 0px 0px 0px",
    "&:last-child": {
      paddingBottom: hasChildren ? "32px" : "16px",
    },
  })
);

export const HgtBasicCard: React.FC<HgtBasicCardProps> = ({
  avatar,
  title,
  subheader,
  action,
  children,
  sxCard,
}) => {
  return (
    <Card
      sx={{ borderRadius: "20px", margin: "16px", ...sxCard }}
      data-testid="basic-card-container"
    >
      <CardHeader
        data-testid="basic-card-header-container"
        avatar={avatar}
        title={title}
        subheader={subheader}
        action={action}
        titleTypographyProps={{ variant: "h6" }}
        sx={{ padding: "32px 16px 16px 32px" }}
      />
      <CustomCardContent
        data-testid="basic-card-content-container"
        hasChildren={Boolean(children !== null)}
      >
        {children}
      </CustomCardContent>
    </Card>
  );
};

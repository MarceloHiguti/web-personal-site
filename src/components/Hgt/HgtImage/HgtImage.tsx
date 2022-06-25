import { FC, memo } from "react";

type HgtImageType = {
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const HgtImage: FC<HgtImageType> = memo(({ src, style, ...props }) => {
  return <img src={src} style={style} {...props} />;
});

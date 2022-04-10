export const enum Level {
  Info = "info",
  Warning = "warning",
  Error = "error",
  Success = "success",
}

export const enum DialogHorizontalPosition {
  Center = "center",
  Left = "left",
  Right = "right",
}

export const enum DialogVerticalPosition {
  Bottom = "bottom",
  Top = "top",
}

export type DialogPosition = {
  horizontal: DialogHorizontalPosition;
  vertical: DialogVerticalPosition;
};

export interface Notification {
  content: string;
  title?: string;
  level?: Level;
  position?: DialogPosition;
}

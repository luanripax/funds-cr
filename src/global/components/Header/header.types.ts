import { ReactNode } from "react";

export interface IHeaderProps {
  showDivider?: boolean;
  leftContent?: ReactNode;
  middleContent?: ReactNode;
  rightContent?: ReactNode;
  onBack?: () => void;
}

import { ReactNode } from "react";

export interface LayoutType {
  children: ReactNode
}

export interface SiteLayoutPropsType {
  status: string,
  children: ReactNode,
  wrap?: boolean,
}
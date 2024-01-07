import { ContainerProps } from "../../../types/types";

import "./Container.css";

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};

import { ContainerProps } from "../../../types/types";

import "./Container.scss";

export const Container = ({ children }: ContainerProps) => {
  return <div className="container">{children}</div>;
};

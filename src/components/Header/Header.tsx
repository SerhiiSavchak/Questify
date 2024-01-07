import "./Header.css";
import { HeaderProps } from "../../types/types";

export const Header = ({ children }: HeaderProps) => {
  return <header className="header">{children}</header>;
};

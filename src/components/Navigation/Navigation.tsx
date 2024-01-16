import "./Navigation.scss";
import sprite from "../../images/icons/sprite.svg";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="header-nav">
      <Link to="/dashboard" className="header-logo">
        Questify
      </Link>
      <div className="header-user-wrap">
        <p className="header-user-text">J</p>
      </div>
      <p className="header-user-text-tablet">
        <span className="header-user-span"> John</span>
        ’s Quest Log
      </p>
      <button type="button" className="header-challenge-btn">
        <svg className="header-challenge-icon">
          <use href={sprite + "#icon-challenge"}></use>
        </svg>
      </button>
      <button type="button" className="header-logout-btn">
        <svg className="header-logout-icon">
          <use href={sprite + "#icon-logout"}></use>
        </svg>
      </button>
    </nav>
  );
};

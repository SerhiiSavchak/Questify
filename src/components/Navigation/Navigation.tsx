import "./Navigation.scss";
import sprite from "../../images/icons/sprite.svg";

export const Navigation = () => {
  return (
    <nav className="header-nav">
      <a className="header-logo">Questify</a>
      <div className="header-user-wrap">
        <p className="header-user-text">J</p>
      </div>

      <svg className="header-challenge-icon">
        <use href={sprite + "#icon-challenge"}></use>
      </svg>
      <button className="header-logout-btn">
        <svg className="header-logout-icon">
          <use href={sprite + "#icon-logout"}></use>
        </svg>
      </button>
    </nav>
  );
};

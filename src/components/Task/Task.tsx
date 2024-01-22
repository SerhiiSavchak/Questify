import "./Task.scss";
import sprite from "../../images/icons/sprite.svg";
import { useState } from "react";

export const Task = () => {
  const [test, setTest] = useState(false);

  return (
    <li className={test ? "task-item challenge" : "task-item"}>
      <div className="task-top-thumb">
        <div
          style={{ backgroundColor: "#DB0837" }}
          className="task-top-indicator"
        />
        <p className="task-top-text">Hard</p>
        <svg className="task-top-icon">
          <use href={sprite + `#icon-${test ? "trophy" : "star"}`}></use>
        </svg>
      </div>
      <div className="task-thumb">
        {test && <p className="challenge-text">Challenge</p>}
        <h3 className={test ? "task-title challenge" : "task-title"}>
          Read a book “To Kill a Mockingbird”
        </h3>
        <div className="task-time-wrap">
          <p className="task-time-text">
            {test && <span className="challenge-span">by </span>}
            Today,
            <span className="task-span"> 7:30</span>
          </p>
          <svg className="task-icon">
            <use href={sprite + "#icon-fire"}></use>
          </svg>
        </div>
      </div>

      <div className="task-type-wrap">
        <p className="task-type-text">work</p>
      </div>
    </li>
  );
};

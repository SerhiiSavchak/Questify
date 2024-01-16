import "./Dashboard.scss";
import { Task } from "../../components/Task/Task";
import { Container } from "../../components/common/Container/Container";
import sprite from "../../images/icons/sprite.svg";

export const Dashboard = () => {
  return (
    <section className="dashboard-section">
      <Container>
        <>
          <div className="dashboard-today-wrap">
            <h2 className="dashboard-today-title">today</h2>
            <ul className="dashboard-today-list">
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
              <Task />
            </ul>
          </div>
          <div className="dashboard-tomorrow-wrap">
            <h2 className="dashboard-tomorrow-title">tomorrow</h2>
            <ul className="dashboard-tomorrow-list">
              <Task />
              <Task />
            </ul>
          </div>
          <div className="dashboard-done-wrap">
            <h2 className="dashboard-done-title">done</h2>
            <ul className="dashboard-done-list">
              <Task />
              <Task />
              <Task />
            </ul>
          </div>
          <button className="dashboard-add-btn">
            <svg className="dashboard-add-icon">
              <use href={sprite + "#icon-add"}></use>
            </svg>
          </button>
        </>
      </Container>
    </section>
  );
};

import "./applicationContainer.scss";
import ApplicationList from "../applicationList/ApplicationList";

export default function ApplicationContainer({
  listTitles,
  list,
  onShowModal,
}) {
  return (
    <div className="application-container">
      {listTitles.map((title, index) => {
        return (
          <div key={index} className="application-wrapper">
            <ApplicationList title={title} list={list} />
            {index === 0 && (
              <button
                className="application-container__btn"
                onClick={onShowModal}
              >
                +
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

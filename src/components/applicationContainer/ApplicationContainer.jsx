import "./applicationContainer.scss";
import ApplicationList from "../applicationList/ApplicationList";

export default function ApplicationContainer({
  bewerberList,
  interviewList,
  akzeptiertList,
  onShowModal,
}) {
  return (
    <div className="application-container">
      <div className="application-wrapper">
        <ApplicationList title="Bewerber" list={bewerberList} />
        <button className="application-container__btn" onClick={onShowModal}>
          +
        </button>
      </div>
      <ApplicationList title="Interview" list={interviewList} />
      <ApplicationList title="Akzeptiert" list={akzeptiertList} />
    </div>
  );
}

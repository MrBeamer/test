import "./applicationContainer.scss";
import ApplicationList from "../applicationList/ApplicationList";

export default function ApplicationContainer({
  bewerberList,
  interviewList,
  akzeptiertList,
  onShowModal,
  onDeleteCandidate,
}) {
  return (
    <div className="application-container">
      <div className="application-wrapper">
        <ApplicationList
          title="Bewerber"
          list={bewerberList}
          onDeleteCandidate={onDeleteCandidate}
        />
        <button className="application-container__btn" onClick={onShowModal}>
          +
        </button>
      </div>
      <ApplicationList
        title="Interview"
        list={interviewList}
        onDeleteCandidate={onDeleteCandidate}
      />
      <ApplicationList
        title="Akzeptiert"
        list={akzeptiertList}
        onDeleteCandidate={onDeleteCandidate}
      />
    </div>
  );
}

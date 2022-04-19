import "./applicationItem.scss";

export default function ApplicationItem({ data, onNextSection }) {
  return (
    <div className={`application-item ${"none"}`}>
      <div className="application-item__container">
        <div className={`application-item__square ${"default"}`}></div>
        <p className="application-item__status">{data.status}</p>
      </div>
      <h2 className="application-item__title">{data.fullName}</h2>
      <p className="application-item__position">{data.position}</p>
      <button
        className="application-item__btn"
        onClick={() => onNextSection(data)}
      >
        >>>
      </button>
    </div>
  );
}

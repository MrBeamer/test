import "./modal.scss";
import { useState } from "react";

export default function Modal({ onShowModal, onAddToList }) {
  const [candidate, setCandidate] = useState({
    id: "",
    fullName: "",
    position: "Feature",
    answer: "Key answer to a very important question",
    email: "beamer@gmail.com",
    appendix: ["lebenslauf", "Anschreiben", "zertifikate"],
    status: "bewerber",
  });

  function handleInputChange(event) {
    const value = event.currentTarget.value;
    const input = event.currentTarget.name;

    setCandidate((prev) => {
      return { ...prev, [input]: value, id: Math.floor(Math.random() * 999) };
    });
  }

  return (
    <div className="modal">
      <div className="form">
        <form>
          <h2 className="form__title">Neuer Bewerber hinzufügen</h2>
          <div className="form__label">
            <label htmlFor="input" className="form-label__title">
              Name
            </label>
            <p className="form__label__subtitle">Vor- und Nachnamen</p>
          </div>
          <input
            onChange={handleInputChange}
            className="form__input"
            name="fullName"
          />
          <div className="form__label">
            <label htmlFor="input" className="form-label__title">
              Position
            </label>
            <p className="form__label__subtitle">Bezeichnung der Position</p>
          </div>
          <input
            onChange={handleInputChange}
            className="form__input"
            name="position"
          />
          <div className="form__flex-container">
            <button className="form__btn--small" onClick={onShowModal}>
              Zurück
            </button>
            <button
              className="form__btn--big"
              onClick={(event) => {
                onAddToList(event, candidate, setCandidate);
              }}
            >
              Hinzufügen
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

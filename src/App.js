import "./App.scss";
import data from "./data.json";
import ApplicationContainer from "./components/applicationContainer/ApplicationContainer";
import Modal from "./components/modal/Modal";

import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState(data.candidates);
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal((prevState) => !prevState);
  }

  useEffect(() => {
    showModal
      ? document.body.classList.add("modalOpen")
      : document.body.classList.remove("modalOpen");
  }, [showModal]);

  function addToList(event, candidate, setCandidate) {
    event.preventDefault();
    setList((prevList) => [candidate, ...prevList]);
    setCandidate({
      ...candidate,
      fullName: "",
      position: "",
      status: "bewerber",
    });
  }

  function deleteCandidate(candidate) {
    const newList = list.filter((item) => item !== candidate);
    setList(newList);
  }

  const [bewerber, setBewerber] = useState([]);
  const [interview, setInterview] = useState([]);
  const [akzeptiert, setAkzeptiert] = useState([]);

  useEffect(() => {
    const bewerberList = list.filter((item) => item.status === "bewerber");
    const interviewList = list.filter((item) => item.status === "interview");
    const akzeptiertList = list.filter((item) => item.status === "akzeptiert");

    setBewerber(bewerberList);
    setInterview(interviewList);
    setAkzeptiert(akzeptiertList);
  }, [list, akzeptiert, interview, bewerber]);

  return (
    <div className="App">
      <ApplicationContainer
        bewerberList={bewerber}
        interviewList={interview}
        akzeptiertList={akzeptiert}
        listTitles={data.listTitles}
        onShowModal={handleShowModal}
        onDeleteCandidate={deleteCandidate}
      />
      {showModal && (
        <Modal onShowModal={handleShowModal} onAddToList={addToList} />
      )}
    </div>
  );
}

export default App;

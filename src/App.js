import "./App.scss";
import data from "./data.json";
import ApplicationContainer from "./components/applicationContainer/ApplicationContainer";
import Modal from "./components/modal/Modal";

import { useState, useEffect } from "react";

function App() {
  const [list, setList] = useState(data.candidates);
  const [showModal, setShowModal] = useState(false);

  function handleShowModal(event) {
    event.preventDefault();
    setShowModal((prevState) => !prevState);
  }

  function addToList(event, candidate, setCandidate) {
    event.preventDefault();
    setList((prevList) => [candidate, ...prevList]);
    setCandidate({ ...candidate, title: "", category: "Feature", detail: "" });
  }

  // function deleteCanidate(event, candidate) {
  //   event.preventDefault();
  //   const newList = list.filter((item) => item !== candidate);
  //   setList(newList);
  //   console.log(candidate);
  //   console.log(list);
  // }

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
      />
      {showModal && (
        <Modal onShowModal={handleShowModal} onAddToList={addToList} />
      )}
    </div>
  );
}

export default App;

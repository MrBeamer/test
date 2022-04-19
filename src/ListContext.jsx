import { createContext, useState, useEffect } from "react";
import data from "./data.json";

const ListContext = createContext();

function ListProvider(props) {
  const [list, setList] = useState(data.candidates);

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
    console.log(list);
  }

  const [bewerberList, setBewerberList] = useState([]);
  const [interviewList, setInterviewList] = useState([]);
  const [akzeptiertList, setAkzeptiertList] = useState([]);

  useEffect(() => {
    const bewerber = list.filter((item) => item.status === "bewerber");
    const interview = list.filter((item) => item.status === "interview");
    const akzeptiert = list.filter((item) => item.status === "akzeptiert");

    setBewerberList(bewerber);
    setInterviewList(interview);
    setAkzeptiertList(akzeptiert);
  }, [list, akzeptiertList, interviewList, bewerberList]);

  const value = {
    list,
    addToList,
    deleteCandidate,
    bewerberList,
    interviewList,
    akzeptiertList,
  };
  return (
    <ListContext.Provider value={value}>{props.children}</ListContext.Provider>
  );
}

export { ListContext, ListProvider };

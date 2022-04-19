import "./applicationList.scss";
import ApplicationItem from "../applicationItem/ApplicationItem";
import Heading from "../heading/Heading";

export default function ApplicationList({ title, list }) {
  function nextSection(data) {
    if (data.status === "bewerber") {
      data.status = "interview";
    } else if (data.status === "interview") {
      data.status = "akzeptiert";
    } else {
      data.status = "bewerber";
    }
  }

  return (
    <div className="application-list">
      <Heading>{`${title} (${list?.length ?? 0})`}</Heading>

      {list?.map((data, index) => {
        return (
          <ApplicationItem
            key={index}
            data={data}
            onNextSection={nextSection}
          />
        );
      })}
    </div>
  );
}

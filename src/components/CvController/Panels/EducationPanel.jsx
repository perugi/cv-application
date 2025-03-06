import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function EducationPanel() {
  const dummySchools = ["School 1", "School 2", "School 3"];

  // TODO not use index as key
  return (
    <ExperiencesFrame>
      {dummySchools.map((school, index) => (
        <ExperienceFrame key={index} title={school}>
          <Input type="text" id="school" label="School" />
          <Input type="text" id="degree" label="Degree" />
          <Input type="date" id="start-date" label="Start Date" />
          <Input type="date" id="end-date" label="End Date" />
          <Input type="text" id="location" label="Location" />
        </ExperienceFrame>
      ))}
    </ExperiencesFrame>
  );
}

import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function ProfessionalPanel() {
  const dummyJobs = ["Job 1", "Job 2", "Job 3"];

  // TODO not use index as key
  return (
    <ExperiencesFrame>
      {dummyJobs.map((job, index) => (
        <ExperienceFrame key={index} title={job}>
          <Input type="text" id="employer" label="Employer" />
          <Input type="text" id="position" label="Position Title" />
          <Input type="date" id="start-date" label="Start Date" />
          <Input type="date" id="end-date" label="End Date" />
          <Input type="text" id="location" label="Location" />
          <Input type="textarea" id="description" label="Description" />
        </ExperienceFrame>
      ))}
    </ExperiencesFrame>
  );
}

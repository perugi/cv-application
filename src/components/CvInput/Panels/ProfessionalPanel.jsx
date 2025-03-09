import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function ProfessionalPanel({ experience }) {
  // TODO not use index as key
  return (
    <ExperiencesFrame>
      {experience.map((job, index) => (
        <ExperienceFrame key={index} title={`${job.employer}, ${job.position}`}>
          <Input
            type="text"
            id="employer"
            label="Employer"
            value={job.employer}
          />
          <Input
            type="text"
            id="position"
            label="Position Title"
            value={job.position}
          />
          <Input
            type="date"
            id="start-date"
            label="Start Date"
            value={job.startDate}
          />
          <Input
            type="date"
            id="end-date"
            label="End Date"
            value={job.endDate}
          />
          <Input
            type="text"
            id="location"
            label="Location"
            value={job.location}
          />
          <Input
            type="textarea"
            id="description"
            label="Description"
            value={job.description}
          />
        </ExperienceFrame>
      ))}
    </ExperiencesFrame>
  );
}

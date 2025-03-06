import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function EducationPanel({ cvData }) {
  const schools = cvData.education || [];
  console.log({ schools });

  // TODO not use index as key
  return (
    <ExperiencesFrame>
      {schools.map((school, index) => (
        <ExperienceFrame
          key={index}
          title={`${school.institution}, ${school.degree}`}
        >
          <Input
            type="text"
            id="institution"
            label="Institution"
            value={school.institution}
          />
          <Input type="text" id="degree" label="Degree" value={school.degree} />
          <Input
            type="date"
            id="start-date"
            label="Start Date"
            value={school.startDate}
          />
          <Input
            type="date"
            id="end-date"
            label="End Date"
            value={school.endDate}
          />
          <Input
            type="text"
            id="location"
            label="Location"
            value={school.location}
          />
          <Input
            type="textarea"
            id="description"
            label="Description"
            value={school.description}
          />
        </ExperienceFrame>
      ))}
    </ExperiencesFrame>
  );
}

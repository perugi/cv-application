import { useState } from "react";
import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function EducationPanel({ education, setCvData }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  function handleExpand(index) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setCvData((prev) => ({
      ...prev,
      education: prev.education.map((school, index) =>
        index === expandedIndex ? { ...school, [id]: value } : school
      ),
    }));
  }

  function handleRemove(removedIndex) {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter(
        (school, index) => index !== removedIndex
      ),
    }));
  }

  return (
    <ExperiencesFrame>
      {education.map((school, index) => (
        <ExperienceFrame
          key={school.id}
          expanded={expandedIndex === index}
          onExpand={() => handleExpand(index)}
          title={`${school.title}, ${school.institution}`}
          handleRemove={() => handleRemove(index)}
        >
          <Input
            type="text"
            id="institution"
            label="Institution"
            value={school.institution}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="title"
            label="Title"
            value={school.title}
            onChange={handleChange}
          />
          <Input
            type="date"
            id="startDate"
            label="Start Date"
            value={school.startDate}
            onChange={handleChange}
          />
          <Input
            type="date"
            id="endDate"
            label="End Date"
            value={school.endDate}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="location"
            label="Location"
            value={school.location}
            onChange={handleChange}
          />
          <Input
            type="textarea"
            id="description"
            label="Description"
            value={school.description}
            onChange={handleChange}
          />
        </ExperienceFrame>
      ))}
    </ExperiencesFrame>
  );
}

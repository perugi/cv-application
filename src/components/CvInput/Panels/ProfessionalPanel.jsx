import { useState } from "react";
import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function ProfessionalPanel({ experience, setCvData }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  function handleExpand(index) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.map((job, index) =>
        index === expandedIndex ? { ...job, [id]: value } : job
      ),
    }));
  }

  function handleRemove(removedIndex) {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.filter((job, index) => index !== removedIndex),
    }));
  }

  return (
    <ExperiencesFrame>
      {experience.map((job, index) => (
        <ExperienceFrame
          key={job.id}
          expanded={expandedIndex === index}
          onExpand={() => handleExpand(index)}
          title={`${job.employer}, ${job.position}`}
          handkeRemove={() => handleRemove(index)}
        >
          <Input
            type="text"
            id="employer"
            label="Employer"
            value={job.employer}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="position"
            label="Position Title"
            value={job.position}
            onChange={handleChange}
          />
          <Input
            type="date"
            id="startDate"
            label="Start Date"
            value={job.startDate}
            onChange={handleChange}
          />
          <Input
            type="date"
            id="endDate"
            label="End Date"
            value={job.endDate}
            onChange={handleChange}
          />
          <Input
            type="text"
            id="location"
            label="Location"
            value={job.location}
            onChange={handleChange}
          />
          <Input
            type="textarea"
            id="description"
            label="Description"
            value={job.description}
            onChange={handleChange}
          />
        </ExperienceFrame>
      ))}
    </ExperiencesFrame>
  );
}

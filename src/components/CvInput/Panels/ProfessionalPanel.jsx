import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function ProfessionalPanel({ professional, setCvData }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  function handleExpand(index) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

  function handleChange(event) {
    const { id, value } = event.target;
    setCvData((prev) => ({
      ...prev,
      professional: prev.professional.map((job, index) =>
        index === expandedIndex ? { ...job, [id]: value } : job
      ),
    }));
  }

  function removeProfessionalItem(removedIndex) {
    setCvData((prev) => ({
      ...prev,
      professional: prev.professional.filter(
        (_, index) => index !== removedIndex
      ),
    }));
  }

  function addProfessionalItem() {
    setCvData((prev) => ({
      ...prev,
      professional: [
        ...prev.professional,
        {
          id: uuidv4(),
          employer: "",
          position: "",
          startDate: "",
          endDate: "",
          location: "",
          description: "",
        },
      ],
    }));

    setExpandedIndex(professional.length);
  }

  return (
    <ExperiencesFrame handleAdd={addProfessionalItem}>
      {professional.map((job, index) => (
        <ExperienceFrame
          key={job.id}
          expanded={expandedIndex === index}
          onExpand={() => handleExpand(index)}
          title={`${job.employer}, ${job.position}`}
          incompleteWarning={
            job.employer && job.position
              ? null
              : "Fill in employer and position!"
          }
          handleRemove={() => removeProfessionalItem(index)}
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

import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { v4 as uuidv4 } from "uuid";

import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function ProfessionalPanel({ professional, setCvData }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const inputRef = useRef(null);

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

  function togglePresent(event) {
    const { checked } = event.target;

    setCvData((prev) => ({
      ...prev,
      professional: prev.professional.map((job, index) =>
        index === expandedIndex ? { ...job, endDateIsPresent: checked } : job
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

    setExpandedIndex(null);
  }

  function addProfessionalItem() {
    flushSync(() => {
      setCvData((prev) => ({
        ...prev,
        professional: [
          ...prev.professional,
          {
            id: uuidv4(),
            organization: "",
            title: "",
            startDate: "",
            endDate: "",
            endDateIsPresent: false,
            location: "",
            description: "",
          },
        ],
      }));

      setExpandedIndex(professional.length);
    });

    inputRef.current.focus();
  }

  return (
    <ExperiencesFrame handleAdd={addProfessionalItem}>
      {professional.map((job, index) => (
        <ExperienceFrame
          key={job.id}
          expanded={expandedIndex === index}
          exp={job}
          incompleteWarning="Fill in employer and position!"
          onExpand={() => handleExpand(index)}
          handleRemove={() => removeProfessionalItem(index)}
        >
          <Input
            type="text"
            id="organization"
            label="Employer"
            value={job.organization}
            onChange={handleChange}
            ref={expandedIndex === index ? inputRef : null}
          />
          <Input
            type="text"
            id="title"
            label="Position"
            value={job.title}
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
            togglePresent={togglePresent}
            endDateIsPresent={job.endDateIsPresent}
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

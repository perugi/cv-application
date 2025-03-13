import { useState, useRef } from "react";
import { flushSync } from "react-dom";
import { v4 as uuidv4 } from "uuid";

import ExperiencesFrame from "./ExperiencesFrame/ExperiencesFrame";
import ExperienceFrame from "./ExperienceFrame/ExperienceFrame";
import Input from "./Input/Input";

export default function EducationPanel({ education, setCvData }) {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const inputRef = useRef(null);

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

  function togglePresent(event) {
    const { checked } = event.target;

    setCvData((prev) => ({
      ...prev,
      education: prev.education.map((school, index) =>
        index === expandedIndex
          ? { ...school, endDateIsPresent: checked }
          : school
      ),
    }));
  }

  function removeEducationItem(removedIndex) {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((_, index) => index !== removedIndex),
    }));

    setExpandedIndex(null);
  }

  function addEducationItem() {
    flushSync(() => {
      setCvData((prev) => ({
        ...prev,
        education: [
          ...prev.education,
          {
            id: uuidv4(),
            organization: "",
            title: "",
            startDate: "",
            endDate: "",
            location: "",
            description: "",
          },
        ],
      }));

      setExpandedIndex(education.length);
    });

    inputRef.current.focus();
  }

  return (
    <ExperiencesFrame handleAdd={addEducationItem}>
      {education.map((school, index) => (
        <ExperienceFrame
          key={school.id}
          expanded={expandedIndex === index}
          exp={school}
          incompleteWarning="Fill in institution and title!"
          onExpand={() => handleExpand(index)}
          handleRemove={() => removeEducationItem(index)}
        >
          <Input
            type="text"
            id="organization"
            label="Institution"
            value={school.organization}
            onChange={handleChange}
            ref={expandedIndex === index ? inputRef : null}
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
            togglePresent={togglePresent}
            endDateIsPresent={school.endDateIsPresent}
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

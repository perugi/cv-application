import PersonalInfoPanel from "./PersonalInfoPanel.jsx";
import EducationPanel from "./EducationPanel.jsx";
import ExperiencePanel from "./ExperiencePanel.jsx";

export default function CvController({ className }) {
  return (
    <div className={className}>
      <PersonalInfoPanel />
      <EducationPanel />
      <ExperiencePanel />
    </div>
  );
}

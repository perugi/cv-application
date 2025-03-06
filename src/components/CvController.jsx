import CvSetupPanel from "./CvSetupPanel.jsx";
import PersonalInfoPanel from "./PersonalInfoPanel.jsx";
import EducationPanel from "./EducationPanel.jsx";
import ExperiencePanel from "./ExperiencePanel.jsx";

export default function CvController() {
  return (
    <div className="cv-controller">
      <CvSetupPanel />
      <PersonalInfoPanel />
      <EducationPanel />
      <ExperiencePanel />
    </div>
  );
}

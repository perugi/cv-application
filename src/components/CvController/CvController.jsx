import PersonalInfoPanel from "./Panels/PersonalInfoPanel.jsx";
import EducationPanel from "./Panels/EducationPanel.jsx";
import ProfessionalPanel from "./Panels/ProfessionalPanel.jsx";
import PanelFrame from "./Panels/PanelFrame/PanelFrame.jsx";

import styles from "./CvController.module.css";

export default function CvController({ className }) {
  return (
    <div className={`${className} ${styles.cvController}`}>
      <PanelFrame title="Personal Information">
        <PersonalInfoPanel />
      </PanelFrame>
      <PanelFrame title="Educational Experience">
        <EducationPanel />
      </PanelFrame>
      <PanelFrame title="Professional Experience">
        <ProfessionalPanel />
      </PanelFrame>
    </div>
  );
}

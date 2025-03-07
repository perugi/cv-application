import PersonalInfoPanel from "./Panels/PersonalInfoPanel.jsx";
import EducationPanel from "./Panels/EducationPanel.jsx";
import ProfessionalPanel from "./Panels/ProfessionalPanel.jsx";
import PanelFrame from "./Panels/PanelFrame/PanelFrame.jsx";

import styles from "./CvInput.module.css";

export default function CvInput({ className, cvData }) {
  return (
    <div className={`${className} ${styles.cvInput}`}>
      <PanelFrame title="Personal Information">
        <PersonalInfoPanel cvData={cvData} />
      </PanelFrame>
      <PanelFrame title="Work Experience">
        <ProfessionalPanel cvData={cvData} />
      </PanelFrame>
      <PanelFrame title="Education and Training">
        <EducationPanel cvData={cvData} />
      </PanelFrame>
    </div>
  );
}

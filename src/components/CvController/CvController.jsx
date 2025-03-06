import PersonalInfoPanel from "./Panels/PersonalInfoPanel.jsx";
import EducationPanel from "./Panels/EducationPanel.jsx";
import ProfessionalPanel from "./Panels/ProfessionalPanel.jsx";
import PanelFrame from "./Panels/PanelFrame/PanelFrame.jsx";

import styles from "./CvController.module.css";

export default function CvController({ className, cvData }) {
  return (
    <div className={`${className} ${styles.cvController}`}>
      <PanelFrame title="Personal Information">
        <PersonalInfoPanel cvData={cvData} />
      </PanelFrame>
      <PanelFrame title="Education">
        <EducationPanel cvData={cvData} />
      </PanelFrame>
      <PanelFrame title="Experience">
        <ProfessionalPanel cvData={cvData} />
      </PanelFrame>
    </div>
  );
}

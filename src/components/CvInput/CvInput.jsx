import PersonalInfoPanel from "./Panels/PersonalInfoPanel.jsx";
import EducationPanel from "./Panels/EducationPanel.jsx";
import ProfessionalPanel from "./Panels/ProfessionalPanel.jsx";
import PanelFrame from "./Panels/PanelFrame/PanelFrame.jsx";

import styles from "./CvInput.module.css";

export default function CvInput({ className, cvData, setCvData }) {
  return (
    <div className={`${className} ${styles.cvInput}`}>
      <PanelFrame title="Personal Information">
        <PersonalInfoPanel
          personalInfo={cvData.personalInfo}
          setCvData={setCvData}
        />
      </PanelFrame>
      <PanelFrame title="Work Experience" expandable={false}>
        <ProfessionalPanel
          professional={cvData.professional}
          setCvData={setCvData}
        />
      </PanelFrame>
      <PanelFrame title="Education and Training" expandable={false}>
        <EducationPanel education={cvData.education} setCvData={setCvData} />
      </PanelFrame>
    </div>
  );
}

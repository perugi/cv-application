import PersonalInfoPanel from "./Panels/PersonalInfoPanel.jsx";
import EducationPanel from "./Panels/EducationPanel.jsx";
import ProfessionalPanel from "./Panels/ProfessionalPanel.jsx";
import PanelFrame from "./Panels/PanelFrame/PanelFrame.jsx";

import styles from "./CvInput.module.css";

export default function CvInput({ className, cvData, setCvData }) {
  const personalInfo = cvData.personalInfo;
  const education = cvData.education;
  const experience = cvData.experience;

  return (
    <div className={`${className} ${styles.cvInput}`}>
      <PanelFrame title="Personal Information">
        <PersonalInfoPanel personalInfo={personalInfo} setCvData={setCvData} />
      </PanelFrame>
      <PanelFrame title="Work Experience">
        <ProfessionalPanel experience={experience} setCvData={setCvData} />
      </PanelFrame>
      <PanelFrame title="Education and Training">
        <EducationPanel education={education} setCvData={setCvData} />
      </PanelFrame>
    </div>
  );
}

import PanelFrame from "../CvInput/Panels/PanelFrame/PanelFrame";
import styles from "./CvControl.module.css";
import { sampleCvData } from "../../data";

export default function CvControl({
  className,
  cvControl,
  setCvControl,
  setCvData,
}) {
  const handleButtonClick = (type, value) => {
    setCvControl((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const clearData = () => {
    setCvData({
      personalInfo: {
        fullName: "",
        dob: "",
        email: "",
        phone: "",
        address: "",
        bio: "",
      },
      education: [],
      professional: [],
    });
  };

  const loadSample = () => {
    setCvData(sampleCvData);
  };

  return (
    <div className={`${className} ${styles.cvControl}`}>
      <PanelFrame title="CV Setup">
        <div>
          <p>CV Data:</p>
          <button aria-label="Clear CV data" onClick={clearData}>
            Clear
          </button>
          <button aria-label="Load sample CV data" onClick={loadSample}>
            Load sample
          </button>
        </div>
        <div>
          <p>Layout:</p>
          <button
            className={`${styles.layoutButton} ${
              cvControl.layout === "top" ? styles.active : ""
            }`}
            aria-label="Personal information on top"
            onClick={() => handleButtonClick("layout", "top")}
          >
            Top
          </button>
          <button
            className={`${styles.layoutButton} ${
              cvControl.layout === "left" ? styles.active : ""
            }`}
            aria-label="Personal information on left"
            onClick={() => handleButtonClick("layout", "left")}
          >
            Left
          </button>
          <button
            className={`${styles.layoutButton} ${
              cvControl.layout === "right" ? styles.active : ""
            }`}
            aria-label="Personal information on right"
            onClick={() => handleButtonClick("layout", "right")}
          >
            Right
          </button>
        </div>
        <div>
          <p>Work/Education sorting:</p>
          <button
            className={`${styles.sortingButton} ${
              cvControl.sorting === "newestFirst" ? styles.active : ""
            }`}
            aria-label="Sort experiences from newest to oldest"
            onClick={() => handleButtonClick("sorting", "newestFirst")}
          >
            From newest to oldest
          </button>
          <button
            className={`${styles.sortingButton} ${
              cvControl.sorting === "oldestFirst" ? styles.active : ""
            }`}
            aria-label="Sort experiences from oldest to newest"
            onClick={() => handleButtonClick("sorting", "oldestFirst")}
          >
            From oldest to newest
          </button>
        </div>
        <div>
          <p>Color theme:</p>
          <button
            className={`${styles.colorThemeButton} ${
              cvControl.colorTheme === "lightGray" ? styles.active : ""
            }`}
            aria-label="Light gray color theme"
            onClick={() => handleButtonClick("colorTheme", "lightGray")}
          >
            Light gray
          </button>
          <button
            className={`${styles.colorThemeButton} ${
              cvControl.colorTheme === "lightBlue" ? styles.active : ""
            }`}
            aria-label="Light blue color theme"
            onClick={() => handleButtonClick("colorTheme", "lightBlue")}
          >
            Light blue
          </button>
          <button
            className={`${styles.colorThemeButton} ${
              cvControl.colorTheme === "darkBlue" ? styles.active : ""
            }`}
            aria-label="Dark blue color theme"
            onClick={() => handleButtonClick("colorTheme", "darkBlue")}
          >
            Dark blue
          </button>
        </div>
        <div>
          <p>Font size:</p>
          <button
            className={`${styles.fontSizeButton} ${
              cvControl.fontSize === "small" ? styles.active : ""
            }`}
            aria-label="Small font size"
            onClick={() => handleButtonClick("fontSize", "small")}
          >
            Small
          </button>
          <button
            className={`${styles.fontSizeButton} ${
              cvControl.fontSize === "medium" ? styles.active : ""
            }`}
            aria-label="Medium font size"
            onClick={() => handleButtonClick("fontSize", "medium")}
          >
            Medium
          </button>
          <button
            className={`${styles.fontSizeButton} ${
              cvControl.fontSize === "large" ? styles.active : ""
            }`}
            aria-label="Large font size"
            onClick={() => handleButtonClick("fontSize", "large")}
          >
            Large
          </button>
        </div>
      </PanelFrame>
    </div>
  );
}

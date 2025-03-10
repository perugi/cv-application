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
        <div className={styles.settings}>
          <div>
            <p>CV Data:</p>
            <button
              className={styles.controlButton}
              aria-label="Clear CV data"
              onClick={clearData}
            >
              Clear
            </button>
            <button
              className={styles.controlButton}
              aria-label="Load sample CV data"
              onClick={loadSample}
            >
              Load sample
            </button>
          </div>
          <div>
            <p>Layout:</p>
            <div className={styles.buttonGroup}>
              <button
                className={`${styles.controlButton} ${
                  cvControl.layout === "top" ? styles.active : ""
                }`}
                aria-label="Personal information on top"
                onClick={() => handleButtonClick("layout", "top")}
              >
                Top
              </button>
              <button
                className={`${styles.controlButton} ${
                  cvControl.layout === "left" ? styles.active : ""
                }`}
                aria-label="Personal information on left"
                onClick={() => handleButtonClick("layout", "left")}
              >
                Left
              </button>
              <button
                className={`${styles.controlButton} ${
                  cvControl.layout === "right" ? styles.active : ""
                }`}
                aria-label="Personal information on right"
                onClick={() => handleButtonClick("layout", "right")}
              >
                Right
              </button>
            </div>
          </div>
          <div>
            <p>Work/Education sorting:</p>
            <div className={styles.buttonGroup}>
              <button
                className={`${styles.controlButton} ${
                  cvControl.sorting === "newestFirst" ? styles.active : ""
                }`}
                aria-label="Sort experiences from newest to oldest"
                onClick={() => handleButtonClick("sorting", "newestFirst")}
              >
                Newest to oldest
              </button>
              <button
                className={`${styles.controlButton} ${
                  cvControl.sorting === "oldestFirst" ? styles.active : ""
                }`}
                aria-label="Sort experiences from oldest to newest"
                onClick={() => handleButtonClick("sorting", "oldestFirst")}
              >
                Oldest to newest
              </button>
            </div>
          </div>
          <div>
            <p>Color theme:</p>
            <button
              className={`${styles.colorButton} ${styles.lightGray} ${
                cvControl.colorTheme === "lightGray" ? styles.active : ""
              }`}
              aria-label="Light gray color theme"
              onClick={() => handleButtonClick("colorTheme", "lightGray")}
            ></button>
            <button
              className={`${styles.colorButton} ${styles.lightBlue} ${
                cvControl.colorTheme === "lightBlue" ? styles.active : ""
              }`}
              aria-label="Light blue color theme"
              onClick={() => handleButtonClick("colorTheme", "lightBlue")}
            ></button>
            <button
              className={`${styles.colorButton} ${styles.darkBlue} ${
                cvControl.colorTheme === "darkBlue" ? styles.active : ""
              }`}
              aria-label="Dark blue color theme"
              onClick={() => handleButtonClick("colorTheme", "darkBlue")}
            ></button>
          </div>
          <div>
            <p>Font size:</p>
            <button
              className={`${styles.fontsizeButton} ${styles.small} ${
                cvControl.fontSize === "small" ? styles.active : ""
              }`}
              aria-label="Small font size"
              onClick={() => handleButtonClick("fontSize", "small")}
            >
              aA
            </button>
            <button
              className={`${styles.fontsizeButton} ${styles.medium} ${
                cvControl.fontSize === "medium" ? styles.active : ""
              }`}
              aria-label="Medium font size"
              onClick={() => handleButtonClick("fontSize", "medium")}
            >
              aA
            </button>
            <button
              className={`${styles.fontsizeButton} ${styles.large} ${
                cvControl.fontSize === "large" ? styles.active : ""
              }`}
              aria-label="Large font size"
              onClick={() => handleButtonClick("fontSize", "large")}
            >
              aA
            </button>
          </div>
        </div>
      </PanelFrame>
    </div>
  );
}

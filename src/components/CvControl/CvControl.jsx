import PanelFrame from "../CvInput/Panels/PanelFrame/PanelFrame";
import styles from "./CvControl.module.css";

export default function CvControl({ className, cvControl, setCvControl }) {
  console.log({ cvControl });
  return (
    <div className={`${className} ${styles.cvControl}`}>
      <PanelFrame title="CV Setup">
        <div>
          <p>Layout:</p>
          <button
            className={`${styles.layoutButton} ${
              cvControl.layout === "top" ? styles.active : ""
            }`}
            aria-label="Personal information on top"
          >
            Top
          </button>
          <button
            className={`${styles.layoutButton} ${
              cvControl.layout === "left" ? styles.active : ""
            }`}
            aria-label="Personal information on left"
          >
            Left
          </button>
          <button
            className={`${styles.layoutButton} ${
              cvControl.layout === "right" ? styles.active : ""
            }`}
            aria-label="Personal information on right"
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
          >
            From newest to oldest
          </button>
          <button
            className={`${styles.sortingButton} ${
              cvControl.sorting === "oldestFirst" ? styles.active : ""
            }`}
            aria-label="Sort experiences from oldest to newest"
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
          >
            Light gray
          </button>
          <button
            className={`${styles.colorThemeButton} ${
              cvControl.colorTheme === "lightBlue" ? styles.active : ""
            }`}
            aria-label="Light blue color theme"
          >
            Light blue
          </button>
          <button
            className={`${styles.colorThemeButton} ${
              cvControl.colorTheme === "darkBlue" ? styles.active : ""
            }`}
            aria-label="Dark blue color theme"
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
          >
            Small
          </button>
          <button
            className={`${styles.fontSizeButton} ${
              cvControl.fontSize === "medium" ? styles.active : ""
            }`}
            aria-label="Medium font size"
          >
            Medium
          </button>
          <button
            className={`${styles.fontSizeButton} ${
              cvControl.fontSize === "large" ? styles.active : ""
            }`}
            aria-label="Large font size"
          >
            Large
          </button>
        </div>
      </PanelFrame>
    </div>
  );
}

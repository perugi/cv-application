import PanelFrame from "../CvInput/Panels/PanelFrame/PanelFrame";
import styles from "./CvControl.module.css";

export default function CvControl({ className }) {
  return (
    <div className={`${className} ${styles.cvControl}`}>
      <PanelFrame title="CV Setup">
        <div className={styles.fontSizeControl}>
          <p>Font size:</p>
          <button
            className={`${styles.fontSizeButton} ${styles.active}`}
            aria-label="Small font size"
          >
            Small
          </button>
          <button
            className={styles.fontSizeButton}
            aria-label="Medium font size"
          >
            Medium
          </button>
          <button
            className={styles.fontSizeButton}
            aria-label="Large font size"
          >
            Large
          </button>
        </div>
      </PanelFrame>
    </div>
  );
}

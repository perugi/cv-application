import PanelFrame from "../CvInput/Panels/PanelFrame/PanelFrame";
import styles from "./CvControl.module.css";

export default function CvControl({ className }) {
  return (
    <div className={`${className} ${styles.cvControl}`}>
      <PanelFrame title="CV Setup">
        <div>
          <p>Layout:</p>
          <button
            className={`${styles.layoutButton} ${styles.active}`}
            aria-label="Personal information on top"
          >
            Top
          </button>
          <button
            className={styles.layoutButton}
            aria-label="Personal information on left"
          >
            Left
          </button>
          <button
            className={styles.layoutButton}
            aria-label="Personal information on right"
          >
            Right
          </button>
        </div>
        <div>
          <p>Sorting of experiences:</p>
          <button
            className={`${styles.sortingButton} ${styles.active}`}
            aria-label="Sort experiences from latest to oldest"
          >
            From latest to oldest
          </button>
          <button
            className={styles.sortingButton}
            aria-label="Sort experiences from oldest to latest"
          >
            From latest to oldest
          </button>
        </div>
        <div>
          <p>Color theme:</p>
          <button
            className={`${styles.colorThemeButton} ${styles.active}`}
            aria-label="Light gray color theme"
          >
            Light gray
          </button>
          <button
            className={styles.colorThemeButton}
            aria-label="Light blue color theme"
          >
            Light blue
          </button>
          <button
            className={styles.colorThemeButton}
            aria-label="Dark blue color theme"
          >
            Dark blue
          </button>
        </div>
        <div>
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

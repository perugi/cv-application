import { useState } from "react";
import styles from "./ExperienceFrame.module.css";

export default function ExperienceFrame({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  function handleExpand() {
    setExpanded((prev) => !prev);
  }

  return (
    <div className={styles.frame}>
      <div className={styles.panelInfo}>
          {!expanded && <h2 className={styles.title}>{title}</h2>}
          <button
            className={styles.expand}
            aria-label={`Toggle ${title} section visibility`}
            onClick={handleExpand}
          >
            {expanded ? "▲" : "▼"}
          </button>
      </div>
      {expanded && children}
      <button className={styles.removeExperience}>-</button>
    </div>
  );
}

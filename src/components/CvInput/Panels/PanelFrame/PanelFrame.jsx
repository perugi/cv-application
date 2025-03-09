import { useState } from "react";
import styles from "./PanelFrame.module.css";

export default function PanelFrame({ title, children, expandable = true }) {
  const [expanded, setExpanded] = useState(false);

  function handleExpand() {
    setExpanded((prev) => !prev);
  }

  /* 
  TODO maybe remove the expand button for the education and training panel
  we can control expansion by expanding the individual items 
  (only one expanded at a time, maybe). 
  */
  return (
    <div className={styles.frame}>
      <div className={styles.panelInfo}>
        <h1 className={styles.title}>{title}</h1>
        {expandable && (
          <button
            className={styles.expand}
            aria-label={`Toggle ${title} section visibility`}
            onClick={handleExpand}
          >
            {expanded ? "▲" : "▼"}
          </button>
        )}
      </div>
      {expandable ? expanded && children : children}
    </div>
  );
}

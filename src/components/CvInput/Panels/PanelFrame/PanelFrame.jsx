import { useState } from "react";
import styles from "./PanelFrame.module.css";

export default function PanelFrame({
  title,
  children,
  expandable = true,
  initiallyExpanded = false,
}) {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  function handleExpand() {
    setExpanded((prev) => !prev);
  }

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
      {expandable ? (
        expanded && <div className={styles.content}>{children}</div>
      ) : (
        <div className={styles.content}>{children}</div>
      )}
    </div>
  );
}

import styles from "./ExperienceFrame.module.css";

export default function ExperienceFrame({
  title,
  expanded,
  onExpand,
  children,
  handleRemove,
  incompleteWarning,
}) {
  return (
    <div className={styles.frame}>
      <div className={styles.panelInfo}>
        {!expanded && (
          <h2
            className={`${styles.title} ${
              incompleteWarning && styles.incomplete
            }`}
          >
            {incompleteWarning ? incompleteWarning : title}
          </h2>
        )}
        <button
          className={styles.expand}
          aria-label={`Toggle ${title} section visibility`}
          onClick={onExpand}
        >
          {expanded ? "▲" : "▼"}
        </button>
      </div>
      {expanded && children}
      <button className={styles.removeExperience} onClick={handleRemove}>
        -
      </button>
    </div>
  );
}

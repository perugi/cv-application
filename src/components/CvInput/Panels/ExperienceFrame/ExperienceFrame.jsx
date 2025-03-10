import styles from "./ExperienceFrame.module.css";

export default function ExperienceFrame({
  expanded,
  onExpand,
  children,
  handleRemove,
  exp,
  incompleteWarning,
}) {
  return (
    <div className={styles.frame}>
      <div className={styles.panelInfo}>
        {!expanded && (
          <h2
            className={`${styles.title} ${
              exp.organization && exp.title ? "" : styles.incomplete
            }`}
          >
            {exp.organization && exp.title ? (
              <>
                {exp.title}
                <span className={styles.organization}>{exp.organization}</span>
              </>
            ) : (
              incompleteWarning
            )}
          </h2>
        )}
        <button
          className={styles.expand}
          aria-label={`Toggle ${exp.title} section visibility`}
          onClick={onExpand}
        >
          {expanded ? "▲" : "▼"}
        </button>
      </div>
      {expanded && children}
      <button
        className={`${styles.removeExperience} ${expanded && styles.displayed}`}
        onClick={handleRemove}
      >
        -
      </button>
    </div>
  );
}

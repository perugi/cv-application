import styles from "./ExperienceFrame.module.css";

export default function ExperienceFrame({ title, children }) {
  // TODO when expanded, do not show the title
  return (
    <div className={styles.frame}>
      <div className={styles.panelInfo}>
        <h2 className={styles.title}>{title}</h2>
        <button
          className={styles.expand}
          aria-label={`Toggle ${title} experience section visibility`}
        >
          ▲
        </button>
      </div>
      {children}
      <button className={styles.removeExperience}>-</button>
    </div>
  );
}

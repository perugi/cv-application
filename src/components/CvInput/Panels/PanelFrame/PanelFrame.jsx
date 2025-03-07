import styles from "./PanelFrame.module.css";

export default function PanelFrame({ title, children }) {
  /* 
  TODO maybe remove the expand button for the education and training panel
  we can control expansion by expanding the individual items 
  (only one expanded at a time, maybe). 
  */
  return (
    <div className={styles.frame}>
      <div className={styles.panelInfo}>
        <h1 className={styles.title}>{title}</h1>
        <button
          className={styles.expand}
          aria-label={`Toggle ${title} section visibility`}
        >
          ▲
        </button>
      </div>
      {children}
    </div>
  );
}

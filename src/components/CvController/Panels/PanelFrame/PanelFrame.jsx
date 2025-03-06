import styles from "./PanelFrame.module.css";

export default function PanelFrame({ title, children }) {
  return (
    <div className={styles.frame}>
      <div className={styles.panelInfo}>
        <h2 className={styles.title}>{title}</h2>
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

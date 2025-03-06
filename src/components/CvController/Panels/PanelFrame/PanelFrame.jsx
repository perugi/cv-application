import styles from "./PanelFrame.module.css";

export default function PanelFrame({ title, children }) {
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

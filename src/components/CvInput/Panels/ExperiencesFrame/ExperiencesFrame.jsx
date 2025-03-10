import styles from "./ExperiencesFrame.module.css";

export default function ExperiencesFrame({ children, handleAdd }) {
  return (
    <div className={styles.frame}>
      {children}
      <button className={styles.addExperience} onClick={handleAdd}>
        +
      </button>
    </div>
  );
}

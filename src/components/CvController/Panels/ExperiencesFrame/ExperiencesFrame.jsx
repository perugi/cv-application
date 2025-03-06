import styles from "./ExperiencesFrame.module.css";

export default function ExperiencesFrame({ children }) {
  return (
    <div className={styles.frame}>
      {children}
      <button className={styles.addExperience}>+</button>
    </div>
  );
}


import styles from "./Input.module.css";

export default function Input({ type = "text", id, label }) {
  return (
    <div className={styles.inputContainer}>
      {type === "textarea" ? (
        <textarea id={id} placeholder=" " />
      ) : (
        <input type={type} id={id} placeholder=" " />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

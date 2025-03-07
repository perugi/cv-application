import styles from "./Input.module.css";

export default function Input({ type = "text", id, label, value }) {
  // TODO allow present to be input if the input type is a date (as a checkbox)
  return (
    <div className={styles.inputContainer}>
      {type === "textarea" ? (
        <textarea id={id} placeholder=" " value={value} />
      ) : (
        <input type={type} id={id} placeholder=" " value={value} />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

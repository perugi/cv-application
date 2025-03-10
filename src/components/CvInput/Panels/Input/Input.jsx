import styles from "./Input.module.css";

export default function Input({ type = "text", id, label, value, onChange }) {
  // TODO allow present to be input if the input type is a date (as a checkbox)
  return (
    <div className={styles.inputContainer}>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
          rows={5}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
        />
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

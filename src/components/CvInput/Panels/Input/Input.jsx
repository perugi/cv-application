import styles from "./Input.module.css";

export default function Input({
  type = "text",
  id,
  label,
  value,
  onChange,
  togglePresent = () => {},
  endDateIsPresent = false,
}) {
  let content;
  if (type === "textarea") {
    content = (
      <>
        <textarea
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
          rows={5}
        />
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      </>
    );
  } else if (type === "date" && id === "endDate") {
    content = (
      <div className={styles.endDateContainer}>
        <input
          type={type}
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
          disabled={endDateIsPresent}
        />
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
        <input
          type="checkbox"
          id="endDateIsPresent"
          className={styles.endDateIsPresent}
          checked={endDateIsPresent}
          onChange={togglePresent}
        />
        <label htmlFor="endDateIsPresent" className={styles.endDateIsPresent}>
          Present
        </label>
      </div>
    );
  } else {
    content = (
      <>
        <input
          type={type}
          id={id}
          placeholder=" "
          value={value}
          onChange={onChange}
        />
        <label className={styles.inputLabel} htmlFor={id}>
          {label}
        </label>
      </>
    );
  }

  return <div className={styles.inputContainer}>{content}</div>;
}

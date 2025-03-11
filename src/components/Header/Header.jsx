import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/src/assets/logo.svg" aria-label="CV Builder" />
    </header>
  );
}

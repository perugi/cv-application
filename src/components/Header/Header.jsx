import styles from "./Header.module.css";

export default function Header({ className }) {
  return (
    <header className={`${className} ${styles.header}`}>
      <img src="/src/assets/logo.svg" aria-label="CV Builder"/>
    </header>
  );
}

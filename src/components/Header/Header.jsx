import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} aria-label="CV Builder" />
    </header>
  );
}

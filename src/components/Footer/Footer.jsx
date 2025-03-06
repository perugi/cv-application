import styles from "./Footer.module.css";

export default function Footer({ className }) {
  return (
    <footer className={className}>
      <a className={styles.ghLink} href="https://github.com/perugi">
        <div>Made by</div>
        <img
          className={styles.ghLogo}
          src="/src/assets/githublogo.png"
          alt=""
        />
        <div>Dominik Perusko</div>
      </a>
    </footer>
  );
}

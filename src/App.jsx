import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CvController from "./components/CvController/CvController";
import RenderedCv from "./components/RenderedCv/RenderedCv";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <div className={`${styles.row} ${styles.container}`}>
          <CvController className={styles.cvController} />
          <RenderedCv className={styles.renderedCv} />
        </div>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;

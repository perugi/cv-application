import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CvInput from "./components/CvInput/CvInput";
import CvControl from "./components/CvControl/CvControl";
import RenderedCv from "./components/RenderedCv/RenderedCv";
import styles from "./App.module.css";
import exampleData from "./exampleData";

function App() {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <div className={styles.cvContainer}>
          <CvInput className={styles.CvInput} cvData={exampleData} />
          <div>
            <CvControl className={styles.cvControl} />
            <RenderedCv className={styles.renderedCv} cvData={exampleData} />
          </div>
        </div>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;

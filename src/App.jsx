import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CvInput from "./components/CvInput/CvInput";
import CvControl from "./components/CvControl/CvControl";
import RenderedCv from "./components/RenderedCv/RenderedCv";
import styles from "./App.module.css";
import { exampleCvData, defaultCvControl } from "./data";

function App() {
  const [cvData, setCvData] = useState(exampleCvData);
  const [cvControl, setCvControl] = useState(defaultCvControl);

  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <div className={styles.cvContainer}>
          <CvInput
            className={styles.CvInput}
            cvData={cvData}
            setCvData={setCvData}
          />
          <div>
            <CvControl
              className={styles.cvControl}
              cvControl={cvControl}
              setCvControl={setCvControl}
            />
            <RenderedCv
              className={styles.renderedCv}
              cvData={cvData}
              cvControl={cvControl}
            />
          </div>
        </div>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;

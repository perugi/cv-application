import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CvInput from "./components/CvInput/CvInput";
import CvControl from "./components/CvControl/CvControl";
import RenderedCv from "./components/RenderedCv/RenderedCv";
import styles from "./App.module.css";
import { sampleCvData, defaultCvControl } from "./data";

function App() {
  const [cvData, setCvData] = useState(sampleCvData);
  const [cvControl, setCvControl] = useState(defaultCvControl);

  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <div className={styles.cvContainer}>
          <div className={styles.cvBuilder}>
            <Header />
            <CvControl
              cvControl={cvControl}
              setCvControl={setCvControl}
              setCvData={setCvData}
            />
            <CvInput cvData={cvData} setCvData={setCvData} />
          </div>
          <RenderedCv cvData={cvData} cvControl={cvControl} />
        </div>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;

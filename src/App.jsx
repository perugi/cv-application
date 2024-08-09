import Footer from "./Footer.jsx";
import CvController from "./CvController.jsx";
import RenderedCv from "./RenderedCv.jsx";

function App() {
  return (
    <>
      <main>
        <CvController />
        <RenderedCv />
      </main>
      <Footer />
    </>
  );
}

export default App;

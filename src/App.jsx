import Footer from "./components/Footer";
import CvController from "./components/CvController";
import RenderedCv from "./components/RenderedCv";

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

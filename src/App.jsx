import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CvController from "./components/CvController/CvController";
import RenderedCv from "./components/RenderedCv/RenderedCv";

function App() {
  return (
    <>
      <Header />
      <main>
        <CvController />
        <RenderedCv />
      </main>
      <Footer />
    </>
  );
}

export default App;

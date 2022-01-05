import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import ProcessBar from "./components/ProcessBar";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="overflow-hidden">
      <Banner show />
      <AboutMe />
      <ProcessBar />
      <Experience />
    </div>
  );
}

export default App;

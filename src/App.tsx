import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import ProcessBar from "./components/ProcessBar";
import Experience from "./components/Experience";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Banner />
      <AboutMe />
      <Experience />
      <ProcessBar />
    </div>
  );
};

export default App;

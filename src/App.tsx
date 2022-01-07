import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import ProcessBar from "./components/ProcessBar";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Loading from "./components/Loading";

const App = () => {
  const [loaded, sedLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);
  useEffect(() => {
    const image = document.createElement("img");
    image.src = "/images/head.png";
    image.onload = () => {
      setTimeout(() => sedLoaded(true), 1500);
      setTimeout(() => setRemoved(true), 2500);
    };
  }, []);
  return (
    <div className="overflow-hidden">
      {!removed && <Loading opacity={loaded ? 0 : 1} />}
      {loaded && (
        <>
          <Header />
          <Banner />
          <AboutMe />
          <Experience />
          <Project />
          <ProcessBar />
        </>
      )}
    </div>
  );
};

export default App;

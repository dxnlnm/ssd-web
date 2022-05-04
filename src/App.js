import Intro from "./components/Splash/Intro";
import ParticleBackground from "./components/Splash/ParticleBackground";
import Portfolio from "./components/Portfolio/Portfolio";
import { useState } from "react";

const App = () => {
  const [portfolio, setPortfolio] = useState(false);
  const openPortfolio = () => {
    setPortfolio(!portfolio);
  };

  return (
    <>
      <ParticleBackground />
      <Intro
        name="Super Space Defenders"
        designation="8,888 Super Space Defenders coming to the blockchain"
        onExplore={openPortfolio}
      />
      {portfolio ? <Portfolio onClose={openPortfolio} /> : ""}
    </>
  );
};

export default App;

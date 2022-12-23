import React from "react";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";
import InfoSection from "./components/InfoSection";
import { InfoData} from "./data/InfoData";






function App() {


  return (
    <>







      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />



    </>
  );
}

export default App;

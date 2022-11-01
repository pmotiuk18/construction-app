import React, {useState} from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import { InfoData, InfoDataTwo, InfoDataT, InfoDataF } from "./data/InfoData";


function App() {
const [isOpen, setIsOpen] = useState(true)

const toggle = () => {
  setIsOpen(!isOpen)
}

  return (
<>
    <GlobalStyle />
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Hero slides={SliderData} />
    <InfoSection {...InfoData}/>
    <InfoSection {...InfoDataTwo}/>
    <InfoSection {...InfoDataT}/>
    <InfoSection {...InfoDataF}/>

</>
  );
}

export default App;

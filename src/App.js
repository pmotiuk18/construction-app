import React, {useState} from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";
import { InfoData, InfoData2, InfoData3, InfoData4, InfoData5, InfoData6 } from "./data/InfoData";



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
    <InfoSection {...InfoData2}/>
    <InfoSection {...InfoData3}/>
    <InfoSection {...InfoData4}/>
    <InfoSection {...InfoData5}/>
    <InfoSection {...InfoData6}/>


</>
  );
}

export default App;

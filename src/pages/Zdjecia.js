import React from "react";
import styled from "styled-components";

import InfoSectionPics from "../components/InfoSectionPics";

import { InfoDataPics, InfoDataPics2, InfoDataPics3, InfoDataPics4, InfoDataPics5, InfoDataPics6 } from "../data/InfoDataPics";



const Zdjecia = () => (
<>
<InfoSectionPics {...InfoDataPics} />      
<InfoSectionPics {...InfoDataPics2} /> 
<InfoSectionPics {...InfoDataPics3} />      
   
</>
);

const Header = styled.h1`

margin-top: 100px;
`



export { Zdjecia };
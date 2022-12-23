import React from "react";
import styled from "styled-components";
import InfoSection from "../components/InfoSection";

import {InfoData2, InfoData3, InfoData4, InfoData5, InfoData6 } from "../data/InfoData";

const Header = styled.h1`

margin-top: 100px;
`

const Projekty = () => (

<Header> 

    <InfoSection {...InfoData2} />
    <InfoSection {...InfoData3} />
    <InfoSection {...InfoData4} />
    <InfoSection {...InfoData5} />
    <InfoSection {...InfoData6} />
    </Header>
 


);





export { Projekty };


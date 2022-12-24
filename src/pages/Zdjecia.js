import React from "react";


import InfoSectionPics from "../components/InfoSectionPics";

import { InfoDataPics, InfoDataPics2, InfoDataPics3} from "../data/InfoDataPics";



const Zdjecia = () => (
<>
<InfoSectionPics {...InfoDataPics} />      
<InfoSectionPics {...InfoDataPics2} /> 
<InfoSectionPics {...InfoDataPics3} />      
   
</>
);





export { Zdjecia };
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../components/Button';


const WycenaContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse ? '2' : '1') };

`;


const Header = styled.div`
margin-top: 100px;
padding-left: 2rem;
`;


const Abhi = styled.div`
display: flex;
font-size: 50px;
padding-bottom: 1rem;

@media screen and (max-width: 768px) {
    padding-bottom: 3rem;
    font-size: 30px;
    padding-bottom: 2rem;
}

`;

const Meter = styled.input`
max-width: 115px;
font-size: 50px;
border: 2px solid #000;
margin-left: 1rem;
margin-right: 1rem;

@media screen and (max-width: 768px) {
    max-width: 75px;
    font-size: 30px;
    border: 2px solid #000;

}
`;

const Result = styled.div`
padding-top: 2rem;
font-size: 20px;
`;

function Wycena() {
    const [result, setResult] = useState(0);
    const [num1] = useState(120);
    const [num2, setNum2] = useState(0);
    const [operator] = useState('*');
  

  
    function handleNum2Change(event) {
      setNum2(event.target.value);
    }
  

  
    function handleCalculateClick() {
     
       if (operator === '*') {
        setResult(num1 * num2);

      }
    }
  
    return (
        <>
        
<Header>
     
      <WycenaContainer>

        <Abhi ><div>{num1} zł/m²</div><Meter type="number" value={num2} onChange={handleNum2Change} /> m2</Abhi>
        
        <Button primary="true" round="true" onClick={handleCalculateClick}>Wycena</Button>
        <Result>Szacunkowy koszt zlecenia: {result} PLN</Result>

      </WycenaContainer>

      {/* <HeroWycena slides={SliderData} /> */}

      </Header>



      </>
      
    );
  }
  
  export {Wycena};
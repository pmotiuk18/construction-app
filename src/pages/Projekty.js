import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import img1 from '../img/house-5.jpg'


const Section = styled.section`
width: 100%;
height: 100%;
padding: 0 0 0 0;
`;

const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
/* max-width: 1300px; */
margin: 0;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;


@media screen and (max-width: 768px) {
    grid-template-columns: 3fr;
    display: block;
}
`;

const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem 2rem;
order: ${({ reverse }) => (reverse ? '2' : '1') };

h1 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    text-align: center;
}

p {
    margin-bottom: 2rem;
    text-align: center;
    
}

@media screen and (max-width: 768px) {
    padding: 0rem 0rem 6rem 0rem;
align-items: center;

    h1 {
    margin-bottom: 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    /* text-align: justify; */
}

    p {
    margin-bottom: 2rem;
    max-width: 400px;
    /* text-align: justify; */
    text-align: center;
    }


}

`;

const ColumnRight = styled.div`
padding-top: 3rem;
order: ${({ reverse }) => (reverse ? '1' : '2') };
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1') };
    width: 100%;
    height: 100%;
    padding-top: 0rem;
    
}

img {
    width: 80%;
    height: 90%;
    object-fit: cover;
    

}

`;

const Header = styled.div`


@media screen and (max-width: 768px) {
margin-top: 100px;
}
`

const Projekty = ({reverse, 

}) => (




    <Header > 
        <Section >
            <Container >
                <ColumnLeft >
                <h1>Nowoczesny design</h1>
                <p>Sprawdź nasze nowatorskie rozwiązania oraz design, który podbieramy specjalnie według uznań klientów</p>

                <Button to="/zdjecia" primary='true'>Więcej zdjęć</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                <img src={img1} alt='projekty' />
                </ColumnRight>
            </Container>
        </Section>
         </Header>

  
 


);





export {Projekty};


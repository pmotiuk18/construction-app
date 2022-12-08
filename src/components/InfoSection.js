import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

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
padding: 2rem 0rem 2rem 4rem;
order: ${({ reverse }) => (reverse ? '1' : '2') };
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1') };
    width: 90%;
    height: 100%;
    
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    

}

`;



const InfoSection = ({heading, paragraphOne, paragraphTwo, 
    buttonLabel, reverse, image}) => {
  return (
    <div>
        <Section>
            <Container>
                <ColumnLeft>
                <h1>{heading}</h1>
                <p>{paragraphOne}</p>
                <p>{paragraphTwo}</p>
                <Button to="/homes" primary='true'>{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
       
    </div>
  )
}

export default InfoSection

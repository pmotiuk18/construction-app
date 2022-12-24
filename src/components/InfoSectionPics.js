import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
width: 100%;
height: 100%;
padding: 0 0 0 0;
`;

const Container = styled.div`
padding: 0rem calc((100vw - 1300px) / 2.5);
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
    width: 80%;
    height: 90%;
    object-fit: cover;
    

}

`;

const Header = styled.div`

margin-top: 100px;

@media screen and (max-width: 768px) {
    margin-top: 150px;
}
`;

const InfoSectionPics = ({reverse, picture, picture1}) => {
  return (
    <Header>
        <Section>
            <Container>
                
                <ColumnRight reverse={reverse}>
                <img src={picture} alt="home" />
                </ColumnRight>

<ColumnRight reverse={reverse}>
                <img src={picture1} alt="home" />
                </ColumnRight>
                
            </Container>

                
                


                

        </Section>
       
    </Header>
  )
}

export default InfoSectionPics;

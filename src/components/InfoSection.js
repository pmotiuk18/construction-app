import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const Section = styled.section`

`;
const Container = styled.div`

`;
const ColumnLeft = styled.div`

`;
const ColumnRight = styled.div`

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
                <Button to="/homes">{buttonLabel}</Button>
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

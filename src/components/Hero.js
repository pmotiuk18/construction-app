import React, {useState, useRef, useEffect} from 'react'
import styled, { css } from 'styled-components/macro'
import { Button } from './Button';
import {IoMdArrowRoundForward} from 'react-icons/io'
import {IoArrowBack, IoArrowForward } from 'react-icons/io5';


const HeroSection = styled.section`
    top: 60px;
    height: 104vh;
    max-height: 1300px;
    position: relative;
    overflow: hidden;
    padding: 0rem 0rem 6rem 0rem;

    @media screen and (max-width: 768px) {
        padding: 0rem 0rem 6rem 0rem;
}
`;

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const HeroSlide = styled.div`
width: 100%;
height: 100%;
`;
const HeroSlider = styled.div`
position: absolute;
z-index: 10;
top: 0;
left: 0;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;

&::before {
    content: '';
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
        0deg
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 50%,
        rgba(0, 0, 0, 0.6) 100%
    );
}
`;
const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;
const HeroContent = styled.div`
position: relative;
z-index: 999;
display: flex;
flex-direction: column;
max-width: 280px;
width: calc(100% - 100px);
color: #F0FFFF;
top: 150px;
left: 80px;

@media screen and (max-width: 768px) {
    top: 250px;
    left: 50px;
}

h1 {
    font-size: clamp(1.7rem, 8vw, 1.7rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba (0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    max-width: 400px;
    background-color: #000000c5;
    padding-top: 1rem;
    margin-right: -0.4rem;
}
    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        background-color: #000000d1;
        max-width: 90px;
        padding-top: 0.5rem;
    } 


`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 0.5rem;
`;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;

@media screen and (max-width: 768px) {
  bottom: 70px;
  right: 20px;
}
`;

const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 5px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

/* &:hover {
    background: #728FCE;
    transform: scale(1.05);
} */
`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
`;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
`;


const Hero = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length
const timeout = useRef(null)

useEffect(() => {
    const nextSlide =() => {
        setCurrent(current => (current === length - 1 ? 0 : current +1))
    }

    timeout.current = setTimeout(nextSlide, 10000)

    return function () {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
    }
}, [current, length])

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
}



const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
}

if(!Array.isArray(slides) || slides.length <= 0) {
    return null
}

// console.log(current);

  return (
    <HeroSection>
        <HeroWrapper>
        {slides.map((slide,index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                    <HeroSlider>
                   <HeroImage src={slide.image} alt={slide.alt}/>
                    <HeroContent>
                        <h1>{slide.title}</h1>
                        <p>{slide.price}</p>
                        <Button to={slide.path} primary='true'
                          css={`
                          max-width: 160px;

                          `}
                      >
                            
                            {slide.label}
                           <Arrow />
                        </Button>
                    </HeroContent>
                   
                </HeroSlider>
                )}
                
              </HeroSlide>
            )        
        })}
        <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>

    </HeroSection>
  );
};

export default Hero;

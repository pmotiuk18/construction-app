import React, {useState} from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const DropDownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: black;
/* background: #000d1a; */
/* background: #4863A0; */
/* background: #000d10; */
/* background: url('../img/house-1.jpg'); */
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '0' : '1')};
top: ${({isOpen}) => (isOpen ? '-100%' : '0')};
`;

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`;
const CloseIcon = styled(FaTimes)`
color: #fff;
`;

const DropdownWrapper = styled.div``;

const DropDownMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px) {
  grid-template-rows: repeat(4, 60px);
}
`;
const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
color: #fff;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover {
  color: #fff;
}
`;
const BtnWrap = styled.div`
display: flex;
justify-content: center;
`;


const Dropdown = ({ isOpen, toggle}) => {
  // const [isVisible, setIsVisible] = useState(false);
  const [isV, setIsV] = useState(false);



  return (
    <DropDownContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropDownMenu>
          {menuData.map((item,index) => (
                <DropdownLink to={item.link} key={index}>
                  {item.title}
                </DropdownLink>
          ))}
        </DropDownMenu>
        <BtnWrap>
        {isV ? <Button onClick= {() => setIsV(false)} primary="true" round="true" big="true" >
        982 728 329, ul. Warszawska 10
          </Button> 
         : <Button onClick={() => setIsV(true)} primary='true' big="true" round="true" >Kontakt</Button>}
          {/* <Button primary="true" round="true" big="true" to="/contact">Kontakt</Button> */}
        </BtnWrap>
      </DropdownWrapper>
    </DropDownContainer>
  )
}

export default Dropdown

    import React from 'react';
    import styled, {css} from 'styled-components/macro';
    import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button, } from './Button';
import {TbAlignLeft} from 'react-icons/tb'


    const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: black;
    top: 0;
    /* background: #000d1a; */
    /* background: #000d10; */
    /* background: #4863A0; */
    /* background: #98AFC7; */
    
    @media screen and (max-width: 768px) {
height: 80px;
}

    `;

const NavLink = css`
color: #fff;
display: flex;
align-items: center;
padding: 0 1rem;
height: 100%;
cursor: pointer;
text-decoration: none;
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: normal;
    font-size: 23px;
`;

const MenuBars = styled(TbAlignLeft)`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  background-size: contain;
  height: 70px;
  width: 70px;
 cursor: pointer;
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  margin-right: 5px;
  margin-top: 3px;
  tansform: translate(-50%, 25%);
}

`;

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -40px;

@media screen and (max-width: 768px) {
  display: none;
}
`;



const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
  display: none;
}
`;




    const Navbar = ({ toggle }) => {

      


      return (
        <Nav>
          <Logo  to="/">LOGO</Logo>
          <MenuBars onClick={toggle} />
          <NavMenu>
            {menuData.map((item, index) => (
              <NavMenuLinks to={item.link} key={index} >
                {item.title}
              </NavMenuLinks>
            ))}
          </NavMenu>
              <NavBtn>
              {/* {isVisible ? <Button onClick= {() => setIsVisible(false)} primary='true'>
              
              982 728 329, ul. Warszawska 10


              </Button> 
              : <Button primary='true' onClick={() => setIsVisible(true)}>
              Kontakt
                </Button>}  */}

                <Button to="/contact" primary='true'>Kontakt</Button>
              </NavBtn>
              
        </Nav>
      );
    };
    
    


    export default Navbar;
    
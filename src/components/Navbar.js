    import React from 'react';
    import styled, {css} from 'styled-components/macro';
    import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {TbAlignLeft} from 'react-icons/tb'

    const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    /* background: #4863A0; */
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
    font-style: italic;
`;

const MenuBars = styled(TbAlignLeft)`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  background-size: contain;
  height: 60px;
  width: 60px;
 cursor: pointer;
  color: white;
  position: absolute;
  top: 0px;
  right: 0px;
  margin-right: 5px;
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
          <Logo to="/">LOGO</Logo>
          <MenuBars onClick={toggle} />
          <NavMenu>
            {menuData.map((item, index) => (
              <NavMenuLinks to={item.link} key={index}>
                {item.title}
              </NavMenuLinks>
            ))}
          </NavMenu>
              <NavBtn>
                <Button to="/contact" primary='true'>Kontakt</Button>
              </NavBtn>
        </Nav>
      );
    };
    
    export default Navbar;
    
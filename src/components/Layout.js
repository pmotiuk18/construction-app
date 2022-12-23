import React, { useState } from "react";
import GlobalStyle from "../globalStyles";
import Dropdown from "./Dropdown";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
     <ScrollToTop />
      <GlobalStyle />


     
   


      <Navbar toggle={toggle} />

      <Dropdown isOpen={isOpen} toggle={toggle} />

      <main>{children}</main>
    </>
  );
};
export default Layout;
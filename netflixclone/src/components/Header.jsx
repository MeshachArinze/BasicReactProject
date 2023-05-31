import React from "react";
import Accordion from "./Accordion";
import Container from "./Container";
import Faq from "./Faq";
import Footer from "./Footer";
import Nav from "./Nav";
import Stream from "./Stream";
import Tv from "./Tv";
import Watch from "./Watch";

const Header = () => {
  return (
    <div>
      <header class="header">
        <Nav />
        <Container />
        
      </header>

      <Tv />
      <Watch />
      <Stream />

      <Faq />
      <Accordion />

      <Footer />
    </div>
  );
};

export default Header;

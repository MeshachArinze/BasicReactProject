import * as React from "react";

import {

  Route,

  Routes,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App: React.FC = () =>  {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/*" element={<Work />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

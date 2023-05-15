import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageRender from "./customRouter/PageRender";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = useState(false);

  return (
    <Router>
      <div className="font-poppins">
        {" "}
        <Navbar show={show} setShow={setShow} />
      </div>

      <div
        className={
          show
            ? `font-poppins top-0 left-0 w-full blur-[7px] xl:blur-[0px] fixed xl:inline`
            : ` font-poppins`
        }
      >
        <div>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/:page" element={<PageRender />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

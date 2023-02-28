import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App() {
  // logic to set the page to the first one
  const [pages] = useState([
    { name: "Home" },
    { name: "Products" },
    { name: "Replacements" },
    { name: "About" },
    { name: "Contact" },
    { name: "Travel KosherLamp" },
    { name: "KosherLamp MAX" },
    { name: "SafePlate" },
    { name: "KosherClock" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // App will return all the components and pass down the necesarry functionality to its children
  return (
    <>
      <div id="top"></div>
      <a href="#top" title="Back to top" className="up-arrow">
        ↑
      </a>
      <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        <Page
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Page>
      </main>
      <Footer pages={pages} setCurrentPage={setCurrentPage} />
    </>
  );
}

export default App;

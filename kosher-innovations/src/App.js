import React, { useState } from 'react';
import './index.css';
import js from "./function.js";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
// import Products from './components/Products';


function App() {
  const [pages] = useState([
    { name: "Products" },
    { name: "About" },
    { name: "Contact"},
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
    <Header>
        <Navbar
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
    <main>
    <Page currentPage={ currentPage } ></Page>
    </main>
    {/* <Footer /> */}
    <script defer src={js}></script>
    </>
  );
}

export default App;

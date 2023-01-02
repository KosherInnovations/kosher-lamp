import React, { useState } from 'react';
import './index.css';
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
// import Products from './components/Products';


function App() {
  const [pages] = useState([
    { name: "Products" },
    { name: "Replacements" },
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
    </>
  );
}

export default App;

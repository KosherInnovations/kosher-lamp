import React, { useState } from 'react';
import './index.css';
import Header from "./components/Header";
// import Footer from "./components/Footer";
import upArrow from "./resources/up-arrow.png";
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
    <div id='top'></div>
    <a href="#top" title='Back to top'><img className='up-arrow' src={upArrow} alt="back to top"></img></a>
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

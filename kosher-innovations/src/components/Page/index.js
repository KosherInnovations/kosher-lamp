import React from "react";
import PageContent from "../PageContent";
import Home from "../HomePage";
import Products from "../Products";
import Replacements from "../Replacements";
import About from "../About";
import Contact from "../Contact";
import Travel from "../Travel";
import Kmax from "../Kmax";

const Page = ({ currentPage, setCurrentPage, pages }) => {
  const renderPage = () => {
    if (currentPage.name === "Home") {
      document.title = "Home";
      return <Home pages={pages} setCurrentPage={setCurrentPage} />;
    }
    if (currentPage.name === "Products") {
      document.title = "Products";
      return <Products />;
    }
    if (currentPage.name === "Replacements") {
      document.title = "Replacements";
      return <Replacements />;
    }
    if (currentPage.name === "About") {
      document.title = "About";
      return <About />;
    }
    if (currentPage.name === "Contact") {
      document.title = "Contact";
      return <Contact />;
    }
    if (currentPage.name === "Travel KosherLamp") {
      document.title = "Travel KosherLamp";
      return <Travel />;
    }
    if (currentPage.name === "KosherLamp MAX") {
      document.title = "KosherLamp MAX";
      return <Kmax />;
    }
  };

  return (
    <>
      <PageContent>{renderPage()}</PageContent>
    </>
  );
};

export default Page;

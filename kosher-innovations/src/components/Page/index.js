import React from "react";
import PageContent from "../PageContent";
import Home from "../HomePage";
import Products from "../Products";
import Replacements from "../Replacements";
import About from "../About";
import Contact from "../Contact";


const Page = ({ currentPage }) => {
  const renderPage = () => {
    if (currentPage.name === "Home") {
      document.title = "Home";
      return <Home />;
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
  };

  return (
    <>
      <PageContent>{renderPage()}</PageContent>
    </>
  );
};

export default Page;

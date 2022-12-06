import React from "react";
import About from "../About";
import Products from "../Products";
import Contact from "../Contact";
import PageContent from "../PageContent";

const Page = ({ currentPage }) => {
    const renderPage = () => {
      if (currentPage.name === "About") {
        document.title = "About";
        return <About />;
      }
      if (currentPage.name === "Products") {
          document.title = "Products";
        return <Products />;
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
import React from "react";
import LazyLoad from "react-lazyload";
import replacementShade from "../../resources/replacement-shade.jpg";
import adapterImg from "../../resources/adapter-1.jpg";

const Replacements = () => {
  const addOpacityView = () => {
    const header2 = document.querySelector(".shipping-header");
    header2.id = "opacity-view2";
    header2.classList.add("transition");
  };
  return (
    <section id="cards" className="product-cards" onLoad={addOpacityView}>
      <h2 className="shipping-header" id="header2">
        Free Shipping On Any Replacement Parts<br></br>Shipping
        Within USA Only
      </h2>
      <div className="card">
        <div className="imgBox">
          <header>
            <h1 title="Bug Checker">KosherLamp MAX Shade</h1>
          </header>
          <LazyLoad height={200} offset={100}>
            <img
              rel="prefetch"
              className="replacement-images"
              src={replacementShade}
              alt="The replacement shade for KosherLamp MAX, the shade that goes in the lamp if your shade is broken"
              title="KosherLamp MAX Replacement Shade"
            ></img>
          </LazyLoad>
        </div>
        <h2 className="product-price">$5.00</h2>
        <div className="content">
        <h3>Free Shipping</h3>
          <div className="flex-box-replacements-page">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=a5d1a7affbdf40fc901ba64b43998a46"
              title="add Replacement Shade to cart"
            >
              Add To Cart
            </a>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="imgBox">
          <header>
            <h1 title="Travel Lamp Replacement Adapter">
              Travel Lamp Adapter{" "}
            </h1>
          </header>
          <LazyLoad height={200} offset={100}>
            <img
              rel="prefetch"
              className="replacement-images"
              src={adapterImg}
              alt="The Travel Lamp Adapter, a replacement adapter for when your adapter is lost, stolen, or broken"
              title="Travel Lamp Replacement Adapter"
            ></img>
          </LazyLoad>
        </div>
        <h2 className="product-price">$16.00</h2>
        <div className="content">
          <h3>Free Shipping</h3>
          <div className="flex-box-replacements-page">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.1shoppingcart.com/SecureCart/SecureCart.aspx?mid=8C3A2643-E313-4991-9BB0-2D46596FC53F&pid=d8b685c4c5284576a5c677e29206354d"
              title="add Travel Lamp Adapter to cart"
            >
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Replacements;

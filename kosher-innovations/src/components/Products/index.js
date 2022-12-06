import React from "react";
import kLampMAX from '../../resources/white-kmax.png'

const Products = () => {
    return (
        <>
        <section className='product-cards'>
        <div className="card">
          <div className="imgBox">
            <img src={kLampMAX} alt="KosherLamp MAX" />
            <h1>KosherLamp MAX</h1>
          </div>
          <div className="content">
            <h3>Color : </h3>
            <div className="color">
              <div className="color-picker" id="kmax-white"></div>
              <div className="color-picker" id="kmax-steel"></div>
              <div className="color-picker" id="kmax-black"></div>
              <div className="color-picker" id="kmax-blue"></div>
              <div className="color-picker" id="kmax-bronze"></div>
              <div className="color-picker" id="kmax-brown"></div>
              <div className="color-picker" id="kmax-marble"></div>
              <div className="color-picker" id="kmax-cherry"></div>
              <div className="color-picker" id="kmax-ivory"></div>
              <div className="color-picker" id="kmax-pink"></div>
            </div>
            <a href="/">Add To Cart</a>
          </div>
        </div>
      </section>
        </>
    )
};

export default Products;
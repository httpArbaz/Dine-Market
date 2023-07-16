import React from "react";
import "./Component.css";
import model from "../Images/model.png";
import nike from "../Images/nike.png";
import gucci from "../Images/gucci.png";
import lv from "../Images/lv.png";
import addidas from "../Images/addidas.png";
import sale from "../Images/sale.png";
import summer from "../Images/summer.png";
import fashion from "../Images/fashion.png";
import Card from "./Card";
import Section from "./Section";
import News from "./News";

export default function Main() {
  return (
    <>
      <main className="main-container">
        <header className="header">
          <div className="header-left-side">
            <div className="header-content">
              <span>Sale 70%</span>
              <h1>An Industrial Take on Streetwear</h1>
              <p>
                "Anyone can beat you but no one can beat your outfit as long as
                you wear Dine outfits."
              </p>
              <a href="/products">
                <button type="button" className="btn">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="26"
                    width="26"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Start Shopping
                </button>
              </a>
            </div>
            <div className="header-featured">
              <img src={nike} alt="" style={{ width: "80px" }} />
              <img src={addidas} alt="" style={{ width: "70px" }} />
              <img src={lv} alt="" style={{ width: "50px" }} />
              <img src={gucci} alt="" style={{ width: "80px" }} />
            </div>
          </div>
          <div className="header-right-side">
            <div className="header-circle">
              <img
                src={model}
                style={{ marginLeft: "60px" }}
                alt="Image Failed"
              />
            </div>
          </div>
        </header>
        <section className="event-container">
          <div className="subtitle">
            <span>PROMOTIONS</span>
            <h2>Our Promotions Events</h2>
          </div>
          <div className="event-banner">
            <div className="event-banner-left">
              <div className="event-card">
                <div className="content">
                  <h3>
                    Get Up To <span>60%</span>
                  </h3>
                  <p>For the summer season</p>
                </div>
                <img src={summer} alt="" />
              </div>
              <div className="event-card">
                <h3>
                  Get Up To <span>60%</span>
                </h3>
                <button>DINEWEEKENDSALE</button>
              </div>
            </div>
            <div className="event-banner-right">
              <div className="event-banner-right-1">
                <div className="details">
                  <p>Flex Sweatshirt</p>
                  <div className="price">
                    <span>$100.00</span>
                    <span>$75.00</span>
                  </div>
                </div>
                <img src={sale} alt="" />
              </div>
              <div className="event-banner-right-2">
                <div className="details">
                  <p>Flex Push Button Bomber</p>
                  <div className="price">
                    <span>$225.00</span>
                    <span>$190.00</span>
                  </div>
                  <img src={fashion} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="subtitle" style={{ padding: "25px" }}>
          <span>PRODUCTS</span>
          <h2>Check What We Have</h2>
        </div>
        <Card />
        <Section />
        <News />
      </main>
    </>
  );
}

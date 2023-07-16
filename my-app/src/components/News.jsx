import React from "react";
import "./News.css";

export default function News() {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-background">Newsletter</div>
        <h1>Subscribe Our Newsletter</h1>
        <p>Get the latest information and promo offers directly</p>
        <form action="">
          <input type="text" placeholder="Input email address" />
          <button className="button">Get Started</button>
        </form>
      </section>
    </>
  );
}

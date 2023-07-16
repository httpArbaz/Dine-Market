import React from "react";
import "./Card.css";
import men from "../Images/guccimen.webp";
import air from "../Images/air.jpg";
import nikein from "../Images/nikein.webp";
export default function Card() {
  return (
    <section className="articles">
      <article>
        <div className="article-wrapper">
          <figure>
            <img style={{ width: "100%" }} src={men} alt="" />
          </figure>
        </div>
        <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
          Gucci Luxury Vintage <br />
          <span>$195.00</span>
        </p>
      </article>
      <article>
        <div className="article-wrapper">
          <figure>
            <img style={{ width: "100%" }} src={nikein} alt="" />
          </figure>
        </div>
        <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
          Nike Jacket
          <br />
          <span>$150.00</span>
        </p>
      </article>
      <article>
        <div className="article-wrapper">
          <figure>
            <img style={{ width: "100%" }} src={air} alt="" />
          </figure>
        </div>
        <p style={{ fontWeight: "bold", marginLeft: "10px" }}>
          Air Jordan 1 Retro High OG UNC <br /> <span>$2098.00</span>
        </p>
      </article>
    </section>
  );
}

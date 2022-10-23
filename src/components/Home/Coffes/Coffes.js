/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import appleYum from "../../../images/coffes/apple-yum.jpg";
import pumpkinCoffe from "../../../images/coffes/pumpkin.jpg";
import "./Coffes.css";
const Coffes = () => {
  return (
    <>
      <section class="coffe-box box-b bg-secondary grid-col-2">
        <img src={pumpkinCoffe} alt="" />
        <div class="box-text">
          <h1 class="coffe-text-xl">
            Win a thousand <br /> Stars
          </h1>
          <p class="coffe-text-md">
            We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in
            our Million Stars Giveaway and much more all week!*
          </p>
          <a href="#" class="btn-coffe coffe-btn">
            Play to win
          </a>
        </div>
      </section>
      {/*  */}
      <section class="coffe-box box-b grid-reversed bg-secondary grid-col-2">
        <div class="box-text">
          <h1 class="coffe-text-xl">
            Win a thousand <br /> Stars
          </h1>
          <p class="coffe-text-md">
            We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in
            our Million Stars Giveaway and much more all week!*
          </p>
          <a href="#" class="btn-coffe coffe-btn">
            Play to win
          </a>
        </div>
        <img src={appleYum} alt="" />
      </section>
    </>
  );
};

export default Coffes;

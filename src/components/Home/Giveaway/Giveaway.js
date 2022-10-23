/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Giveaway.css'
import giveawayImg from "../../../images/coffes/start-coffe.jpg"
const Giveaway = () => {
  return (
    <>
      <section class="box box-b bg-secondary grid-col-2">
        <img src={giveawayImg} alt="" />
        <div class="box-text">
          <h1 class="text-xl">
            Win a thousand <br /> Stars
          </h1>
          <p class="text-md">
            We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in
            our Million Stars Giveaway and much more all week!*
          </p>
          <a href="#" class="btn giveaway-btn">
            Play to win
          </a>
        </div>
      </section>
    </>
  );
};

export default Giveaway;

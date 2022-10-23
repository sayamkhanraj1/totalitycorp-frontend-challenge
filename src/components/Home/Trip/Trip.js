/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import trip from "../../../images/trips.webp";
import "./Trip.css";
const Trip = () => {
  return (
    <>
      <section class="box box-b bg-secondary grid-reversed grid-col-2">
        <div class="trip-box-text">
          <h3 class="trip-text-xl">A new way to earn sips and trips</h3>
          <p class="text-trip">
            Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts
            to get:
          </p>
          <ul className="trip-offer-text">
            <li> &#x2022; 150 Stars + 500 miles when you link before 12/31</li>
            <li> &#x2022; Double Stars on Delta travel days</li>
            <li>
              &#x2022; 1 mile per $1 spent at Starbucks (excludes taxes <br />{" "}
              and gratuities)**
            </li>
          </ul>
          <a href="#" class="btn giveaway-btn">
            Link accounts
          </a>
        </div>
        <img className="gird-reverse" src={trip} alt="" />
      </section>
    </>
  );
};

export default Trip;

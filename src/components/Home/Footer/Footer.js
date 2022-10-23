import React from "react";
import "./Footer.css";
import spotify from "../../../images/footer/social-spotify.svg"
import facebook from "../../../images/footer/social-facebook.svg";
import pinterest from "../../../images/footer/social-pinterest.svg";
import instagram from "../../../images/footer/social-instagram.svg";
import youtube from "../../../images/footer/social-youtube.svg";
import twitter from "../../../images/footer/social-twitter.svg";
const Footer = () => {
  return (
    <div>
      <div className="footer-container-first">
        <p>
          *NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To
          enter and for Official <br /> Rules, visit{" "}
          <a href="starbucksstardays.com">starbucksstardays.com.</a>
        </p>
        <p>Entrants can receive a maximum of 2 entries per day.</p>
        <div className="footer-text">
          <p>
            **Excludes taxes and gratuities. At participating stores. Some
            restrictions apply. 150 Stars <br /> deposited after first
            qualifying Starbucks purchase. Flights purchased close to departure
            may not <br /> earn double Stars. Stars may not be earned on
            purchases of alcohol, Starbucks Cards and Starbucks <br /> Card
            reloads. For details, visit{" "}
            <a href="deltastarbucks.com/terms">deltastarbucks.com/terms</a>
          </p>
        </div>
      </div>
      <div>
        <div class="footer">
          <div class="footer-container">
            <div class="social">
              <a href="https://spotify.com">
                <img src={spotify} alt="" />
              </a>
              <a href="https://facebook.com">
                <img src={facebook} alt="" />
              </a>
              <a href="https://pinterest.com">
                <img src={pinterest} alt="" />
              </a>
              <a href="https://instagram.com">
                <img src={instagram} alt="" />
              </a>
              <a href="https://youtube.com">
                <img src={youtube} alt="" />
              </a>
              <a href="https://twitter.com">
                <img src={twitter} alt="" />
              </a>
            </div>
            <div className="footer-policy">
              <ul>
                <li>Privacy Policy &#124;</li>
                <li>Terms of Use &#124;</li>
                <li>CA Supply Chain Act &#124;</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

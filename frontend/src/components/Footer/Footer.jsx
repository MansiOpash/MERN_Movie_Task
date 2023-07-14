import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import appstore from "../images/appstore-logo.png";
import playstore from "../images/playstore-logo.png";
import microsoft from "../images/microsoft.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="foot">
          <ul>
            <li>Home </li>
            <li>Terms and condition </li>
            <li> Privacy Policy</li>
            <li>Collection Statement</li>
            <li>Help</li>
            <li>Manage Acoount</li>
          </ul>
          <aside>
            Copyright &#169; 2016 DEMO Streaming. All Rights Reserved.
          </aside>
          <div className="articles">
            <div className="logos">
              <AiFillFacebook style={{ width: "2rem" }} />
              <AiFillTwitterCircle />
              <AiFillInstagram />
            </div>
            <div className="store">
              <img src={appstore} alt="appstore" />
              <img src={playstore} alt="playstore" />
              <img src={microsoft} alt="playstore" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

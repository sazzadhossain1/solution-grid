import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footer_parent_div">
      <div className="footer_grit_div">
        <div className="footer_cart">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>
            Together, we pool our resources, skills, and expertise to build a
            better future, positively impacting the world.
          </p>
          <dir className="footer_contact_div">
            <div>
              <p>General Contact​</p>
              <p>Send a message</p>
            </div>
            <div>
              <p>+88 017XX XXX XXX</p>
              <p>solutiongrid@gmail.com</p>
            </div>
          </dir>
        </div>
        <div className="footer_three_cart_parent_div">
          <div>
            <h5>Comany</h5>
            <p>
              <Link>News</Link>
            </p>
            <p>
              <Link>Career</Link>
            </p>
            <p>
              <Link>Business</Link>
            </p>
            <p>
              <Link>Sustainabillity</Link>
            </p>
          </div>
          <div>
            <h5>Useful Links</h5>
            <p>
              <Link>Media</Link>
            </p>
            <p>
              <Link>Sponsorship</Link>
            </p>
            <p>
              <Link>Contact</Link>
            </p>
            <p>
              <Link>Sitemap</Link>
            </p>
          </div>
          <div>
            <h5>Legal</h5>
            <p>
              <Link>Cookie Policy</Link>
            </p>
            <p>
              <Link>Data Privacy</Link>
            </p>
            <p>
              <Link>Exclusion of Liabillty</Link>
            </p>
            <p>
              <Link>Imprint</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="footer_down_main_parent_div">
        <div className="footer_down_part_div">
          <div>
            <small>© Solution Grid. All rights reserved.</small>
          </div>
          <div className="footer_logo_container">
            <h3 className="footer_logo">
              Slution <span>Grid</span>
            </h3>
          </div>
          <div className="footer_icon_div">
            <FontAwesomeIcon className="icon_one" icon={faFacebook} />
            <FontAwesomeIcon className="icon_two" icon={faLinkedin} />
            <FontAwesomeIcon className="icon_three" icon={faYoutube} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

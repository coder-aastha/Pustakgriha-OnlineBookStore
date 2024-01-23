import khalti from "../images/khalti.png";
import cashOnDelivery from "../images/cashOnDelivery.png";
import { NavLink } from "react-router-dom";

const FooterUI = () => {
  return (
    <>
  
      <div className="footer-main">
        <div className="footer-titles">
          <div className="footer-left-end-section">
            <h5>Physical Location</h5>
            <p>Currently</p>
            <p>Unavailable</p>
          </div>

          <div>
            <h5>Popular Genres</h5>
            <a href="#">
              <p>Fiction</p>
            </a>
            <a href="#">
              <p>Kids & Teen</p>
            </a>
          </div>

          <div className="support">
            <h5>Support</h5>
            <p>01-890786</p>
              <p>putk1@gmail.com</p>
          </div>

          <div className="footer-right-end-section" id="about_section">
            <h5>About</h5>
            
            <NavLink to="/AboutUs" className="AboutUs-link">
          About Us
        </NavLink>
          </div>
        </div>

        <div className="payment-copyright">
          <div className="payment-options">
            <h6>
              <i>Payment Options:</i>{" "}
            </h6>
            <img src={khalti} />
            <img src={cashOnDelivery} />
          </div>
          <div className="copyright">
            <p>
              <i>&copy; Copyright Protected by Pustakgriha</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterUI;

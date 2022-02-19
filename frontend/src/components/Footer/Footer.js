import React from "react";
import { FaFacebook,  FaInstagram, FaWhatsapp} from "react-icons/fa";
import { MdOutlineEmail,  MdOutlinePhone, MdLocationPin} from "react-icons/md";
import { Link } from "react-router-dom";
import Brand from "../../assets/images/brand.jpg";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer bg-dark py-5">
        <div className="container">
          <div className="grid grid-4">
            <div className="flex flex-column dull">
              <div>
                <img src={Brand} className="logo" alt="brand" />
              </div>
              <p>
                At trainlead consult we believe every individual possesses the
                dream of living a more comfortable and fulfilling life.
              </p> 
              <div className="foot_social">
              <a 
              href="https://fb.me/trainleadconsults"
            >
                <FaFacebook />{" "}
              </a>
              <a href="/#">
                <FaInstagram />{" "}
              </a>
              <a  href="https://api.whatsapp.com/send?phone=2349078844210&amp;text=Hello TLC"
                  title="whatsapp link"
                  rel="noreferrer"
                      target="_blank">
                <FaWhatsapp />{" "}
              </a>
            </div>
            </div>
            <nav>
              <h4 className="dull-text py-1">Quick Links</h4>
              <ul className="foot-menu dull">
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/services">SERVICES</Link>
                </li>
                <li>
                  <Link to="/contact-us">CONTACT</Link>
                </li>
                <li>
                  <Link to="/blog">BLOG</Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-column">
              <h4 className="dull-text py-1">Company Info</h4>
            <p className="dull"><MdOutlinePhone />0907-884-4210</p>
            <p className="dull"><MdOutlineEmail /> info@trainleadconsult.com</p>
            <p className="dull"><MdLocationPin /> 59, Gbadebo Street, Mokola, Ibadan</p>
            </div>
            <div className="flex flex-column">
              <h4 className="dull-text py-1">Opening Hours</h4>
           <p className="dull">Modays-Friday</p>   
              <p className="dull">9:00am  - 5:00pm</p>
              
            </div>
          </div>
          <p className="text-center content-up-border dull"> &copy; 2022. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

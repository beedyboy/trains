import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone, MdLocationPin } from "react-icons/md";
import { useMutation } from "@apollo/client";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useToast,
  Input,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Brand from "../../assets/images/brand.png";
import apis from "../../apollo/api";
import "./footer.css";
const Footer = () => {
  const toast = useToast();
  const [submit, { loading, error, reset }] = useMutation(apis.subscribeMe, {
    onCompleted: (data) => {
      reset();
      // console.log("Data from mutation", data);
      toast({
        position: "top-right",
        title: "Email Subscription.",
        description: "Email subscription successful.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },

    onError: (error) => console.error("Error creating a post", error),
  });
  const [email, setEmail] = useState("");
  const renderError = () => {
    if (error)
      return (
        <Alert status="error" variant="solid">
          <AlertIcon />
          <AlertTitle mr={1}>Submission error!</AlertTitle>
          <AlertDescription> {error.message}</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      );
  };
  return (
    <>
      <footer className="footer bg-dark">
        <div className="container py-5">
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
                <a href="https://fb.me/trainleadconsults">
                  <FaFacebook />{" "}
                </a>
                <a href="/#">
                  <FaInstagram />{" "}
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=2349078844210&amp;text=Hello TLC"
                  title="whatsapp link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaWhatsapp />{" "}
                </a>
              </div>
            </div>
            <nav>
              <h4 className="dull-text py-1">Useful Links</h4>
              <ul className="foot-menu dull">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-column">
              <h4 className="dull-text py-1">Office Info</h4>
              <p className="dull">
                <MdOutlinePhone />
                0907-884-4210
              </p>
              <p className="dull">
                <MdOutlineEmail /> admin@trainleadconsult.com
              </p>
              <p className="dull">
                <MdLocationPin /> 59, Gbadebo Street, Mokola, Ibadan
              </p>
              <h4 className="dull-text py-1">Opening Hours</h4>
              <p className="dull">Modays-Friday</p>
              <p className="dull">9:00am - 5:00pm</p>
            </div>
            <div className="flex flex-column">
              <h4 className="dull-text py-1">Subscribe Now</h4>
              <form
                className="flex flex-column"
                onSubmit={(e) => {
                  e.preventDefault();
                  submit({ variables: { email } });
                }}
              >
                <Input
                  type="email"
                  placeholder="Enter Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  colorScheme="blue"
                  variant="outline"
                >
                  {loading ? "Sending" : "Subscribe Now"}
                </Button>
              </form>
              {renderError()}
            </div>
          </div>
          <div className="content-up-border">
            <p className="text-center dull">
              &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

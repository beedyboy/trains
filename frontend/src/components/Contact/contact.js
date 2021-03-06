import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import contactImg from "../../assets/images/cc.jpg";
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import "./contact.css";
import apis from "../../apollo/api";
const Contact = () => {
  const toast = useToast();
  const [submitForm, { loading, error, reset }] = useMutation(apis.CONTACT_US, {
    onCompleted: (data) => {
      reset();
      console.log("Data from mutation", data);
      toast({
        position: "top-right",
        title: "Contact Us.",
        description: data,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    },

    onError: (error) => console.error("Error creating a post", error),
  });
  const [formData, setFormData] = useState({
    values: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });
  const { values } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((state) => ({
      ...state,
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };
  return (
    <>
      <section className="showcase">
        <div className="container grid ai-center jc-center">
          <div className="showcase-text">
            <h1>Get in touch!</h1>
            <p>Contact us for quotes, enquiries and consultation</p>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <h3>Contact Us</h3>
          <div className="grid grid-3  text-center">
            <div className="card h-px-1">
              <h3 className="primary-color">Our Location</h3>
              <p>59, Gbadebo Street, Mokola, Ibadan</p>
            </div>
            <div className="card h-px-1">
              <h3 className="primary-color">Hotlines</h3>
              <ul>
                <li>0907-884-4210 </li>
                <li>0905-732-8384 </li>
                <li>0806-329-1353 </li>
              </ul>
            </div>
            <div className="card h-px-1">
              <h3 className="primary-color">Email</h3>
              <p>admin@trainleadconsult.com</p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-support my-4">
        <div className="container">
          <div className="grid">
            <img src={contactImg} alt="customer service" />
            <div className="contact-form">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitForm({ variables: { values } });
                }}
              >
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="fullname"
                    onChange={handleChange}
                    value={values.name}
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                    value={values.subject}
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    rows="6"
                    cols="13"
                    name="message"
                    placeholder="Message"
                    className="body-text"
                    onChange={handleChange}
                    value={values.message}
                    required
                  ></textarea>
                </div>

                <input
                  type="submit"
                  disabled={loading}
                  value={loading ? "processing your request..." : "Send"}
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary cta  py-3 my-3">
        <div className="container">
          <div className="flex flex-column ai-center">
            <p className="head-title">Call to action</p>
            <h3 className="light-color text-center bold">
              If You Need Any Help! Contact Us
            </h3>
            <p className="text-center">
              We are available and ready to help
            </p>
            <div className="jc-center">
              {" "}
              <button className="btn btn-dark jc-center">Contact Now!</button>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-location m-5 container">
        <div className="grid jc-start">
          <div className="p-2 maps">
            <iframe
              id="maps"
              src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d126609.81413530181!2d3.822262409780898!3d7.403464529655631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d7.4034699999999996!2d3.8923029999999996!5e0!3m2!1sen!2sng!4v1643630983792!5m2!1sen!2sng"
              scrolling="no"
              allowfullscreen="true"
              className="border-radius-15"
              loading="lazy"
              title="maps"
            ></iframe>
          </div>
          <div className="py-5">
            <h3 className="primary-color container">Get In Touch</h3>
            <p className="container">
              We are avaialbale to serve you better and provide the optimal
              result for you
            </p>
            <div className="flex jc-start my-2">
              <a className="p-1" href="https://fb.me/trainleadconsults">
                <button className="btn fb">
                  <FaFacebook /> Facebook
                </button>
              </a>
              <a
                className=" p-1"
                href="https://instagram.com/trainleadconsult?utm_medium=copy_link"
              >
                <button className="btn ig">
                  <FaInstagram /> Instagram
                </button>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=2349078844210&amp;text=Hello TLC"
                title="whatsapp link"
                rel="noreferrer"
                className=" p-1"
                target="_blank"
              >
                <button className="btn whatsapp">
                  <FaFacebook /> Whatsapp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

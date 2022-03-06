import React, { useState } from "react"; 
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import apis from "../../apollo/api";
import "./services.css";
const Services = () => {

  const toast = useToast();
  const [submitForm, { loading,   reset }] = useMutation(apis.REQUEST_QUOTE, {
    onCompleted: (data) => {
      reset();
      console.log("Data from mutation", data);
      toast({
        position: "top-right",
        title: "Request for a Quote.",
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
      company: "",
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
      <section className="service_page">
        <div className="container grid">
          <div className="service_page-text">
            <h1>Our Services</h1>
            <p>
              We offer variety of creative services to suite your travel and
              learning need
            </p>
            <a href="/#" className="btn btn-outline">
              Read More
            </a>
          </div>
          <div className="service_page-form card">
            <h2 className="dark-color">Request for a Quote</h2>
           
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
                    name="company"
                    placeholder="Company"
                    onChange={handleChange}
                    value={values.company}
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
      </section>
      <section className="stats">
        <div className="container">
          <h2 className="text-center my-1">Services we provide</h2>
          <h3 className="stats-heading text-center my-1">
            Don't re-ivent the dream. Build, ship & scale. We are here to hold
            your hands
          </h3>
          <div className="grid grid-3 text-center my-4">
            <div className="styled-card">
              <i className="fas fa-server fa-3x"></i>
              <h2>01</h2>
              <h3> Travels & Tour</h3>
              <p className="text-secondary">
                <ol className="stylist">
                  <li data-icon="😎"> International School Admission</li>
                  <li> International Migration Advisory</li>
                  <li>Scholarships Opportunities and Application</li>
                  <li> Personal Statement/SOP writing</li>
                  <li> Visa Application/Processing </li>
                  <li> Proof of Funds Sourcing</li>
                  <li> Tour arrangement for Individuals/professional bodies</li>
                </ol>
              </p>
            </div>

            <div className="styled-card">
              <i className="fas fa-upload fa-3x"></i>
              <h2>02</h2>
              <h3> Educational & Vocational Training</h3>
              <p className="text-secondary">
                <ol className="stylist">
                  <li> International Examinations Tutoring </li>
                  <li> Vocational Trainings and Workshops </li>
                  <li> Skill Acquisition Programmes</li>
                  <li>Business startup and marketing Advisory</li>
                </ol>
              </p>
            </div>

            <div className="styled-card">
              <i className="fas fa-project-diagram fa-3x"></i>
              <h2>03</h2>
              <h3>Real Estate</h3>
              <p className="text-secondary">
                <ol className="stylist">
                  <li> Buying and selling of Lands and properties</li>
                  <li> Property Valuation</li>
                  <li> Architectural and structural designs</li>
                  <li> Building Cost Estimation & Labour schedule</li>
                  <li> Quantity surveying services</li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

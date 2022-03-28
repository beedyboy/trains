import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import apis from "../../apollo/api";
import travelImg from "../../assets/images/services/18.jpg";
import trainImg from "../../assets/images/services/training.jpg";
import estateImg from "../../assets/images/services/real_estate.jpg";
import "./services.css";
const Services = () => {
  const toast = useToast();
  const [submitForm, { loading, reset }] = useMutation(apis.REQUEST_QUOTE, {
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
          </div>
          <div className="service_page-form card">
            <h2 className="dark-color bold">Request for a Quote</h2>

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
                  rows="5"
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
      <section className="service_page_into stats">
        <div className="container">
          <h2 className="text-center my-1 mt-5 bolder lead">
            Services we provide
          </h2>
          <h3 className="stats-heading text-center my-1">
            Don't re-invent the dream. Build, ship & scale. We are here to hold
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

      <section className="services my-3">
        <div className="container">
          <div className="flex flex-column">
            <div>
              <h3 className="bold my-1">Trainlead Travels & Tour</h3>
              <div className="grid">
                <p className="content-border p-1">
                  Our team is interested in helping individuals with the
                  ambition to further their education in countries outside the
                  shores of Nigeria to achieve their dreams. We provide our
                  clients with the necessary information and advice that open
                  their minds to opportunities that are available to ease the
                  burdens of their ambition including the documentation and
                  financial aspect, and as well help in the processes that
                  translate such dreams to reality.
                </p>
                <img src={travelImg} alt="Travels & Tour" />
              </div>
            </div>
            <div>
              <h3 className="bold mt-1">Trainlead Educational & Vocational Training</h3>
              <div className="grid">
                <img
                  src={trainImg}
                  alt="Trainlead Educational & Vocational Training"
                />
                <p className="content-border p-1">
                  Our team is involved in the training of young minds in
                  vocations and skills that could help them in living a better
                  life. We don’t only train but construct a follow up plan on
                  our trainees to establish themselves in their desired vocation
                  as well as creating a business out of it.We offer vocational
                  training and skill acquisition programmes to individuals and
                  youth organisations in order to increase the number of youths
                  with skills and young entrepreneurs. At the completion of each
                  of our programmes it is aimed that the participants would have
                  acquired a designated skill, develop the interest to pursue in
                  the line of the skill through our mentorship plan and as well
                  gained knowledge on business startup and management.
                </p>
              </div>
            </div>
            <div>
              <h3 className="bold mt-1">Real Estate</h3>
             <div className="grid">
             <p className="content-border p-1">
                Whether you are looking to sell, purchase, develop a real estate
                property or you intend to solve a specific problem relating to
                real estate and construction, our real estate team has got you
                covered. We have a strong team of experts in the field of real
                estate and building construction development who have
                successfully executed several projects. Whatever the specifices,
                we pride ourselves on giving our clients the best value for
                their investment. Our competent and committed team deals on
                projects ranging from sales and purchase of lands and
                properties, small scale home or commercial real estate
                development, large scale commercial building and mass housing
                development. We basically help bring the dream and ideas of our
                clients to reality.
              </p>

              <img src={estateImg} alt="Travels & Tour" />
             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

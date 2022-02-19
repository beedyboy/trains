import React from "react";
import "./services.css";
const Services = () => { 
  return (
    <>
      <section className="service_page">
        <div className="container grid">
          <div className="service_page-text">
            <h1>Our Services</h1>
            <p>We offer variety of creative services to suite your travel and learning need</p>
            <a href="/#" className="btn btn-outline">
              Read More
            </a>
          </div>
          <div className="service_page-form card">
            <h2>Request a Quote</h2>
            <form>
              <div className="form-control">
                <input type="text" name="name" placeholder="name" required />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                />
              </div>
              <div className="form-control">
                <input type="email" name="name" placeholder="Email" required />
              </div>
              <input type="submit" value="Send" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="container">
          <h2 className="text-center my-1">Services we provide</h2>
          <h3 className="stats-heading text-center my-1">
            Don't re-ivent the dream. Build, ship & scale. We are here to hold your hands
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

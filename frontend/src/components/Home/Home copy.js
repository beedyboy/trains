import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about-us.jpg";
// import travelImg from "../../assets/images/travels/18.jpg";
const Home = () => {
  return (
    <>
      <section className="illustrator">
        <div className="container grid">
          <div className="illustrator-text">
            <h1>We train by leading through consultation</h1>
            <p>We rise by lifting others</p>
            <Link to="/about" className="btn btn-outline">
              Ask How?
            </Link>
          </div>
          {/* <div className="illustrator-image">
            <img src={illustrator} alt="we train" />
          </div> */}
        </div>
      </section>
      <section className="welcome">
        <div className="container">
          <h3 className="welcome-heading text-center my-1">
            Welcome to Trainlead Consult
            <br />
            …Together we can lead
          </h3>
          <div className="grid grid-3 my-3 welcome-container">
            <div id="train" className="card">
              <p className="text-secondary text-center">Accessible Services</p>
            </div>
            <div id="lead" className="card">
              <p className="text-secondary text-center">Reliable Team</p>
            </div>
            <div id="consult" className="card">
              <p className="text-secondary text-center">Easy Consultation</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="container grid  my-4">
          <div>
            <h3 data-cy="data-1" className="text-center lead">
              About Us
            </h3>
            <p>
              At trainlead consult we believe every individual possesses the
              dream of living a more comfortable and fulfilling life. And we
              recognize the fact that those dreams are valid and achievable. We
              also recognize that it takes information, preparation and
              processes to turn a dream to reality. Our role is to provide our
              clients with relevant and adequate resources and services that
              transit such dreams to realities. And make our clients’ dreams
              achievable in terms of learning; travels and migration: and real
              estate investment. We believe together we can lead and together we
              can achieve
            </p>
            <Link to="/about" className="btn btn-dark">
              Explore More ...
            </Link>
          </div>
          <img src={aboutImg} alt="About Us" />
        </div>
      </section>
      
    </>
  );
};

export default Home;

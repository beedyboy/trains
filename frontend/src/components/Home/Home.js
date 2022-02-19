import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about-us.jpg";
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
              <p className="text-secondary text-center">We Train</p>
            </div>
            <div id="lead" className="card">
              <p className="text-secondary text-center">We tech by leading</p>
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
            <h3 data-cy="data-1" className="text-center lead">About Us</h3>
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
              About Us
            </Link>
          </div>
          <img src={aboutImg} alt="About Us" />
        </div>
      </section>
      {/* <section className="stats">
        <div className="container">
          <h3 className="stats-heading tex-center my-1">
            Welcome to the best platform for building application of all types
            with moderm architecture and scaling
          </h3>
          <div className="grid grid-3 text-center my-4">
            <div>
              <i className="fas fa-server fa-3x"></i>
              <h3>10,349,405</h3>
              <p className="text-secondary">Deployments</p>
            </div>

            <div>
              <i className="fas fa-upload fa-3x"></i>
              <h3>987 TB</h3>
              <p className="text-secondary">Published</p>
            </div>

            <div>
              <i className="fas fa-project-diagram fa-3x"></i>
              <h3>2,343, 265 </h3>
              <p className="text-secondary">Project</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cli">
        <div className="container grid">
          <img src="../../assets/images/trainslead_handshake.png" alt="cli" />
        </div> 
      </section> */}
    </>
  );
};

export default Home;

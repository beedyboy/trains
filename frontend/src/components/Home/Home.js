import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import aboutImg from "../../assets/images/about-us.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import travelImg from "../../assets/images/travels/18.jpg"; 
const Home = () => {

const getConfigurableProps = () => ({
  showArrows: true,
  showStatus:  true,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows:true,
  autoPlay: true,
  stopOnHover:true,
  swipeable: true,
  dynamicHeight: true,
  emulateTouch: true, 
  autoFocus:  false, 
  thumbWidth:  100, 
  selectedItem:   0, 
  interval:  5000, 
  transitionTime: 500, 
  swipeScrollTolerance: 5,
  // ariaLabel: text('ariaLabel', undefined),
});
  return (
    <>
      <Carousel {...getConfigurableProps()}>
      <section className="consultation">
        <div className="container grid">
          <div className="consultation-text">
            <h1>Get the best consultation on study and relocation to other countries</h1>
            {/* <p>We rise by lifting others</p> */}
            <Link to="/about" className="btn btn-outline mt-2">
              Ask How?
            </Link>
          </div>
          {/* <div className="illustrator-image">
            <img src={illustrator} alt="we train" />
          </div> */}
        </div>
 
      </section>

      <section className="real_estate"> 
        <div className="container grid">
        <div className="real_estate-text">
            <h1>Get best services on lands, housing, and constructions</h1>
            <p>We have  affordable properties with suitable offers</p>
            <Link to="/about" className="btn btn-outline">
              Ask How?
            </Link>
          </div>
        </div>
        
      </section>

      <section className="training"> 
        <div className="container grid">
        <div className="training-text">
            <h1>We provide vocational training with hands on practical and adequate supervision</h1> 
            <Link to="/about" className="btn btn-outline mt-2">
              Ask How?
            </Link>
          </div>
        </div>
        
      </section>
        </Carousel>
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
      <section className="about my-4 bg-red">
        <div className="fluid-container grid  my-4">
          <div className="flex flex-column">
            <h3 data-cy="data-1" className="text-center lead">
              About Us
            </h3>
            <p className="p-3">
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
            <Link to="/about" className="btn btn-dark ml-3 mt-2 w-20">
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

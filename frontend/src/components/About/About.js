import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="flex jc-center py-1 ">
            <h2 className="  head-title lead bold text-center">ABOUT</h2>
          </div>
          <p className="heading-text text-center my-1">
            At trainlead consult we believe every individual possesses the dream
            of living a more comfortable and fulfilling life. And we recognize
            the fact that those dreams are valid and achievable. We also
            recognize that it takes information, preparation and processes to
            turn a dream to reality. Our role is to provide our clients with
            relevant and adequate resources and services that transit such
            dreams to realities. And make our clients’ dreams achievable in
            terms of learning; travels and migration: and real estate
            investment. We believe together we can lead and together we can
            achieve
          </p>
        </div>
      </section>
      <section className="mission">
        <div className="container">
          <div className="grid">
            <div className="styled-card">
              <h3 className="text-center">Our Mission </h3>
              <p>
                Our team’s interest centers on expending our resources for a
                large number of individuals in fulfilling their dreams in
                learning, migration and living a comfortable life.
              </p>
            </div>
            <div className="styled-card">
              <h3 className="text-center">Vision</h3>
              <p>
                To be the leading organization that provides individuals with
                quality, adequate and effective information, guidance and
                resources on learning and education; travels and migration; as
                well as real estate investment in order to attain a more
                comfortable and fulfilling living.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="services my-3">
        <div className="container">
          <div className="flex flex-column">
            <div>
              <h3>Trainlead Travels & Tour</h3>
              <p className="content-border p-1">
                Our team is interested in helping individuals with the ambition
                to further their education in countries outside the shores of
                Nigeria to achieve their dreams. We provide our clients with the
                necessary information and advice that open their minds to
                opportunities that are available to ease the burdens of their
                ambition including the documentation and financial aspect, and
                as well help in the processes that translate such dreams to
                reality.
              </p>
            </div>
            <div>
              <h3>Trainlead Educational & Vocational Training</h3>
              <p className="content-border p-1">
                Our team is involved in the training of young minds in vocations
                and skills that could help them in living a better life. We
                don’t only train but construct a follow up plan on our trainees
                to establish themselves in their desired vocation as well as
                creating a business out of it.We offer vocational training and
                skill acquisition programmes to individuals and youth
                organisations in order to increase the number of youths with
                skills and young entrepreneurs. At the completion of each of our
                programmes it is aimed that the participants would have acquired
                a designated skill, develop the interest to pursue in the line
                of the skill through our mentorship plan and as well gained
                knowledge on business startup and management.
              </p>
            </div>
            <div>
              <h3>Real Estate</h3>
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
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;

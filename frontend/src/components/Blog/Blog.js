import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import LEAD from "../../assets/images/lead.png";
import LEADER from "../../assets/images/leader.png";
import './blog.css';
const Blog = () => {

const data = [
  {
    title: "Ijapa Tiroko",
    img: LEAD,
    content:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum",
    time: "Mon, May 17 2021",
  },
  {
    title: "Heart Warm Soup in 7 mins",
    img: LEADER,
    content:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum",
    time: "Mon, May 17 2021",
  },
  {
    title: "OK, let's start with a good breakfast",
    img: LEADER,
    content:"Did you know that 80% of women who lose weight and keep it off eat breakfast daily? Plus research shows that skipping breakfast for  just 2 weeks can increase your blood sugar levels and LDL cholesterol levels?! And that the amount of time and energy given to excerise",
   time: "Mon, May 17 2021",
  },
];  return (
    <Fragment>
      <section className="blog-section">
        <div className="container">
          <div className="grid grid-3">
            {data.map((item, index) => (
              <div className="blog-card" key={index}>
                  <div className="blog-card-img">
                      <img src={item.img} alt={item.title} />
                      </div>
                      <h3 className="blog-title"><Link to={`/blog/${item.title}`}>{item.title}</Link></h3>
                      <p className="blog-content">{item.content.substring(0,100)}...</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;

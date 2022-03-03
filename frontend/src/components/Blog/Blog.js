import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./blog.css";
import apis from "../../apollo/api";
import Waiting from "../Waiting";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";
import dummy from "../../assets/dummy/laptop.jpg";
const Blog = () => {
  const { data, loading } = useQuery(apis.allBlogs);
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Train Lead Consult | Blog</title>
        {/* <link rel="canonical" href="Whats trending right now!" /> */}
        <meta
          name="description"
          content="Get latest information about travels, tour, skills and real estate on our blog page"
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <section className="blog-section">
        <div className="container">
          <div className="grid grid-3">
            {loading && [1, 2, 3].map((load) => <Waiting key={load} />)}
            {data &&
              data?.blogs.map((item, index) => (
                <div className="blog-card" key={index}>
                  <div className="blog-card-img">
                    <img
                      src={`${process.env.REACT_APP_API_URL}photos/${item.images}`}
                      onError={(e) => (e.target.src = dummy)}
                      alt={item.title}
                    />
                  </div>
                  <h3 className="blog-title">
                    <Link to={`/blog/${item.slug}`}>{item.title}</Link>
                  </h3>
                  <p className="blog-content">
                    {ReactHtmlParser(item?.content?.substring(0, 250))}...
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Blog;

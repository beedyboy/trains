import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ReactHtmlParser from "react-html-parser";
import Waiting from "../Waiting";
import apis from "../../apollo/api";
import { Helmet } from "react-helmet";
import moment from "moment";

const BlogView = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const { loading, data, error } = useQuery(
    apis.GET_BLOG_SLUG,
    {
      variables: { slug },
    },
    []
  );
  useEffect(() => {
    if (data && data.getBlogBySlug) {
      setBlog(data.getBlogBySlug);
    }
    return () => {
      // reset();
      setBlog({});
    };
  }, [data]);
  // console.log({ blog });
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{blog?.title}</title>
        <link
          rel="canonical"
          href={`${process.env.REACT_APP_DOMAIN}/blog/${blog?.slug}`}
        />
        <meta
          name="description"
          content={`${blog?.content?.substring(0, 100)}...`}
        />
        <meta property="og:type" content="article" />
      </Helmet>
      <section className="blog-view-section">
        <div className="blog-content-area">
          {loading && [1, 2, 3].map((load) => <Waiting key={load} />)}
          {!loading && blog ? (
            <div className="fluid-container">
              <div className="flex flex-column">
                <div className="blog-cover">
                  <img
                    src={`${process.env.REACT_APP_API_URL}photos/${blog?.images}`}
                    onError={(e) => (e.target.style.display = "none")}
                    // onError={(e) => (e.target.style.display = "none")}
                    alt={blog?.title}
                  />
                </div>
                <h2 className="py-1 blog-title"> {blog?.title}</h2>
                <div className="blog-stat">
                  {moment(blog?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </div>
                <section className="blog-view-content py-1">
                  {ReactHtmlParser(blog?.content)}
                </section>
              </div>
            </div>
          ) : (
            error
          )}
        </div>
        <div className="ads">
          <div className="container">
            <h1>Featured</h1>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogView;

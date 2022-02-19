import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./Template/Layout"; 
import { About, Blog, BlogView,Contact, Coming, Home, Services, NotFound } from './components'; 

const App = () => {
  const [busy] = useState(false);
  return (
    <>
      { busy ? <Coming /> :(<BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogView />} />
            <Route path="contact-us" element={<Contact />} />
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="*" element={<NotFound />} /> 
          </Route>
        </Routes>
      </BrowserRouter>)}
    </>
  );
};

export default App;

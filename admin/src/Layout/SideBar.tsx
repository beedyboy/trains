import * as React from "react";
import { MdClose, MdDashboard, MdPeopleAlt } from "react-icons/md"; 
import { FaBlog } from "react-icons/fa"; 
import { Link } from "react-router-dom";
const SideBar = (): React.ReactElement | null => {
  return ( 
      <>
        <div className="top">
          <div className="logo">
            <img src="./brand.jpg" alt="logo" />
            <h2>
              Train Lead <span className="danger">Consult</span>
            </h2>
          </div>
          <div className="close" id="close-btn">
            <MdClose />
          </div>
        </div>
        <div className="sidebar">
          <Link to="/dashboard" className="active">
            <MdDashboard /> 
            <h3>Dashboard</h3>
          </Link>
          <Link to="/subscribers">
            <MdPeopleAlt />
            <h3>Subscribers</h3>
          </Link>
          <Link to="/blog">
            <FaBlog />
            <h3>Blog</h3>
          </Link>
          <Link to="/logout">
            <h3>Logout</h3>
          </Link>
        </div>
      </>  
  );
};

export default SideBar;

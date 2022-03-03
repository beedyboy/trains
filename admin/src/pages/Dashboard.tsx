import * as React from "react";
import MainLayout from "../Layout/MainLayout";
import { MdPeopleAlt } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
const Dashboard = (): React.ReactElement => {
  return (
    <>
      <MainLayout>
        <section className="dashboard">
          <div className="container">
            <h1>Dashboard</h1>
            <div className="date">
              <input type="date" />
            </div>

            <div className="insights">
              <div className="users">
              <span>
                  <MdPeopleAlt className="svg" />
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Total User</h3>
                    <h1>233</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>81%</p>
                    </div>
                  </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
              </div>

              <div className="subscribers">
                <span>
                  <MdPeopleAlt className="svg" />
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Total Subscribers</h3>
                    <h1>$23,023</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>81%</p>
                    </div>
                  </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
              </div>

              <div className="blogs">
                <span> 
                  <FaBlog className="svg bg-danger" />
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Total Posts</h3>
                    <h1>$23,023</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>81%</p>
                    </div>
                  </div>
                </div>
                <small className="text-muted">Last 24 Hours</small>
              </div>
            </div>

            <div className="recent-subscribers">
              <h2>Recent Subscribers</h2>
              <table>
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>First Data</td>
                    <td>Date Now</td>
                  </tr>
                </tbody>
              </table>
              <a href="#">Show All</a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};
export default Dashboard;

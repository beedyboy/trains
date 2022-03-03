import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import apis from "../../apollo/api";
import MainLayout from "../../Layout/MainLayout";

const Subscribers = () => {
  const { loading, error, data } = useQuery(apis.getSubscribers);
  //  console.log({data})
  if (error) return <p>Error :(</p>;
  return (
    <Fragment>
      <MainLayout>
        <div className="container">
          <h1>Subscribers</h1>
          {loading ? <p>Loading...</p> : null}
          <div className="recent-subscribers">
            <h2>Recent Subscribers</h2>
            <table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.subscribers.map((item: any) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.email}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainLayout>
    </Fragment>
  );
};

export default Subscribers;

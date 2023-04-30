import React from "react";
import Header from "./Header";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";



const Details = () => {

  const details = useLoaderData();
  console.log(details);

  return (
    <div>
      <Header />
      <hr />
      <div className="d-flex justify-content-between container">
        <div className="w-75">
          {details.map((singleDetails) => (
            <DetailsCard
              key={singleDetails.id}
              singleDetails={singleDetails}
            ></DetailsCard>
          ))}
        </div>
        <div>
        <h1 style={{height: '500px'}} className="bg-dark text-white py-5 px-3 ms-2 rounded w-100">This is MAP</h1>
        </div>
      </div>
    </div>
  );
};

export default Details;

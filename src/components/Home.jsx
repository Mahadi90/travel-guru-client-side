import React from "react";
import bgImg from "../assets/images/rectangle.png";
import Header from "./Header";
import { useLoaderData } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeCard from "./HomeCard";

const Home = () => {
  const places = useLoaderData();
//   console.log(places);
  return (
    <div
      className="bg"
      style={{
        backgroundImage: `url(${bgImg})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />
    
     <div className="d-flex">
        <div className="text-white w-25 ms-5">
          <h2 className="bg-white text-dark rounded p-2 mt-4">All places are here that you want to visit</h2>
          <p className="mt-3 bg-dark p-2 rounded text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi amet
            aperiam molestiae nesciunt sequi veritatis culpa adipisci odit
            dignissimos hic fugit recusandae.
          </p>
        </div>

        <div className="d-flex mt-3 ms-2">
          {
          places.map(place => <HomeCard
          key={place.id}
          place={place}
          ></HomeCard>)
          }
        </div>
      </div>

    
    </div>
  );
};

export default Home;

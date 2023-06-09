import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";

const HomeCard = ({ place }) => {
  const { title, id, description, img } = place;

//   console.log(place);
  return (
    <div>
      <Card className="mx-2" style={{width: '220px', height: '350px'}}>
        <Card.Img className="" style={{height : '250px'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
         <Link to={`/booking/${id}`}> <Button variant="success">Booking <FaArrowRight></FaArrowRight></Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeCard;
